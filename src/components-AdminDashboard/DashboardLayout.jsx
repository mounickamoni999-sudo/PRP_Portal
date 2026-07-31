import React from "react";
import "./DashboardLayout.css";

import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import AdminStatCards from "./AdminStatCards";
import PlacementChart from "./PlacementChart";
import AdminActivityLog from "./AdminActivityLog";
import AdminUserTable from "./AdminUserTable";

const DashboardLayout = () => {
  return (
    <div className="dashboardContainer">

      <AdminSidebar />

      <div className="dashboardRight">

        <AdminHeader />

        <AdminStatCards />

        <div className="dashboardMiddle">

          <PlacementChart />

          <AdminActivityLog />

        </div>

        <AdminUserTable />

      </div>

    </div>
  );
};

export default DashboardLayout;