import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ user }) => {
  const [dashboardData, setDashboardData] = useState({
    weatherToday: { temp: 28, condition: 'Sunny', humidity: 65 },
    recommendedCrops: ['Wheat', 'Rice', 'Cotton'],
    recentActivity: [],
    upcomingTasks: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8000/api/dashboard', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (response.ok) {
        setDashboardData(data);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <div>
            <h1 className="dashboard-title">Welcome back, {user?.name}! 👋</h1>
            <p className="dashboard-subtitle">Here's what's happening with your farm today</p>
          </div>
          <div className="dashboard-location">
            <span className="location-icon">📍</span>
            <span>{user?.location || 'Location not set'}</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🌾</div>
            <div className="stat-content">
              <div className="stat-number">3</div>
              <div className="stat-label">Active Crops</div>
            </div>
          </div>

          <div className="stat-card" style={{background: 'linear-gradient(135deg, #3498db, #2980b9)'}}>
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <div className="stat-number">₹45K</div>
              <div className="stat-label">Est. Revenue</div>
            </div>
          </div>

          <div className="stat-card" style={{background: 'linear-gradient(135deg, #f39c12, #e67e22)'}}>
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <div className="stat-number">12</div>
              <div className="stat-label">Recommendations</div>
            </div>
          </div>

          <div className="stat-card" style={{background: 'linear-gradient(135deg, #9b59b6, #8e44ad)'}}>
            <div className="stat-icon">⏰</div>
            <div className="stat-content">
              <div className="stat-number">5</div>
              <div className="stat-label">Pending Tasks</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="dashboard-grid">
          {/* Weather Widget */}
          <div className="card weather-widget">
            <div className="card-header">
              <h2 className="card-title">Today's Weather</h2>
              <Link to="/weather" className="btn btn-sm btn-outline">View Forecast</Link>
            </div>
            <div className="weather-content">
              <div className="weather-main">
                <div className="weather-icon">☀️</div>
                <div className="weather-temp">{dashboardData.weatherToday.temp}°C</div>
              </div>
              <div className="weather-details">
                <div className="weather-detail">
                  <span>Condition:</span>
                  <strong>{dashboardData.weatherToday.condition}</strong>
                </div>
                <div className="weather-detail">
                  <span>Humidity:</span>
                  <strong>{dashboardData.weatherToday.humidity}%</strong>
                </div>
                <div className="weather-detail">
                  <span>Best for:</span>
                  <strong>Field work</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Quick Actions</h2>
            </div>
            <div className="quick-actions">
              <Link to="/crop-recommendation" className="action-button">
                <span className="action-icon">🌱</span>
                <span className="action-text">Get Crop Advice</span>
              </Link>
              <Link to="/market-prices" className="action-button">
                <span className="action-icon">💵</span>
                <span className="action-text">Check Prices</span>
              </Link>
              <Link to="/irrigation-schedule" className="action-button">
                <span className="action-icon">💧</span>
                <span className="action-text">Irrigation Plan</span>
              </Link>
              <Link to="/chatbot" className="action-button">
                <span className="action-icon">🤖</span>
                <span className="action-text">Ask AI</span>
              </Link>
            </div>
          </div>

          {/* Recommended Crops */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Recommended for Your Area</h2>
              <Link to="/crop-recommendation" className="btn btn-sm btn-outline">View All</Link>
            </div>
            <div className="crop-recommendations">
              {dashboardData.recommendedCrops.map((crop, index) => (
                <div key={index} className="crop-item">
                  <span className="crop-icon">🌾</span>
                  <div className="crop-info">
                    <div className="crop-name">{crop}</div>
                    <div className="crop-season">Suitable for current season</div>
                  </div>
                  <span className="badge badge-success">High Yield</span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Tasks */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Upcoming Tasks</h2>
            </div>
            <div className="task-list">
              <div className="task-item">
                <input type="checkbox" id="task1" />
                <label htmlFor="task1">
                  <div className="task-content">
                    <div className="task-title">Apply fertilizer to wheat field</div>
                    <div className="task-date">Today, 6:00 AM</div>
                  </div>
                </label>
              </div>
              <div className="task-item">
                <input type="checkbox" id="task2" />
                <label htmlFor="task2">
                  <div className="task-content">
                    <div className="task-title">Check irrigation system</div>
                    <div className="task-date">Tomorrow, 7:00 AM</div>
                  </div>
                </label>
              </div>
              <div className="task-item">
                <input type="checkbox" id="task3" />
                <label htmlFor="task3">
                  <div className="task-content">
                    <div className="task-title">Harvest ready crops</div>
                    <div className="task-date">In 3 days</div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Market Insights */}
          <div className="card market-insights">
            <div className="card-header">
              <h2 className="card-title">Market Insights</h2>
              <Link to="/market-prices" className="btn btn-sm btn-outline">View More</Link>
            </div>
            <div className="market-items">
              <div className="market-item">
                <div className="market-crop">
                  <span className="market-icon">🌾</span>
                  <span className="market-name">Wheat</span>
                </div>
                <div className="market-price">
                  <span className="price">₹2,100/quintal</span>
                  <span className="price-change positive">+5%</span>
                </div>
              </div>
              <div className="market-item">
                <div className="market-crop">
                  <span className="market-icon">🌾</span>
                  <span className="market-name">Rice</span>
                </div>
                <div className="market-price">
                  <span className="price">₹1,850/quintal</span>
                  <span className="price-change negative">-2%</span>
                </div>
              </div>
              <div className="market-item">
                <div className="market-crop">
                  <span className="market-icon">🌾</span>
                  <span className="market-name">Cotton</span>
                </div>
                <div className="market-price">
                  <span className="price">₹6,500/quintal</span>
                  <span className="price-change positive">+8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Assistant Banner */}
        <div className="ai-assistant-banner">
          <div className="banner-content">
            <div className="banner-icon">🤖</div>
            <div className="banner-text">
              <h3>Need Help? Ask Our AI Assistant</h3>
              <p>Get instant answers to all your farming questions in your preferred language</p>
            </div>
          </div>
          <Link to="/chatbot" className="btn btn-primary">Start Chat</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;