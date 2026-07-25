import "./AdminDashboard.css";

import AdminSidebar from "./AdminSidebar";
import DashboardLayout from "./DashboardLayout";

function AdminDashboard() {
  return (
    <div className="adminDashboardContainer">
      <AdminSidebar />
      <DashboardLayout />
    </div>
  );
}

export default AdminDashboard;