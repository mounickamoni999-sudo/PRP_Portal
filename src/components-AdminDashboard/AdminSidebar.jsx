import React from "react";
import "./AdminSidebar.css";

import dashboardHome from "../assets/admin dashboard/dashboard home.png";
import userManagement from "../assets/admin dashboard/user management.png";
import companyVerification from "../assets/admin dashboard/company verification.png";
import platformSettings from "../assets/admin dashboard/platform settings.png";
import analytics from "../assets/admin dashboard/analytics.png";

const AdminSidebar = () => {
  return (
    <aside className="adminSidebarContainer">

      <div className="adminSidebarTopSection"></div>

      <div className="adminSidebarMenuSection">

        <div className="adminSidebarMenuItem adminSidebarMenuItemActive">

          <img
            src={dashboardHome}
            alt="Dashboard"
            className="adminSidebarMenuIcon"
          />

          <span className="adminSidebarMenuText">
            Dashboard
          </span>

        </div>

        <div className="adminSidebarMenuItem">

          <img
            src={userManagement}
            alt="User Management"
            className="adminSidebarMenuIcon"
          />

          <span className="adminSidebarMenuText">
            User Management
          </span>

        </div>

        <div className="adminSidebarMenuItem">

          <img
            src={companyVerification}
            alt="Company Verification"
            className="adminSidebarMenuIcon"
          />

          <span className="adminSidebarMenuText">
            Company Verification
          </span>

        </div>

        <div className="adminSidebarMenuItem">

          <img
            src={platformSettings}
            alt="Platform Settings"
            className="adminSidebarMenuIcon"
          />

          <span className="adminSidebarMenuText">
            Platform Settings
          </span>

        </div>

        <div className="adminSidebarMenuItem">

          <img
            src={analytics}
            alt="Analytics"
            className="adminSidebarMenuIcon"
          />

          <span className="adminSidebarMenuText">
            Analytics
          </span>

        </div>

      </div>

    </aside>
  );
};

export default AdminSidebar;