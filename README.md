# Axis Bank Internet Banking - Frontend

> **🚀 Quick Setup? See [QUICKSTART.md](../QUICKSTART.md) | Full Docs: [Main README](../README.md)**

A modern, responsive React-based frontend for the Axis Bank Internet Banking application featuring authentication, data visualization, and Excel file processing.

## 🚀 Features

- **User Authentication** - Secure login and signup with JWT tokens
- **Password Recovery** - Email-based password reset functionality
- **Excel Data Upload** - Support for .xlsx, .xls, and .csv files
- **Smart Chart Generation** - Automatic chart type selection based on data size
- **Data Visualization** - Interactive Pie, Bar, and Line charts
- **Chart Export** - Download visualizations as PNG images
- **Responsive Design** - Mobile-friendly interface
- **Axis Bank Branding** - Professional burgundy theme matching Axis Bank identity

## 🛠️ Tech Stack

- **React 19.2.3** - UI framework
- **Recharts 3.6.0** - Data visualization library
- **XLSX 0.18.5** - Excel file processing
- **html2canvas 1.4.1** - Chart export functionality
- **React Testing Library** - Testing utilities
- **Create React App** - Build tooling

## 📁 Project Structure

```
axis-bank-frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx          # Navigation header
│   │   │   └── Footer.jsx          # Footer component
│   │   └── charts/
│   │       ├── PieChartComponent.jsx
│   │       ├── BarChartComponent.jsx
│   │       └── LineChartComponent.jsx
│   ├── pages/
│   │   ├── LoginPage.jsx           # User login
│   │   ├── SignUpPage.jsx          # User registration
│   │   ├── ForgotPasswordPage.jsx  # Password reset request
│   │   └── DashboardPage.jsx       # Main dashboard
│   ├── services/
│   │   └── authService.js          # API communication
│   ├── utils/
│   │   └── storage.js              # LocalStorage helpers
│   ├── App.js                      # Main app component
│   ├── App.test.js                 # App tests
│   ├── index.js                    # Entry point
│   ├── index.css                   # Global styles
│   └── setupTests.js               # Test configuration
├── package.json
└── README.md
```

## 📋 Prerequisites

- **Node.js** v14 or higher
- **npm** or **yarn**
- **Backend API** running on port 5000 (see parent README.md)

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd axis-bank-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure API URL (Optional)

Create a `.env` file in the frontend directory if you need to change the API URL:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

Default API URL is `http://localhost:5000/api` if not specified.

### 4. Start Development Server

```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 🎮 Available Scripts

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

Current bundle size: **338.41 kB** (gzipped)

## 📱 Application Pages

### Login Page
- Email and password authentication
- "Forgot Password?" link
- "Sign Up" navigation
- Form validation
- Error handling

### Sign Up Page
- New user registration
- Email validation
- Password strength requirements (min 6 characters)
- Automatic login after signup
- Welcome email sent

### Forgot Password Page
- Email-based password reset
- Reset link sent via email
- Link expires in 1 hour
- Confirmation email after successful reset

### Dashboard Page
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
- Axis Bank burgundy color scheme
- Interactive tooltips
- Responsive design
- PNG export capability

## 🎨 Customization

### Brand Colors

Edit the color variables in your components:

```javascript
--axis-burgundy: #97144D
--axis-dark-burgundy: #6B0E36
--axis-light: #A83464
```

### Chart Colors

Modify the colors array in chart components:

```javascript
const colors = ['#97144D', '#6B0E36', '#A83464', '#C9528C', '#E07AAD'];
```

## 🧪 Testing

Run tests:

```bash
npm test
```

Test coverage includes:
- App component smoke test
- Component rendering validation
- Jest and React Testing Library setup

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
npx vercel
```

### Deploy to Netlify

```bash
npx netlify deploy --prod
```

### Environment Variables for Production

Set these in your deployment platform:

```
REACT_APP_API_URL=https://your-backend-api.com/api
```

## 🔐 Security Features

- JWT token-based authentication
- Secure token storage in localStorage
- Automatic token validation
- Protected routes
- HTTPS required in production
- Input validation
- XSS protection via React

## 📦 Dependencies

### Main Dependencies

- `react` - UI library
- `react-dom` - DOM rendering
- `recharts` - Chart library
- `xlsx` - Excel file processing
- `html2canvas` - Screenshot/export functionality

### Dev Dependencies

- `react-scripts` - Build tooling
- `@testing-library/react` - Testing utilities
- `@testing-library/jest-dom` - Jest matchers
- `@testing-library/user-event` - User interaction testing

## 🐛 Troubleshooting

### API Connection Issues

- Verify backend is running on port 5000
- Check CORS is enabled on backend
- Ensure `REACT_APP_API_URL` is correct

### Chart Not Displaying

- Verify Excel file has at least 2 columns
- Check browser console for errors
- Ensure data is in correct format (labels, values)

### File Upload Errors

- Supported formats: .xlsx, .xls, .csv
- Minimum 2 columns required
- Maximum file size: 5MB

### Build Warnings

The application may show ESLint warnings for:
- React Hook dependencies
- Anchor tags with `href="#"`

These are non-critical and don't affect functionality.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🔗 Related Documentation

- [Main Project README](../README.md) - Full project documentation
- [Backend Setup](../README.md#backend-setup) - API server configuration
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [Recharts Documentation](https://recharts.org/)
- [React Documentation](https://react.dev/)

## 📧 Support

For issues or questions:
- Check the [Troubleshooting](#-troubleshooting) section
- Open an issue on GitHub
- Review the main project README

---

**Built with React for Axis Bank Internet Banking**
