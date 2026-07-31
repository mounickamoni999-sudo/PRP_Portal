import "./AdminActivityLog.css";

import newUser from "../assets/admin dashboard/new user registration.png";
import companyDoc from "../assets/admin dashboard/company document uploaded.png";
import recruiterVerified from "../assets/admin dashboard/recruiter verified.png";
import securityPolicy from "../assets/admin dashboard/security policy updated.png";
import failedLogin from "../assets/admin dashboard/failed login attempt.png";

const activities = [
  {
    icon: newUser,
    title: "New User Registration",
    time: "2 minutes ago",
  },
  {
    icon: companyDoc,
    title: "Company Document Uploaded",
    time: "12 minutes ago",
  },
  {
    icon: recruiterVerified,
    title: "Recruiter Verified",
    time: "1 hour ago",
  },
  {
    icon: securityPolicy,
    title: "Security Policy Updated",
    time: "3 hours ago",
  },
  {
    icon: failedLogin,
    title: "Failed Login Attempt",
    time: "Yesterday",
  },
];

function AdminActivityLog() {
  return (
    <div className="activityCard">

      <div className="activityHeader">
        <h2>Recent Activity</h2>
        <span>View All</span>
      </div>

      <div className="activityList">

        {activities.map((item, index) => (

          <div className="activityItem" key={index}>

            <img
              src={item.icon}
              alt={item.title}
            />

            <div className="activityText">

              <h4>{item.title}</h4>

              <p>{item.time}</p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AdminActivityLog;