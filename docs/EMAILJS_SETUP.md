# EmailJS Integration Setup

This guide covers the complete setup of EmailJS for the portfolio contact form functionality.

## Overview

EmailJS allows sending emails directly from client-side JavaScript without requiring a backend server. This integration enables the contact form to send emails directly to your inbox.

## Required Configuration

### 1. EmailJS Account Setup

1. **Create Account**: Sign up at [emailjs.com](https://www.emailjs.com/)
2. **Verify Email**: Complete email verification
3. **Choose Plan**: Free plan supports 200 emails/month

### 2. EmailJS Service Configuration

1. **Add Email Service**:
   - Go to EmailJS Dashboard → Services
   - Click "Add Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow provider-specific setup instructions

2. **Get Service ID**:
   - Copy the Service ID (format: `service_xxxxxxx`)
   - This will be your `REACT_APP_EMAILJS_SERVICE_ID`

### 3. Email Template Setup

1. **Create Email Template**:
   - Go to EmailJS Dashboard → Email Templates
   - Click "Create New Template"
   - Design your email template with variables:

```html
Subject: New Portfolio Contact - {{from_name}} From: {{from_name}} Email:
{{from_email}} Message: {{message}} Sent via Portfolio Contact Form
```

2. **Get Template ID**:
   - Copy the Template ID (format: `template_xxxxxxx`)
   - This will be your `REACT_APP_EMAILJS_TEMPLATE_ID`

### 4. Public Key Configuration

1. **Get Public Key**:
   - Go to EmailJS Dashboard → Account → General
   - Copy the Public Key (format: `your_public_key_here`)
   - This will be your `REACT_APP_EMAILJS_PUBLIC_KEY`

## GitHub Secrets Configuration

### Required Repository Secrets

Add these secrets in GitHub: Settings → Secrets and variables → Actions

| Secret Name                     | Value                    | Example                |
| ------------------------------- | ------------------------ | ---------------------- |
| `REACT_APP_EMAILJS_SERVICE_ID`  | Your EmailJS service ID  | `service_abc1234`      |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID | `template_xyz5678`     |
| `REACT_APP_EMAILJS_PUBLIC_KEY`  | Your EmailJS public key  | `your_public_key_here` |

### Security Note

These values are safe to expose in client-side code:

- **Service ID**: Public identifier for your email service
- **Template ID**: Public identifier for your email template
- **Public Key**: Designed for client-side use (not a secret)

## Local Development Setup

### 1. Environment Configuration

Create `.env.local` file:

```bash
# EmailJS Configuration (for local development)
REACT_APP_EMAILJS_SERVICE_ID=service_abc1234
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz5678
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 2. Testing Locally

1. **Start Development Server**:

   ```bash
   npm start
   ```

2. **Test Contact Form**:
   - Navigate to contact section
   - Fill out and submit form
   - Check your email for test message
   - Verify EmailJS dashboard statistics

## Implementation Details

### React Component Integration

The contact form uses EmailJS in the following way:

```typescript
import emailjs from '@emailjs/browser';

const sendEmail = (formData: FormData) => {
  return emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID!,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
    formData,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
  );
};
```

### Environment Variable Validation

The application includes runtime validation:

```typescript
const validateEmailJSConfig = () => {
  const required = [
    'REACT_APP_EMAILJS_SERVICE_ID',
    'REACT_APP_EMAILJS_TEMPLATE_ID',
    'REACT_APP_EMAILJS_PUBLIC_KEY',
  ];

  return required.every((key) => process.env[key] && process.env[key] !== '');
};
```

## Production Deployment

### CI/CD Integration

All GitHub Actions workflows automatically:

1. **Read secrets** from repository configuration
2. **Export environment variables** during build
3. **Bundle configuration** into production build
4. **Deploy with EmailJS** functionality enabled

### Workflow Configuration

The workflows handle EmailJS configuration in these files:

- `release.yml` - Production releases
- `hotfix.yml` - Emergency deployments
- `deploy.yml` - Manual deployments

## Troubleshooting

### Common Issues

1. **Form Not Sending**:
   - Check browser console for errors
   - Verify all environment variables are set
   - Confirm EmailJS service is active

2. **Emails Not Received**:
   - Check spam/junk folder
   - Verify email service configuration
   - Test EmailJS template manually

3. **Rate Limiting**:
   - EmailJS free plan: 200 emails/month
   - Implement client-side rate limiting
   - Consider upgrading plan if needed

### Debug Mode

Enable EmailJS debugging:

```typescript
// Add to contact form component
emailjs.init({
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  blockHeadless: true,
  limitRate: {
    id: 'app',
    throttle: 10000, // 10s
  },
});
```

## Security Best Practices

### Client-Side Safety

1. **Public Key Usage**: EmailJS public keys are designed for client-side use
2. **Rate Limiting**: Implement throttling to prevent abuse
3. **Validation**: Always validate form data before sending
4. **CORS Configuration**: EmailJS handles CORS automatically

### Production Security

1. **Domain Restrictions**: Configure allowed domains in EmailJS dashboard
2. **Usage Monitoring**: Monitor EmailJS dashboard for unusual activity
3. **Regular Updates**: Keep EmailJS library updated
4. **Environment Separation**: Use different services for dev/prod

## Support

- **EmailJS Documentation**: [docs.emailjs.com](https://www.emailjs.com/docs/)
- **GitHub Issues**: Report integration issues in repository
- **Contact Form Testing**: Use portfolio contact form to test functionality

---

**Professional Portfolio Integration**  
_Secure, reliable email delivery for portfolio contact forms_
