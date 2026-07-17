import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo">EduHire</div>

      <div className="header-buttons">
        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Log In
        </button>

        <button className="start-btn">
          Get Started
        </button>
      </div>
    </header>
  );
}

export default Header;