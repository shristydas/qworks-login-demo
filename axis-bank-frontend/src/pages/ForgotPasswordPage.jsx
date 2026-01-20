import React, { useState } from 'react';
import { forgotPassword } from '../services/authService';

const ForgotPasswordPage = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email) {
      setError('Please enter your email address');
      setLoading(false);
      return;
    }

    try {
      const data = await forgotPassword(email);

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Failed to send password');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <>
        <div className="forgot-page">
          <div className="forgot-container">
            <div className="success-card">
              <div className="success-icon">✓</div>
              <h2>Check Your Email</h2>
              <p>We've sent your password to:</p>
              <div className="email-display">{email}</div>
              <p className="instruction">Please check your inbox for your password.</p>
              <button className="back-btn" onClick={() => onNavigate('login')}>Back to Login</button>
            </div>
          </div>
        </div>

        <style jsx>{`
          .forgot-page { min-height: calc(100vh - 80px); display: flex; align-items: center; justify-content: center; padding: 2rem; }
          .forgot-container { max-width: 500px; width: 100%; }
          .success-card { background: white; border-radius: 20px; padding: 3rem; box-shadow: 0 20px 60px rgba(0,0,0,0.15); text-align: center; }
          .success-icon { width: 80px; height: 80px; background: #2E7D32; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem; margin: 0 auto 1.5rem; }
          .success-card h2 { color: #2E7D32; font-size: 2rem; margin-bottom: 1rem; }
          .success-card p { color: #666; margin-bottom: 1rem; line-height: 1.6; }
          .email-display { background: #f8f9fa; padding: 1rem; border-radius: 8px; color: #97144D; font-weight: 600; margin: 1rem 0; word-break: break-all; }
          .instruction { font-size: 0.95rem; margin-top: 1rem; }
          .back-btn { margin-top: 2rem; padding: 1rem 2rem; background: linear-gradient(135deg, #97144D 0%, #6B0E36 100%); color: white; border: none; border-radius: 12px; font-size: 1rem; font-weight: 600; cursor: pointer; }
        `}</style>
      </>
    );
  }

  return (
    <>
      <div className="forgot-page">
        <div className="forgot-container">
          <div className="forgot-card">
            <div className="forgot-header">
              <h2>Forgot Password?</h2>
              <p>Enter your email address and we'll send you your password.</p>
            </div>

            <form onSubmit={handleSubmit} className="forgot-form">
              <div className="form-group">
                <label htmlFor="reset-email">Email Address</label>
                <input
                  id="reset-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your registered email"
                  required
                />
              </div>

              {error && <div className="error-message">{error}</div>}

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Sending...' : 'Send Password'}
              </button>

              <button type="button" className="back-link" onClick={() => onNavigate('login')}>
                Back to Login
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .forgot-page { min-height: calc(100vh - 80px); display: flex; align-items: center; justify-content: center; padding: 2rem; }
        .forgot-container { max-width: 500px; width: 100%; }
        .forgot-card { background: white; border-radius: 20px; padding: 3rem; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
        .forgot-header { text-align: center; margin-bottom: 2rem; }
        .forgot-header h2 { color: #97144D; font-size: 2rem; margin-bottom: 0.5rem; }
        .forgot-header p { color: #666; line-height: 1.6; }
        .form-group { margin-bottom: 1.5rem; }
        .form-group label { display: block; margin-bottom: 0.5rem; color: #333; font-weight: 600; font-size: 0.95rem; }
        .form-group input { width: 100%; padding: 1rem; border: 2px solid #e0e0e0; border-radius: 12px; font-size: 1rem; outline: none; }
        .form-group input:focus { border-color: #97144D; box-shadow: 0 0 0 3px rgba(151, 20, 77, 0.1); }
        .error-message { background: #ffebee; color: #c62828; padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 1rem; }
        .submit-btn { width: 100%; padding: 1rem; background: linear-gradient(135deg, #97144D 0%, #6B0E36 100%); color: white; border: none; border-radius: 12px; font-size: 1.1rem; font-weight: 600; cursor: pointer; }
        .back-link { width: 100%; background: none; border: none; color: #97144D; padding: 1rem; cursor: pointer; }
      `}</style>
    </>
  );
};

export default ForgotPasswordPage;
