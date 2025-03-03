import React, { useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';

const ServiceList = () => {
  const [services, setServices] = useState([
    { id: 1, vehicle: 'Truck 1', serviceType: 'Oil Change', date: '2023-10-01', cost: '$100' },
    { id: 2, vehicle: 'Van 1', serviceType: 'Tire Rotation', date: '2023-10-05', cost: '$50' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter((service) =>
    service.vehicle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', flex: 1 }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>Service History</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Search by vehicle..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '10px',
              paddingLeft: '35px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              width: '300px',
            }}
          />
          <FaSearch
            style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#888' }}
          />
        </div>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#3498DB',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <FaPlus style={{ marginRight: '10px' }} />
          Add Service
        </button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#F4F6F6', borderBottom: '1px solid #ddd' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Vehicle</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Service Type</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Date</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Cost</th>
          </tr>
        </thead>
        <tbody>
          {filteredServices.map((service) => (
            <tr key={service.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px' }}>{service.vehicle}</td>
              <td style={{ padding: '10px' }}>{service.serviceType}</td>
              <td style={{ padding: '10px' }}>{service.date}</td>
              <td style={{ padding: '10px' }}>{service.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceList;