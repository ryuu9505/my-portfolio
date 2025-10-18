import React from 'react';

export default function ProfileDropdown({ onMyPage, onLogout }) {
  return (
    <div
      className="profile-dropdown"
      style={{
        position: 'absolute',
        top: 50,
        right: 0,
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        borderRadius: 8,
        minWidth: 120,
        zIndex: 2000,
        padding: '8px 0',
      }}
    >
      <div
        style={{
          padding: '10px 20px 5px 20px',
          cursor: 'pointer',
          fontWeight: 300,
          color: '#222',
        }}
        onClick={onMyPage}
      >
        My Page
      </div>
      <div
        style={{
          padding: '5px 20px 10px 20px',
          cursor: 'pointer',
          fontWeight: 300,
          color: '#222',
        }}
        onClick={onLogout}
      >
        Logout
      </div>
    </div>
  );
}
