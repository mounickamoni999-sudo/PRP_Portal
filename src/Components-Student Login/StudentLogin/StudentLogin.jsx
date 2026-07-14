import { useState } from "react";
import "./StudentLogin.css";

function StudentLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email === "student@eduhire.com" &&
      password === "123456"
    ) {
      alert("Login Successful!");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="StudentLogin-page">

      {/* Navbar */}
      <header className="StudentLogin-navbar">

        <div className="StudentLogin-logo">
          EduHire
        </div>

        <div className="StudentLogin-navbar-right">
          <a href="/">Support</a>

          <button className="StudentLogin-help-btn">
            Help Center
          </button>
        </div>

      </header>

      {/* Main */}
      <main className="StudentLogin-main">

        <button className="StudentLogin-back-btn">
          ← Back
        </button>
        

        <div className="StudentLogin-wrapper">

          <h1>Student Login</h1>

          <p>
            Enter your credentials to access the portal.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="StudentLogin-input-group">

              <label>University Email</label>

              <input
                type="email"
                placeholder="name@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>

            <div className="StudentLogin-input-group">

              <label>Password</label>

              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>

            <button
              type="submit"
              className="StudentLogin-signin-btn"
            >
              Sign In
            </button>

          </form>

          <div className="StudentLogin-bottom-links">

            <a href="/">
              Forgot Password?
            </a>

            <a href="/">
              Request Access
            </a>

          </div>

        </div>

      </main>

      {/* Footer */}

      <footer className="StudentLogin-footer">

        <p>
          © 2026 Placement Platform. All rights reserved.
        </p>

        <div>

          <a href="/">Privacy Policy</a>

          <a href="/">Terms of Service</a>

          <a href="/">Cookie Policy</a>

        </div>

      </footer>

    </div>
  );
}

export default StudentLogin;