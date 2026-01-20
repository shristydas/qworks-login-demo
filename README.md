# Axis Bank Internet Banking - Full Stack Application

A modern, full-stack internet banking application featuring secure authentication, data visualization, and Excel file processing capabilities.

## 🚀 Features

### Backend Features
- **User Authentication** - JWT-based authentication system
- **Password Management** - Secure password hashing with bcrypt
- **Password Recovery** - Email-based password reset with expiring tokens
- **Email Notifications** - Welcome emails and password reset emails
- **RESTful API** - Clean API architecture with Express.js
- **MongoDB Integration** - Mongoose ODM for data management
- **Security** - CORS enabled, environment-based configuration

### Frontend Features
- **User Authentication** - Secure login and signup interface
- **Password Recovery** - Email-based password reset functionality
- **Excel Data Upload** - Support for .xlsx, .xls, and .csv files
- **Smart Chart Generation** - Automatic chart type selection based on data size
- **Data Visualization** - Interactive Pie, Bar, and Line charts
- **Chart Export** - Download visualizations as PNG images
- **Responsive Design** - Mobile-friendly interface
- **Axis Bank Branding** - Professional burgundy theme matching Axis Bank identity

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js 4.18.2** - Web framework
- **MongoDB** - Database
- **Mongoose 7.5.0** - ODM for MongoDB
- **JWT** - Authentication tokens
- **Bcrypt.js** - Password hashing
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 19.2.3** - UI framework
- **Recharts 3.6.0** - Data visualization library
- **XLSX 0.18.5** - Excel file processing
- **html2canvas 1.4.1** - Chart export functionality
- **React Testing Library** - Testing utilities
- **Create React App** - Build tooling

## 📁 Project Structure

```
axis-bank-internet-banking/
├── config/
│   ├── database.js              # MongoDB connection
│   └── email.js                 # Email configuration
├── controllers/
│   ├── authController.js        # Authentication logic
│   └── userController.js        # User management
├── middleware/
│   └── authMiddleware.js        # JWT verification
├── models/
│   └── User.js                  # User schema
├── routes/
│   ├── authRoutes.js            # Authentication endpoints
│   └── userRoutes.js            # User endpoints
├── utils/
│   └── emailTemplates.js        # Email HTML templates
├── axis-bank-frontend/          # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Footer.jsx
│   │   │   └── charts/
│   │   │       ├── PieChartComponent.jsx
│   │   │       ├── BarChartComponent.jsx
│   │   │       └── LineChartComponent.jsx
│   │   ├── pages/
│   │   │   ├── LoginPage.jsx
│   │   │   ├── SignUpPage.jsx
│   │   │   ├── ForgotPasswordPage.jsx
│   │   │   └── DashboardPage.jsx
│   │   ├── services/
│   │   │   └── authService.js
│   │   ├── utils/
│   │   │   └── storage.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server.js                    # Main server file
├── package.json                 # Backend dependencies
├── .env                         # Environment variables
├── .gitignore
└── README.md
```

## 📋 Prerequisites

- **Node.js** v14 or higher
- **npm** or **yarn**
- **MongoDB** installed and running locally (or MongoDB Atlas account)
- **Gmail account** with App Password (for email functionality)

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/shristydas/qworks-login-demo.git
cd qworks-login-demo
```

### 2. Backend Setup

#### Install Backend Dependencies

```bash
npm install
```

#### Configure Environment Variables

Create a `.env` file in the root directory:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/axisbank

# JWT Secret (Change this in production!)
JWT_SECRET=your-super-secret-jwt-key-change-in-production

# Gmail Configuration for Sending Emails
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Frontend URL (for email links)
FRONTEND_URL=http://localhost:3000

# Server Port
PORT=5000
```

**Important**: For Gmail setup:
1. Enable 2-Factor Authentication on your Google Account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Create a new App Password for "Mail"
4. Use the 16-character password as `EMAIL_PASS`

#### Start MongoDB

Make sure MongoDB is running:

```bash
# macOS (using Homebrew)
brew services start mongodb-community

# Windows
net start MongoDB

# Linux
sudo systemctl start mongod
```

#### Start Backend Server

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

