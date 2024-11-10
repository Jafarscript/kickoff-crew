/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React, { useState } from "react";
import Header from "./components/Header";
import PlayerForm from "./components/PlayerForm";
import PlayerList from "./components/PlayerList";
import EditPlayerModal from "./components/EditPlayerModal";
import TeamGenerator from "./components/TeamGenerator";
import TeamConfig from "./components/TeamConfig";
import Footer from "./components/Footer";
import { enqueueSnackbar } from "notistack";


const App = () => {
  const [players, setPlayers] = useState(() => {
    const savedPlayers = localStorage.getItem("players");
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  });

  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playersPerTeam, setPlayersPerTeam] = useState(5);

  // Function to add a new player to the list
  const addPlayer = (newPlayer) => {
    const updatedPlayers = [...players, newPlayer];
    setPlayers(updatedPlayers);
    localStorage.setItem("players", JSON.stringify(updatedPlayers)); // Save to localStorage
    enqueueSnackbar("Player Added Successfully", {variant: 'success'})
  };

  const deletePlayer = (index) => {
    const updatedPlayers = players.filter((_, i) => i !== index);
    setPlayers(updatedPlayers);
    localStorage.setItem("players", JSON.stringify(updatedPlayers)); // Save to localStorage
    enqueueSnackbar("Player Deleted Successfully", {variant: 'success'})
  };

  const editPlayer = (index) => {
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  const savePlayer = (updatedPlayer) => {
    const updatedPlayers = players.map((player, index) =>
      index === editingIndex ? updatedPlayer : player
    );
    setPlayers(updatedPlayers);
    localStorage.setItem("players", JSON.stringify(updatedPlayers)); // Save to localStorage
    setIsModalOpen(false);
    enqueueSnackbar("Player Edited Successfully", {variant: 'success'})
  };

  const resetPlayers = () => {
    setPlayers([]);
    localStorage.removeItem("players"); // Clear local storage
    enqueueSnackbar("Players List Clear", {variant: 'success'})
  };

  return (
    <section>
      <Header />
      <section className="p-5 px-2 md:px-5 flex flex-col">
        <PlayerForm addPlayer={addPlayer} />
        <TeamConfig onUpdate={setPlayersPerTeam} /> 
        <PlayerList
          players={players}
          editPlayer={editPlayer}
          deletePlayer={deletePlayer}
          resetPlayers={resetPlayers}
        />
        <TeamGenerator players={players} playersPerTeam={playersPerTeam} />
      </section>
      {isModalOpen && (
        <EditPlayerModal
          player={players[editingIndex]}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={savePlayer}
        />
      )}
      <Footer />
    </section>
  );
};

export default App;
