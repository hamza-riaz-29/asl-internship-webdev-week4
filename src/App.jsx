import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import RecentSearches from './components/RecentSearches';
import { useFetch } from './hooks/useFetch';

export default function App() {
  const [city, setCity] = useState('Lahore');
  const [coords, setCoords] = useState({ lat: 31.5204, lon: 74.3587 });
  const [recent, setRecent] = useState(() => {
    return JSON.parse(localStorage.getItem('recentSearches') || '[]');
  });

  // Geocoding Search
  const handleSearch = async (searchCity) => {
    try {
      const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchCity}&count=1`);
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        const { latitude, longitude, name } = data.results[0];
        setCity(name);
        setCoords({ lat: latitude, lon: longitude });

        // Update Recent Searches in localStorage
        const updated = [name, ...recent.filter((c) => c.toLowerCase() !== name.toLowerCase())].slice(0, 5);
        setRecent(updated);
        localStorage.setItem('recentSearches', JSON.stringify(updated));
      } else {
        alert('City not found!');
      }
    } catch (err) {
      alert('Failed to search city!');
    }
  };

  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;
  const { data: weather, loading, error } = useFetch(weatherUrl);

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#1E2D3D', marginBottom: '24px' }}>
        React Weather Dashboard
      </h1>

      <SearchBar onSearch={handleSearch} />
      <RecentSearches searches={recent} onSelect={handleSearch} />

      {loading && <p style={{ textAlign: 'center', color: '#007bff' }}>Loading weather data...</p>}
      {error && <p style={{ textAlign: 'center', color: '#d9534f' }}>Error: {error}</p>}

      {!loading && !error && (
        <>
          <CurrentWeather weather={weather} city={city} />
          <Forecast weather={weather} />
        </>
      )}
    </div>
  );
}