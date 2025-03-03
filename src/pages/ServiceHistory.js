import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import ServiceTable from '../components/Sidebar/ServiceTable';
import AddServiceModal from '../components/Sidebar/AddServiceModal';
import Filters from '../components/Sidebar/Filters';

const ServiceHistory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    asset: '',
    assetGroup: '',
    serviceTask: '',
    customFilter: '',
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddService = () => {
    setIsModalOpen(true);
  };

  const handleSaveService = (newService) => {
    console.log('New Service:', newService);
    setIsModalOpen(false);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>Service History</h1>

        {/* Filters and Search */}
        <Filters filters={filters} setFilters={setFilters} />
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Search by asset..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '10px',
              width: '300px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        {/* Add Service Button */}
        <button
          onClick={handleAddService}
          style={{
            padding: '10px 20px',
            backgroundColor: '#3498DB',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '20px',
          }}
        >
          Add Service Entry
        </button>

        {/* Service Table */}
        <ServiceTable filters={filters} searchTerm={searchTerm} />

        {/* Add Service Modal */}
        {isModalOpen && (
          <AddServiceModal
            onClose={() => setIsModalOpen(false)}
            onSave={handleSaveService}
          />
        )}
      </div>
    </div>
  );
};

export default ServiceHistory;