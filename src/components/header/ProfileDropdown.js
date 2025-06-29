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
        minWidth: 140,
        zIndex: 2000,
        padding: '8px 0',
      }}
    >
      <div
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
          fontWeight: 500,
          color: '#222',
        }}
        onClick={onMyPage}
      >
        마이페이지
      </div>
      <div
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
          fontWeight: 500,
          color: '#222',
        }}
        onClick={onLogout}
      >
        로그아웃
      </div>
    </div>
  );
}
