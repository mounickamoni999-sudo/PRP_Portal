import "./TestimonialsSection.css";

import user1 from "../../assets/sarah charan.webp";
import user2 from "../../assets/david.webp";
import quote from "../../assets/Quote.webp";
import stars from "../../assets/stars.webp";

function TestimonialsSection() {
  return (
    <section className="testimonials">

      <p className="subtitle">SUCCESS STORIES</p>

      <h2>Voices from our thriving community</h2>

      <div className="testimonial-container">

        {/* Card 1 */}

        <div className="testimonial-card">

          <img src={quote} alt="" className="quote"/>

          <div className="testimonial-top">

            <img 
            src={user1} 
            alt="Quote" 
            className="profile"
            />

            <div className="user-info">

              <img src={stars} alt="" className="stars"/>

              <h3>Sarah Chen</h3>

              <p>Product Designer @ Aura Systems</p>

            </div>

          </div>

          <p className="review">
            "ConnectHire transformed my job search. The AI matching felt
            intuitive, and within two weeks, I was interviewed and hired by
            my dream company in fintech. The process was seamless."
          </p>

        </div>

        {/* Card 2 */}

        <div className="testimonial-card">

          <img 
          src={quote} 
          alt="Quote" 
          className="quote"
          
          />

          <div className="testimonial-top">

            <img src={user2} alt="" className="profile"/>

            <div className="user-info">

              <img src={stars} alt="" className="stars"/>

              <h3>David Miller</h3>

              <p>Talent Director @ Zenith Capital</p>

            </div>

          </div>

          <p className="review">
            "The quality of candidates on ConnectHire is unmatched. We
            reduced our time-to-hire by 40% and have found some of our most
            productive team members through their automated screening."
          </p>

        </div>

      </div>

    </section>
  );
}

export default TestimonialsSection;