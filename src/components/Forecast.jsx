import React from 'react';

export default function Forecast({ weather }) {
  if (!weather || !weather.daily) return null;

  const { time, temperature_2m_max, temperature_2m_min } = weather.daily;

  return (
    <div style={{ marginTop: '20px' }}>
      <h3 style={{ color: '#1E2D3D', marginBottom: '10px' }}>7-Day Forecast</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '10px' }}>
        {time.slice(0, 5).map((date, index) => (
          <div key={date} style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e0e0e0',
            padding: '12px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <strong style={{ display: 'block', fontSize: '12px', color: '#6c757d' }}>{date}</strong>
            <div style={{ color: '#d9534f', marginTop: '5px' }}>{temperature_2m_max[index]}°C</div>
            <div style={{ color: '#0275d8' }}>{temperature_2m_min[index]}°C</div>
          </div>
        ))}
      </div>
    </div>
  );
}