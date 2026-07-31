import "./PlacementChart.css";

function PlacementChart() {

  const chartData = [
    { month: "Jan", height: 220 },
    { month: "Feb", height: 300 },
    { month: "Mar", height: 250 },
    { month: "Apr", height: 390 },
    { month: "May", height: 340 },
    { month: "Jun", height: 440, active: true },
  ];

  return (

    <div className="placementChartContainer">

      <div className="placementChartHeader">

        <div>

          <h2 className="placementChartTitle">
            Placement Performance
          </h2>

          <p className="placementChartSubtitle">
            Monthly placement success trends
          </p>

        </div>

        <div className="placementChartLegend">

          <span className="placementChartLegendDot"></span>

          <span className="placementChartLegendText">
            Placements
          </span>

        </div>

      </div>

      <div className="placementChartGraph">

        {chartData.map((item) => (

          <div
            key={item.month}
            className="placementChartColumn"
          >

            <div
              className={
                item.active
                  ? "placementChartBar placementChartBarActive"
                  : "placementChartBar"
              }
              style={{
                height: `${item.height / 2}px`,
              }}
            ></div>

            <span className="placementChartMonth">
              {item.month}
            </span>

          </div>

        ))}

      </div>

    </div>

  );
}

export default PlacementChart;