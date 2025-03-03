import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

const VehicleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    license: '',
    status: 'Active',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Replace with API call
    navigate('/vehicles');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Vehicle</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          placeholder="Vehicle Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          name="type"
          placeholder="Vehicle Type"
          value={formData.type}
          onChange={handleChange}
        />
        <Input
          name="license"
          placeholder="License Plate"
          value={formData.license}
          onChange={handleChange}
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <Button type="submit">Add Vehicle</Button>
      </form>
    </div>
  );
};

export default VehicleForm;