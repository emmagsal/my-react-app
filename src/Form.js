import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  let [loaded, setLoaded] = useState(false);
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [img, setImg] = useState("");

  function showInfo(response) {
    event.preventDefault();
    setLoaded(true);
    setTemperature(`Temperature: ${Math.round(response.data.main.temp)}°C`);
    setDescription(`Description: ${response.data.weather[0].description}`);
    setHumidity(`Humidity: ${response.data.main.humidity}%`);
    setWind(`Wind: ${response.data.wind.speed}km/h`);
    setImg(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  function getInfo(event) {
    event.preventDefault();
    let apiKey = "81e334dfd2ddb96e6b5193c1f2e3e97f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showInfo);
  }
  function searchCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={getInfo}>
      <input type="search" onChange={searchCity} />
      <input type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>{temperature}</li>
          <li>{description}</li>
          <li>{humidity}</li>
          <li>{wind}</li>
          <li>
            <img className="weather-icon" alt="" src={img} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
