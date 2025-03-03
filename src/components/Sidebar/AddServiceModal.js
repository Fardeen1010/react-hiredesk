import React, { useState } from 'react';

const AddServiceModal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    asset: '',
    completionDate: '',
    watchers: [],
    priority: 'Medium',
    meter: '',
    serviceTask: '',
    issues: '',
    vendor: '',
    totalCost: '',
    workOrder: '',
    labels: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          padding: '20px',
          borderRadius: '5px',
          width: '500px',
        }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
          Add Service Entry
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>Asset</label>
            <input
              type="text"
              name="asset"
              value={formData.asset}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          {/* Add more fields here */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '10px 20px',
                backgroundColor: '#ccc',
                color: '#000',
                border: 'none',
                borderRadius: '5px',
                marginRight: '10px',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#3498DB',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServiceModal;