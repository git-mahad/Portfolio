import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';
import { APP_CONSTANTS } from '../../common/constants/app.constants';

export class ContactFormDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  @MinLength(APP_CONSTANTS.VALIDATION.NAME_MIN_LENGTH, { 
    message: `Name must be at least ${APP_CONSTANTS.VALIDATION.NAME_MIN_LENGTH} characters long` 
  })
  @MaxLength(APP_CONSTANTS.VALIDATION.NAME_MAX_LENGTH, { 
    message: `Name cannot exceed ${APP_CONSTANTS.VALIDATION.NAME_MAX_LENGTH} characters` 
  })
  name: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @MaxLength(APP_CONSTANTS.VALIDATION.EMAIL_MAX_LENGTH, { 
    message: `Email cannot exceed ${APP_CONSTANTS.VALIDATION.EMAIL_MAX_LENGTH} characters` 
  })
  email: string;

  @IsNotEmpty({ message: 'Subject is required' })
  @IsString({ message: 'Subject must be a string' })
  @MinLength(APP_CONSTANTS.VALIDATION.SUBJECT_MIN_LENGTH, { 
    message: `Subject must be at least ${APP_CONSTANTS.VALIDATION.SUBJECT_MIN_LENGTH} characters long` 
  })
  @MaxLength(APP_CONSTANTS.VALIDATION.SUBJECT_MAX_LENGTH, { 
    message: `Subject cannot exceed ${APP_CONSTANTS.VALIDATION.SUBJECT_MAX_LENGTH} characters` 
  })
  subject: string;

  @IsNotEmpty({ message: 'Message is required' })
  @IsString({ message: 'Message must be a string' })
  @MinLength(APP_CONSTANTS.VALIDATION.MESSAGE_MIN_LENGTH, { 
    message: `Message must be at least ${APP_CONSTANTS.VALIDATION.MESSAGE_MIN_LENGTH} characters long` 
  })
  @MaxLength(APP_CONSTANTS.VALIDATION.MESSAGE_MAX_LENGTH, { 
    message: `Message cannot exceed ${APP_CONSTANTS.VALIDATION.MESSAGE_MAX_LENGTH} characters` 
  })
  message: string;
} 