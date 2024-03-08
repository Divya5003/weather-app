'use client'
import React from 'react';

const WeatherDetails = ({ data }) => {
  return (
    <div className='w-2/3'>
      <h2 className='text-lg font-semibold text-[#1D5D9B] my-4'>Current Weather</h2>
      <p className='my-2 font-semibold'>{data.temperature}°C</p>
      <p className='my-2 font-semibold'>{data.description}</p>
    </div>
  );
};

export default WeatherDetails;
