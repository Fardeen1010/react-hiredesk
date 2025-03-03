import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardPage from './pages/DashboardPage';
import ServiceHistory from './pages/ServiceHistory';
import Home from './pages/Home';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            padding: '20px',
            marginLeft: isSidebarCollapsed ? '80px' : '250px', // Adjust margin based on sidebar state
            transition: 'margin-left 0.3s', // Smooth transition
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/service-history" element={<ServiceHistory />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;