import React, { useEffect, useState } from "react";
import "../weather/weather.css";
import { useLocation } from "react-router-dom";


const Weather = () => {
  const location = useLocation();
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState(location.state.destination);
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metrics&appid=7f5a79162b152044e6fca1541703d6c0`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        
        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">
                {city.temp} Kelvin
                <h3 className="tempmin_max">
                  Min :{city.temp_min} Kelvin <br />
                  Max : {city.temp_max} Kelvin
                </h3>
              </h1>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};
export default Weather;
