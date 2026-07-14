import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        EduHire
      </div>

    

      <div className="header-buttons">

       <Link to="/login">
       <button className="login-btn">
        Log In
       </button>
       </Link>

        <button className="start-btn">
          Get Started
        </button>

      </div>

    </header>
  );
}

export default Header;