import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaUserCircle,
  FaCog,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaTachometerAlt,
  FaBell,
  FaWrench,
  FaHistory,
  FaClipboardList,
} from 'react-icons/fa';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const [isServiceOpen, setIsServiceOpen] = useState(false); // State for Service dropdown
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State for Profile dropdown

  const toggleServiceDropdown = () => {
    setIsServiceOpen(!isServiceOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div
      style={{
        width: isCollapsed ? '80px' : '250px', // Collapsible width
        height: '100vh',
        backgroundColor: '#E3F2FD', // Light blue background
        color: '#333',
        padding: '20px',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
        transition: 'width 0.3s',
        position: 'fixed', // Fixed position
        left: 0,
        top: 0,
        zIndex: 1000, // Ensure sidebar is above other content
      }}
    >
      {/* Collapse Button */}
      <button
        onClick={toggleSidebar}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.2rem',
        }}
      >
        {isCollapsed ? '>' : '<'}
      </button>

      {/* User Profile Section */}
      <div style={{ marginBottom: '30px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            marginBottom: '10px',
          }}
          onClick={toggleProfileDropdown}
        >
          <FaUserCircle size={32} style={{ marginRight: '10px' }} />
          {!isCollapsed && (
            <div>
              <div style={{ fontWeight: 'bold' }}>fard</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>Fardeen Ahmed</div>
            </div>
          )}
          {!isCollapsed && (isProfileOpen ? (
            <FaChevronUp style={{ marginLeft: 'auto' }} />
          ) : (
            <FaChevronDown style={{ marginLeft: 'auto' }} />
          ))}
        </div>
        {isProfileOpen && !isCollapsed && (
          <div style={{ marginLeft: '42px', marginTop: '10px' }}>
            <div style={{ padding: '5px 0', cursor: 'pointer' }}>Account Settings</div>
            <div style={{ padding: '5px 0', cursor: 'pointer' }}>Logout</div>
          </div>
        )}
      </div>

      {/* Subscription Plan Info */}
      {!isCollapsed && (
        <div style={{ marginBottom: '30px' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Subscription Plan</div>
          <div style={{ backgroundColor: '#FFF', padding: '10px', borderRadius: '5px' }}>
            <div style={{ fontSize: '0.8rem', color: '#666' }}>Current Plan: Basic</div>
            <div style={{ fontSize: '0.8rem', color: '#666' }}>Days Left: 15</div>
            <button
              style={{
                padding: '5px 10px',
                backgroundColor: '#3498DB',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '5px',
                marginTop: '10px',
                cursor: 'pointer',
              }}
            >
              Upgrade Plan
            </button>
          </div>
        </div>
      )}

      {/* Main Navigation Menu */}
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {/* Dashboard */}
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
                ':hover': {
                  backgroundColor: '#BBDEFB', // Hover effect
                },
              }}
            >
              <FaTachometerAlt style={{ marginRight: '10px' }} />
              {!isCollapsed && 'Dashboard'}
            </Link>
          </li>

          {/* Issues */}
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
                ':hover': {
                  backgroundColor: '#BBDEFB', // Hover effect
                },
              }}
            >
              <FaBell style={{ marginRight: '10px' }} />
              {!isCollapsed && 'Issues'}
            </Link>
          </li>

          {/* Reminders */}
          <li style={{ marginBottom: '15px' }}>
            <Link
              to="/reminders"
              style={{
                color: '#333',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                borderRadius: '5px',
                transition: 'background-color 0.3s',
                ':hover': {
                  backgroundColor: '#BBDEFB', // Hover effect
                },
              }}
            >
              <FaBell style={{ marginRight: '10px' }} />
              {!isCollapsed && 'Reminders'}
            </Link>
          </li>

          {/* Service Dropdown */}
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
                ':hover': {
                  backgroundColor: '#BBDEFB', // Hover effect
                },
              }}
              onClick={toggleServiceDropdown}
            >
              <FaWrench style={{ marginRight: '10px' }} />
              {!isCollapsed && 'Service'}
              {!isCollapsed && (isServiceOpen ? (
                <FaChevronUp style={{ marginLeft: 'auto' }} />
              ) : (
                <FaChevronDown style={{ marginLeft: 'auto' }} />
              ))}
            </div>
            {isServiceOpen && !isCollapsed && (
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
                      ':hover': {
                        backgroundColor: '#BBDEFB', // Hover effect
                      },
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
                      ':hover': {
                        backgroundColor: '#BBDEFB', // Hover effect
                      },
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

      {/* Settings & Help Section */}
      <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
        <Link
          to="/settings"
          style={{
            color: '#333',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
            ':hover': {
              backgroundColor: '#BBDEFB', // Hover effect
            },
          }}
        >
          <FaCog style={{ marginRight: '10px' }} />
          {!isCollapsed && 'Settings'}
        </Link>
        <Link
          to="/help"
          style={{
            color: '#333',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
            ':hover': {
              backgroundColor: '#BBDEFB', // Hover effect
            },
          }}
        >
          <FaQuestionCircle style={{ marginRight: '10px' }} />
          {!isCollapsed && 'Help & Support'}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;