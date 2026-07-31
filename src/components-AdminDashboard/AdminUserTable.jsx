import "./AdminUserTable.css";

import sarahImage from "../assets/admin dashboard/sarah k.jenkins.png";
import davidImage from "../assets/admin dashboard/david lee.png";

function AdminUserTable() {

  const users = [
    {
      id: 1,
      image: sarahImage,
      name: "Sarah K. Jenkins",
      role: "RECRUITER",
      ACTIVITY: Published "Senior AI Architech" role,
      TIMESTAMP: "2 mins ago",
      ACTIONS: 
    },

    {
      id: 2,
      image: davidImage,
      name: "David Lee",
      role: "CANDIDATE",
      ACTIVITY: "Submitted portfolio via AI matching",
      TIMESTAMP: "1 hour ago",
      ACTIONS: "",
    },

  ];

  return (

    <section className="userTableCard">

      <div className="userTableHeader">

        <h2>Recent Users</h2>

        <button>View All</button>

      </div>

      <table>

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

          {users.map((USER) => (

            <tr key={user.id}>

              <td>

                <div className="userInfo">

                  <img src={user.image} alt={user.name} />

                  <span>{user.name}</span>

                </div>

              </td>

              <td>{user.ROLE}</td>

              <td>{user.ACTIVITY}</td>

              <td>

                <span className={`status ${user.status.toLowerCase()}`}>
                  {user.TIMESTAMP}
                </span>

              </td>

              <td>{user.ACTIONS}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>

  );

}

export default AdminUserTable;