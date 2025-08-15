export const APP_CONSTANTS = {
  // Server Configuration
  DEFAULT_PORT: 3001,
  DEFAULT_HOST: 'localhost',
  
  // API Configuration
  API_PREFIX: 'api',
  API_VERSION: 'v1',
  
  // Email Configuration
  EMAIL: {
    DEFAULT_HOST: 'smtp.gmail.com',
    DEFAULT_PORT: 587,
    DEFAULT_FROM: 'noreply@portfolio.com',
    DEFAULT_TO: 'mahad.dev3@gmail.com',
  },
  
  // Validation
  VALIDATION: {
    NAME_MIN_LENGTH: 2,
    NAME_MAX_LENGTH: 100,
    SUBJECT_MIN_LENGTH: 5,
    SUBJECT_MAX_LENGTH: 200,
    MESSAGE_MIN_LENGTH: 10,
    MESSAGE_MAX_LENGTH: 2000,
    EMAIL_MAX_LENGTH: 255,
  },
  
  // CORS
  CORS: {
    DEFAULT_ORIGIN: 'http://localhost:5173',
    ALLOWED_METHODS: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    ALLOWED_HEADERS: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
      'X-API-Key',
    ],
  },
  
  // Environment
  ENV: {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production',
    TEST: 'test',
  },
} as const; 