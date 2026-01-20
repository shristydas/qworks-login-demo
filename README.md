# Axis Bank Internet Banking Application

> **🚀 Want to get started quickly? See [QUICKSTART.md](QUICKSTART.md) for a 5-minute setup guide!**

A complete full-stack banking application with authentication, password recovery, and Excel data visualization.

## 🚀 Features

- ✅ **User Authentication** - JWT-based secure login/signup
- ✅ **Password Recovery** - Email-based password reset flow
- ✅ **Email Notifications** - Automated emails via Gmail SMTP
- ✅ **Excel Upload** - Support for .xlsx, .xls, .csv files
- ✅ **Auto Chart Generation** - Intelligent chart type selection
- ✅ **Data Visualization** - Pie, Bar, and Line charts
- ✅ **Download Charts** - Export graphs as PNG images
- ✅ **Responsive Design** - Works on all devices
- ✅ **Axis Bank Branding** - Professional burgundy theme

## 📁 Project Structure

```
axis-bank-app/
├── backend/
│   ├── server.js           # Express API server
│   ├── package.json        # Backend dependencies
│   └── .env               # Environment variables
│
└── frontend/
    └── AxisBankApp.jsx    # React application
```

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **nodemailer** - Email service
- **cors** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **Recharts** - Data visualization
- **XLSX** - Excel file processing

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js (v14 or higher)
- MongoDB (local or Atlas account)
- Gmail account (for sending emails)

## 🔧 Installation & Setup

### Step 1: Install MongoDB

#### Option A: Local MongoDB
```bash
# macOS
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community

# Ubuntu
sudo apt install mongodb
sudo systemctl start mongodb

# Windows
# Download from: https://www.mongodb.com/try/download/community
```

#### Option B: MongoDB Atlas (Cloud - Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Click "Connect" → "Connect your application"
5. Copy the connection string

### Step 2: Setup Gmail for Sending Emails

1. **Enable 2-Factor Authentication** on your Google account:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification

2. **Create App Password**:
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Other (Custom name)"
   - Name it "Axis Bank App"
   - Copy the 16-character password (without spaces)

### Step 3: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

Edit the `.env` file with your credentials:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/axisbank
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/axisbank

# JWT Secret (Change this!)
JWT_SECRET=your-super-secret-key-change-this-in-production

# Gmail Configuration
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-char-app-password

# Frontend URL
FRONTEND_URL=http://localhost:3000

# Server Port
PORT=5000
```

### Step 4: Start Backend Server

```bash
# Development mode with auto-reload
npm run dev

# OR Production mode
npm start
```

You should see:
```
✅ MongoDB Connected
🚀 Axis Bank API Server running on port 5000
📧 Email service configured
🔐 JWT authentication enabled
```

### Step 5: Frontend Setup

```bash
# Navigate to frontend directory (create React app if needed)
npx create-react-app frontend
cd frontend

# Install dependencies
npm install recharts xlsx

# Copy the AxisBankApp.jsx component
# Replace src/App.js with the content from AxisBankApp.jsx
```

If you want to change the API URL, create `.env` in frontend:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Step 6: Start Frontend

```bash
npm start
```

Frontend will open at `http://localhost:3000`

## 🎮 Usage

### Sign Up
1. Click "Sign Up" on login page
2. Enter email and password (min 6 characters)
3. Automatically logged in
4. Welcome email sent to your inbox

### Login
1. Enter your email and password
2. Click "Login"
3. Redirected to dashboard

### Forgot Password
1. Click "Forgot Password?"
2. Enter your email
3. Check inbox for reset link (expires in 1 hour)
4. Click link and enter new password
5. Confirmation email sent

### Upload Excel & Generate Charts
1. After logging in, you're on the dashboard
2. Click "Choose File"
3. Select Excel file (.xlsx, .xls, .csv)
4. File must have minimum 2 columns
5. Chart automatically generated based on data size:
   - ≤5 rows → Pie Chart
   - 6-10 rows → Bar Chart
   - >10 rows → Line Chart
6. Download chart as PNG
7. View data in table format
8. Clear and upload new file

## 📊 Excel File Format

Your Excel file should have at least 2 columns:

```
Column 1 (Names/Labels) | Column 2 (Values/Numbers)
------------------------|--------------------------
Product A              | 1500
Product B              | 2300
Product C              | 1800
```

Example data files:
- Sales data (Product, Revenue)
- Student scores (Name, Marks)
- Monthly expenses (Month, Amount)
- Any category-value pairs

## 🔐 API Endpoints

### Authentication
```
POST /api/auth/signup
POST /api/auth/login
POST /api/auth/forgot-password
POST /api/auth/reset-password
GET  /api/user/profile (Protected)
```

### Health Check
```
GET /api/health
```

## 🎨 Customization

### Change Axis Bank Branding

Edit CSS variables in the React component:
```css
--axis-burgundy: #97144D;
--axis-dark-burgundy: #6B0E36;
```

### Modify Email Templates

Edit email HTML in `backend/server.js`:
- Welcome email
- Password reset email
- Confirmation email

### Chart Colors

Modify the colors array in Dashboard component:
```javascript
const colors = ['#97144D', '#6B0E36', '#A83464', '#C9528C', '#E07AAD'];
```

## 🔒 Security Best Practices

1. **Change JWT Secret** in production
2. **Use HTTPS** in production
3. **Enable rate limiting** for API endpoints
4. **Validate all inputs** on both client and server
5. **Use environment variables** for sensitive data
6. **Regular security updates** for dependencies
7. **Implement CSRF protection**
8. **Add request logging**

## 📦 Deployment

### Backend Deployment (Render/Heroku)

1. Push code to GitHub
2. Create account on Render.com or Heroku
3. Create new Web Service
4. Connect GitHub repository
5. Set environment variables
6. Deploy!

### Frontend Deployment (Vercel/Netlify)

```bash
# Build for production
npm run build

# Deploy to Vercel
npx vercel

# OR Deploy to Netlify
npx netlify deploy --prod
```

### MongoDB Atlas Setup

Already covered in Step 1. Use the Atlas connection string in production.

## 🐛 Troubleshooting

### Email not sending?
- Check Gmail App Password (16 characters, no spaces)
- Verify 2FA is enabled
- Check spam folder
- Ensure EMAIL_USER and EMAIL_PASS are correct

### MongoDB connection error?
- Check if MongoDB is running: `mongod --version`
- Verify MONGODB_URI in .env
- For Atlas: Check network access whitelist

### CORS errors?
- Ensure backend CORS is configured
- Check FRONTEND_URL matches your React app URL
- Verify API_BASE_URL in React component

### Charts not displaying?
- Verify Excel file has 2+ columns
- Check browser console for errors
- Ensure recharts is installed

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License.

## 📧 Support

For issues or questions:
- Open an issue on GitHub
- Email: support@example.com

## 🎉 Acknowledgments

- Axis Bank for brand inspiration
- React community
- Node.js ecosystem
- MongoDB team
- Recharts library

---

**Made with ❤️ for Axis Bank Internet Banking**
