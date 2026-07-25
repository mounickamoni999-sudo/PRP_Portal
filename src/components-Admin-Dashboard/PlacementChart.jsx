import "./PlacementChart.css";

function PlacementChart() {

  const monthlyData = [
    { month: "Jan", value: 60 },
    { month: "Feb", value: 75 },
    { month: "Mar", value: 45 },
    { month: "Apr", value: 90 },
    { month: "May", value: 68 },
    { month: "Jun", value: 82 },
    { month: "Jul", value: 58 },
    { month: "Aug", value: 96 },
    { month: "Sep", value: 70 },
    { month: "Oct", value: 85 },
    { month: "Nov", value: 63 },
    { month: "Dec", value: 92 },
  ];

  return (
    <div className="placementChartContainer">

      <div className="placementChartHeader">

        <div>
          <h2>Placement Trends</h2>
          <p>Monthly student placements</p>
        </div>

        <select className="placementChartSelect">
          <option>2026</option>
          <option>2025</option>
        </select>

      </div>

      <div className="placementChartBars">

        {monthlyData.map((item) => (
          <div
            key={item.month}
            className="placementChartBarItem"
          >

            <div className="placementChartBarBackground">

              <div
                className="placementChartBarFill"
                style={{ height: `${item.value}%` }}
              ></div>

            </div>

            <span>{item.month}</span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default PlacementChart;