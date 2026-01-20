import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Get in Touch</h3>
            <div className="contact-item">
              <span className="icon">📞</span>
              <div>
                <p><strong>Customer Care:</strong> 1860 500 5555</p>
                <p><strong>International:</strong> +91 22 6752 5555</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">✉️</span>
              <p><strong>Email:</strong> customer.care@axisbank.com</p>
            </div>
          </div>

          <div className="footer-section">
            <h3>Our Offerings</h3>
            <ul className="footer-links">
              <li><a href="#">Savings Account</a></li>
              <li><a href="#">Credit Cards</a></li>
              <li><a href="#">Personal Loans</a></li>
              <li><a href="#">Home Loans</a></li>
              <li><a href="#">Fixed Deposits</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Net Banking</a></li>
              <li><a href="#">Mobile Banking</a></li>
              <li><a href="#">Loans</a></li>
              <li><a href="#">Insurance</a></li>
              <li><a href="#">Investment</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Security Tips</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© 2026 Axis Bank Ltd. All rights reserved.</p>
            <div className="social-links">
              <a href="#">f</a>
              <a href="#">𝕏</a>
              <a href="#">in</a>
              <a href="#">📷</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          background: #2c2c2c;
          color: white;
          padding: 3rem 0 0;
          margin-top: 4rem;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem 3rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
        }
        .footer-section h3 {
          color: #97144D;
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }
        .contact-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          align-items: start;
        }
        .icon {
          font-size: 1.5rem;
        }
        .contact-item p {
          margin: 0.25rem 0;
          font-size: 0.9rem;
          color: #ccc;
        }
        .footer-links {
          list-style: none;
          padding: 0;
        }
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        .footer-links a {
          color: #ccc;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: #97144D;
        }
        .footer-bottom {
          background: #1a1a1a;
          padding: 1.5rem 0;
        }
        .footer-bottom-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-bottom-content p {
          font-size: 0.85rem;
          color: #999;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-links a {
          width: 35px;
          height: 35px;
          background: #3a3a3a;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          text-decoration: none;
          transition: all 0.3s;
          font-weight: bold;
        }
        .social-links a:hover {
          background: #97144D;
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
};

export default Footer;
