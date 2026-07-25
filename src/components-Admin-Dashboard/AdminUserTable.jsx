import "./AdminUserTable.css";

import sarahImage from "../assets/admin dashboard/sarah k.jenkins.png";
import davidImage from "../assets/admin dashboard/david lee.png";

function AdminUserTable() {

  const userData = [

    {
      image: sarahImage,
      name: "Sarah K. Jenkins",
      role: "RECRUITER",
      company: "Infosys",
      status: "Placed"
    },

    {
      image: davidImage,
      name: "David Lee",
      role: "CANDIDATE",
      company: "TCS",
      status: "Verified"
    },

    {
      image: sarahImage,
      name: "Sophia Wilson",
      role: "Student",
      company: "Accenture",
      status: "Placed"
    },

    {
      image: davidImage,
      name: "Michael Brown",
      role: "Recruiter",
      company: "Wipro",
      status: "Pending"
    }

  ];

  return (

    <section className="adminUserTableContainer">

      <div className="adminUserTableHeader">

        <h2>Recent Users</h2>

        <button className="adminUserViewButton">
          View All
        </button>

      </div>

      <table className="adminUserTable">

        <thead>

          <tr>

            <th>User</th>
            <th>Role</th>
            <th>Company</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {userData.map((user, index) => (

            <tr key={index}>

              <td>

                <div className="adminUserInfo">

                  <img
                    src={user.image}
                    alt={user.name}
                    className="adminUserImage"
                  />

                  <span>{user.name}</span>

                </div>

              </td>

              <td>{user.role}</td>

              <td>{user.company}</td>

              <td>

                <span
                  className={`adminUserStatus ${user.status.toLowerCase()}`}
                >
                  {user.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>

  );
}

export default AdminUserTable;