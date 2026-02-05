import React, { useState, useEffect } from 'react';
import './WeatherForecast.css';

const WeatherForecast = ({ user }) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    // Mock data - replace with actual API call
    const mockWeather = {
      current: {
        temp: 28,
        condition: 'Sunny',
        humidity: 65,
        wind: 12,
        precipitation: 0
      },
      forecast: [
        { day: 'Mon', temp: 29, condition: '☀️', rain: '0%' },
        { day: 'Tue', temp: 27, condition: '⛅', rain: '20%' },
        { day: 'Wed', temp: 26, condition: '🌧️', rain: '80%' },
        { day: 'Thu', temp: 25, condition: '🌧️', rain: '60%' },
        { day: 'Fri', temp: 28, condition: '⛅', rain: '30%' },
        { day: 'Sat', temp: 30, condition: '☀️', rain: '10%' },
        { day: 'Sun', temp: 31, condition: '☀️', rain: '5%' }
      ]
    };

    setWeather(mockWeather.current);
    setForecast(mockWeather.forecast);
    setLoading(false);
  };

  if (loading) {
    return <div className="loading-state"><div className="spinner"></div></div>;
  }

  return (
    <div className="weather-forecast">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">🌤️ Weather Forecast</h1>
          <p className="page-subtitle">7-day weather forecast for {user?.location || 'your area'}</p>
        </div>

        <div className="weather-grid">
          <div className="card current-weather">
            <h2>Current Weather</h2>
            <div className="current-main">
              <div className="current-icon">☀️</div>
              <div className="current-temp">{weather.temp}°C</div>
              <div className="current-condition">{weather.condition}</div>
            </div>
            <div className="current-details">
              <div className="detail">
                <span className="detail-icon">💧</span>
                <div>
                  <div className="detail-label">Humidity</div>
                  <div className="detail-value">{weather.humidity}%</div>
                </div>
              </div>
              <div className="detail">
                <span className="detail-icon">💨</span>
                <div>
                  <div className="detail-label">Wind Speed</div>
                  <div className="detail-value">{weather.wind} km/h</div>
                </div>
              </div>
              <div className="detail">
                <span className="detail-icon">🌧️</span>
                <div>
                  <div className="detail-label">Precipitation</div>
                  <div className="detail-value">{weather.precipitation}%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card farming-advice">
            <h2>🌾 Farming Advice</h2>
            <div className="advice-list">
              <div className="advice-item good">
                <span>✅</span>
                <span>Perfect weather for field work today</span>
              </div>
              <div className="advice-item warning">
                <span>⚠️</span>
                <span>Rain expected Wed-Thu, plan accordingly</span>
              </div>
              <div className="advice-item good">
                <span>✅</span>
                <span>Good week for irrigation scheduling</span>
              </div>
            </div>
          </div>
        </div>

        <div className="forecast-section">
          <h2>7-Day Forecast</h2>
          <div className="forecast-cards">
            {forecast.map((day, index) => (
              <div key={index} className="forecast-card">
                <div className="forecast-day">{day.day}</div>
                <div className="forecast-icon">{day.condition}</div>
                <div className="forecast-temp">{day.temp}°C</div>
                <div className="forecast-rain">{day.rain}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;