/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const TeamConfig = ({ onUpdate }) => {
  const [playersPerTeam, setPlayersPerTeam] = useState(0);

  const handleChange = (event) => {
    const value = Math.max(1, Math.min(10, event.target.value)); // Ensure value is between 1 and 10
    setPlayersPerTeam(value);
    onUpdate(value); // Notify parent component about the change
  };

  return (
    <section className="p-5">
      <h2 className="text-xl font-semibold mb-4">Team Configuration</h2>
      <div className="flex items-center">
        <label htmlFor="playersPerTeam" className="mr-3">Players per Team:</label>
        <input
          type="number"
          id="playersPerTeam"
          value={playersPerTeam}
          onChange={handleChange}
          className="px-2 py-1 border rounded-md text-black"
          min="1"
          max="10"
        />
      </div>
    </section>
  );
};

export default TeamConfig;
