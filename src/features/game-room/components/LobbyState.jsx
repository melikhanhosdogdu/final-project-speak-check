function LobbyState({ setGameState }) {
  return (
    <>
      <h1>Lobby</h1>
      <button onClick={setGameState}> Next State</button>
    </>
  );
}

export default LobbyState;
