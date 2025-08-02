# IOM ITB Backend API

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.19+-blue.svg)](https://expressjs.com/)
[![Sequelize](https://img.shields.io/badge/Sequelize-6.37+-orange.svg)](https://sequelize.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0+-blue.svg)](https://www.mysql.com/)
[![Docker](https://img.shields.io/badge/Docker-3.8+-blue.svg)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-ISC-green.svg)](LICENSE)

A comprehensive RESTful API backend for the IOM ITB (Ikatan Orangtua Mahasiswa Institut Teknologi Bandung) organization. This API provides endpoints for managing members, activities, donations, competitions, and various organizational functions.

## 🚀 Features

- **Authentication & Authorization**: JWT-based authentication with role-based access control
- **Member Management**: Complete CRUD operations for organization members
- **Activity Management**: Organize and track organizational activities
- **Donation System**: Handle donations and financial transactions
- **Competition Management**: Manage competitions, registrations, and submissions
- **File Management**: Upload, download, and manage files with Multer
- **Email Integration**: Automated email notifications using Nodemailer
- **API Documentation**: Interactive Swagger/OpenAPI documentation
- **Database Management**: MySQL with Sequelize ORM and migrations
- **Docker Support**: Containerized deployment with Docker Compose
- **Security**: Helmet.js security headers, CORS configuration, input validation

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/) with Express.js
- **Database**: [MySQL](https://www.mysql.com/) with [Sequelize ORM](https://sequelize.org/)
- **Authentication**: [JWT](https://jwt.io/) (JSON Web Tokens)
- **Validation**: [Joi](https://joi.dev/) for request validation
- **File Upload**: [Multer](https://github.com/expressjs/multer)
- **Email**: [Nodemailer](https://nodemailer.com/)
- **Documentation**: [Swagger/OpenAPI](https://swagger.io/)
- **Containerization**: [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)
- **Security**: [Helmet.js](https://helmetjs.github.io/), [bcrypt](https://github.com/dcodeIO/bcrypt.js/)

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MySQL](https://www.mysql.com/) (v8.0 or higher)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) (optional, for containerized deployment)

## 🚀 Quick Start

### Option 1: Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd IOM-ITB-BE-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Database Setup**
   ```bash
   # Create database
   npm run create:db
   
   # Run migrations
   npm run migrate
   
   # Seed initial data
   npm run seed
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

### Option 2: Docker Deployment

1. **Clone and navigate to project**
   ```bash
   git clone <repository-url>
   cd IOM-ITB-BE-main
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start with Docker Compose**
   ```bash
   # Development environment
   npm run start:dev
   
   # Production environment
   npm run start:prod
   ```

## 📚 API Documentation

Once the server is running, you can access the interactive API documentation:

- **Swagger UI**: `http://localhost:3000/api`
- **API Base URL**: `http://localhost:3000`

### Available Endpoints

- **Authentication**: `/auth` - Login, register, password management
- **Users**: `/users` - User management and profiles
- **Members**: `/members` - Organization member management
- **Activities**: `/activities` - Event and activity management
- **Donations**: `/donations` - Financial donation handling
- **Competitions**: `/competition` - Competition management
- **Merchandise**: `/merchandises` - Product catalog management
- **Transactions**: `/transactions` - Financial transaction tracking
- **File Management**: `/file` - File upload and download
- **Help Submissions**: `/help-submissions` - Support request handling

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with nodemon |
| `npm run lint` | Run ESLint to check code quality |
| `npm run create:db` | Create MySQL database |
| `npm run migrate` | Run database migrations |
| `npm run migrate:undo` | Undo all migrations |
| `npm run seed` | Seed database with initial data |
| `npm run migrate:fresh:seed` | Reset database, migrate, and seed |
| `npm run start:dev` | Start Docker development environment |
| `npm run stop:dev` | Stop Docker development environment |
| `npm run start:prod` | Start Docker production environment |
| `npm run stop:prod` | Stop Docker production environment |

## 🏗️ Project Structure

```
src/
├── config/           # Configuration files
├── controllers/      # Route controllers
├── middlewares/      # Custom middleware
├── migrations/       # Database migrations
├── models/          # Sequelize models
├── routes/          # API route definitions
│   └── swagger/     # API documentation
├── schemas/         # Validation schemas
├── seeders/         # Database seeders
├── services/        # Business logic
├── uploads/         # File uploads
├── utils/           # Utility functions
├── app.js           # Express app configuration
└── index.js         # Server entry point
```

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=3000
NODE_ENV=development
BASE_URL=http://localhost:3000

# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_NAME=iom_itb_db
DB_USER=root
DB_PASSWORD=your_password

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=24h

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password

# File Upload
UPLOAD_PATH=./src/uploads
MAX_FILE_SIZE=5242880
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run linting
npm run lint
```

## 🐳 Docker Configuration

The project includes Docker configuration for both development and production environments:

- **Development**: Uses nodemon for hot reloading
- **Production**: Optimized for production deployment
- **Database**: MySQL 8.0 with persistent storage
- **Reverse Proxy**: Nginx for load balancing and SSL termination

## 📝 API Response Format

All API responses follow a consistent format:

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {
    // Response data
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🔒 Security Features

- JWT-based authentication
- Role-based access control
- Input validation with Joi
- CORS configuration
- Helmet.js security headers
- Password hashing with bcrypt
- Rate limiting (configurable)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👥 Support

For support and questions:

- **Email**: [support@iom-itb.id](mailto:support@iom-itb.id)
- **Website**: [https://www.iom-itb.id](https://www.iom-itb.id)
- **Documentation**: [API Documentation](http://localhost:3000/api)

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/) - Web application framework
- [Sequelize](https://sequelize.org/) - Database ORM
- [Swagger](https://swagger.io/) - API documentation
- [Docker](https://www.docker.com/) - Containerization platform

---

**Built with ❤️ for IOM ITB Community**
