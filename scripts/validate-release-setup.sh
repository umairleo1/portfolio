#!/bin/bash

# Professional Release Setup Validation Script
# Tests various scenarios and edge cases for semantic release

set -e

echo "========================================="
echo "Release Setup Validation"
echo "========================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test counter
TESTS_PASSED=0
TESTS_FAILED=0

# Function to run test
run_test() {
    local test_name="$1"
    local test_command="$2"
    
    echo -n "Testing $test_name... "
    
    if eval "$test_command" >/dev/null 2>&1; then
        echo -e "${GREEN}PASS${NC}"
        ((TESTS_PASSED++))
    else
        echo -e "${RED}FAIL${NC}"
        ((TESTS_FAILED++))
    fi
}

# Function to check file exists
check_file() {
    local file_path="$1"
    local description="$2"
    
    echo -n "Checking $description... "
    
    if [ -f "$file_path" ]; then
        echo -e "${GREEN}EXISTS${NC}"
        ((TESTS_PASSED++))
    else
        echo -e "${RED}MISSING${NC}"
        ((TESTS_FAILED++))
    fi
}

# Function to validate JSON
validate_json() {
    local file_path="$1"
    local description="$2"
    
    echo -n "Validating $description... "
    
    if node -e "JSON.parse(require('fs').readFileSync('$file_path', 'utf8'))" 2>/dev/null; then
        echo -e "${GREEN}VALID${NC}"
        ((TESTS_PASSED++))
    else
        echo -e "${RED}INVALID${NC}"
        ((TESTS_FAILED++))
    fi
}

echo "1. Checking Required Files"
echo "-------------------------"
check_file ".releaserc.json" "Semantic Release Config"
check_file ".github/workflows/release.yml" "Release Workflow"
check_file ".github/workflows/hotfix.yml" "Hotfix Workflow"
check_file "src/utils/version.ts" "Version Utility"
check_file "docs/SEMANTIC_RELEASE.md" "Documentation"

echo ""
echo "2. Validating Configurations"
echo "----------------------------"
validate_json ".releaserc.json" "Semantic Release JSON"
validate_json "package.json" "Package JSON"

echo ""
echo "3. Testing Dependencies"
echo "----------------------"
run_test "semantic-release installed" "npm list semantic-release"
run_test "@semantic-release/changelog installed" "npm list @semantic-release/changelog"
run_test "@semantic-release/git installed" "npm list @semantic-release/git"
run_test "@semantic-release/github installed" "npm list @semantic-release/github"

echo ""
echo "4. Testing Scripts"
echo "-----------------"
run_test "version:check script" "npm run version:check"
run_test "TypeScript compilation" "npm run type-check"
run_test "ESLint passes" "npm run lint"

echo ""
echo "5. Testing Version Utility"
echo "--------------------------"
run_test "Version utility exists" "[ -f src/utils/version.ts ]"

echo ""
echo "6. Workflow Validation"
echo "---------------------"

# Check workflow syntax
if command -v actionlint >/dev/null 2>&1; then
    run_test "Release workflow syntax" "actionlint .github/workflows/release.yml"
    run_test "Hotfix workflow syntax" "actionlint .github/workflows/hotfix.yml"
else
    echo -e "${YELLOW}actionlint not found - skipping workflow syntax validation${NC}"
fi

echo ""
echo "7. Security Validation"
echo "----------------------"

# Check for hardcoded secrets
if grep -r "sk-\|ghp_\|ghs_" src/ >/dev/null 2>&1; then
    echo -e "${RED}FAIL${NC} - Hardcoded secrets found in source"
    ((TESTS_FAILED++))
else
    echo -e "${GREEN}PASS${NC} - No hardcoded secrets in source"
    ((TESTS_PASSED++))
fi

# Check for production environment variables
if grep -r "REACT_APP_" .github/workflows/ | grep -v "\${{ secrets\." >/dev/null 2>&1; then
    echo -e "${YELLOW}WARNING${NC} - Non-secret environment variables found in workflows"
else
    echo -e "${GREEN}PASS${NC} - All sensitive env vars use secrets"
    ((TESTS_PASSED++))
fi

echo ""
echo "========================================="
echo "Validation Summary"
echo "========================================="
echo -e "Tests Passed: ${GREEN}$TESTS_PASSED${NC}"
echo -e "Tests Failed: ${RED}$TESTS_FAILED${NC}"

if [ $TESTS_FAILED -eq 0 ]; then
    echo -e "\n${GREEN}✓ All validations passed! Release setup is ready for production.${NC}"
    exit 0
else
    echo -e "\n${RED}✗ Some validations failed. Please fix the issues above.${NC}"
    exit 1
fi