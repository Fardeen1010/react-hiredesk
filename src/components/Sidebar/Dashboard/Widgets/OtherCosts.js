import React from 'react';

const OtherCosts = () => {
  // Example data for other costs
  const otherCostsData = [
    { id: 1, category: 'Administrative', description: 'Office Supplies', amount: '$150', date: '2023-10-01' },
    { id: 2, category: 'Maintenance', description: 'Building Repairs', amount: '$500', date: '2023-10-05' },
    { id: 3, category: 'Miscellaneous', description: 'Team Lunch', amount: '$200', date: '2023-10-10' },
    { id: 4, category: 'Utilities', description: 'Electricity Bill', amount: '$300', date: '2023-10-15' },
  ];

  // Calculate total other costs
  const totalOtherCosts = otherCostsData.reduce(
    (total, item) => total + parseFloat(item.amount.replace('$', '')),
    0
  );

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h2>Other Costs</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#3498DB', color: '#fff' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Category</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Description</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Amount</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {otherCostsData.map((cost) => (
            <tr key={cost.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{cost.category}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{cost.description}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{cost.amount}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{cost.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '20px' }}>
        <h3>Summary</h3>
        <p>Total Other Costs: ${totalOtherCosts.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OtherCosts;