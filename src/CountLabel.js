import React, { useState } from "react";

export const CountLabel = ({ count }) => {
  const [previousCount, setPreviousCount] = useState(count);
  const [trend, setTrend] = useState(null);

  if (previousCount !== count) {
    setPreviousCount(count);
    setTrend(count > previousCount ? "increasing" : "decreasing");
  }
  //   console.log(setPreviousCount);
  console.log(previousCount);
  console.log(trend);

  return (
    <div>
      <h1>{count}</h1>
      {trend && <p>The count is {trend} </p>}
    </div>
  );
};
