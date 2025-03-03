import React from 'react';

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <select
        name="asset"
        value={filters.asset}
        onChange={handleChange}
        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }}
      >
        <option value="">Filter by Asset</option>
        <option value="Truck 1">Truck 1</option>
        <option value="Van 1">Van 1</option>
      </select>
      <select
        name="serviceTask"
        value={filters.serviceTask}
        onChange={handleChange}
        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
      >
        <option value="">Filter by Service Task</option>
        <option value="Oil Change">Oil Change</option>
        <option value="Tire Rotation">Tire Rotation</option>
      </select>
    </div>
  );
};

export default Filters;