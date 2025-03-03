import React, { useState, useEffect } from 'react';

const FuelAndServiceCosts = () => {
  const [costsData, setCostsData] = useState([]);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://api.example.com/fuel-and-service-costs')
      .then((response) => response.json())
      .then((data) => setCostsData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Calculate total costs
  const totalFuelCost = costsData
    .filter((item) => item.type === 'Fuel')
    .reduce((total, item) => total + parseFloat(item.amount.replace('$', '')), 0);

  const totalServiceCost = costsData
    .filter((item) => item.type === 'Service')
    .reduce((total, item) => total + parseFloat(item.amount.replace('$', '')), 0);

  const totalCost = totalFuelCost + totalServiceCost;

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h2>Fuel and Service Costs</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#3498DB', color: '#fff' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Type</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Description</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Amount</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {costsData.map((cost) => (
            <tr key={cost.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{cost.type}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{cost.description}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{cost.amount}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{cost.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '20px' }}>
        <h3>Summary</h3>
        <p>Total Fuel Cost: ${totalFuelCost.toFixed(2)}</p>
        <p>Total Service Cost: ${totalServiceCost.toFixed(2)}</p>
        <p>Total Cost: ${totalCost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default FuelAndServiceCosts;