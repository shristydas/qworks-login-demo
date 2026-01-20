import React from 'react';

const Header = ({ user, onLogout, currentPage }) => {
  return (
    <>
      <header className="header">
        <div className="burgundy-band">
          <div className="band-content">
            <div className="logo-section">
              <img
                src={`${process.env.PUBLIC_URL}/logo.png`}
                alt="Axis Bank Logo"
                className="axis-logo"
              />
            </div>

            {currentPage === 'dashboard' && (
              <>
                <nav className="main-nav">
                  <a href="#" className="nav-link active">Personal</a>
                  <a href="#" className="nav-link">Business</a>
                  <a href="#" className="nav-link">Corporate</a>
                  <a href="#" className="nav-link">Burgundy</a>
                  <a href="#" className="nav-link">Priority</a>
                  <a href="#" className="nav-link">NRI</a>
                  <a href="#" className="nav-link">Agri</a>
                  <a href="#" className="nav-link">Gift City</a>
                </nav>

                <div className="header-actions">
                  <a href="#" className="header-action">About Us</a>
                  <a href="#" className="header-action">📍</a>
                  <a href="#" className="header-action">💬</a>
                  <a href="#" className="header-action">☀️</a>
                  <a href="#" className="header-action">A</a>
                  <a href="#" className="header-action">🔔</a>
                  <button onClick={onLogout} className="login-btn-header">Logout</button>
                </div>
              </>
            )}
          </div>
        </div>

        {currentPage === 'dashboard' && (
          <>
            <div className="search-band">
              <div className="search-content">
                <div className="search-wrapper">
                  <span className="mic-icon">🎤</span>
                  <input type="text" placeholder="What are you looking for today?" className="search-input" />
                  <button className="search-btn">🔍</button>
                </div>
                <div className="quick-actions">
                  <a href="#" className="quick-link">Support</a>
                  <a href="#" className="quick-link">Lodge a Complaint</a>
                  <a href="#" className="quick-link">Open Digital A/C</a>
                  <button className="login-btn-search">Login ▼</button>
                </div>
              </div>
            </div>

            <div className="menu-band">
              <div className="menu-content">
                <a href="#" className="menu-link">Accounts</a>
                <a href="#" className="menu-link">Deposits</a>
                <a href="#" className="menu-link">Cards</a>
                <a href="#" className="menu-link">Forex</a>
                <a href="#" className="menu-link">Loans</a>
                <a href="#" className="menu-link">Investments</a>
                <a href="#" className="menu-link">Insurance</a>
                <a href="#" className="menu-link">Payments</a>
                <a href="#" className="menu-link">Offers & Rewards</a>
                <a href="#" className="menu-link">Learning Hub</a>
                <a href="#" className="menu-link">Bank Smart</a>
              </div>
            </div>
          </>
        )}
      </header>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .burgundy-band {
          background: linear-gradient(135deg, #97144D 0%, #8B1346 100%);
          padding: 0.8rem 0;
        }
        .band-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo-section {
          display: flex;
          align-items: center;
        }
        .axis-logo {
          height: 45px;
          width: auto;
          object-fit: contain;
          cursor: pointer;
        }
        .main-nav {
          display: flex;
          gap: 0.5rem;
        }
        .nav-link {
          color: white;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          transition: background 0.2s;
        }
        .nav-link.active {
          background: rgba(255, 255, 255, 0.2);
        }
        .nav-link:hover {
          background: rgba(255, 255, 255, 0.15);
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .header-action {
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          cursor: pointer;
        }
        .login-btn-header {
          background: white;
          color: #97144D;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 4px;
          font-weight: 600;
          cursor: pointer;
        }
        .search-band {
          background: white;
          border-bottom: 1px solid #e0e0e0;
          padding: 1rem 0;
        }
        .search-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .search-wrapper {
          display: flex;
          align-items: center;
          background: #f5f5f5;
          border-radius: 25px;
          padding: 0.5rem 1rem;
          flex: 1;
          max-width: 500px;
        }
        .search-input {
          border: none;
          background: none;
          outline: none;
          flex: 1;
          font-size: 0.95rem;
        }
        .search-btn {
          background: none;
          border: none;
          cursor: pointer;
        }
        .quick-actions {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .quick-link {
          text-decoration: none;
          font-size: 0.9rem;
          color: #97144D;
          font-weight: 500;
        }
        .login-btn-search {
          background: #97144D;
          color: white;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 4px;
          font-weight: 600;
          cursor: pointer;
        }
        .menu-band {
          background: white;
          border-bottom: 1px solid #e0e0e0;
          padding: 0.8rem 0;
        }
        .menu-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          gap: 2rem;
        }
        .menu-link {
          color: #333;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .menu-link:hover {
          color: #97144D;
        }
        @media (max-width: 968px) {
          .main-nav, .header-actions { display: none; }
        }
      `}</style>
    </>
  );
};

export default Header;
