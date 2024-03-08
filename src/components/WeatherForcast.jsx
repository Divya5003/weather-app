'use client'
import React from 'react';

const WeatherForecast = ({ data }) => {
  return (
    <div className='w-2/3'>
      <h2 className='text-lg font-semibold text-[#1D5D9B] my-4'>5-Day Forecast</h2>
      <div className='grid grid-cols-5 gap-4'>
        {data.map((day, index) => (
          !(index % 8) &&
          <div key={index} className='bg-[#AFD3E2] shadow-lg p-4 rounded-md'>
            <p className='my-2 font-semibold'>{day.date}</p>
            <p className='my-2 font-semibold'>{day.temperature}°C</p>
            <p className='my-2 font-semibold'>{day.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
