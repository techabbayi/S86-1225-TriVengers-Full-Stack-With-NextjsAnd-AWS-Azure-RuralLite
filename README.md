# 📘 RuralLite Learning Platform

> **Offline-First Educational Web Application for Low-Bandwidth Rural Schools**

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20-green)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Team Members](#-team-members)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Setup Guide](#-setup-guide)
- [Environment Configuration](#-environment-configuration)
- [Running the Application](#-running-the-application)
- [Docker Deployment](#-docker-deployment)
- [API Documentation](#-api-documentation)
- [Testing](#-testing)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**RuralLite** is a Progressive Web App (PWA) designed to bridge the digital education gap in rural and low-connectivity areas. The platform provides students with access to educational content, interactive quizzes, and learning resources that work seamlessly offline.

### Problem Statement

Rural schools struggle with:
- ⚠️ Poor or intermittent internet connectivity
- ⚠️ Limited access to quality educational resources
- ⚠️ Lack of interactive digital learning tools
- ⚠️ High costs of data consumption

### Solution

RuralLite addresses these challenges by:
- ✅ Offline-first architecture with smart caching
- ✅ Lightweight content optimized for low bandwidth
- ✅ Progressive Web App for cross-platform compatibility
- ✅ Background synchronization when connectivity is available
- ✅ Secure authentication and role-based access control

---

## 👥 Team Members

### Team TriVengers

| Name | Role | Responsibilities |
|------|------|------------------|
| **Hari Krishna** | Team Leader & Backend Developer | Backend architecture, API development, database design, authentication, cloud services integration |
| **Keerthana** | Frontend Developer | UI/UX implementation, React components, client-side logic, state management, responsive design |
| **Lokeswara** | UI/UX Designer & QA Tester | User interface design, user experience optimization, testing strategies, quality assurance |

---

## ✨ Key Features

### 🎓 For Students
- **Offline Access**: Access lessons, notes, and quizzes without internet
- **Interactive Quizzes**: Take assessments with instant feedback
- **Progress Tracking**: Monitor learning progress and quiz scores
- **Personal Notes**: Create and manage study notes
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop

### 👨‍🏫 For Teachers
- **Content Management**: Create and manage lessons and quizzes
- **Student Analytics**: Track student progress and performance
- **File Uploads**: Share educational materials (PDFs, images, documents)
- **Bulk Operations**: Manage multiple students efficiently

### 🔒 Security & Authentication
- **Secure Authentication**: JWT-based authentication with bcrypt password hashing
- **Role-Based Access**: Different permissions for students, teachers, and admins
- **Protected Routes**: Middleware-based route protection
- **Secure File Uploads**: AWS S3 pre-signed URLs for file storage

### 🚀 Performance & Scalability
- **Redis Caching**: Fast data retrieval with intelligent caching
- **Database Optimization**: PostgreSQL with Prisma ORM
- **Background Sync**: Automatic data synchronization when online
- **Progressive Web App**: Install on any device, works like native app

### 🌐 Cloud Integration
- **AWS Services**: S3 for storage, SES for emails, Lambda-ready architecture
- **Azure Support**: Compatible with Azure services
- **Docker Deployment**: Containerized for consistent deployments
- **CI/CD Pipeline**: Automated testing and deployment with GitHub Actions

---

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **State Management**: React Context API + SWR
- **Form Handling**: React Hook Form + Zod validation
- **PWA**: Service Workers, IndexedDB, LocalForage

### Backend
- **Runtime**: Node.js 20
- **Framework**: Next.js API Routes
- **Database**: PostgreSQL 15
- **ORM**: Prisma
- **Cache**: Redis (ioredis)
- **Authentication**: JWT + bcrypt

### Cloud & DevOps
- **Cloud Providers**: AWS, Azure
- **Container**: Docker, Docker Compose
- **CI/CD**: GitHub Actions
- **File Storage**: AWS S3
- **Email**: SendGrid / AWS SES
- **Deployment**: AWS ECS, Azure App Service

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **Testing**: Vitest, Jest
- **Version Control**: Git, GitHub

---

## 📁 Project Structure

```
S86-1225-TriVengers-Full-Stack-With-NextjsAnd-AWS-Azure-RuralLite/
├── rurallite/                      # Main Next.js application
│   ├── app/                        # Next.js App Router
│   │   ├── api/                    # Backend API routes
│   │   │   ├── auth/               # Authentication endpoints
│   │   │   ├── lessons/            # Lesson CRUD operations
│   │   │   ├── quizzes/            # Quiz management
│   │   │   ├── notes/              # Student notes
│   │   │   ├── users/              # User management
│   │   │   ├── upload/             # File upload (S3)
│   │   │   └── email/              # Email notifications
│   │   ├── dashboard/              # Student/Teacher dashboard
│   │   ├── lessons/                # Lesson pages
│   │   ├── quizzes/                # Quiz pages
│   │   ├── notes/                  # Notes management
│   │   ├── login/                  # Authentication pages
│   │   └── signup/
│   ├── components/                 # React components
│   │   ├── ui/                     # Reusable UI components
│   │   ├── lessons/                # Lesson-specific components
│   │   ├── layout/                 # Layout components
│   │   └── offline/                # Offline indicators
│   ├── lib/                        # Utility libraries
│   │   ├── aws-s3.js               # AWS S3 configuration
│   │   ├── mongodb.js              # MongoDB connection (deprecated)
│   │   ├── redis.js                # Redis client
│   │   ├── email.js                # Email service
│   │   ├── jwtUtils.js             # JWT utilities
│   │   ├── authMiddleware.js       # Authentication middleware
│   │   ├── errorHandler.js         # Error handling
│   │   ├── logger.js               # Logging utility
│   │   └── db/                     # Database operations
│   ├── context/                    # React Context providers
│   │   ├── AuthContext.jsx         # Authentication context
│   │   └── UIContext.jsx           # UI state context
│   ├── hooks/                      # Custom React hooks
│   │   ├── useAuth.js              # Authentication hook
│   │   └── useUI.js                # UI state hook
│   ├── prisma/                     # Prisma ORM
│   │   ├── schema.prisma           # Database schema
│   │   ├── migrations/             # Database migrations
│   │   └── seed.js                 # Database seeding
│   ├── public/                     # Static assets
│   │   ├── manifest.json           # PWA manifest
│   │   ├── sw.js                   # Service Worker
│   │   └── icons/                  # App icons
│   ├── tests/                      # Test files
│   ├── package.json                # Dependencies
│   ├── next.config.mjs             # Next.js configuration
│   ├── tailwind.config.ts          # Tailwind configuration
│   └── .env.local                  # Environment variables (local)
├── docker-compose.yml              # Docker Compose configuration
├── Dockerfile                      # Docker build instructions
└── README.md                       # This file
```

---

## 🚀 Setup Guide

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20 or higher) - [Download](https://nodejs.org/)
- **PostgreSQL** (v15 or higher) - [Download](https://www.postgresql.org/download/)
- **Redis** (optional, for caching) - [Download](https://redis.io/download)
- **Git** - [Download](https://git-scm.com/)
- **Docker** (optional, for containerized setup) - [Download](https://www.docker.com/)

### Quick Start (Local Development)

#### 1. Clone the Repository

```bash
git clone https://github.com/your-username/S86-1225-TriVengers-Full-Stack-With-NextjsAnd-AWS-Azure-RuralLite.git
cd S86-1225-TriVengers-Full-Stack-With-NextjsAnd-AWS-Azure-RuralLite
```

#### 2. Navigate to the Application Directory

```bash
cd rurallite
```

> **Important**: All commands must be run from the `rurallite/` directory, not the repository root.

#### 3. Install Dependencies

```bash
npm install
```

#### 4. Set Up Environment Variables

Create a `.env.local` file in the `rurallite/` directory:

```bash
# Copy the example environment file
cp .env.example .env.local
```

Edit `.env.local` with your configuration (see [Environment Configuration](#-environment-configuration) below).

#### 5. Set Up the Database

```bash
# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Seed the database with sample data (optional)
npx prisma db seed
```

#### 6. Start the Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

#### 7. Create Your First User

Navigate to [http://localhost:3000/signup](http://localhost:3000/signup) to create an account.

---

## 🔧 Environment Configuration

Create a `.env.local` file in the `rurallite/` directory with the following variables:

### Required Variables

```env
# Database
DATABASE_URL="postgresql://postgres:password@localhost:5432/rurallite"

# Authentication
JWT_SECRET="your-super-secret-jwt-key-change-in-production"

# Node Environment
NODE_ENV="development"
```

### Optional Variables (for full functionality)

```env
# Redis Cache (optional, improves performance)
REDIS_URL="redis://localhost:6379"

# AWS S3 File Upload (optional, for file storage)
AWS_ACCESS_KEY_ID="your-aws-access-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret-key"
AWS_REGION="us-east-1"
AWS_S3_BUCKET="your-bucket-name"

# Email Service (optional, choose one)
# SendGrid
SENDGRID_API_KEY="your-sendgrid-api-key"
SENDGRID_SENDER="no-reply@yourdomain.com"

# OR AWS SES
SES_EMAIL_SENDER="no-reply@yourdomain.com"
EMAIL_PROVIDER="sendgrid"  # or "ses"

# NextAuth (if using NextAuth.js)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret"
```

### Generating Secure Secrets

```bash
# Generate a secure JWT secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## 🏃 Running the Application

### Development Mode

```bash
cd rurallite
npm run dev
```

Access the app at [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
cd rurallite
npm run build
npm start
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- Button.test.jsx
```

### Linting and Formatting

```bash
# Run ESLint
npm run lint

# Fix linting issues automatically
npm run lint -- --fix
```

---

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

Docker Compose sets up the entire stack (Next.js, PostgreSQL, Redis) with a single command.

#### 1. Build and Start All Services

```bash
# From the project root directory
docker-compose up --build
```

This starts:
- **Next.js App** on [http://localhost:3000](http://localhost:3000)
- **PostgreSQL** on port `5432`
- **Redis** on port `6379`

#### 2. Run in Detached Mode

```bash
docker-compose up -d
```

#### 3. View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f app
```

#### 4. Stop Services

```bash
docker-compose down
```

#### 5. Stop and Remove Volumes (⚠️ Deletes database data)

```bash
docker-compose down -v
```

### Docker Services Overview

| Service | Port | Description |
|---------|------|-------------|
| **app** | 3000 | Next.js application |
| **db** | 5432 | PostgreSQL database |
| **redis** | 6379 | Redis cache |

### Docker Environment Variables

The `docker-compose.yml` file uses these environment variables:

```yaml
DATABASE_URL: postgresql://postgres:password@db:5432/trivengers_db
REDIS_URL: redis://redis:6379
NODE_ENV: production
```

> **Security Note**: Change the default PostgreSQL password in production deployments.

---

## 📚 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/signup` | Register new user | ❌ |
| POST | `/api/auth/login` | Login and get JWT token | ❌ |
| GET | `/api/auth/me` | Get current user profile | ✅ |

### User Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/users` | List all users (paginated) | ✅ |
| GET | `/api/users/[id]` | Get user by ID | ✅ |
| PUT | `/api/users/[id]` | Update user | ✅ |
| DELETE | `/api/users/[id]` | Delete user | ✅ |

### Lesson Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/lessons` | List all lessons | ✅ |
| GET | `/api/lessons/[id]` | Get lesson by ID | ✅ |
| POST | `/api/lessons` | Create new lesson | ✅ (Teacher) |
| PUT | `/api/lessons/[id]` | Update lesson | ✅ (Teacher) |
| DELETE | `/api/lessons/[id]` | Delete lesson | ✅ (Teacher) |

### Quiz Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/quizzes` | List all quizzes | ✅ |
| GET | `/api/quizzes/[id]` | Get quiz by ID | ✅ |
| POST | `/api/quizzes` | Create new quiz | ✅ (Teacher) |
| POST | `/api/quiz-results` | Submit quiz result | ✅ |

### File Upload Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/upload` | Generate S3 pre-signed URL | ✅ |
| POST | `/api/files` | Store file metadata | ✅ |
| GET | `/api/files` | Get user's files | ✅ |
| DELETE | `/api/files` | Delete file | ✅ |

### Example API Requests

#### Register a New User

```bash
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "SecurePass123",
    "role": "STUDENT"
  }'
```

#### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "SecurePass123"
  }'
```

#### Access Protected Route

```bash
curl -X GET http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Test Structure

```
rurallite/
├── __tests__/                  # Component tests
│   ├── Button.test.jsx
│   └── helpers.test.js
└── tests/                      # Unit tests
    ├── errorHandler.test.ts
    ├── logger.test.ts
    └── responseHandler.test.ts
```

### Writing Tests

Example component test:

```javascript
import { render, screen } from '@testing-library/react';
import Button from '@/components/Button';

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });
});
```

---

## 🤝 Contributing

We welcome contributions from the community! Follow these steps to contribute:

### 1. Fork the Repository

Click the "Fork" button at the top right of the repository page.

### 2. Clone Your Fork

```bash
git clone https://github.com/your-username/S86-1225-TriVengers-Full-Stack-With-NextjsAnd-AWS-Azure-RuralLite.git
cd S86-1225-TriVengers-Full-Stack-With-NextjsAnd-AWS-Azure-RuralLite
```

### 3. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### Branch Naming Conventions

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feature/<name>` | `feature/add-notifications` |
| Bug Fix | `fix/<name>` | `fix/login-redirect` |
| Chore | `chore/<name>` | `chore/update-deps` |
| Docs | `docs/<name>` | `docs/api-guide` |

### 4. Make Your Changes

- Write clean, well-documented code
- Follow existing code style and conventions
- Add tests for new features
- Update documentation as needed

### 5. Commit Your Changes

```bash
git add .
git commit -m "feat: add notification system"
```

### Commit Message Format

Follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

### 6. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 7. Create a Pull Request

- Go to the original repository
- Click "New Pull Request"
- Select your branch
- Fill in the PR template with details about your changes
- Submit the PR for review

### Code Review Process

- At least one team member must review and approve the PR
- All tests must pass
- No linting errors
- Documentation must be updated if needed

---

## 📝 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2024-2025 Team TriVengers (RuralLite Project)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🆘 Troubleshooting

### Common Issues

#### Issue: "Cannot find module 'next'"

**Solution**: You're running commands from the wrong directory. Navigate to `rurallite/` first:

```bash
cd rurallite
npm install
npm run dev
```

#### Issue: Database Connection Error

**Solution**: Ensure PostgreSQL is running and the `DATABASE_URL` in `.env.local` is correct:

```bash
# Check if PostgreSQL is running
# Windows
Get-Service postgresql*

# Linux/Mac
sudo systemctl status postgresql
```

#### Issue: Port 3000 Already in Use

**Solution**: Either stop the process using port 3000 or change the port:

```bash
# Find process using port 3000
# Windows
netstat -ano | findstr :3000

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F

# Or run on a different port
PORT=3001 npm run dev
```

#### Issue: Prisma Client Not Generated

**Solution**: Generate the Prisma client:

```bash
cd rurallite
npx prisma generate
```

#### Issue: Authentication Token Expired

**Solution**: Login again to get a new token. Tokens expire after 24 hours by default.

---

## 📞 Support & Contact

For questions, issues, or suggestions:

- **GitHub Issues**: [Create an issue](https://github.com/your-username/S86-1225-TriVengers-Full-Stack-With-NextjsAnd-AWS-Azure-RuralLite/issues)
- **Email Team Leader**: harikrishna@example.com
- **Documentation**: Check the `/docs` folder for detailed guides

---

## 🙏 Acknowledgments

- **Kalvium** for providing the platform and guidance
- **Open Source Community** for the amazing tools and libraries
- **Rural Schools** that inspired this project
- All contributors and supporters of the RuralLite mission

---

## 🗺️ Roadmap

### Phase 1 - Core Features ✅
- [x] User authentication and authorization
- [x] Lesson management system
- [x] Quiz and assessment functionality
- [x] Offline-first architecture
- [x] File upload with AWS S3

### Phase 2 - Enhanced Features 🚧
- [ ] Video content support
- [ ] Real-time chat between students and teachers
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Multi-language support

### Phase 3 - Scale & Performance 📋
- [ ] Load balancing and horizontal scaling
- [ ] CDN integration for static assets
- [ ] Advanced caching strategies
- [ ] Performance monitoring and optimization
- [ ] Automated testing and deployment

---

<div align="center">

**Built with ❤️ by Team TriVengers**

⭐ Star this repository if you find it helpful!

[Report Bug](https://github.com/your-username/S86-1225-TriVengers-Full-Stack-With-NextjsAnd-AWS-Azure-RuralLite/issues) · [Request Feature](https://github.com/your-username/S86-1225-TriVengers-Full-Stack-With-NextjsAnd-AWS-Azure-RuralLite/issues) · [Documentation](./docs)

</div>
