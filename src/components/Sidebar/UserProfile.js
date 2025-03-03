import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const UserProfile = () => {
  return (
    <div style={{ marginBottom: '30px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <FaUserCircle size={32} style={{ marginRight: '10px' }} />
        <div>
          <div style={{ fontWeight: 'bold' }}>fard</div>
          <div style={{ fontSize: '0.8rem', color: '#666' }}>Fardeen Ahmed</div>
        </div>
      </div>
      <div style={{ backgroundColor: '#FFF', padding: '10px', borderRadius: '5px' }}>
        <div style={{ fontSize: '0.8rem', color: '#666' }}>Get Started - 0% complete</div>
      </div>
    </div>
  );
};

export default UserProfile;