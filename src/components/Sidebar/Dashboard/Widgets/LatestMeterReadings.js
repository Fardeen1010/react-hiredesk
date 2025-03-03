import React from 'react';

const LatestMeterReadings = () => {
  // Example data for latest meter readings
  const meterReadings = [
    { id: 1, meterId: 'M001', reading: '1200 kWh', timestamp: '2023-10-01 14:30' },
    { id: 2, meterId: 'M002', reading: '950 kWh', timestamp: '2023-10-01 14:35' },
    { id: 3, meterId: 'M003', reading: '780 kWh', timestamp: '2023-10-01 14:40' },
    { id: 4, meterId: 'M004', reading: '1500 kWh', timestamp: '2023-10-01 14:45' },
  ];

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h2>Latest Meter Readings</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#3498DB', color: '#fff' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Meter ID</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Reading</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {meterReadings.map((reading) => (
            <tr key={reading.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{reading.meterId}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{reading.reading}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{reading.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestMeterReadings;