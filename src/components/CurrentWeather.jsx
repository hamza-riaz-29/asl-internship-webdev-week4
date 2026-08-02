import React from 'react';

export default function CurrentWeather({ weather, city }) {
  if (!weather) return null;

  const current = weather.current_weather;

  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '12px',
      marginBottom: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ margin: '0 0 10px 0', color: '#1E2D3D' }}>{city}</h2>
      <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#007bff' }}>
        {current.temperature}°C
      </div>
      <p style={{ margin: '5px 0', color: '#6c757d' }}>Wind Speed: {current.windspeed} km/h</p>
    </div>
  );
}