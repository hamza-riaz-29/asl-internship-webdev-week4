# ASL Internship - Week 4: Front-End Frameworks (React)

## Project Overview
This project is a responsive, component-based **React Weather & Location Dashboard** built as part of Week 4 of the Advance Soft Logics (ASL) Remote Internship Program (Web Development Track).

The application transitions the previous Vanilla JS implementation into a modern React architecture utilizing declarative UI rendering, modular components, custom hooks, side-effects management, controlled form state, and client-side persistence.

---

## Technical Stack
* **Framework:** React 18 (via Vite)
* **Language:** JavaScript (ES6+)
* **Icons:** Lucide React (`lucide-react`)
* **API Endpoints:** Open-Meteo Geocoding API & Open-Meteo Weather Forecast API
* **State Management:** React `useState`, `useEffect`, Custom Hooks (`useFetch`), and `localStorage`

---

## Project Architecture & Directory Structure

```text
asl-internship-webdev-week4-hamza/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx         # Controlled input form for city queries
│   │   ├── CurrentWeather.jsx    # Displays real-time temperature & wind speed
│   │   ├── Forecast.jsx          # Renders 5-day weather forecast collection
│   │   └── RecentSearches.jsx    # Renders interactive search history chips
│   ├── hooks/
│   │   └── useFetch.js           # Custom hook for asynchronous API state management
│   ├── App.jsx                   # Primary state controller and root layout
│   ├── main.jsx                 # Application entry point
│   └── index.css                 # Global CSS styling
├── package.json
└── README.md