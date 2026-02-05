import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const ChatBot = ({ user, language }) => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Namaste! 🙏 I am KrishiMitra AI Assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      type: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8000/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          message: input,
          language: language,
          context: {
            location: user?.location,
            soilType: user?.soilType
          }
        })
      });

      const data = await response.json();
      
      const botMessage = {
        type: 'bot',
        text: data.response || 'I apologize, I could not process that request.',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        type: 'bot',
        text: 'Sorry, I am having trouble connecting. Please try again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    'What crops should I grow?',
    'Current market prices?',
    'Weather forecast?',
    'Irrigation schedule?',
    'Pest control tips?'
  ];

  return (
    <div className="chatbot-page">
      <div className="container">
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="bot-avatar">🤖</div>
            <div className="bot-info">
              <h1>KrishiMitra AI Assistant</h1>
              <p>Available 24/7 • Multilingual Support</p>
            </div>
            <div className="language-indicator">
              🌐 {language === 'hi' ? 'हिंदी' : language === 'mr' ? 'मराठी' : 'English'}
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                <div className="message-avatar">
                  {message.type === 'bot' ? '🤖' : '👤'}
                </div>
                <div className="message-content">
                  <p className="message-text">{message.text}</p>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="message bot">
                <div className="message-avatar">🤖</div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <div className="quick-questions">
            <p className="quick-label">Quick Questions:</p>
            <div className="quick-buttons">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  className="quick-button"
                  onClick={() => setInput(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          <div className="chat-input-container">
            <div className="chat-input-wrapper">
              <textarea
                className="chat-input"
                placeholder="Type your farming question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                rows="1"
              />
              <button 
                className="voice-button"
                onClick={() => setIsVoiceActive(!isVoiceActive)}
              >
                🎤
              </button>
              <button 
                className="send-button"
                onClick={handleSend}
                disabled={!input.trim() || loading}
              >
                ➤
              </button>
            </div>
          </div>

          <div className="chatbot-features">
            <div className="feature">
              <span>📱</span>
              <span>WhatsApp Integration</span>
            </div>
            <div className="feature">
              <span>🔊</span>
              <span>Voice Support</span>
            </div>
            <div className="feature">
              <span>🌐</span>
              <span>Multi-language</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;