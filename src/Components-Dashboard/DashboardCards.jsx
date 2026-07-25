import "./DashboardCards.css";

function DashboardCards() {
  return (
    <div className="dashboard-page">

      <div className="dashboard-card">

        <div className="card-header">
          <h2>Recent Activities</h2>
          <span>View All</span>
        </div>

        <ul className="activity-list">
          <li>
            <span className="dot"></span>
            <p>New batch "D-12" has been created.</p>
            <small>July 20 · 9:30AM</small>
          </li>

          <li>
            <span className="dot"></span>
            <p>Assessment "Java test published."</p>
            <small>July 15 · 10:30AM</small>
          </li>

          <li>
            <span className="dot"></span>
            <p>Session completed for "UI/UX laws".</p>
            <small>July 6 · 4:30AM</small>
          </li>

          <li>
            <span className="dot"></span>
            <p>Certificate issued to 12 students.</p>
            <small>July 10 · 3:30AM</small>
          </li>

          <li>
            <span className="dot"></span>
            <p>New batch "UI-08" has been created.</p>
            <small>July 11 · 9:30AM</small>
          </li>

        </ul>

      </div>

      <div className="dashboard-card">

        <div className="card-header">
          <h2>Pending Approvals</h2>
          <span>View All</span>
        </div>

        <div className="approval">

          <div className="approval-item">
            <p>Leave Request</p>
            <button>8 Requests</button>
          </div>

          <div className="approval-item">
            <p>Assessment Evaluation</p>
            <button>15 Pending</button>
          </div>

          <div className="approval-item">
            <p>Certificate Requests</p>
            <button>6 Requests</button>
          </div>

          <div className="approval-item">
            <p>Course Transfer</p>
            <button>3 Requests</button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardCards;