function IdleState({ setGameState }) {
  return (
    <>
      <h1>Listening Game</h1>
      <button onClick={setGameState}> Next State</button>
    </>
  );
}

export default IdleState;
