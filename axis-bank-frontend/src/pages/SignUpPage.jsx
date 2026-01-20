import { useState } from 'react';
import { signup } from '../services/authService';

const SignUpPage = ({ onSignUp, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Validation states
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false
  });

  // Toast notification
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  // Regex patterns
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d@$!%*?&#^()_+\-=[\]{};':"\\|,.<>/?]{8,}$/;

  // Email validation
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

  // Password validation
  const validatePassword = (passwordValue) => {
    if (!passwordValue) {
      setPasswordError('Password is required');
      return false;
    }
    if (passwordValue.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return false;
    }
    if (!passwordRegex.test(passwordValue)) {
      setPasswordError('Password must contain uppercase, lowercase, number and special character');
      return false;
    }
    setPasswordError('');
    return true;
  };

  // Confirm password validation
  const validateConfirmPassword = (confirmValue) => {
    if (!confirmValue) {
      setConfirmPasswordError('Please confirm your password');
      return false;
    }
    if (confirmValue !== password) {
      setConfirmPasswordError('Passwords do not match');
      return false;
    }
    setConfirmPasswordError('');
    return true;
  };

  // Handle input changes
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (touched.email) {
      validateEmail(value);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (touched.password) {
      validatePassword(value);
    }
    // Revalidate confirm password if it's already filled
    if (confirmPassword && touched.confirmPassword) {
      if (value === confirmPassword) {
        setConfirmPasswordError('');
      } else {
        setConfirmPasswordError('Passwords do not match');
      }
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (touched.confirmPassword) {
      validateConfirmPassword(value);
    }
  };

  // Handle blur events
  const handleEmailBlur = () => {
    setTouched({ ...touched, email: true });
    validateEmail(email);
  };

  const handlePasswordBlur = () => {
    setTouched({ ...touched, password: true });
    validatePassword(password);
  };

  const handleConfirmPasswordBlur = () => {
    setTouched({ ...touched, confirmPassword: true });
    validateConfirmPassword(confirmPassword);
  };

  // Show toast notification
  const showToast = (message, type = 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Mark all fields as touched
    setTouched({ email: true, password: true, confirmPassword: true });

    // Validate all fields
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(confirmPassword);

    if (!isEmailValid || !isPasswordValid || !isConfirmPasswordValid) {
      setLoading(false);
      return;
    }

    try {
      const data = await signup(email, password);

      if (data.success) {
        onSignUp(data.user, data.token);
      } else {
        // Check if user already exists
        if (data.message && data.message.toLowerCase().includes('already')) {
          showToast('User with this email already exists. Please sign in instead.', 'info');
        } else {
          setError(data.message || 'Sign up failed');
        }
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Get password strength
  const getPasswordStrength = () => {
    if (!password) return { label: '', color: '', width: '0%' };

    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[@$!%*?&#^()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) strength++;

    if (strength <= 2) return { label: 'Weak', color: '#dc3545', width: '33%' };
    if (strength <= 4) return { label: 'Medium', color: '#ffc107', width: '66%' };
    return { label: 'Strong', color: '#28a745', width: '100%' };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <>
      {/* Toast Notification */}
      {toast.show && (
        <div className={`toast toast-${toast.type}`}>
          <div className="toast-content">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {toast.type === 'info' ? (
                <>
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </>
              ) : (
                <>
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="15" y1="9" x2="9" y2="15"/>
                  <line x1="9" y1="9" x2="15" y2="15"/>
                </>
              )}
            </svg>
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      <div className="signup-page">
        <div className="signup-container">
          <div className="signup-card">
            <div className="signup-header">
              <h2>Create Account</h2>
              <p>Join Axis Bank Internet Banking</p>
            </div>

            <form onSubmit={handleSubmit} className="signup-form">
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  placeholder="Enter your email address"
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

              {/* Password Field */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  onBlur={handlePasswordBlur}
                  placeholder="Create a strong password"
                  className={passwordError ? 'input-error' : ''}
                  required
                />

                {/* Password Strength Meter */}
                {password && (
                  <div className="password-strength">
                    <div className="strength-bar">
                      <div
                        className="strength-fill"
                        style={{ width: passwordStrength.width, backgroundColor: passwordStrength.color }}
                      ></div>
                    </div>
                    <span className="strength-label" style={{ color: passwordStrength.color }}>
                      {passwordStrength.label}
                    </span>
                  </div>
                )}

                {/* Password Requirements */}
                <div className="password-requirements">
                  <p className="requirements-title">Password must contain:</p>
                  <div className="requirement-item">
                    <span className={password.length >= 8 ? 'check-valid' : 'check-invalid'}>
                      {password.length >= 8 ? '✓' : '○'}
                    </span>
                    At least 8 characters
                  </div>
                  <div className="requirement-item">
                    <span className={/[A-Z]/.test(password) ? 'check-valid' : 'check-invalid'}>
                      {/[A-Z]/.test(password) ? '✓' : '○'}
                    </span>
                    One uppercase letter
                  </div>
                  <div className="requirement-item">
                    <span className={/[a-z]/.test(password) ? 'check-valid' : 'check-invalid'}>
                      {/[a-z]/.test(password) ? '✓' : '○'}
                    </span>
                    One lowercase letter
                  </div>
                  <div className="requirement-item">
                    <span className={/\d/.test(password) ? 'check-valid' : 'check-invalid'}>
                      {/\d/.test(password) ? '✓' : '○'}
                    </span>
                    One number
                  </div>
                  <div className="requirement-item">
                    <span className={/[@$!%*?&#^()_+\-=[\]{};':"\\|,.<>/?]/.test(password) ? 'check-valid' : 'check-invalid'}>
                      {/[@$!%*?&#^()_+\-=[\]{};':"\\|,.<>/?]/.test(password) ? '✓' : '○'}
                    </span>
                    One special character (@$!%*?&#, etc.)
                  </div>
                </div>

                {passwordError && (
                  <div className="validation-error">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    {passwordError}
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  onBlur={handleConfirmPasswordBlur}
                  placeholder="Re-enter your password"
                  className={confirmPasswordError ? 'input-error' : ''}
                  required
                />
                {confirmPasswordError && (
                  <div className="validation-error">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    {confirmPasswordError}
                  </div>
                )}
                {confirmPassword && !confirmPasswordError && (
                  <div className="validation-success">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Passwords match
                  </div>
                )}
              </div>

              {error && <div className="error-message">{error}</div>}

              <button type="submit" className="signup-btn" disabled={loading}>
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>

              <button type="button" className="back-link" onClick={() => onNavigate('login')}>
                Already have an account? Login
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .signup-page {
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: #f5f5f5;
        }
        .signup-container {
          max-width: 550px;
          width: 100%;
        }
        .signup-card {
          background: white;
          border-radius: 20px;
          padding: 3rem;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }
        .signup-header {
          margin-bottom: 2rem;
          border-left: 4px solid #97144D;
          padding-left: 1rem;
        }
        .signup-header h2 {
          color: #97144D;
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        .signup-header p {
          color: #666;
          font-size: 1rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #333;
          font-weight: 600;
          font-size: 0.95rem;
        }
        .form-group input {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.3s;
        }
        .form-group input:focus {
          border-color: #97144D;
          box-shadow: 0 0 0 3px rgba(151, 20, 77, 0.1);
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
          margin-top: 0.5rem;
          padding: 0.5rem;
          background: #fff5f5;
          border-left: 3px solid #dc3545;
          border-radius: 4px;
          animation: slideDown 0.3s ease-out;
        }
        .validation-success {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #28a745;
          font-size: 0.85rem;
          margin-top: 0.5rem;
          padding: 0.5rem;
          background: #f0f9f4;
          border-left: 3px solid #28a745;
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
        .password-strength {
          margin-top: 0.75rem;
        }
        .strength-bar {
          height: 6px;
          background: #e0e0e0;
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }
        .strength-fill {
          height: 100%;
          transition: all 0.3s ease;
          border-radius: 3px;
        }
        .strength-label {
          font-size: 0.85rem;
          font-weight: 600;
        }
        .password-requirements {
          margin-top: 1rem;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
        }
        .requirements-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 0.5rem;
        }
        .requirement-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: #666;
          margin-bottom: 0.3rem;
        }
        .check-valid {
          color: #28a745;
          font-weight: 700;
          font-size: 1rem;
        }
        .check-invalid {
          color: #999;
          font-size: 1rem;
        }
        .error-message {
          background: #ffebee;
          color: #c62828;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          margin-bottom: 1rem;
        }
        .signup-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #97144D 0%, #6B0E36 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        .signup-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(151, 20, 77, 0.3);
        }
        .signup-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .back-link {
          width: 100%;
          background: none;
          border: none;
          color: #97144D;
          padding: 1rem;
          cursor: pointer;
          font-weight: 500;
        }
        .back-link:hover {
          text-decoration: underline;
        }

        /* Toast Notification */
        .toast {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          min-width: 320px;
          max-width: 500px;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          z-index: 10000;
          animation: slideInTop 0.3s ease-out;
        }
        @keyframes slideInTop {
          from {
            transform: translateX(-50%) translateY(-100px);
            opacity: 0;
          }
          to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
        }
        .toast-info {
          background: #0288d1;
          color: white;
        }
        .toast-error {
          background: #dc3545;
          color: white;
        }
        .toast-content {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .toast-content svg {
          flex-shrink: 0;
        }
        .toast-content span {
          font-size: 0.95rem;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .signup-page {
            padding: 1rem;
          }
          .signup-card {
            padding: 2rem 1.5rem;
          }
          .toast {
            min-width: auto;
            max-width: calc(100% - 20px);
            width: 90%;
          }
        }
      `}</style>
    </>
  );
};

export default SignUpPage;
