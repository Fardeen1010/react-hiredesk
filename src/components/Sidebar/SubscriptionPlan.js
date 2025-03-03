import React from 'react';

const SubscriptionPlan = () => {
  return (
    <div style={{ marginBottom: '30px' }}>
      <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Subscription Plan</div>
      <div style={{ backgroundColor: '#FFF', padding: '10px', borderRadius: '5px' }}>
        <div style={{ fontSize: '0.8rem', color: '#666' }}>Current Plan: Basic</div>
        <div style={{ fontSize: '0.8rem', color: '#666' }}>Days Left: 15</div>
        <button
          style={{
            padding: '5px 10px',
            backgroundColor: '#3498DB',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '5px',
            marginTop: '10px',
            cursor: 'pointer',
          }}
        >
          Upgrade Plan
        </button>
      </div>
    </div>
  );
};

export default SubscriptionPlan;