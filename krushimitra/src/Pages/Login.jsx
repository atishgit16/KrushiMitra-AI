import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import './Auth.css';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Manual Validation
    if (!formData.phone || !formData.password) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      // API call to backend
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Successfully logged in!', {
          style: {
            background: '#333',
            color: '#fff',
          },
          iconTheme: {
            primary: '#4CAF50',
            secondary: '#FFFAEE',
          },
        });
        onLogin(data.user, data.token);
      } else {
        toast.error(data.message || 'Login failed. Please try again.', {
          style: {
            background: '#333',
            color: '#fff',
          }
        });
      }
    } catch (err) {
      toast.error('Unable to connect to server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container centered">
        <div className="auth-card">
          <div className="auth-header">
            <h1 className="auth-title">Welcome Back</h1>
            <p className="auth-subtitle">Login to access your farming dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form" noValidate>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Enter your 10-digit mobile number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-actions">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="link-primary">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="auth-footer">
            <p>Don't have an account? <Link to="/register" className="link-primary">Register here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;