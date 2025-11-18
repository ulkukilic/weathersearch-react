export default function Weather({ weatherData }) {

    return (
        <>
            <section id="search-section" className="w-100 d-flex align-items-center gap-3 mb-4 px-3">
                <input
                    id="cityInput"
                    type="text"
                    placeholder="Şehir adı girin ..."
                    className="form-control"
                />
                <button id="searchBtn" className="btn btn-primary">Ara</button>
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
                                src={weatherData.condition?.icon || ''}
                                alt="Hava durumu ikonu"
                                className="img-fluid"
                                style={{ width: "80px", height: "80px" }}
                            />
                        </div>

                        <h2 id="cityName" className="h4 mb-2">{weatherData.name}</h2>
                        <p id="temperature" className="display-4 fw-bold mb-2">
                            {weatherData.temp_c}°C
                        </p>
                        <p id="conditionText" className="text-muted">
                            {weatherData.condition?.text}
                        </p>
                        <p id="dateTime" className="text-muted small mt-2">
                            {weatherData.localtime}
                        </p>
                    </>
                )}
            </section>
        </>
    );
}
