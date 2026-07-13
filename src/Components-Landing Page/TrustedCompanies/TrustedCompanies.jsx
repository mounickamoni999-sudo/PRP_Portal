import "./TrustedCompanies.css";

import google from "../../assets/google.webp";
import deepseek from "../../assets/deepSeek.webp";
import gradio from "../../assets/gradio.webp";
import copilot from "../../assets/copilot.webp";
import gemini from "../../assets/gemini.webp";
import logo from "../../assets/logo.webp";

import leftArrow from "../../assets/proicons_arrow-left.webp";
import rightArrow from "../../assets/proicons_arrow-right.webp";

function TrustedCompanies() {
  return (
    <section className="trusted">

      <h3>TRUSTED BY LEADING COMPANIES</h3>

      <div className="logo-slider">

        <img
          src={leftArrow}
          alt="Left Arrow"
          className="arrow-img"
        />

        <div className="company-logos">
          <img src={google} alt="Google" />
          <img src={deepseek} alt="DeepSeek" />
          <img src={gradio} alt="Gradio" />
          <img src={copilot} alt="Copilot" />
          <img src={gemini} alt="Gemini" />
          <img src={logo} alt="Logo" />
        </div>

        <img
          src={rightArrow}
          alt="Right Arrow"
          className="arrow-img"
        />

      </div>

    </section>
  );
}

export default TrustedCompanies;