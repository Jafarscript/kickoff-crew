/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

const skillWeight = {
  beginner: 1,
  intermediate: 2,
  expert: 3,
};

// Function to calculate the total skill score of a team
const calculateTeamStrength = (team) => {
  return team.reduce((acc, player) => acc + skillWeight[player.skill], 0);
};

// Function to count positions in a team
const countPositions = (team, position) => {
  return team.filter(player => player.position === position).length;
};

const TeamGenerator = ({ players, playersPerTeam }) => {
  const [teams, setTeams] = useState(() => {
    const savedTeams = localStorage.getItem("teams");
    return savedTeams ? JSON.parse(savedTeams) : [];
  });

  // useEffect(() => {
  //   generateTeams();
  // }, [players, playersPerTeam]);

  const generateTeams = () => {
    // Calculate number of teams needed
    const numberOfTeams = Math.ceil(players.length / playersPerTeam);
    const newTeams = Array.from({ length: numberOfTeams }, () => []);

    // Group players by skill levels
    const sortedPlayers = [...players].sort((a, b) => skillWeight[b.skill] - skillWeight[a.skill]);

    // Distribute players while balancing team strength and positions
    sortedPlayers.forEach(player => {
      let weakestTeamIndex = 0;
      let minStrength = Infinity;

      // Find the weakest team in terms of skill weight and position distribution
      for (let i = 0; i < newTeams.length; i++) {
        const teamStrength = calculateTeamStrength(newTeams[i]);
        const positionCount = countPositions(newTeams[i], player.position);

        // Prioritize teams with lower strength and fewer players in the player's position
        if (teamStrength < minStrength || 
            (teamStrength === minStrength && positionCount < playersPerTeam / 4)) {
          weakestTeamIndex = i;
          minStrength = teamStrength;
        }
      }

      // Add the player to the weakest team
      newTeams[weakestTeamIndex].push(player);
    });

    localStorage.setItem("teams", JSON.stringify(newTeams));
    setTeams(newTeams);
  };

  return (
    <section className="p-2 md:p-5">
      <button
        onClick={generateTeams}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition mb-5"
      >
        Generate Teams
      </button>
      <h2 className="text-lg font-semibold mb-4">Generated Teams</h2>
      {teams.length > 0 ? (
        teams.map((team, index) => (
          <div key={index} className="mb-6 p-4 bg-blue-700 rounded">
            <h3 className="font-semibold text-white mb-3">Team {index + 1}</h3>
            <ul className="space-y-2">
              {team.map((player, idx) => (
                <li key={idx} className="text-gray-200">
                  {player.name} - {player.skill} ({player.position})
                </li>
              ))}
            </ul>
            <p className="text-gray-400 mt-3">
              Total Strength: {calculateTeamStrength(team)}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-300">No teams generated yet.</p>
      )}
    </section>
  );
};

export default TeamGenerator;
