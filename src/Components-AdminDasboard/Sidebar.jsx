import "./Sidebar.css";

import dashboardHome from "../assets/admin dashboard/dashboard home.png";
import userManagement from "../assets/admin dashboard/user management.png";
import companyVerification from "../assets/admin dashboard/company verification.png";
import platformSettings from "../assets/admin dashboard/platform settings.png";
import analytics from "../assets/admin dashboard/analytics.png";


const menuItems = [
  {
    label: "Dashboard",
    icon: dashboardHome,
    active: true,
  },
  {
    label: "User Management",
    icon: userManagement,
  },
  {
    label: "Company Verification",
    icon: companyVerification,
  },
  {
    label: "Platform Settings",
    icon: platformSettings,
  },
  {
    label: "Analytics",
    icon: analytics,
  },
];


const Sidebar = () => {

  return (

    <aside className="Sidebar-container">

      <div className="Sidebar-logo">
        
      </div>


      <div className="Sidebar-menu">

        {
          menuItems.map((item)=>(

            <div
              key={item.label}
              className={`Sidebar-menuItem ${
                item.active ? "Sidebar-menuItemActive" : ""
              }`}
            >

              <img
                src={item.icon}
                alt={item.label}
                className="Sidebar-icon"
              />

              <span>{item.label}</span>

            </div>

          ))
        }

      </div>

    </aside>

  );

};


export default Sidebar;