import { useState, useCallback } from 'react';

/**
 * Reusable hook for expand/collapse functionality
 *
 * Supports both single and multiple item expansion patterns
 * commonly used across section components.
 */

type ExpandableMode = 'single' | 'multiple';
type ExpandedState = number | number[] | null;

interface UseExpandableOptions {
  mode?: ExpandableMode;
  initialExpanded?: ExpandedState;
  allowToggle?: boolean;
}

export const useExpandable = ({
  mode = 'single',
  initialExpanded = null,
  allowToggle = true,
}: UseExpandableOptions = {}) => {
  const [expanded, setExpanded] = useState<ExpandedState>(initialExpanded);

  const isExpanded = useCallback(
    (index: number): boolean => {
      if (mode === 'single') {
        return expanded === index;
      }
      return Array.isArray(expanded) && expanded.includes(index);
    },
    [expanded, mode]
  );

  const toggle = useCallback(
    (index: number) => {
      setExpanded((prev) => {
        if (mode === 'single') {
          // Single mode: only one item can be expanded
          if (prev === index && allowToggle) {
            return null;
          }
          return index;
        } else {
          // Multiple mode: multiple items can be expanded
          const currentArray = Array.isArray(prev) ? prev : [];
          const isCurrentlyExpanded = currentArray.includes(index);

          if (isCurrentlyExpanded && allowToggle) {
            return currentArray.filter((i) => i !== index);
          } else if (!isCurrentlyExpanded) {
            return [...currentArray, index];
          }
          return currentArray;
        }
      });
    },
    [mode, allowToggle]
  );

  const expand = useCallback(
    (index: number) => {
      if (mode === 'single') {
        setExpanded(index);
      } else {
        setExpanded((prev) => {
          const currentArray = Array.isArray(prev) ? prev : [];
          if (!currentArray.includes(index)) {
            return [...currentArray, index];
          }
          return currentArray;
        });
      }
    },
    [mode]
  );

  const collapse = useCallback(
    (index: number) => {
      if (mode === 'single') {
        setExpanded((prev) => (prev === index ? null : prev));
      } else {
        setExpanded((prev) => {
          const currentArray = Array.isArray(prev) ? prev : [];
          return currentArray.filter((i) => i !== index);
        });
      }
    },
    [mode]
  );

  const collapseAll = useCallback(() => {
    setExpanded(mode === 'single' ? null : []);
  }, [mode]);

  const expandAll = useCallback(
    (maxIndex: number) => {
      if (mode === 'multiple') {
        setExpanded(Array.from({ length: maxIndex }, (_, i) => i));
      }
    },
    [mode]
  );

  return {
    expanded,
    isExpanded,
    toggle,
    expand,
    collapse,
    collapseAll,
    expandAll,
  };
};
