# 🚀 Quick Start Guide - Axis Bank App

Get up and running in 5 minutes!

## Prerequisites Check

```bash
# Check Node.js (should be v14+)
node --version

# Check npm
npm --version

# Check if MongoDB is installed
mongod --version
```

## ⚡ Super Quick Setup (5 Steps)

### 1️⃣ Setup MongoDB (Choose One)

**Option A: Local** (Fastest for development)
```bash
# macOS
brew install mongodb-community && brew services start mongodb-community

# Ubuntu
sudo apt install mongodb && sudo systemctl start mongodb

# Windows - Download installer from mongodb.com
```

**Option B: Cloud** (No installation needed)
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up (free)
3. Create cluster → Get connection string
4. Save it for step 3

### 2️⃣ Setup Gmail App Password

1. Go to: https://myaccount.google.com/apppasswords
2. Create new app password (name it "AxisBank")
3. Copy the 16-character code (format: xxxx xxxx xxxx xxxx)
4. Save it for step 3

### 3️⃣ Backend Setup

```bash
# Clone/download the code
cd backend

# Install packages
npm install

# Create .env file
cat > .env << EOF
MONGODB_URI=mongodb://localhost:27017/axisbank
JWT_SECRET=axis-super-secret-key-2024
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password-here
FRONTEND_URL=http://localhost:3000
PORT=5000
EOF

# Edit .env with your actual Gmail and password
nano .env  # or use any text editor

# Start server
npm run dev
```

✅ You should see: `MongoDB Connected` and `Server running on port 5000`

### 4️⃣ Frontend Setup

Open a NEW terminal:

```bash
# Create React app (if not exists)
npx create-react-app axis-bank-frontend
cd axis-bank-frontend

# Install dependencies
npm install recharts xlsx

# Copy the React component
# Replace src/App.js with content from AxisBankApp.jsx
# OR manually copy-paste the code

# Start frontend
npm start
```

✅ Browser opens at http://localhost:3000

### 5️⃣ Test It!

1. Click **"Sign Up"**
2. Enter:
   - Email: `test@gmail.com`
   - Password: `test123`
3. **Check your email** - welcome message should arrive!
4. Try **"Forgot Password"** flow
5. Upload an Excel file on dashboard

## 📊 Sample Excel File

Create a file `test-data.xlsx` with:

```
Product    | Sales
-----------|-------
Laptop     | 50000
Phone      | 30000
Tablet     | 20000
Watch      | 15000
Headphones | 8000
```

Or download: [sample-data.xlsx](link-to-sample)

## 🎯 Quick Test Checklist

- [ ] Backend server running (port 5000)
- [ ] Frontend running (port 3000)
- [ ] MongoDB connected
- [ ] Sign up works
- [ ] Welcome email received
- [ ] Login works
- [ ] Forgot password email received
- [ ] Excel upload works
- [ ] Chart displays
- [ ] Chart download works

## 🐛 Common Issues & Fixes

### "Cannot connect to MongoDB"
```bash
# Check if MongoDB is running
ps aux | grep mongo

# Start MongoDB
brew services start mongodb-community  # macOS
sudo systemctl start mongodb           # Linux
```

### "Email not sending"
- Double-check: https://myaccount.google.com/apppasswords
- Make sure 2FA is enabled on Gmail
- No spaces in the 16-character password
- Check spam folder

### "CORS Error"
- Backend must be running on port 5000
- Frontend must be on port 3000
- Check both servers are running

### "Module not found"
```bash
# Backend
cd backend && npm install

# Frontend  
cd frontend && npm install recharts xlsx
```

## 🎓 Next Steps

1. Read full [README.md](README.md) for detailed info
2. Customize branding/colors
3. Add more features
4. Deploy to production

## 📞 Need Help?

- Check the full README.md
- Open an issue on GitHub
- Email: support@example.com

---

**Time to complete: ~5 minutes** ⏱️

Happy coding! 🎉
