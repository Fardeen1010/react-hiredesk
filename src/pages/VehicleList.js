import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import { Link } from 'react-router-dom';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  // Mock data (replace with API call)
  useEffect(() => {
    const mockVehicles = [
      { id: 1, name: 'Truck 1', type: 'Heavy Duty', license: 'ABC123', status: 'Active' },
      { id: 2, name: 'Van 1', type: 'Light Duty', license: 'XYZ456', status: 'Inactive' },
    ];
    setVehicles(mockVehicles);
  }, []);

  const tableHeaders = ['Name', 'Type', 'License Plate', 'Status', 'Actions'];
  const tableData = vehicles.map((vehicle) => [
    vehicle.name,
    vehicle.type,
    vehicle.license,
    vehicle.status,
    <Link to={`/vehicles/${vehicle.id}`} className="text-blue-500 hover:underline">
      View
    </Link>,
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Vehicle List</h1>
      <Link to="/vehicles/new" className="mb-4 inline-block px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
        Add New Vehicle
      </Link>
      <Table headers={tableHeaders} data={tableData} />
    </div>
  );
};

export default VehicleList;