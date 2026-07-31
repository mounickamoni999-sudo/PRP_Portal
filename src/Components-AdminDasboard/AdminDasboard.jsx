import "./AdminDashboard.css";

import Sidebar from "./Sidebar";


// Header Images
import notifications from "../assets/admin dashboard/notifications.png";
import support from "../assets/admin dashboard/support.png";
import settings from "../assets/admin dashboard/settings.png";
import adminUser from "../assets/admin dashboard/admin user pic.png";
import searchIcon from "../assets/admin dashboard/search.png";


// Dashboard Cards
import totalPlacements from "../assets/admin dashboard/total placements.png";
import activeStudents from "../assets/admin dashboard/active students.png";
import verifiedRecruiters from "../assets/admin dashboard/verified recruiters.png";
import partnerCompanies from "../assets/admin dashboard/partner companies.png";


// Card Status
import annualGoal from "../assets/admin dashboard/annual goal (1).png";
import pendingReview from "../assets/admin dashboard/pending review.png";
import activeStudentsStatus from "../assets/admin dashboard/active students 1.png";
import stableGrowth from "../assets/admin dashboard/stable growth.png";


// Activity Images
import newUserRegistration from "../assets/admin dashboard/new user registration.png";
import companyDocumentUploaded from "../assets/admin dashboard/company document uploaded.png";
import companyVerification from "../assets/admin dashboard/recruiter verified.png";
import securityPolicyUpdated from "../assets/admin dashboard/security policy updated.png";
import failedLoginAttempt from "../assets/admin dashboard/failed login attempt.png";


// Users
import sarahUser from "../assets/admin dashboard/sarah k.jenkins.png";
import davidUser from "../assets/admin dashboard/david lee.png";


// Table Icons
import userManagement from "../assets/admin dashboard/user management.png";
import analytics from "../assets/admin dashboard/analytics.png";
import platformSettings from "../assets/admin dashboard/platform settings.png";



const stats = [

{
title:"TOTAL PLACEMENTS",
value:"4,120",
subtitle:"82% of Annual Goal",
icon:totalPlacements,
status:annualGoal
},


{
title:"ACTIVE STUDENTS",
value:"12,482",
subtitle:"+12% vs last month",
icon:activeStudents,
status:activeStudentsStatus
},


{
title:"VERIFIED RECRUITERS",
value:"3,142",
subtitle:"14 pending review",
icon:verifiedRecruiters,
status:pendingReview
},


{
title:"PARTNER COMPANIES",
value:"312",
subtitle:"Stable Growth",
icon:partnerCompanies,
status:stableGrowth
}

];



const placementData=[

{
month:"Jan",
height:"80px"
},

{
month:"Feb",
height:"120px"
},

{
month:"Mar",
height:"100px"
},

{
month:"Apr",
height:"160px"
},

{
month:"May",
height:"140px"
},

{
month:"Jun",
height:"210px",
active:true
}

];



const activityLogs=[

{
title:"New User Registration",
name:"Alex Morgan",
time:"2 mins ago",
image:newUserRegistration
},


{
title:"Company Document Uploaded",
name:"Nexus Dynamics",
time:"45 mins ago",
image:companyDocumentUploaded
},


{
title:"Recruiter Verified",
name:"Global Tech Sol.",
time:"3 hrs ago",
image:companyVerification
},


{
title:"Security Policy Updated",
name:"Applied globally",
time:"5 hrs ago",
image:securityPolicyUpdated
},


{
title:"Failed Login Attempt",
name:"IP:192.168.1.45",
time:"8 hrs ago",
image:failedLoginAttempt
}

];



const users=[

{
image:sarahUser,
name:"Sarah K. Jenkins",
email:"sarah.j@globalhr.com",
role:"RECRUITER",
activity:'Published "Senior AI Architect" role',
time:"2 mins ago"
},


{
image:davidUser,
name:"David Lee",
email:"d.lee@candidate.me",
role:"CANDIDATE",
activity:"Submitted portfolio via AI matching",
time:"1 hour ago"
}

];



