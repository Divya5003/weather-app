'use client'

import React, { useState } from 'react';
import axios from 'axios';

const WeatherForm = ({ onWeatherData }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/api/weather?location=${location}`);
      const data = response.data;
      onWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='w-1/3'>
      <form onSubmit={handleSubmit}>
        <div className='relative'>
          <input
            id='location'
            type='text'
            value={location}
            className='rounded-md px-6 pt-6 pb-1 w-full text-lg focus:outline-none text-[#146C94] bg-[#F6F1F1] peer'
            placeholder=' '
            onChange={(e) => setLocation(e.target.value)}
          />
          <label
            htmlFor='username'
            className='absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3'
          >
            Enter city or coordinates
          </label>
        </div>
          <br />
          <button
            className='bg-[#146C94] text-white rounded-md px-6 py-2 w-full text-lg focus:outline-none'
            type="submit"
          >
            Get Weather
          </button>
      </form>
    </div>
  );
};

export default WeatherForm;
