import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>SpeakCheck</h3>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/" className="sidebar-link">
          Home
        </NavLink>
        <NavLink to="/listening-quiz" className="sidebar-link">
          Listening Quiz
        </NavLink>
        <NavLink to="/game-room" className="sidebar-link">
          Game Room
        </NavLink>
        <NavLink to="/profile" className="sidebar-link">
          Profile
        </NavLink>
      </nav>
      <div className="sidebar-footer">
        <NavLink to="/login" className="sidebar-link logout-link">
          Log Out
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
