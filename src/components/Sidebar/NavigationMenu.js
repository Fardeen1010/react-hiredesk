import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaBell,
  FaWrench,
  FaHistory,
  FaClipboardList,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';

const NavigationMenu = () => {
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const toggleServiceDropdown = () => {
    setIsServiceOpen(!isServiceOpen);
  };

  return (
    <nav>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '15px' }}>
          <Link
            to="/dashboard"
            style={{
              color: '#333',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '5px',
              transition: 'background-color 0.3s',
            }}
          >
            <FaTachometerAlt style={{ marginRight: '10px' }} />
            Dashboard
          </Link>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <Link
            to="/issues"
            style={{
              color: '#333',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '5px',
              transition: 'background-color 0.3s',
            }}
          >
            <FaBell style={{ marginRight: '10px' }} />
            Issues
          </Link>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <div
            style={{
              color: '#333',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onClick={toggleServiceDropdown}
          >
            <FaWrench style={{ marginRight: '10px' }} />
            Service
            {isServiceOpen ? (
              <FaChevronUp style={{ marginLeft: 'auto' }} />
            ) : (
              <FaChevronDown style={{ marginLeft: 'auto' }} />
            )}
          </div>
          {isServiceOpen && (
            <ul style={{ listStyle: 'none', paddingLeft: '30px', marginTop: '10px' }}>
              <li style={{ marginBottom: '10px' }}>
                <Link
                  to="/service-history"
                  style={{
                    color: '#333',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '5px',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s',
                  }}
                >
                  <FaHistory style={{ marginRight: '10px' }} />
                  Service History
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link
                  to="/work-orders"
                  style={{
                    color: '#333',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '5px',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s',
                  }}
                >
                  <FaClipboardList style={{ marginRight: '10px' }} />
                  Work Orders
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;