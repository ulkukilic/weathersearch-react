# Weather Search React App

A weather search application developed with React, using the OpenWeatherMap API.

## Features

- 🌍 Search weather by city name
- 🌡️ Real-time temperature display (Celsius)
- ⌨️ Search with Enter key support
- 📱 Responsive design (Bootstrap)
- 🇹🇷 Turkish language support

## Technologies

- React 18
- Bootstrap 5
- OpenWeatherMap API
- React (useState, useEffect)

## Installation

1. Clone the project:
```bash
cd weathersearch-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the project:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
weathersearch-react/
├── src/
│   ├── components/
│   │   └── weather/
│   │       ├── Weather.jsx          # Main weather display component
│   │       └── WeatherSearch.jsx    # API calling component
│   ├── App.js                       # Main application component
│   └── index.js                     
├── public/
└── package.json
```

## Usage

1. Enter the city name in the search box (e.g., "Istanbul", "Ankara")
2. Click the "Search" button or press Enter key
3. Weather information will be displayed:
   - City name
   - Current temperature
   - Weather description
   - Weather icon
   - Date/time

## API

The project uses [OpenWeatherMap API](https://openweathermap.org/api).

**API Endpoint:** `https://api.openweathermap.org/data/2.5/weather`

**Parameters:**
- `q`: City name
- `appid`: API key
- `units`: metric (for Celsius)
- `lang`: tr (for Turkish)

## Development

To develop the project:

```bash
npm start    # Starts the development server
npm test     # Runs the tests
npm run build # Creates production build
```

## Components

### Weather.jsx
- Renders the user interface
- Manages search input and button
- Displays weather data

### WeatherSearch.jsx
- Sends requests to OpenWeatherMap API
- Fetches weather data
- Passes data to parent component
