import React from 'react';

export default function RecentSearches({ searches, onSelect }) {
  if (!searches || searches.length === 0) return null;

  return (
    <div style={{ marginBottom: '20px' }}>
      <small style={{ color: '#6c757d', display: 'block', marginBottom: '6px' }}>Recent Searches:</small>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {searches.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(item)}
            style={{
              padding: '6px 12px',
              borderRadius: '16px',
              border: '1px solid #1E2D3D',
              backgroundColor: '#eef2f5',
              cursor: 'pointer',
              fontSize: '13px'
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}