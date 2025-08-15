# Email Service Setup Guide

This guide will help you set up the email functionality for your portfolio contact form using Gmail SMTP.

## Prerequisites

1. A Gmail account
2. 2-Factor Authentication enabled on your Gmail account
3. An App Password generated for this application

## Step 1: Enable 2-Factor Authentication

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled

## Step 2: Generate an App Password

1. Go to your Google Account settings
2. Navigate to Security > 2-Step Verification
3. Click on "App passwords" (at the bottom)
4. Select "Mail" and "Other (Custom name)"
5. Enter a name like "Portfolio Contact Form"
6. Click "Generate"
7. Copy the 16-character password (you won't see it again)

## Step 3: Create Environment File

Create a `.env` file in the `backend` directory with the following content:

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
EMAIL_FROM=your-gmail@gmail.com
EMAIL_TO=mahad.dev3@gmail.com

# Server Configuration
PORT=3001
NODE_ENV=development

# CORS Configuration
FRONTEND_URL=http://localhost:5173
```

**Important:** Replace the placeholder values:
- `your-gmail@gmail.com` with your actual Gmail address
- `your-16-character-app-password` with the app password you generated

## Step 4: Install Dependencies

Run the following command in the `backend` directory:

```bash
npm install
```

## Step 5: Test the Email Service

1. Start the backend server:
   ```bash
   npm run start:dev
   ```

2. Test the email service health endpoint:
   ```bash
   curl http://localhost:3001/api/email/health
   ```

3. Test sending a contact form email:
   ```bash
   curl -X POST http://localhost:3001/api/email/contact \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test User",
       "email": "test@example.com",
       "subject": "Test Message",
       "message": "This is a test message from the contact form."
     }'
   ```

## Alternative Email Services

### SendGrid (Recommended for Production)

If you prefer to use SendGrid instead of Gmail:

1. Sign up for a SendGrid account
2. Create an API key
3. Update your `.env` file:

```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASS=your-sendgrid-api-key
EMAIL_FROM=your-verified-sender@yourdomain.com
EMAIL_TO=mahad.dev3@gmail.com
```

### Outlook/Hotmail

```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
EMAIL_FROM=your-email@outlook.com
EMAIL_TO=mahad.dev3@gmail.com
```

## Security Notes

1. **Never commit your `.env` file** to version control
2. **Use App Passwords** instead of your main Gmail password
3. **Restrict CORS origins** in production to your actual domain
4. **Use environment-specific configurations** for different deployment environments

## Troubleshooting

### Common Issues

1. **Authentication failed**: Make sure you're using an App Password, not your regular Gmail password
2. **Connection timeout**: Check if your firewall or network blocks SMTP connections
3. **CORS errors**: Verify the FRONTEND_URL in your .env file matches your frontend URL

### Gmail-specific Issues

- Gmail has daily sending limits (500 emails per day for regular accounts)
- App passwords are required for 2FA-enabled accounts
- Some Gmail accounts may require "Less secure app access" (not recommended)

## Production Deployment

For production deployment:

1. Use environment variables instead of .env files
2. Set NODE_ENV=production
3. Use a production email service like SendGrid or AWS SES
4. Configure proper CORS origins for your production domain
5. Set up monitoring and logging for email delivery

## Support

If you encounter issues:

1. Check the backend logs for detailed error messages
2. Verify your environment variables are correctly set
3. Test the email service health endpoint
4. Ensure your email service credentials are valid 