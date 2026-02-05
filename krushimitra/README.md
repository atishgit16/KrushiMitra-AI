# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.












# 🌾 KrishiMitra - AI-Powered Crop Advisory System

**Smart India Hackathon 2024 - Track 2: Agriculture**

## 📋 Project Overview

KrishiMitra is an AI-powered crop advisory platform designed to help India's smallholder farmers make informed decisions about crop selection, irrigation, fertilizer application, and market timing. The system provides personalized recommendations based on location-specific data, soil type, weather patterns, and real-time market prices.

## 🎯 Problem Statement

86% of Indian farmers are small/marginal holdings lacking location-specific crop advice. Poor decisions on crop selection, irrigation, and fertilizers lead to 20-30% yield losses. Farmers need a simple AI system providing personalized recommendations based on their location, soil type, weather, and market prices.

## 🚀 Tech Stack

### Frontend
- **React.js** - Modern UI framework
- **React Router** - Client-side routing
- **CSS3** - Custom responsive design

### Backend (Integration Ready)
- **FastAPI** (Python) - REST API
- **LangGraph + LangChain** - Agentic AI framework
- **ChromaDB** - Vector database for RAG
- **Twilio WhatsApp API** - WhatsApp integration

### External APIs
- Weather API for real-time forecasts
- Market Price API for mandi rates
- Google Maps API for location services

## ✨ Key Features

### 1. 🌱 Smart Crop Recommendations
- AI-powered crop suggestions based on:
  - Soil type analysis
  - Climate and weather patterns
  - Historical yield data
  - Market demand trends
- Season-specific recommendations (Kharif, Rabi, Zaid)

### 2. 💧 Irrigation Scheduling
- Optimized water usage plans
- Weather-based irrigation timing
- Crop-specific water requirements
- Automated scheduling reminders

### 3. 📊 Real-Time Market Prices
- Live mandi prices from across India
- Price trend analysis
- Best selling time recommendations
- Multiple market comparisons

### 4. 🌤️ Weather Forecasting
- 7-day accurate weather predictions
- Farming-specific insights
- Rain alerts and warnings
- Temperature and humidity tracking

### 5. 🤖 AI Chatbot Assistant
- 24/7 availability
- Multilingual support (Hindi, Marathi, Punjabi, Tamil, Telugu)
- Voice and text input
- Context-aware responses
- WhatsApp integration

### 6. 📱 Multi-Platform Access
- Web application
- Mobile responsive design
- SMS fallback for feature phones
- WhatsApp bot integration

## 🌐 Multilingual Support

Available in:
- English
- हिंदी (Hindi)
- मराठी (Marathi)
- ਪੰਜਾਬੀ (Punjabi)
- தமிழ் (Tamil)
- తెలుగు (Telugu)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Python 3.8+ (for backend)

### Frontend Setup

```bash
# Clone the repository
git clone <repository-url>
cd crop-advisory-app

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The app will run on `http://localhost:3000`

### Backend Setup (FastAPI)

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the server
uvicorn main:app --reload
```

The API will run on `http://localhost:8000`

## 🏗️ Project Structure

```
crop-advisory-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Auth.css
│   │   ├── Dashboard.js
│   │   ├── Dashboard.css
│   │   ├── CropRecommendation.js
│   │   ├── CropRecommendation.css
│   │   ├── IrrigationSchedule.js
│   │   ├── MarketPrices.js
│   │   ├── MarketPrices.css
│   │   ├── WeatherForecast.js
│   │   ├── WeatherForecast.css
│   │   ├── ChatBot.js
│   │   ├── ChatBot.css
│   │   ├── Profile.js
│   │   └── FeedbackHistory.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Crop Advisory
- `POST /api/crop-recommendation` - Get crop recommendations
- `GET /api/irrigation-schedule` - Get irrigation schedule
- `GET /api/market-prices` - Get current market prices

### Weather
- `GET /api/weather` - Get weather forecast

### Chatbot
- `POST /api/chatbot` - Chat with AI assistant

## 🎨 Design Features

- **Modern UI/UX** - Clean, intuitive interface
- **Responsive Design** - Works on all devices
- **Accessibility** - WCAG compliant
- **Dark Mode Ready** - Easy theme switching
- **Progressive Web App** - Offline capability

## 📊 Impact Metrics

- **Target Users**: 50,000+ farmers in Phase 1
- **Expected Yield Improvement**: 20-30%
- **Water Conservation**: 25-40%
- **Income Increase**: 15-25%

## 🛠️ Future Enhancements

1. **Offline Mode** - Progressive Web App with offline caching
2. **Crop Disease Detection** - Image recognition for pest/disease identification
3. **Soil Testing Integration** - IoT sensor data integration
4. **Government Scheme Integration** - Auto-apply for subsidies
5. **Marketplace** - Direct farmer-to-buyer platform
6. **Insurance Integration** - Crop insurance recommendations

## 👥 Team & Contributors

Developed for GENAI 2025.

## 📄 License

This project is developed for GENAI 2025.

## 🤝 Contributing

This is a hackathon project. For any queries or contributions, please reach out to the team.

## 📞 Support

For support, email: support@krishimitra.in
Helpline: +91-1800-XXX-XXXX (Toll Free)

---

**Made with ❤️ for Indian Farmers**