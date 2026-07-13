import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        EduHire
      </div>

    

      <div className="header-buttons">

        <button className="login-btn">
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