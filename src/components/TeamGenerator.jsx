/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const TeamGenerator = ({ players, playersPerTeam }) => {
  const [teams, setTeams] = useState([]);

  const generateTeams = () => {
    const totalPlayers = players.length;

    // Check if there are enough players to form teams
    if (totalPlayers < 2) {
      alert("Not enough players to form teams.");
      return;
    }

    // Shuffle players
    const shuffledPlayers = [...players].sort(() => 0.5 - Math.random());

    // Calculate the number of teams
    const numberOfTeams = Math.ceil(totalPlayers / playersPerTeam);
    const newTeams = Array.from({ length: numberOfTeams }, () => []);

    // Distribute players into teams
    shuffledPlayers.forEach((player, index) => {
      newTeams[index % numberOfTeams].push(player);
    });

    setTeams(newTeams);
  };

  return (
    <section className="p-5">
      <h2 className="text-xl font-semibold text-white mb-4">Generate Teams</h2>
      <button
        onClick={generateTeams}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition mb-5"
      >
        Generate Teams
      </button>

      <div className="flex flex-col lg:flex-row lg:space-x-10">
        {teams.map((team, index) => (
          <div key={index} className="bg-blue-700 p-5 rounded-md flex-1 mt-5 lg:mt-0">
            <h3 className="text-lg font-bold text-white mb-3">Team {index + 1}</h3>
            {team.length === 0 ? (
              <p className="text-gray-300">No players in this team.</p>
            ) : (
              <ul className="space-y-2">
                {team.map((player, playerIndex) => (
                  <li key={playerIndex} className="text-gray-200">
                    {player.name} - {player.skill} - {player.position}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamGenerator;
