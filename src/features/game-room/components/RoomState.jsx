function RoomState({ setGameState }) {
  return (
    <>
      <h1>Room Name</h1>
      <button onClick={setGameState}> Back to Start</button>
    </>
  );
}

export default RoomState;
