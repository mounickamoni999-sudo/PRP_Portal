import "./AdminStatCards.css";

import totalPlacements from "../assets/admin dashboard/total placements.png";
import activeStudents from "../assets/admin dashboard/active students.png";
import verifiedRecruiters from "../assets/admin dashboard/verified recruiters.png";
import partnerCompanies from "../assets/admin dashboard/partner companies.png";

function AdminStatCards() {
  return (
    <div className="adminStatCardsContainer">

      <div className="adminStatCardBox">

        <div className="adminStatCardTop">

          <div>
            <p className="adminStatCardTitle">
              TOTAL PLACEMENTS
            </p>

            <h2 className="adminStatCardNumber">
              4,120
            </h2>
          </div>

          <img
            src={totalPlacements}
            alt=""
            className="adminStatCardIcon"
          />

        </div>

        <p className="adminStatCardSuccess">
          ↗ 82% of Annual Goal
        </p>

      </div>

      <div className="adminStatCardBox">

        <div className="adminStatCardTop">

          <div>
            <p className="adminStatCardTitle">
              ACTIVE STUDENTS
            </p>

            <h2 className="adminStatCardNumber">
              12,482
            </h2>
          </div>

          <img
            src={activeStudents}
            alt=""
            className="adminStatCardIcon"
          />

        </div>

        <p className="adminStatCardInfo">
          +12% vs last month
        </p>

      </div>

      <div className="adminStatCardBox">

        <div className="adminStatCardTop">

          <div>
            <p className="adminStatCardTitle">
              VERIFIED RECRUITERS
            </p>

            <h2 className="adminStatCardNumber">
              3,142
            </h2>
          </div>

          <img
            src={verifiedRecruiters}
            alt=""
            className="adminStatCardIcon"
          />

        </div>

        <p className="adminStatCardWarning">
          14 Pending Review
        </p>

      </div>

      <div className="adminStatCardBox">

        <div className="adminStatCardTop">

          <div>
            <p className="adminStatCardTitle">
              PARTNER COMPANIES
            </p>

            <h2 className="adminStatCardNumber">
              312
            </h2>
          </div>

          <img
            src={partnerCompanies}
            alt=""
            className="adminStatCardIcon"
          />

        </div>

        <p className="adminStatCardGray">
          Stable Growth
        </p>

      </div>

    </div>
  );
}

export default AdminStatCards;