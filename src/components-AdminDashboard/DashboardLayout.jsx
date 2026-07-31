import "./DashboardLayout.css";

import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import AdminStatCards from "./AdminStatCards";
import PlacementChart from "./PlacementChart";
import AdminActivityLog from "./AdminActivityLog";
import AdminUserTable from "./AdminUserTable";

function DashboardLayout() {
  return (
    <div className="adminDashboardContainer">

      <AdminSidebar />

      <div className="adminDashboardRight">

        <div className="adminDashboardHeaderSection">
          <AdminHeader />
        </div>

        <div className="adminDashboardCardsSection">
          <AdminStatCards />
        </div>

        <div className="adminDashboardMiddle">
          <PlacementChart />
          <AdminActivityLog />
        </div>

        <div className="adminDashboardBottom">
          <AdminUserTable />
        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;