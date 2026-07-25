import "./AdminHeader.css";

import notificationIcon from "../assets/admin dashboard/notifications.png";
import supportIcon from "../assets/admin dashboard/support.png";
import settingsIcon from "../assets/admin dashboard/settings.png";
import adminUserImage from "../assets/admin dashboard/admin user pic.png";

function AdminHeader() {
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
            alt="notification"
            className="adminHeaderIconImage"
          />
        </button>

        <button className="adminHeaderIconButton">
          <img
            src={supportIcon}
            alt="support"
            className="adminHeaderIconImage"
          />
        </button>

        <button className="adminHeaderIconButton">
          <img
            src={settingsIcon}
            alt="settings"
            className="adminHeaderIconImage"
          />
        </button>

        <div className="adminHeaderDivider"></div>

        <div className="adminHeaderProfile">

          <div className="adminHeaderProfileText">

            <h4>Admin User</h4>

            <p>SUPER ADMIN</p>

          </div>

          <img
            src={adminUserImage}
            alt="admin"
            className="adminHeaderProfileImage"
          />

        </div>

      </div>

    </header>
  );
}

export default AdminHeader;