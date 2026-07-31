import React from "react";
import "./AdminHeader.css";

import notificationIcon from "../assets/admin dashboard/notifications.png";
import supportIcon from "../assets/admin dashboard/support.png";
import settingsIcon from "../assets/admin dashboard/settings.png";
import adminUser from "../assets/admin dashboard/admin user pic.png";

const AdminHeader = () => {
  return (
    <header className="adminHeaderContainer">

      <div className="adminHeaderSearchSection">

        <input
          type="text"
          placeholder="Search resources, users, or logs..."
          className="adminHeaderSearchInput"
        />

      </div>

      <div className="adminHeaderRightSection">

        <button className="adminHeaderIconButton">

          <img
            src={notificationIcon}
            alt="Notification"
            className="adminHeaderIconImage"
          />

        </button>

        <button className="adminHeaderIconButton">

          <img
            src={supportIcon}
            alt="Support"
            className="adminHeaderIconImage"
          />

        </button>

        <button className="adminHeaderIconButton">

          <img
            src={settingsIcon}
            alt="Settings"
            className="adminHeaderIconImage"
          />

        </button>

        <div className="adminHeaderDivider"></div>

        <div className="adminHeaderProfile">

          <div className="adminHeaderProfileContent">

            <h4 className="adminHeaderProfileName">
              Admin User
            </h4>

            <p className="adminHeaderProfileRole">
              SUPER ADMIN
            </p>

          </div>

          <img
            src={adminUser}
            alt="Admin User"
            className="adminHeaderProfileImage"
          />

        </div>

      </div>

    </header>
  );
};

export default AdminHeader;