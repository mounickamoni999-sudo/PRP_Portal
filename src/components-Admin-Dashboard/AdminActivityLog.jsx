import "./AdminActivityLog.css";

import newUserIcon from "../assets/admin dashboard/new user registration.png";
import companyIcon from "../assets/admin dashboard/company document uploaded.png";
import recruiterIcon from "../assets/admin dashboard/recruiter verified.png";
import policyIcon from "../assets/admin dashboard/security policy updated.png";
import failedIcon from "../assets/admin dashboard/failed login attempt.png";

function AdminActivityLog() {

  const activityData = [

    {
      icon: newUserIcon,
      title: "New User Registration",
      description: "Student account created successfully.",
      time: "2 mins ago",
    },

    {
      icon: companyIcon,
      title: "Company Document Uploaded",
      description: "Infosys submitted verification files.",
      time: "12 mins ago",
    },

    {
      icon: recruiterIcon,
      title: "Recruiter Verified",
      description: "TCS recruiter profile approved.",
      time: "35 mins ago",
    },

    {
      icon: policyIcon,
      title: "Security Policy Updated",
      description: "Password rules were modified.",
      time: "1 hour ago",
    },

    {
      icon: failedIcon,
      title: "Failed Login Attempt",
      description: "Blocked suspicious login request.",
      time: "2 hours ago",
    },

  ];

  return (

    <div className="adminActivityContainer">

      <div className="adminActivityHeader">

        <h2>Activity Log</h2>

        <span>View All</span>

      </div>

      <div className="adminActivityList">

        {activityData.map((item, index) => (

          <div
            className="adminActivityItem"
            key={index}
          >

            <img
              src={item.icon}
              alt={item.title}
              className="adminActivityIcon"
            />

            <div className="adminActivityContent">

              <h4>{item.title}</h4>

              <p>{item.description}</p>

            </div>

            <span className="adminActivityTime">
              {item.time}
            </span>

          </div>

        ))}

      </div>

    </div>

  );
}

export default AdminActivityLog;