Backend will run on [http://localhost:5000](http://localhost:5000)

### 3. Frontend Setup

#### Navigate to Frontend Directory

```bash
cd axis-bank-frontend
```

#### Install Frontend Dependencies

```bash
npm install
```

#### Configure Frontend Environment (Optional)

Create a `.env` file in the `axis-bank-frontend` directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

#### Start Frontend Development Server

```bash
npm start
```

Frontend will run on [http://localhost:3000](http://localhost:3000)

## 🎮 Available Scripts

### Backend Scripts

```bash
npm start          # Start server in production mode
npm run dev        # Start server with nodemon (auto-reload)
```

### Frontend Scripts

```bash
npm start          # Start development server (port 3000)
npm test           # Run tests
npm run build      # Build for production
```

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/signup` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| POST | `/api/auth/forgot-password` | Request password reset | No |
| POST | `/api/auth/reset-password/:token` | Reset password with token | No |

### User Routes (`/api/user`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/user/profile` | Get user profile | Yes (JWT) |

### Health Check

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/health` | Check API status | No |

### Example API Requests

#### Signup

```bash
POST /api/auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login

```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Profile

```bash
GET /api/user/profile
Authorization: Bearer <your-jwt-token>
```

## 📱 Application Pages

### Login Page (`/login`)
- Email and password authentication
- "Forgot Password?" link
- "Sign Up" navigation
- Form validation
- Error handling

### Sign Up Page (`/signup`)
- New user registration
- Email validation
- Password strength requirements (min 6 characters)
- Automatic login after signup
- Welcome email sent

### Forgot Password Page (`/forgot-password`)
- Email-based password reset
- Reset link sent via email
- Link expires in 1 hour
- Confirmation email after successful reset

### Dashboard Page (`/dashboard`)
- Welcome message with user email
- Excel file upload (.xlsx, .xls, .csv)
- Automatic chart generation
- Data table view
- Chart export as PNG
- Logout functionality

## 📊 Chart Types

The application automatically selects the appropriate chart type based on data size:

- **Pie Chart** - ≤5 rows of data
- **Bar Chart** - 6-10 rows of data
- **Line Chart** - >10 rows of data

All charts feature:
- Axis Bank burgundy color scheme (#97144D)
- Interactive tooltips
- Responsive design
- PNG export capability

## 🔐 Security Features

- **Password Hashing** - Bcrypt with salt rounds
- **JWT Authentication** - Secure token-based auth
- **Token Expiration** - Password reset tokens expire in 1 hour
- **Environment Variables** - Sensitive data in .env files
- **CORS Protection** - Configured for specific origins
- **Input Validation** - Server-side validation
- **XSS Protection** - React's built-in protection
- **MongoDB Injection Prevention** - Mongoose schema validation

## 🚀 Deployment

### Backend Deployment

#### Deploy to Heroku

```bash
# Install Heroku CLI
heroku login
heroku create axis-bank-api

# Set environment variables
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set JWT_SECRET=your-secret
heroku config:set EMAIL_USER=your-email
heroku config:set EMAIL_PASS=your-password
heroku config:set FRONTEND_URL=your-frontend-url

# Deploy
git push heroku main
```

#### Deploy to Railway/Render

1. Connect your GitHub repository
2. Set environment variables in the dashboard
3. Deploy automatically on push

### Frontend Deployment

#### Build for Production

```bash
cd axis-bank-frontend
npm run build
```

#### Deploy to Vercel

```bash
npx vercel --prod
```

#### Deploy to Netlify

```bash
npx netlify deploy --prod --dir=build
```

### Environment Variables for Production

**Backend:**
- `MONGODB_URI` - Production MongoDB connection string
- `JWT_SECRET` - Strong secret key
- `EMAIL_USER` - Production email
- `EMAIL_PASS` - App password
- `FRONTEND_URL` - Production frontend URL
- `PORT` - Server port (usually provided by hosting)

**Frontend:**
- `REACT_APP_API_URL` - Production backend API URL

## 🐛 Troubleshooting

### Backend Issues

#### MongoDB Connection Error
- Ensure MongoDB is running
- Check `MONGODB_URI` in `.env`
- Verify network connectivity
- Check MongoDB credentials

#### Email Not Sending
- Verify Gmail App Password is correct
- Enable 2FA on Google Account
- Check `EMAIL_USER` and `EMAIL_PASS` in `.env`
- Check Gmail security settings

#### JWT Errors
- Ensure `JWT_SECRET` is set in `.env`
- Check token expiration
- Verify Authorization header format: `Bearer <token>`

### Frontend Issues

#### API Connection Issues
- Verify backend is running on port 5000
- Check CORS is enabled on backend
- Ensure `REACT_APP_API_URL` is correct
- Check browser console for errors

#### Chart Not Displaying
- Verify Excel file has at least 2 columns
- Check data format (labels, values)
- Ensure file size is under 5MB

#### File Upload Errors
- Supported formats: .xlsx, .xls, .csv
- Minimum 2 columns required
- Check file permissions

## 🧪 Testing

### Backend Testing

```bash
# Add test scripts to package.json
npm test
```

### Frontend Testing

```bash
cd axis-bank-frontend
npm test
```

## 📦 Dependencies

### Backend Dependencies
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT generation/verification
- `nodemailer` - Email service
- `cors` - CORS middleware
- `dotenv` - Environment variables

### Frontend Dependencies
- `react` - UI library
- `react-dom` - DOM rendering
- `recharts` - Chart library
- `xlsx` - Excel file processing
- `html2canvas` - Screenshot/export


**Built with ❤️ for qWorks**
