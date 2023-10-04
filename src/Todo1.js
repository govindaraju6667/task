import React, { useState } from "react";

export const Todo1 = () => {
  const [data, setData] = useState([]);

  function handleClick() {
    setData([...data]);
  }
  console.log(data);

  return (
    <div>
      <input type="text" onChange={(e) => setData(e.target.value)}></input>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};
