import React from "react";
import "./PlacementChart.css";

const PlacementChart = () => {

  const chartData = [
    { month: "Jan", height: 90 },
    { month: "Feb", height: 130 },
    { month: "Mar", height: 110 },
    { month: "Apr", height: 170 },
    { month: "May", height: 145 },
    { month: "Jun", height: 210, active: true },
  ];

  return (
    <div className="placementChartContainer">

      <div className="placementChartHeader">

        <div>
          <h2>Placement Performance</h2>
          <p>Monthly placement success trend</p>
        </div>

      </div>


      <div className="placementChartBars">

        {chartData.map((item, index) => (
          <div 
            className="placementChartBarWrapper" 
            key={index}
          >

            <div
              className={
                item.active
                  ? "placementChartBar placementChartBarActive"
                  : "placementChartBar"
              }
              style={{ height: `${item.height}px` }}
            >
            </div>

            <span>{item.month}</span>

          </div>
        ))}

      </div>


    </div>
  );
};

export default PlacementChart;