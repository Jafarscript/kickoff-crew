/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const TeamConfig = ({ onUpdate }) => {
  const [inputValue, setInputValue] = useState('');
  const [playersPerTeam, setPlayersPerTeam] = useState(5);

  const handleChange = (event) => {
    // Allow user to input numbers only
    const value = event.target.value;
    if (/^\d*$/.test(value)) { // Regex to allow only digits
      setInputValue(value);
    }
  };

  const handleApply = () => {
    // Convert the input value to a number and validate it
    let value = parseInt(inputValue, 10);
    if (isNaN(value) || value < 1) value = 1;
    if (value > 10) value = 10;
    
    setPlayersPerTeam(value);
    onUpdate(value); // Notify the parent component with the new value
  };

  return (
    <section className="p-2 md:p-5">
      <h2 className="text-xl font-semibold mb-4">Team Configuration</h2>
      <div className="flex items-center flex-wrap gap-4">
        <label htmlFor="playersPerTeam" className="mr-3">Players per Team:</label>
        <input
          type="text"
          id="playersPerTeam"
          value={inputValue}
          onChange={handleChange}
          className="px-2 py-1 border rounded-md text-black"
          placeholder="Enter number between 1-10"
        />
        <button
          onClick={handleApply}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
        >
          Apply
        </button>
      </div>
      {playersPerTeam > 0 && (
        <p className="mt-4 text-green-500">
          Current Players per Team: {playersPerTeam}
        </p>
      )}
    </section>
  );
};

export default TeamConfig;
