import React, { useState } from 'react';
import './CropRecommendation.css';

const CropRecommendation = ({ user }) => {
  const [formData, setFormData] = useState({
    season: '',
    soilType: user?.soilType || '',
    rainfall: '',
    temperature: '',
    previousCrop: ''
  });
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8000/api/crop-recommendation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        setRecommendations(data.recommendations);
      }
    } catch (error) {
      console.error('Error getting recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="crop-recommendation">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">🌱 Smart Crop Recommendations</h1>
          <p className="page-subtitle">
            Get AI-powered crop suggestions based on your farm conditions
          </p>
        </div>

        <div className="recommendation-grid">
          {/* Input Form */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Enter Farm Details</h2>
            </div>
            <form onSubmit={handleSubmit} className="recommendation-form">
              <div className="form-group">
                <label className="form-label">Season *</label>
                <select
                  name="season"
                  className="form-select"
                  value={formData.season}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Season</option>
                  <option value="kharif">Kharif (Monsoon)</option>
                  <option value="rabi">Rabi (Winter)</option>
                  <option value="zaid">Zaid (Summer)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Soil Type *</label>
                <select
                  name="soilType"
                  className="form-select"
                  value={formData.soilType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Soil Type</option>
                  <option value="clay">Clay</option>
                  <option value="sandy">Sandy</option>
                  <option value="loamy">Loamy</option>
                  <option value="silt">Silt</option>
                  <option value="peaty">Peaty</option>
                  <option value="chalky">Chalky</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Average Rainfall (mm) *</label>
                <input
                  type="number"
                  name="rainfall"
                  className="form-control"
                  placeholder="Enter average rainfall"
                  value={formData.rainfall}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Average Temperature (°C) *</label>
                <input
                  type="number"
                  name="temperature"
                  className="form-control"
                  placeholder="Enter average temperature"
                  value={formData.temperature}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Previous Crop (Optional)</label>
                <input
                  type="text"
                  name="previousCrop"
                  className="form-control"
                  placeholder="What did you grow before?"
                  value={formData.previousCrop}
                  onChange={handleChange}
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-lg w-full"
                disabled={loading}
              >
                {loading ? 'Analyzing...' : 'Get Recommendations'}
              </button>
            </form>
          </div>

          {/* Recommendations Display */}
          <div className="recommendations-display">
            {loading ? (
              <div className="card">
                <div className="loading-state">
                  <div className="spinner"></div>
                  <p>Analyzing your farm conditions...</p>
                </div>
              </div>
            ) : recommendations ? (
              <>
                <div className="card highlight-card">
                  <div className="card-header">
                    <h2 className="card-title">🏆 Top Recommendation</h2>
                  </div>
                  <div className="top-crop">
                    <div className="crop-header">
                      <h3>{recommendations[0]?.name || 'Wheat'}</h3>
                      <span className="confidence-badge">
                        {recommendations[0]?.confidence || '95'}% Match
                      </span>
                    </div>
                    <p className="crop-description">
                      {recommendations[0]?.description || 'Best suited for your soil and climate conditions'}
                    </p>
                    <div className="crop-benefits">
                      <div className="benefit-item">
                        <span className="benefit-icon">💰</span>
                        <div>
                          <strong>Expected Yield</strong>
                          <p>25-30 quintals/acre</p>
                        </div>
                      </div>
                      <div className="benefit-item">
                        <span className="benefit-icon">📅</span>
                        <div>
                          <strong>Growing Period</strong>
                          <p>120-150 days</p>
                        </div>
                      </div>
                      <div className="benefit-item">
                        <span className="benefit-icon">💵</span>
                        <div>
                          <strong>Market Price</strong>
                          <p>₹2,100/quintal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h2 className="card-title">Other Suitable Crops</h2>
                  </div>
                  <div className="crop-list">
                    {['Rice', 'Cotton', 'Maize'].map((crop, index) => (
                      <div key={index} className="crop-item-card">
                        <div className="crop-item-header">
                          <span className="crop-icon">🌾</span>
                          <h4>{crop}</h4>
                        </div>
                        <p className="crop-item-description">
                          Good alternative with moderate success rate
                        </p>
                        <div className="crop-item-footer">
                          <span className="crop-yield">20-25 quintals/acre</span>
                          <span className="crop-confidence">85% Match</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h2 className="card-title">📋 Cultivation Tips</h2>
                  </div>
                  <div className="tips-list">
                    <div className="tip-item">
                      <span className="tip-number">1</span>
                      <p>Prepare soil 2-3 weeks before sowing for better yield</p>
                    </div>
                    <div className="tip-item">
                      <span className="tip-number">2</span>
                      <p>Use certified seeds for optimal germination rate</p>
                    </div>
                    <div className="tip-item">
                      <span className="tip-number">3</span>
                      <p>Apply organic manure before planting</p>
                    </div>
                    <div className="tip-item">
                      <span className="tip-number">4</span>
                      <p>Monitor for pests and diseases regularly</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="card empty-state">
                <div className="empty-icon">🌱</div>
                <h3>Ready to Get Started?</h3>
                <p>
                  Fill in your farm details on the left to receive personalized 
                  crop recommendations powered by our AI system.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropRecommendation;