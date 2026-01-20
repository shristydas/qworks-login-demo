import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage';
import { getProfile } from './services/authService';
import { getToken, setToken as saveToken, removeToken, setUser as saveUser, removeUser } from './utils/storage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(getToken());
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
    if (token) {
      fetchUserProfile();
    }
  }, [currentPage]);

  const fetchUserProfile = async () => {
    try {
      const data = await getProfile(token);
      if (data.success) {
        setUser(data.user);
        setCurrentPage('dashboard');
      } else {
        removeToken();
        setToken(null);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleLogin = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    saveToken(authToken);
    saveUser(userData);
    setCurrentPage('dashboard');
  };

  const handleSignUp = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    saveToken(authToken);
    saveUser(userData);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    removeToken();
    removeUser();
    setCurrentPage('login');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onLogin={handleLogin} onNavigate={setCurrentPage} />;
      case 'signup':
        return <SignUpPage onSignUp={handleSignUp} onNavigate={setCurrentPage} />;
      case 'forgot':
        return <ForgotPasswordPage onNavigate={setCurrentPage} />;
      case 'dashboard':
        return <DashboardPage user={user} />;
      default:
        return <LoginPage onLogin={handleLogin} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Header user={user} onLogout={handleLogout} currentPage={currentPage} />
      <div className={`page-container ${fadeIn ? 'fade-in' : ''}`}>
        {renderPage()}
      </div>
      <style jsx>{`
        .app {
          min-height: 100vh;
          background: #f5f5f5;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .page-container {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .page-container.fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default App;
