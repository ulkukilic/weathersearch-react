import { useState } from 'react';

export default function Weather({ weatherData, onSearch }) {
    const [cityInput, setCityInput] = useState('');

const handleSearch = () => {
    if (cityInput.trim()) {
        onSearch(cityInput);
    }
};

   const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
};

    return (
        <>
            <section id="search-section" className="w-100 d-flex align-items-center gap-3 mb-4 px-3">
                <input
                    id="cityInput"
                    type="text"
                    placeholder="Şehir adı girin ..."
                    className="form-control"
                    value={cityInput}
                    onChange={(e) => setCityInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button id="searchBtn" className="btn btn-primary" onClick={handleSearch}>
                    Ara
                </button>
            </section>

            <section 
                id="weatherCard" 
                className={`card text-center p-4 w-100 shadow-lg ${!weatherData ? 'd-none' : ''}`}
            >
                {weatherData && (
                    <>
                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <img
                                id="weatherIcon"
                                src={`https://openweathermap.org/img/wn/${weatherData.weather?.[0]?.icon}@2x.png`}
                                alt="Hava durumu ikonu"
                                className="img-fluid"
                                style={{ width: "80px", height: "80px" }}
                            />
                        </div>

                        <h2 id="cityName" className="h4 mb-2">{weatherData.name}</h2>
                        <p id="temperature" className="display-4 fw-bold mb-2">
                            {weatherData.main?.temp}°C
                        </p>
                        <p id="conditionText" className="text-muted">
                            {weatherData.weather?.[0]?.description}
                        </p>
                        <p id="dateTime" className="text-muted small mt-2">
                            {new Date().toLocaleString('tr-TR')}
                        </p>
                    </>
                )}
            </section>
        </>
    );
}
