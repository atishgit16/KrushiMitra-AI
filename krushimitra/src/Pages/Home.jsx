import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title fade-in">
              Transform Your Farming with AI
            </h1>
            <p className="hero-subtitle fade-in">
              Get personalized crop recommendations, real-time market prices, and expert agricultural advice 
              in your local language - all powered by advanced AI technology.
            </p>
            <div className="hero-buttons fade-in">
              <Link to="/register" className="btn btn-primary btn-lg">
                Get Started Free
              </Link>
              <Link to="/login" className="btn btn-outline btn-lg">
                Sign In
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Active Farmers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">200+</div>
                <div className="stat-label">Crops Covered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Everything you need to make informed farming decisions
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3 className="feature-title">Smart Crop Recommendations</h3>
              <p className="feature-description">
                Get AI-powered suggestions for the best crops to grow based on your soil type, 
                location, weather patterns, and market demand.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💧</div>
              <h3 className="feature-title">Irrigation Scheduling</h3>
              <p className="feature-description">
                Optimize water usage with personalized irrigation schedules based on crop needs, 
                weather forecasts, and soil moisture levels.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Real-Time Market Prices</h3>
              <p className="feature-description">
                Stay updated with current mandi prices, demand trends, and best selling opportunities 
                for your crops across different markets.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🌤️</div>
              <h3 className="feature-title">Weather Forecasting</h3>
              <p className="feature-description">
                Get accurate 7-day weather forecasts with farming-specific insights to plan your 
                agricultural activities effectively.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">AI WhatsApp Assistant</h3>
              <p className="feature-description">
                Chat with our AI assistant via WhatsApp in Hindi or your regional language. 
                Get instant answers to all your farming queries.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">SMS Support</h3>
              <p className="feature-description">
                No smartphone? No problem! Access our services via simple SMS commands from 
                any basic feature phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3 className="step-title">Register & Set Up Profile</h3>
              <p className="step-description">
                Create your account and provide details about your farm location, soil type, and land size.
              </p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3 className="step-title">Get AI Recommendations</h3>
              <p className="step-description">
                Our AI analyzes your data along with weather, market trends, and provides personalized advice.
              </p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3 className="step-title">Implement & Track</h3>
              <p className="step-description">
                Follow the recommendations and track your progress through our easy-to-use dashboard.
              </p>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <h3 className="step-title">Provide Feedback</h3>
              <p className="step-description">
                Share your results to help our AI learn and provide even better recommendations over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="languages">
        <div className="container">
          <h2 className="section-title">Available in Multiple Languages</h2>
          <p className="section-subtitle">
            Communicate in your preferred language
          </p>
          <div className="language-badges">
            <span className="language-badge">English</span>
            <span className="language-badge">हिंदी (Hindi)</span>
            <span className="language-badge">मराठी (Marathi)</span>
            <span className="language-badge">ਪੰਜਾਬੀ (Punjabi)</span>
            <span className="language-badge">தமிழ் (Tamil)</span>
            <span className="language-badge">తెలుగు (Telugu)</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Farming?</h2>
            <p className="cta-description">
              Join thousands of farmers who are already benefiting from AI-powered agricultural advice.
            </p>
            <Link to="/register" className="btn btn-primary btn-lg">
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;