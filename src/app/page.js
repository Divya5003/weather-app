"use client"

import WeatherDetails from "../components/WeatherDetails";
import WeatherForecast from "../components/WeatherForcast";
import WeatherForm from "../components/WeatherForm";
import { useState } from "react";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };
  return (
    <main>
      <div className="w-full p-4 text-xl bg-[#19A7CE] text-white">Weather App</div>
      <div>
        <div className="m-6 flex justify-center">
          <WeatherForm onWeatherData={handleWeatherData} />
        </div>
        {weatherData && (
          <>
            <div className="flex justify-center">
            <WeatherDetails data={weatherData.current} />
            </div>
            <div className="flex justify-center">
            <WeatherForecast data={weatherData.forecast} />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
