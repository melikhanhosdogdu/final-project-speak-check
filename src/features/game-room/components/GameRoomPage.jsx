import { useState } from "react";
import { GameState } from "../types/GameStates";
import IdleState from "./IdleState";
import CreateGameRoomState from "./CreateGameRoomState";
import LobbyState from "./LobbyState";
import RoomState from "./RoomState";

function GameRoomPage() {
  const [gameState, setGameState] = useState(GameState.IDLE);

  const showCurrntPage = () => {
    switch (gameState) {
      case GameState.IDLE:
        return (
          <IdleState setGameState={setGameState(GameState.CREATE_GAME_ROOM)} />
        );
      case GameState.CREATE_GAME_ROOM:
        return (
          <CreateGameRoomState setGameState={setGameState(GameState.LOBBY)} />
        );
      case GameState.LOBBY:
        return <LobbyState setGameState={setGameState(GameState.ROOM)} />;
      case GameState.ROOM:
        return <RoomState setGameState={setGameState(GameState.IDLE)} />;

      default:
        break;
    }
  };
  return <>{showCurrntPage()}</>;
}

export default GameRoomPage;
