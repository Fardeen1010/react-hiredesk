import React, { useState, useEffect } from 'react';

const TopReasonsForRepair = () => {
  const [repairReasonsData, setRepairReasonsData] = useState([]);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://api.example.com/top-reasons-for-repair')
      .then((response) => response.json())
      .then((data) => setRepairReasonsData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h2>Top Reasons for Repair</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#3498DB', color: '#fff' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Reason</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Frequency</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Severity</th>
          </tr>
        </thead>
        <tbody>
          {repairReasonsData.map((reason) => (
            <tr key={reason.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{reason.reason}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{reason.frequency}</td>
              <td
                style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  color:
                    reason.severity === 'High'
                      ? 'red'
                      : reason.severity === 'Medium'
                      ? 'orange'
                      : 'green',
                }}
              >
                {reason.severity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopReasonsForRepair;