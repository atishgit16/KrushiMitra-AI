import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import './Auth.css';

const Register = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    confirmPassword: '',
    location: '',
    soilType: '',
    landSize: '',
    language: 'en'
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
    if (!formData.name || !formData.phone || !formData.password ||
      !formData.confirmPassword || !formData.location || !formData.soilType ||
      !formData.landSize) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Account created successfully!', {
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
        toast.error(data.message || 'Registration failed. Please try again.', {
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
            <h1 className="auth-title">Create Account</h1>
            <p className="auth-subtitle">Join KrishiMitra and transform your farming</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form" noValidate>
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Password *</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange}
                  minLength="6"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Confirm Password *</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Location (Village/City) *</label>
              <input
                type="text"
                name="location"
                className="form-control"
                placeholder="Your farm location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Soil Type *</label>
                <select
                  name="soilType"
                  className="form-select"
                  value={formData.soilType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select soil type</option>
                  <option value="clay">Clay</option>
                  <option value="sandy">Sandy</option>
                  <option value="loamy">Loamy</option>
                  <option value="silt">Silt</option>
                  <option value="peaty">Peaty</option>
                  <option value="chalky">Chalky</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Land Size (Acres) *</label>
                <input
                  type="number"
                  name="landSize"
                  className="form-control"
                  placeholder="Land size in acres"
                  value={formData.landSize}
                  onChange={handleChange}
                  step="0.1"
                  min="0.1"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Preferred Language *</label>
              <select
                name="language"
                className="form-select"
                value={formData.language}
                onChange={handleChange}
                required
              >
                <option value="en">English</option>
                <option value="hi">हिंदी (Hindi)</option>
                <option value="mr">मराठी (Marathi)</option>
                <option value="pa">ਪੰਜਾਬੀ (Punjabi)</option>
              </select>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>I agree to the Terms & Conditions and Privacy Policy</span>
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="auth-footer">
            <p>Already have an account? <Link to="/login" className="link-primary">Login here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;