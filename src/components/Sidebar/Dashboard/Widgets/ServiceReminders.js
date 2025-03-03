import React from 'react';

const ServiceReminders = () => {
  // Example data for service reminders
  const remindersData = [
    { id: 1, task: 'Oil Change', dueDate: '2023-10-15', status: 'Pending' },
    { id: 2, task: 'Tire Rotation', dueDate: '2023-10-20', status: 'Completed' },
    { id: 3, task: 'Brake Inspection', dueDate: '2023-10-25', status: 'Pending' },
    { id: 4, task: 'Air Filter Replacement', dueDate: '2023-10-30', status: 'Pending' },
  ];

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h2>Service Reminders</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#3498DB', color: '#fff' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Task</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Due Date</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {remindersData.map((reminder) => (
            <tr key={reminder.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{reminder.task}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{reminder.dueDate}</td>
              <td
                style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  color: reminder.status === 'Completed' ? 'green' : 'orange',
                }}
              >
                {reminder.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceReminders;