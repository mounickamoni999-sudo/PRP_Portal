import "./DashboardLayout.css";

import AdminHeader from "./AdminHeader";
import AdminStatCards from "./AdminStatCards";
import PlacementChart from "./PlacementChart";
import AdminActivityLog from "./AdminActivityLog";
import AdminUserTable from "./AdminUserTable";

function DashboardLayout() {
  return (
    <main className="dashboardLayoutContainer">

      <AdminHeader />

      <AdminStatCards />

      <div className="dashboardLayoutMiddle">

        <PlacementChart />

        <AdminActivityLog />

      </div>

      <AdminUserTable />

    </main>
  );
}

export default DashboardLayout;