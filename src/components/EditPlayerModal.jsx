/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const EditPlayerModal = ({ player, isOpen, onClose, onSave }) => {
  const [name, setName] = useState(player.name);
  const [skill, setSkill] = useState(player.skill);
  const [position, setPosition] = useState(player.position);

  useEffect(() => {
    if (isOpen) {
      setName(player.name);
      setSkill(player.skill);
      setPosition(player.position);
    }
  }, [isOpen, player]);

  const handleSave = () => {
    onSave({ name, skill, position });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white p-6 rounded-md w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Edit Player</h2>

        <div>
          <label className="block text-gray-700 font-medium">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Skill Level:</label>
          <select
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="mt-2 w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Position:</label>
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="mt-2 w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
          >
            <option value="forward">Forward</option>
            <option value="midfielder">Midfielder</option>
            <option value="defender">Defender</option>
            <option value="goalkeeper">Goalkeeper</option>
          </select>
        </div>

        <div className="flex justify-end space-x-4 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPlayerModal;
