/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";


const PlayerList = ({ players, editPlayer, deletePlayer, resetPlayers }) => {
  return (
    <section className="p-2 md:p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Players List ({players.length})</h2>
        <button
          onClick={resetPlayers}
          className="mb-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Reset Players
        </button>
      </div>
      {players.length === 0 ? (
        <p className="text-gray-300">No players added yet.</p>
      ) : (
        <ul className="space-y-3">
          {players.map((player, index) => (
            <li
              key={index}
              className="bg-blue-700 p-4 rounded flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{player.name}</p>
                <p className="text-sm text-gray-200">
                  Skill: {player.skill} | Position: {player.position}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => editPlayer(index)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => deletePlayer(index)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PlayerList;
