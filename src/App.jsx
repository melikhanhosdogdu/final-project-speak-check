import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import FeedPage from "../src/features/feed/FeedPage.jsx";
import Login from "./features/auth/Login.jsx";
import SignUp from "./features/auth/SignUp.jsx";
import ListeningPage from "./features/quiz/ListenningPage.jsx";
import GameRoomPage from "./features/game-room/GameRoomPage.jsx";
import ProfilePage from "./features/profile/ProfilePage.jsx";

function App() {
  const location = useLocation();
  const hideSidebar =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideSidebar && <Sidebar />}
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/listening-quiz" element={<ListeningPage />} />
        <Route path="/game-room" element={<GameRoomPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/*" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
