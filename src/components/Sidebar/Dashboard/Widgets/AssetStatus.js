import React from 'react';

const AssetStatus = () => {
  // Example data for asset status
  const assets = [
    { id: 1, name: 'Asset 1', status: 'Operational' },
    { id: 2, name: 'Asset 2', status: 'Under Maintenance' },
    { id: 3, name: 'Asset 3', status: 'Operational' },
    { id: 4, name: 'Asset 4', status: 'Out of Service' },
  ];

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h2>Asset Status</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#3498DB', color: '#fff' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>ID</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{asset.id}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{asset.name}</td>
              <td
                style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  color:
                    asset.status === 'Operational'
                      ? 'green'
                      : asset.status === 'Under Maintenance'
                      ? 'orange'
                      : 'red',
                }}
              >
                {asset.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetStatus;