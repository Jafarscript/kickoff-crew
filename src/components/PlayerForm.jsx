/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const PlayerForm = ({ addPlayer }) => {
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("beginner");
  const [position, setPosition] = useState("forward");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return alert("Please enter the player's name");

    addPlayer({ name, skill, position });

    setName("");
    setSkill("beginner");
    setPosition("forward");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 border rounded-md shadow-lg max-w-md mx-auto bg-white space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Add New Player</h2>

      <div className="flex flex-col">
        <label className="text-gray-700 font-medium">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Player Name"
          className="mt-2 p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 font-medium">Skill Level:</label>
        <select
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          className="mt-2 p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 font-medium">Position:</label>
        <select
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="mt-2 p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
        >
          <option value="forward">Forward</option>
          <option value="midfielder">Midfielder</option>
          <option value="defender">Defender</option>
          <option value="goalkeeper">Goalkeeper</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full p-3 bg-green-500 text-white rounded-md font-semibold mt-4 hover:bg-green-600 transition-colors"
      >
        Add Player
      </button>
    </form>
  );
};

export default PlayerForm;
