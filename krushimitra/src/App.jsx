import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CropRecommendation from './pages/CropRecommendation';
import IrrigationSchedule from './pages/IrrigationSchedule';
import MarketPrices from './pages/MarketPrices';
import WeatherForecast from './pages/WeatherForecast';
import ChatBot from './Pages/Chatbot';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import FeedbackHistory from './pages/FeedbackHistory';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogin = (userData, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar
        isAuthenticated={isAuthenticated}
        user={user}
        onLogout={handleLogout}
        language={language}
        setLanguage={setLanguage}
      />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
            }
          />
          <Route
            path="/register"
            element={
              isAuthenticated ? <Navigate to="/dashboard" /> : <Register onLogin={handleLogin} />
            }
          />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? <Dashboard user={user} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/crop-recommendation"
            element={
              isAuthenticated ? <CropRecommendation user={user} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/irrigation-schedule"
            element={
              isAuthenticated ? <IrrigationSchedule user={user} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/market-prices"
            element={
              isAuthenticated ? <MarketPrices user={user} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/weather"
            element={
              isAuthenticated ? <WeatherForecast user={user} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/chatbot"
            element={
              isAuthenticated ? <ChatBot user={user} language={language} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/profile"
            element={
              isAuthenticated ? <Profile user={user} setUser={setUser} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/feedback-history"
            element={
              isAuthenticated ? <FeedbackHistory user={user} /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>

  );
}

export default App;