import { useEffect } from "react";  
export default function WeatherSearch({ searchQuery, setWeatherData}) {
const apiKey = 'e81760df781c7933b55945c547275fcc';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

useEffect(() => {
    async function fetchData() {
        if (!searchQuery.trim()) return;

        const response = await fetch(`${apiUrl}?q=${searchQuery}&appid=${apiKey}&units=metric&lang=tr`);
        const data = await response.json();

        setWeatherData(data); 
    }

    fetchData();
}, [searchQuery]);
}
