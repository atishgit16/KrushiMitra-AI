import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated, user, onLogout, language, setLanguage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const userMenuRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setUserMenuOpen(false);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeAllMenus}>
          <span className="brand-icon">🌾</span>
          <span className="brand-text">KrushiMitra</span>
        </Link>

        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div 
          className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`} 
          ref={mobileMenuRef}
        >
          {isAuthenticated ? (
            <>
              <Link 
                to="/dashboard" 
                className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}
                onClick={closeAllMenus}
              >
                <span>📊</span> Dashboard
              </Link>
              <Link 
                to="/crop-recommendation" 
                className={`nav-link ${isActive('/crop-recommendation') ? 'active' : ''}`}
                onClick={closeAllMenus}
              >
                <span>🌱</span> Crop Advice
              </Link>
              <Link 
                to="/market-prices" 
                className={`nav-link ${isActive('/market-prices') ? 'active' : ''}`}
                onClick={closeAllMenus}
              >
                <span>📈</span> Market Prices
              </Link>
              <Link 
                to="/weather" 
                className={`nav-link ${isActive('/weather') ? 'active' : ''}`}
                onClick={closeAllMenus}
              >
                <span>🌤️</span> Weather
              </Link>
              <Link 
                to="/chatbot" 
                className={`nav-link ${isActive('/chatbot') ? 'active' : ''}`}
                onClick={closeAllMenus}
              >
                <span>🤖</span> AI Assistant
              </Link>
              
              <div className="navbar-right">
                <select 
                  className="language-selector"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  aria-label="Select language"
                >
                  <option value="en">🇺🇸 English</option>
                  <option value="hi">🇮🇳 हिंदी</option>
                  <option value="mr">🇮🇳 मराठी</option>
                  <option value="pa">🇮🇳 ਪੰਜਾਬੀ</option>
                  <option value="ta">🇮🇳 தமிழ்</option>
                  <option value="te">🇮🇳 తెలుగు</option>
                </select>

                <div className="user-menu" ref={userMenuRef}>
                  <button 
                    className="user-button" 
                    onClick={toggleUserMenu}
                    aria-label="User menu"
                  >
                    <span className="user-avatar">{user?.name?.charAt(0) || 'U'}</span>
                    <span className="user-name">{user?.name || 'User'}</span>
                  </button>
                  <div className={`user-dropdown ${userMenuOpen ? 'active' : ''}`}>
                    <Link to="/profile" onClick={closeAllMenus}>
                      <span>👤</span> Profile
                    </Link>
                    <Link to="/feedback-history" onClick={closeAllMenus}>
                      <span>📝</span> Feedback History
                    </Link>
                    <button onClick={() => { onLogout(); closeAllMenus(); }}>
                      <span>🚪</span> Logout
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Removed Home button - only logo remains for home navigation */}
              <div className="navbar-right">
            
                <Link to="/register" className="btn btn-primary btn-sm" onClick={closeAllMenus}>
                  Get Started
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;