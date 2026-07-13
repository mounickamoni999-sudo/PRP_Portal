import "./StatisticsSection.css";

function StatisticsSection() {
  return (
    <section className="statistics">

      <div className="statistics-container">

        <div className="stat-box">

          <h2>500k+</h2>

          <p>Jobs Posted Annually</p>

          <div className="line"></div>

        </div>

        <div className="stat-box">

          <h2>10k+</h2>

          <p>Hiring Partners</p>

          <div className="line"></div>

        </div>

        <div className="stat-box">

          <h2>95%</h2>

          <p>Placement Rate</p>

          <div className="line"></div>

        </div>

      </div>

    </section>
  );
}

export default StatisticsSection;