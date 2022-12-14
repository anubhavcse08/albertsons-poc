import React from "react";
import { weekWiseData } from "../../../../apiData/forecastData";

const ForecastStatus = ({resultShow, currentPeriod}) => {
  const forecastStatus = [
    { title: "Good", bgColor: "bg-sky-600" },
    { title: "Average", bgColor: "bg-sky-400" },
    { title: "Low", bgColor: "bg-sky-200" }
  ];
  const currentQuarterDataValue = weekWiseData.data.filter(data => data.quarter === currentPeriod);
  return (
    <div className="flex flex-row justify-between item-center">
      <div className="text-xss">
        Showing <span className="font-semibold">{resultShow}</span> of{" "}
        <span className="font-semibold">{currentQuarterDataValue.length}</span>
      </div>
      <div className="flex flex-row text-xs gap-3 md:gap-4">
        {forecastStatus.map(({ title, bgColor }, index) => {
          return (
            <div key={index} className="flex flex-column justify-center items-center gap-1 md:gap-2">
              <p className={`rounded-sm w-4 h-3.5 ${bgColor}`}></p>
              <p>{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForecastStatus;
