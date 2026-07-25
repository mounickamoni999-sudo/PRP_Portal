import "./AdminStatCards.css";

import totalPlacementsIcon from "../assets/admin dashboard/total placements.png";
import activeStudentsIcon from "../assets/admin dashboard/active students.png";
import verifiedRecruitersIcon from "../assets/admin dashboard/verified recruiters.png";
import partnerCompaniesIcon from "../assets/admin dashboard/partner companies.png";

function AdminStatCards() {
  return (
    <section className="adminStatCardsContainer">

      <div className="adminStatCard">

        <div className="adminStatCardTop">

          <div>
            <h5>TOTAL PLACEMENTS</h5>
            <h2>4,120</h2>
          </div>

          <img
            src={totalPlacementsIcon}
            alt="placements"
            className="adminStatCardIcon"
          />

        </div>

        <p className="adminStatGreenText">
          ↗ 82% of Annual Goal
        </p>

      </div>

      <div className="adminStatCard">

        <div className="adminStatCardTop">

          <div>
            <h5>ACTIVE STUDENTS</h5>
            <h2>12,482</h2>
          </div>

          <img
            src={activeStudentsIcon}
            alt="students"
            className="adminStatCardIcon"
          />

        </div>

        <p className="adminStatPurpleText">
          +12% vs last month
        </p>

      </div>

      <div className="adminStatCard">

        <div className="adminStatCardTop">

          <div>
            <h5>VERIFIED RECRUITERS</h5>
            <h2>3,142</h2>
          </div>

          <img
            src={verifiedRecruitersIcon}
            alt="verified"
            className="adminStatCardIcon"
          />

        </div>

        <p className="adminStatOrangeText">
          14 pending review
        </p>

      </div>

      <div className="adminStatCard">

        <div className="adminStatCardTop">

          <div>
            <h5>PARTNER COMPANIES</h5>
            <h2>312</h2>
          </div>

          <img
            src={partnerCompaniesIcon}
            alt="companies"
            className="adminStatCardIcon"
          />

        </div>

        <p className="adminStatGrayText">
          Stable Growth
        </p>

      </div>

    </section>
  );
}

export default AdminStatCards;