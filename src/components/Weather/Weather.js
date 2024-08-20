import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Weather.css";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&APPID=dd09df7c1c4bc5ca8f4c44fa94fe20d1`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, []);

  return (
    <Container fluid className="weather-container text-center py-5">
      <Row>
        <Col>
          <h2>Current Weather in Amsterdam</h2>
          {error && <p className="error">Error: {error}</p>}
          {weather ? (
            <div id="weather-report">
              <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)} °C</p>
              <p>Weather: {weather.weather[0].description}</p>
            </div>
          ) : (
            !error && <p>Loading...</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Weather;
