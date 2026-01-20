import { useState } from 'react';
import Footer from '../components/layout/Footer';
import { login } from '../services/authService';

const bannerImage = `${process.env.PUBLIC_URL}/image.png`;

const LoginPage = ({ onLogin, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [touched, setTouched] = useState(false);

  // Email regex pattern - validates standard email format
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateEmail = (emailValue) => {
    if (!emailValue) {
      setEmailError('Email is required');
      return false;
    }
    if (!emailRegex.test(emailValue)) {
      setEmailError('Please enter a valid email address (e.g., user@example.com)');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (touched) {
      validateEmail(value);
    }
  };

  const handleEmailBlur = () => {
    setTouched(true);
    validateEmail(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate email before submission
    if (!validateEmail(email)) {
      setLoading(false);
      return;
    }

    if (!email || !password) {
      setError('Please enter both email and password');
      setLoading(false);
      return;
    }

    try {
      const data = await login(email, password);

      if (data.success) {
        onLogin(data.user, data.token);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyboardClick = (char) => {
    setPassword(password + char);
  };

  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <div className="login-form-section">
            <h2 className="login-title">Login using</h2>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">
                  Email ID
                  <span
                    className="info-icon-wrapper"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  >
                    <span className="info-icon">ⓘ</span>
                    {showTooltip && (
                      <div className="tooltip">
                        <div className="tooltip-arrow"></div>
                        <div className="tooltip-content">
                          <strong>Email ID Guidelines:</strong>
                          <ul>
                            <li>Use a valid email format (e.g., user@example.com)</li>
                            <li>Enter your registered email address</li>
                            <li>Email is case-insensitive</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  placeholder="Enter Email"
                  className={emailError ? 'input-error' : ''}
                  required
                />
                {emailError && (
                  <div className="validation-error">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    {emailError}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-wrapper">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {showPassword ? (
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      ) : (
                        <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
                      )}
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="keyboard-btn"
                    onClick={() => setShowKeyboard(!showKeyboard)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"/>
                    </svg>
                  </button>
                </div>

                {showKeyboard && (
                  <div className="virtual-keyboard">
                    <div className="keyboard-row">
                      {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map(num => (
                        <button key={num} type="button" onClick={() => handleKeyboardClick(num)} className="key-btn">{num}</button>
                      ))}
                    </div>
                    <div className="keyboard-row">
                      {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map(letter => (
                        <button key={letter} type="button" onClick={() => handleKeyboardClick(letter)} className="key-btn">{letter}</button>
                      ))}
                    </div>
                    <div className="keyboard-row">
                      {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map(letter => (
                        <button key={letter} type="button" onClick={() => handleKeyboardClick(letter)} className="key-btn">{letter}</button>
                      ))}
                    </div>
                    <div className="keyboard-row">
                      {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map(letter => (
                        <button key={letter} type="button" onClick={() => handleKeyboardClick(letter)} className="key-btn">{letter}</button>
                      ))}
                      <button type="button" onClick={() => setPassword(password.slice(0, -1))} className="key-btn delete-btn">⌫</button>
                    </div>
                    <div className="keyboard-row">
                      {['!', '@', '#', '$', '%', '^', '&', '*'].map(char => (
                        <button key={char} type="button" onClick={() => handleKeyboardClick(char)} className="key-btn">{char}</button>
                      ))}
                    </div>
                  </div>
                )}

                <a href="#" className="link" onClick={(e) => { e.preventDefault(); onNavigate('forgot'); }}>Forgot password</a>
              </div>

              {error && (
                <div className="error-message">{error}</div>
              )}

              <button type="submit" className="login-button" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>

              <div className="register-link">
                First time user? <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('signup'); }}>REGISTER HERE</a>
              </div>
            </form>
          </div>

          <div className="welcome-section">
            <h1 className="welcome-title">Welcome to Axis Bank</h1>
            <h2 className="welcome-subtitle">Internet Banking</h2>

            <div className="welcome-image">
              {!imageError ? (
                <img
                  src={bannerImage}
                  alt="Banking"
                  style={{ width: '100%', maxWidth: '450px', borderRadius: '12px' }}
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="image-placeholder">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#97144D" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <p>Place image.png in public folder</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .login-page {
          background: white;
          min-height: calc(100vh - 80px);
          padding: 3rem 0;
        }
        .login-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: start;
        }
        .login-form-section {
          background: white;
          padding: 2rem;
        }
        .login-title {
          color: #333;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group label {
          color: #333;
          font-size: 0.95rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .info-icon-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
        }
        .info-icon {
          color: #97144D;
          cursor: pointer;
          font-size: 1.1rem;
          transition: transform 0.2s;
        }
        .info-icon:hover {
          transform: scale(1.2);
        }
        .tooltip {
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          margin-left: 10px;
          background: white;
          border: 2px solid #97144D;
          border-radius: 8px;
          padding: 1rem;
          width: 280px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 1000;
          animation: tooltipFadeIn 0.2s ease-out;
        }
        @keyframes tooltipFadeIn {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }
        .tooltip-arrow {
          position: absolute;
          left: -8px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-right: 8px solid #97144D;
        }
        .tooltip-arrow::after {
          content: '';
          position: absolute;
          left: 2px;
          top: -6px;
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-right: 6px solid white;
        }
        .tooltip-content {
          color: #333;
          font-size: 0.85rem;
          line-height: 1.5;
        }
        .tooltip-content strong {
          color: #97144D;
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }
        .tooltip-content ul {
          margin: 0;
          padding-left: 1.2rem;
        }
        .tooltip-content li {
          margin-bottom: 0.3rem;
          color: #555;
        }
        .form-group input, .select-input {
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.3s;
        }
        .form-group input:focus, .select-input:focus {
          border-color: #97144D;
        }
        .form-group input.input-error {
          border-color: #dc3545;
          background: #fff5f5;
        }
        .form-group input.input-error:focus {
          border-color: #dc3545;
          box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
        }
        .validation-error {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #dc3545;
          font-size: 0.85rem;
          margin-top: 0.3rem;
          padding: 0.5rem;
          background: #fff5f5;
          border-left: 3px solid #dc3545;
          border-radius: 4px;
          animation: slideDown 0.3s ease-out;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .validation-error svg {
          flex-shrink: 0;
        }
        .password-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .password-wrapper input {
          flex: 1;
          padding-right: 80px;
        }
        .toggle-password-btn, .keyboard-btn {
          position: absolute;
          right: 10px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          color: #666;
        }
        .keyboard-btn {
          right: 40px;
        }
        .keyboard-btn:hover {
          color: #97144D;
        }
        .virtual-keyboard {
          background: #f5f5f5;
          padding: 1rem;
          border-radius: 8px;
          margin-top: 1rem;
          border: 2px solid #97144D;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        .keyboard-row {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          justify-content: center;
        }
        .key-btn {
          padding: 0.5rem 0.8rem;
          background: white;
          border: 1px solid #ddd;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
          min-width: 40px;
        }
        .key-btn:hover {
          background: #97144D;
          color: white;
          transform: translateY(-1px);
        }
        .delete-btn {
          background: #dc3545;
          color: white;
        }
        .delete-btn:hover {
          background: #c82333;
        }
        .link {
          color: #97144D;
          text-decoration: none;
          font-size: 0.85rem;
        }
        .link:hover {
          text-decoration: underline;
        }
        .error-message {
          background: #ffebee;
          color: #c62828;
          padding: 0.75rem;
          border-radius: 4px;
          font-size: 0.9rem;
        }
        .login-button {
          background: #97144D;
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }
        .login-button:hover:not(:disabled) {
          background: #7d1141;
        }
        .login-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .register-link {
          text-align: center;
          font-size: 0.9rem;
          color: #666;
        }
        .register-link a {
          color: #97144D;
          font-weight: 600;
          text-decoration: none;
        }
        .register-link a:hover {
          text-decoration: underline;
        }
        .welcome-section {
          padding: 2rem;
        }
        .welcome-title {
          color: #666;
          font-size: 1.8rem;
          font-weight: 300;
          margin-bottom: 0.5rem;
        }
        .welcome-subtitle {
          color: #333;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
        }
        .welcome-image {
          margin: 3rem 0;
          text-align: center;
        }
        .image-placeholder {
          width: 100%;
          max-width: 450px;
          height: 400px;
          background: #f5f5f5;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          border: 2px dashed #ddd;
          margin: 0 auto;
        }
        .image-placeholder p {
          color: #999;
          font-size: 0.95rem;
        }
        @media (max-width: 968px) {
          .login-container {
            grid-template-columns: 1fr;
          }
          .welcome-section {
            order: -1;
          }
          .tooltip {
            left: auto;
            right: 0;
            top: 100%;
            transform: translateY(10px);
            margin-left: 0;
            width: 250px;
          }
          .tooltip-arrow {
            left: 10px;
            top: -8px;
            transform: rotate(90deg);
          }
        }
      `}</style>
    </>
  );
};

export default LoginPage;
