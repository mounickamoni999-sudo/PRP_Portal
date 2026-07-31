import React from "react";
import "./AdminUserTable.css";

const AdminUserTable = () => {
  return (
    <div className="adminUserTableContainer">

      <div className="adminUserTableHeader">

        <h2 className="adminUserTableTitle">
          User Management
        </h2>

        {/* <button className="adminUserTableViewButton">
          View All
        </button> */}

      </div>

      <table className="adminUserTable">

        <thead>

          <tr>

            <th>USER</th>

            <th>ROLE</th>

            <th>ACTIVITY</th>

            <th>TIMESTAMP</th>

            <th>ACTIONS</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Sarah Johnson</td>

            <td>Student</td>

            <td>Account Verified</td>

            <td>2 Hours Ago</td>

            <td>

              <button className="adminUserTableActionButton">
                View
              </button>

            </td>

          </tr>

          <tr>

            <td>David Miller</td>

            <td>Recruiter</td>

            <td>Company Approved</td>

            <td>4 Hours Ago</td>

            <td>

              <button className="adminUserTableActionButton">
                View
              </button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
};

export default AdminUserTable;