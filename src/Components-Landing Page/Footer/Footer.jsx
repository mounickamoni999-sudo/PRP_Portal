import "./Footer.css";

import share from "../../assets/shareIcon.webp";
import mail from "../../assets/mailIcon.webp";
import send from "../../assets/sendbutton.webp";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-top">

          {/* Logo Section */}

          <div className="footer-column">

            <h2>ConnectHire</h2>

            <p>
              The leading platform for professional placements and talent
              acquisition. Connecting ambition with industry excellence.
            </p>

            <div className="social-icons">

              <img src={share} alt="Share" />

              <img src={mail} alt="Mail" />

            </div>

          </div>

          {/* Company */}

          <div className="footer-column">

            <h4>COMPANY</h4>

            <a href="#">About Us</a>

            <a href="#">Success Stories</a>

            <a href="#">Partner Program</a>

            <a href="#">Careers</a>

          </div>

          {/* Support */}

          <div className="footer-column">

            <h4>SUPPORT</h4>

            <a href="#">Contact Support</a>

            <a href="#">Privacy Policy</a>

            <a href="#">Terms of Service</a>

            <a href="#">Cookie Policy</a>

          </div>

          {/* Newsletter */}

          <div className="footer-column">

            <h4>NEWSLETTER</h4>

            <p>
              Get the latest career opportunities delivered to your inbox.
            </p>

            <div className="newsletter">

              <input
                type="email"
                placeholder="Email"
              />

              <button>

                <img src={send} alt="Send" />

              </button>

            </div>

          </div>

        </div>

        <hr />

        <div className="footer-bottom">

          <p>
            © 2024 ConnectHire. Empowering professional futures across the globe.
          </p>

          <div className="footer-links">

            <a href="#">Status</a>

            <a href="#">Sitemap</a>

            <a href="#">Security</a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;