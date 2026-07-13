import "./Navbar.css";

function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Mounica Reddy</h2>
      </div>

      <ul className="nav-links">
        <li
        
          className={activePage === "Home" ? "active" : ""}
          onClick={() => setActivePage("Home")}
        >
          Home
          
        </li>

        <li
          className={activePage === "Jobs" ? "active" : ""}
          onClick={() => setActivePage("Jobs")}
        >
          Jobs
        </li>

        <li
          className={activePage === "Profile" ? "active" : ""}
          onClick={() => setActivePage("Profile")}
        >
          Profile
        </li>

        <li
          className={activePage === "Settings" ? "active" : ""}
          onClick={() => setActivePage("Settings")}
        >
          Settings
        </li>
      </ul>

      <button className="logout-btn">Logout</button>
    </nav>
  );
}

export default Navbar;