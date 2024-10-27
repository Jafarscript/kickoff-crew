/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React, { useState } from 'react'
import Header from './components/Header'
import PlayerForm from './components/PlayerForm'
import PlayerList from './components/PlayerList';
import EditPlayerModal from './components/EditPlayerModal';
import TeamGenerator from './components/TeamGenerator';
import TeamConfig from './components/TeamConfig';
import Footer from './components/Footer';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playersPerTeam, setPlayersPerTeam] = useState(5); 

  // Function to add a new player to the list
  const addPlayer = (newPlayer) => {
    setPlayers([...players, newPlayer]);
  };

  const deletePlayer = (index) => {
    setPlayers(players.filter((_, i) => i !== index));
  };

  const editPlayer = (index) => {
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  const savePlayer = (updatedPlayer) => {
    setPlayers(players.map((player, index) =>
      index === editingIndex ? updatedPlayer : player
    ));
    setIsModalOpen(false);
  };
  
  return (
    <section>
      <Header />
      <section className='p-5 flex flex-col'>
        <PlayerForm addPlayer={addPlayer} />
        {/* <TeamConfig onUpdate={setPlayersPerTeam} />  */}
        <PlayerList players={players} editPlayer={editPlayer} deletePlayer={deletePlayer}/>
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
  )
}

export default App