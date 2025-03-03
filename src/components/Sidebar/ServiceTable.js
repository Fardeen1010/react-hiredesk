import React from 'react';

const ServiceTable = ({ filters, searchTerm }) => {
  // Mock data
  const serviceEntries = [
    {
      id: 1,
      asset: 'Truck 1',
      completionDate: '2023-10-01',
      watchers: ['John', 'Jane'],
      priority: 'High',
      meter: '5000 km',
      serviceTask: 'Oil Change',
      issues: 'None',
      vendor: 'ABC Repairs',
      totalCost: '$100',
      workOrder: 'WO-001',
      labels: ['Maintenance', 'Urgent'],
    },
    // Add more entries here
  ];

  // Filter and sort entries
  const filteredEntries = serviceEntries.filter((entry) => {
    return (
      entry.asset.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.asset ? entry.asset === filters.asset : true) &&
      (filters.serviceTask ? entry.serviceTask === filters.serviceTask : true)
    );
  });

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ backgroundColor: '#F4F6F6', borderBottom: '1px solid #ddd' }}>
          <th style={{ padding: '10px', textAlign: 'left' }}>Asset</th>
          <th style={{ padding: '10px', textAlign: 'left' }}>Completion Date</th>
          <th style={{ padding: '10px', textAlign: 'left' }}>Watchers</th>
          <th style={{ padding: '10px', textAlign: 'left' }}>Priority</th>
          <th style={{ padding: '10px', textAlign: 'left' }}>Meter</th>
          <th style={{ padding: '10px', textAlign: 'left' }}>Service Task</th>
          <th style={{ padding: '10px', textAlign: 'left' }}>Issues</th>
          <th style={{ padding: '10px', textAlign: 'left' }}>Vendor</th>
          <th style={{ padding: '10px', textAlign: 'left' }}>Total Cost</th>
          <th style={{ padding: '10px', textAlign: 'left' }}>Work Order</th>
          <th style={{ padding: '10px', textAlign: 'left' }}>Labels</th>
        </tr>
      </thead>
      <tbody>
        {filteredEntries.map((entry) => (
          <tr key={entry.id} style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>{entry.asset}</td>
            <td style={{ padding: '10px' }}>{entry.completionDate}</td>
            <td style={{ padding: '10px' }}>{entry.watchers.join(', ')}</td>
            <td style={{ padding: '10px' }}>{entry.priority}</td>
            <td style={{ padding: '10px' }}>{entry.meter}</td>
            <td style={{ padding: '10px' }}>{entry.serviceTask}</td>
            <td style={{ padding: '10px' }}>{entry.issues}</td>
            <td style={{ padding: '10px' }}>{entry.vendor}</td>
            <td style={{ padding: '10px' }}>{entry.totalCost}</td>
            <td style={{ padding: '10px' }}>{entry.workOrder}</td>
            <td style={{ padding: '10px' }}>{entry.labels.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ServiceTable;