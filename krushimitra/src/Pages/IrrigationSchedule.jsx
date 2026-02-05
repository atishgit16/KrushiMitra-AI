import React, { useState } from 'react';

const IrrigationSchedule = () => {
  const [schedule] = useState([
    { day: 'Monday', time: '6:00 AM', duration: '45 min', crop: 'Wheat', status: 'completed' },
    { day: 'Wednesday', time: '6:00 AM', duration: '45 min', crop: 'Wheat', status: 'pending' },
    { day: 'Friday', time: '6:00 AM', duration: '45 min', crop: 'Wheat', status: 'pending' }
  ]);

  return (
    <div style={{padding: '40px 0'}}>
      <div className="container">
        <h1 className="page-title">💧 Irrigation Schedule</h1>
        <div className="card">
          {schedule.map((item, i) => (
            <div key={i} style={{padding: '16px', borderBottom: '1px solid #eee'}}>
              <h3>{item.day} - {item.time}</h3>
              <p>Crop: {item.crop} | Duration: {item.duration}</p>
              <span className={`badge badge-${item.status === 'completed' ? 'success' : 'warning'}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IrrigationSchedule;