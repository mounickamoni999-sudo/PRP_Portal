import "./HeroSection.css";
import heroImage from "../../assets/Characters.webp";
import avatar1 from "./../../assets/1.webp";
// import avatar2 from "../../assets/sarah charan.webp";
// import avatar3 from "../../assets/Background+Border.webp";

import usersBadge from "../../assets/Container.webp";

function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="badge">
          ● NOW POWERED BY AI 2.0
        </span>

        <h1>
          Bridging Ambition with
          <br />
          Opportunity.
        </h1>

        <p>
          Empowering the next generation of talent by connecting
          high-performing candidates with industry-leading organizations
          through AI-driven matching.
        </p>

        <div className="users">

            <div className="users">
  <img
    src={usersBadge}
    alt="Users"
    className="users-badge"
  />


  <p className="user-text">
    Join <strong>50k+</strong> professionals hired this month
  </p>
</div>

  {/* <div className="avatars">

    <img src={avatar1} alt="avatar 1" className="avatar-img" />

    <img src={avatar2} alt="avatar 2" className="avatar-img" />

    <img src={avatar3} alt="avatar 3" className="avatar-img" />

//   </div> */}

  {/* <p className="user-text">
    Join <strong>50K+</strong> professionals hired this month
  </p> */}

</div>
      </div>

      <div className="hero-right">

        <img
          src={heroImage}
          alt="Hero Illustration"
        />

      </div>

    </section>
  );
}

export default HeroSection;