const AdminDashboard = () => {


return (

<div className="AdminDashboardPage">


<Sidebar />


<div className="AdminDashboardContainer">



{/* Header */}

<header className="AdminDashboardHeader">


<div className="AdminDashboardSearch">

<img 
src={searchIcon}
alt="search"
className="AdminDashboardSearchIcon"
/>

<input 
type="text"
placeholder="Search resources, users, or logs..."
/>

</div>



<div className="AdminDashboardHeaderRight">


<img 
src={notifications}
alt="notifications"
className="AdminDashboardHeaderIcon AdminDashboardNotificationIcon"
/>


<img 
src={support}
alt="support"
className="AdminDashboardHeaderIcon"
/>


<img 
src={settings}
alt="settings"
className="AdminDashboardHeaderIcon"
/>



<div className="AdminDashboardProfile">


<img 
src={adminUser}
alt="admin user"
/>


<div>

<h4>
Admin User
</h4>


<span>
SUPER ADMIN
</span>


</div>


</div>


</div>



</header>



{/* Cards */}


<section className="AdminDashboardCards">


{
stats.map((card)=>(


<div 
className="AdminDashboardCard"
key={card.title}
>


<div className="AdminDashboardCardHeader">


<h5>
{card.title}
</h5>


<img 
src={card.icon}
alt={card.title}
/>


</div>



<h2>
{card.value}
</h2>



<p>

<img 
src={card.status}
alt=""
/>

{card.subtitle}

</p>



</div>


))
}


</section>

{/* Placement Performance + Activity */}

<section className="AdminDashboardMiddle">


{/* Placement Chart */}

<div className="AdminDashboardChart">


<div className="AdminDashboardChartHeader">

<div>

<h2>
Placement Performance
</h2>

<span>
Monthly placement success trends
</span>

</div>


<div className="AdminDashboardLegend">

<span></span>

Placements

</div>


</div>



<div className="AdminDashboardBars">


{
placementData.map((item)=>(

<div 
className="AdminDashboardBarBox"
key={item.month}
>


<div

className={
item.active
?
"AdminDashboardBar AdminDashboardActiveBar"
:
"AdminDashboardBar"
}

style={{
height:item.height
}}

>

</div>


<span>
{item.month}
</span>


</div>

))

}



</div>


</div>





{/* Activity Log */}


<div className="AdminDashboardActivity">


<h2>
Admin Activity Log
</h2>



{

activityLogs.map((log)=>(


<div

className="AdminDashboardActivityItem"

key={log.title}

>


<img

src={log.image}

alt={log.title}

className="AdminDashboardActivityImage"

/>


<div>


<h4>
{log.title}
</h4>


<p>

{log.name}

<span>
•
</span>

{log.time}

</p>


</div>


</div>


))

}



<a href="/">
View Full History
</a>



</div>



</section>





{/* User Management */}



<section className="AdminDashboardTable">


<div className="AdminDashboardTableHeader">


<h2>
User Management & Recent Activity
</h2>



<div className="AdminDashboardTableActions">


<span>

<img 
src={userManagement}
alt="filter"
/>

Filter

</span>



<span>

<img 
src={analytics}
alt="sort"
/>

Sort

</span>



</div>


</div>






<table>


<thead>


<tr>

<th>
User
</th>


<th>
Role
</th>


<th>
Activity
</th>


<th>
Timestamp
</th>


<th>
Actions
</th>


</tr>


</thead>




<tbody>


{

users.map((user)=>(


<tr key={user.email}>


<td>


<div className="AdminDashboardUser">


<img

src={user.image}

alt={user.name}

/>


<div>


<h4>
{user.name}
</h4>


<span>
{user.email}
</span>


</div>


</div>


</td>





<td>

<span className="AdminDashboardRole">

{user.role}

</span>

</td>





<td>

{user.activity}

</td>





<td>

{user.time}

</td>





<td>
  <div className="AdminDashboardThreeDots">
    <span></span>
    <span></span>
    <span></span>
  </div>
</td>





</tr>


))


}



</tbody>


</table>



</section>



</div>


</div>


);


};



export default AdminDashboard;