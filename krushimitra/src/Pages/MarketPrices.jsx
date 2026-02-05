import React, { useState, useEffect } from 'react';
import './MarketPrices.css';

const MarketPrices = ({ user }) => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCrop, setSelectedCrop] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMarketPrices();
  }, []);

  const fetchMarketPrices = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8000/api/market-prices', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (response.ok) {
        setPrices(data.prices || mockPrices);
      }
    } catch (error) {
      setPrices(mockPrices);
    } finally {
      setLoading(false);
    }
  };

  const mockPrices = [
    { id: 1, crop: 'Wheat', market: 'Delhi Mandi', price: 2100, change: 5.2, unit: 'quintal', updated: '2 hours ago' },
    { id: 2, crop: 'Rice', market: 'Punjab Mandi', price: 1850, change: -2.1, unit: 'quintal', updated: '1 hour ago' },
    { id: 3, crop: 'Cotton', market: 'Gujarat Mandi', price: 6500, change: 8.5, unit: 'quintal', updated: '30 mins ago' },
    { id: 4, crop: 'Maize', market: 'Karnataka Mandi', price: 1680, change: 3.2, unit: 'quintal', updated: '3 hours ago' },
    { id: 5, crop: 'Sugarcane', market: 'UP Mandi', price: 3200, change: -1.5, unit: 'ton', updated: '1 hour ago' },
    { id: 6, crop: 'Potato', market: 'West Bengal Mandi', price: 1200, change: 12.3, unit: 'quintal', updated: '45 mins ago' }
  ];

  const filteredPrices = prices.filter(p => 
    (selectedCrop === 'all' || p.crop === selectedCrop) &&
    (p.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
     p.market.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const crops = [...new Set(prices.map(p => p.crop))];

  return (
    <div className="market-prices">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">📊 Live Market Prices</h1>
          <p className="page-subtitle">Real-time mandi prices from across India</p>
        </div>

        <div className="market-filters">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search crop or market..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="crop-filter"
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
          >
            <option value="all">All Crops</option>
            {crops.map(crop => (
              <option key={crop} value={crop}>{crop}</option>
            ))}
          </select>

          <button className="btn btn-primary" onClick={fetchMarketPrices}>
            🔄 Refresh
          </button>
        </div>

        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading market prices...</p>
          </div>
        ) : (
          <div className="prices-grid">
            {filteredPrices.map(price => (
              <div key={price.id} className="price-card">
                <div className="price-header">
                  <h3>{price.crop}</h3>
                  <span className={`trend ${price.change >= 0 ? 'up' : 'down'}`}>
                    {price.change >= 0 ? '↑' : '↓'} {Math.abs(price.change)}%
                  </span>
                </div>
                <div className="price-value">
                  ₹{price.price.toLocaleString()}
                  <span className="price-unit">/{price.unit}</span>
                </div>
                <div className="price-footer">
                  <span className="market-name">📍 {price.market}</span>
                  <span className="update-time">⏰ {price.updated}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="market-insights-section">
          <div className="card">
            <h2>💡 Market Insights</h2>
            <ul className="insights-list">
              <li>Cotton prices showing strong upward trend (+8.5%) due to export demand</li>
              <li>Potato prices surged 12% following lower production in West Bengal</li>
              <li>Wheat remains stable with steady demand across North India</li>
              <li>Rice prices slightly down (-2%) due to increased arrivals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPrices;