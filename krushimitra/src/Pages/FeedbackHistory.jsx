import React from 'react';

const FeedbackHistory = () => {
  const feedbacks = [
    { date: '2024-02-01', crop: 'Wheat', rating: 5, comment: 'Excellent recommendation!' },
    { date: '2024-01-15', crop: 'Rice', rating: 4, comment: 'Good advice, yield was better' }
  ];

  return (
    <div style={{padding: '40px 0'}}>
      <div className="container">
        <h1 className="page-title">📝 Feedback History</h1>
        <div className="card">
          {feedbacks.map((fb, i) => (
            <div key={i} style={{padding: '16px', borderBottom: '1px solid #eee'}}>
              <p><strong>{fb.date}</strong> - {fb.crop}</p>
              <p>Rating: {'⭐'.repeat(fb.rating)}</p>
              <p>{fb.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackHistory;