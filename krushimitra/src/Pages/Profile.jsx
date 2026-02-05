import React, { useState } from 'react';

const Profile = ({ user, setUser }) => {
  const [formData, setFormData] = useState(user || {});
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    setUser(formData);
    localStorage.setItem('user', JSON.stringify(formData));
    setEditing(false);
  };

  return (
    <div style={{padding: '40px 0'}}>
      <div className="container">
        <h1 className="page-title">👤 My Profile</h1>
        <div className="card">
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              className="form-control" 
              value={formData.name || ''} 
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              disabled={!editing}
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input 
              type="text" 
              className="form-control" 
              value={formData.location || ''} 
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              disabled={!editing}
            />
          </div>
          <div className="form-group">
            <label>Soil Type</label>
            <input 
              type="text" 
              className="form-control" 
              value={formData.soilType || ''} 
              disabled={!editing}
            />
          </div>
          {editing ? (
            <div style={{display: 'flex', gap: '12px'}}>
              <button onClick={handleSave} className="btn btn-primary">Save</button>
              <button onClick={() => setEditing(false)} className="btn btn-outline">Cancel</button>
            </div>
          ) : (
            <button onClick={() => setEditing(true)} className="btn btn-primary">Edit Profile</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;