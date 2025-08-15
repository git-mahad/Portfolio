import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { ContactFormDto } from './dto/contact-form.dto';
import { EmailConfig } from '../config/email.config';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private transporter: nodemailer.Transporter;

  constructor(private readonly configService: ConfigService) {
    this.initializeTransporter();
  }

  private initializeTransporter(): void {
    try {
      const emailConfig = this.configService.get<EmailConfig>('email');
      
      if (!emailConfig?.user || !emailConfig?.pass) {
        throw new Error('Email configuration is incomplete. Please check EMAIL_USER and EMAIL_PASS environment variables.');
      }

      this.transporter = nodemailer.createTransport({
        host: emailConfig.host,
        port: emailConfig.port,
        secure: false,
        auth: {
          user: emailConfig.user,
          pass: emailConfig.pass,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      this.transporter.verify((error, success) => {
        if (error) {
          this.logger.error('SMTP connection failed:', error);
        } else {
          this.logger.log('SMTP server is ready to send emails');
        }
      });
    } catch (error) {
      this.logger.error('Failed to initialize email transporter:', error);
      throw new BadRequestException('Email service configuration error');
    }
  }

  async sendContactFormEmail(contactData: ContactFormDto): Promise<boolean> {
    try {
      const emailConfig = this.configService.get<EmailConfig>('email');
      
      if (!emailConfig) {
        throw new BadRequestException('Email configuration not found');
      }
      
      const recipientEmail = emailConfig.to;
      const fromEmail = emailConfig.from;

      if (!recipientEmail || !fromEmail) {
        throw new BadRequestException('Email configuration is incomplete');
      }

      const mailOptions = {
        from: `"Portfolio Contact Form" <${fromEmail}>`,
        to: recipientEmail,
        subject: `New Contact Form Submission: ${contactData.subject}`,
        html: this.generateContactFormEmailHTML(contactData),
        text: this.generateContactFormEmailText(contactData),
      };

      const result = await this.transporter.sendMail(mailOptions);
      
      this.logger.log(`Contact form email sent successfully to ${recipientEmail}`);
      this.logger.debug('Email result:', result);
      
      return true;
    } catch (error) {
      this.logger.error('Failed to send contact form email:', error);
      throw new BadRequestException('Failed to send email. Please try again later.');
    }
  }

  private generateContactFormEmailHTML(contactData: ContactFormDto): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { background-color: #f8f9fa; padding: 10px; border-radius: 3px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
              <p>A new message has been submitted through your portfolio contact form.</p>
            </div>
            
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${contactData.name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${contactData.email}</div>
            </div>
            
            <div class="field">
              <div class="label">Subject:</div>
              <div class="value">${contactData.subject}</div>
            </div>
            
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${contactData.message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="footer">
              <p>This email was sent from your portfolio contact form at ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;
  }

  private generateContactFormEmailText(contactData: ContactFormDto): string {
    return `
New Contact Form Submission

A new message has been submitted through your portfolio contact form.

Name: ${contactData.name}
Email: ${contactData.email}
Subject: ${contactData.subject}

Message:
${contactData.message}

---
This email was sent from your portfolio contact form at ${new Date().toLocaleString()}
    `;
  }

  async testConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      return true;
    } catch (error) {
      this.logger.error('SMTP connection test failed:', error);
      return false;
    }
  }
}
