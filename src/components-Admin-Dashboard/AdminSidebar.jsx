import "./AdminSidebar.css";

import dashboardIcon from "../assets/admin dashboard/dashboard home.png";
import usersIcon from "../assets/admin dashboard/user management.png";
import companyIcon from "../assets/admin dashboard/company verification.png";
import settingsIcon from "../assets/admin dashboard/platform settings.png";
import analyticsIcon from "../assets/admin dashboard/analytics.png";

function AdminSidebar() {
  return (
    <aside className="adminSidebar">

      <div className="adminSidebarLogo">
        {/* Logo */}
      </div>

      <div className="adminSidebarMenu">

        <div className="adminSidebarItem adminSidebarActive">
          <img
            src={dashboardIcon}
            alt="Dashboard"
            className="adminSidebarIcon"
          />
          <span className="adminSidebarText">
            Dashboard
          </span>
        </div>

        <div className="adminSidebarItem">
          <img
            src={usersIcon}
            alt="Users"
            className="adminSidebarIcon"
          />
          <span className="adminSidebarText">
            User Management
          </span>
        </div>

        <div className="adminSidebarItem">
          <img
            src={companyIcon}
            alt="Company"
            className="adminSidebarIcon"
          />
          <span className="adminSidebarText">
            Company Verification
          </span>
        </div>

        <div className="adminSidebarItem">
          <img
            src={settingsIcon}
            alt="Settings"
            className="adminSidebarIcon"
          />
          <span className="adminSidebarText">
            Platform Settings
          </span>
        </div>

        <div className="adminSidebarItem">
          <img
            src={analyticsIcon}
            alt="Analytics"
            className="adminSidebarIcon"
          />
          <span className="adminSidebarText">
            Analytics
          </span>
        </div>

      </div>

    </aside>
  );
}

export default AdminSidebar;