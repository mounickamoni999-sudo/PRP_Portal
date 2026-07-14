import "./SolutionsSection.css";

import candidate from "../../assets/candidates.webp";
import employer from "../../assets/employee.webp";
import institution from "../../assets/institutions.webp";
import arrow from "../../assets/arrow-right.webp";
import arrowRed from "../../assets/arrow.webp";

function SolutionsSection() {
  return (
    <section className="solutions">
      <div className="solutions-container">

        <div className="solutions-heading">
          <h2>Tailored Solutions for Everyone</h2>

          <p>
            Seamlessly connecting talent, growth, and institutional excellence
            with a modern, human-centric approach.
          </p>
        </div>

        <div className="cards">

          {/* Card 1 */}

          <div className="card">

            <img
              src={candidate}
              alt="Candidate"
              className="card-icon"
            />

            <h3>For Candidates</h3>

            <p>
              Accelerate your career growth with AI-powered job matching and
              direct access to top-tier hiring managers across the globe.
            </p>

            <ul>
              <li>✔ Personalized Job Alerts</li>
              <li>✔ AI Resume Optimization</li>
            </ul>

            <a href="#">
              Get Started
              <img src={arrow} alt="Arrow" className="arrow-icon" />
            </a>

          </div>

          {/* Card 2 */}

          <div className="card">

            <img
              src={employer}
              alt="Employer"
              className="card-icon"
            />

            <h3>For Employers</h3>

            <p>
              Build a sustainable talent pipeline with automated screening
              and high-precision sourcing tools.
            </p>

            <ul>
              <li>✔ Instant Talent Sourcing</li>
              <li>✔ Hiring Analytics Dashboard</li>
            </ul>

            <a href="#">
              Start Hiring
              <img src={arrow} alt="Arrow" className="arrow-icon" />
            </a>

          </div>

          {/* Card 3 */}

          <div className="card">

            <img
              src={institution}
              alt="Institution"
              className="card-icon"
            />

            <h3>For Institutions</h3>

            <p>
              Streamline placement tracking and strengthen industry
              partnerships with a centralized hub.
            </p>

            <ul>
  <li className="red-text">✔ Placement Success Metrics</li>
  <li className="red-text">✔ Corporate Network Access</li>
</ul>

<a href="#" className="red-link">
  Partner With Us
  <img
   src={arrowRed} 
   alt="Arrow" 
   className="arrow-icon"
    />
</a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default SolutionsSection;