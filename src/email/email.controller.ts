import { 
  Controller, 
  Post, 
  Body, 
  HttpCode, 
  HttpStatus, 
  ValidationPipe,
  UsePipes,
  Logger,
  Get
} from '@nestjs/common';
import { EmailService } from './email.service';
import { ContactFormDto } from './dto/contact-form.dto';

@Controller('email')
export class EmailController {
  private readonly logger = new Logger(EmailController.name);

  constructor(private readonly emailService: EmailService) {}

  @Post('contact')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe({ 
    transform: true, 
    whitelist: true,
    forbidNonWhitelisted: true,
    errorHttpStatusCode: HttpStatus.BAD_REQUEST
  }))
  async submitContactForm(@Body() contactData: ContactFormDto) {
    try {
      this.logger.log(`Contact form submission received from: ${contactData.email}`);
      
      const result = await this.emailService.sendContactFormEmail(contactData);
      
      this.logger.log(`Contact form email sent successfully for: ${contactData.email}`);
      
      return {
        success: true,
        message: 'Your message has been sent successfully!',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      this.logger.error(`Failed to process contact form submission: ${error.message}`, error.stack);
      
      return {
        success: false,
        message: 'Failed to send your message. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
        timestamp: new Date().toISOString()
      };
    }
  }

  @Get('health')
  @HttpCode(HttpStatus.OK)
  async checkEmailServiceHealth() {
    try {
      const isHealthy = await this.emailService.testConnection();
      
      return {
        service: 'email',
        status: isHealthy ? 'healthy' : 'unhealthy',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      this.logger.error('Email service health check failed:', error);
      
      return {
        service: 'email',
        status: 'unhealthy',
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }
}
