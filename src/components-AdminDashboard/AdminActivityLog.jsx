import React from "react";
import "./AdminActivityLog.css";

import newUserRegistrationIcon from "../assets/admin dashboard/new user registration.png";
import companyDocumentUploadedIcon from "../assets/admin dashboard/company document uploaded.png";
import recruiterVerifiedIcon from "../assets/admin dashboard/recruiter verified.png";
import securityPolicyUpdatedIcon from "../assets/admin dashboard/security policy updated.png";
import failedLoginAttemptIcon from "../assets/admin dashboard/failed login attempt.png";

const AdminActivityLog = () => {
  return (
    <div className="adminActivityContainer">

      <h2 className="adminActivityTitle">
        Activity
      </h2>

      <div className="adminActivityList">

        <div className="adminActivityItem">
          <img
            src={newUserRegistrationIcon}
            alt="New User Registration"
            className="adminActivityIcon"
          />
          <span className="adminActivityText">
            New User Registration
          </span>
        </div>

        <div className="adminActivityItem">
          <img
            src={companyDocumentUploadedIcon}
            alt="Company Document Uploaded"
            className="adminActivityIcon"
          />
          <span className="adminActivityText">
            Company Document Uploaded
          </span>
        </div>

        <div className="adminActivityItem">
          <img
            src={recruiterVerifiedIcon}
            alt="Recruiter Verified"
            className="adminActivityIcon"
          />
          <span className="adminActivityText">
            Recruiter Verified
          </span>
        </div>

        <div className="adminActivityItem">
          <img
            src={securityPolicyUpdatedIcon}
            alt="Security Policy Updated"
            className="adminActivityIcon"
          />
          <span className="adminActivityText">
            Security Policy Updated
          </span>
        </div>

        <div className="adminActivityItem">
          <img
            src={failedLoginAttemptIcon}
            alt="Failed Login Attempt"
            className="adminActivityIcon"
          />
          <span className="adminActivityText">
            Failed Login Attempt
          </span>
        </div>

      </div>

      <button className="adminActivityHistoryButton">
        View Full History
      </button>

    </div>
  );
};

export default AdminActivityLog;