import axios from "axios";
import React, { useEffect, useState } from "react";

const SerachData = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setData(response.data);
      setFilterData(response.data);
    });
  }, []);

  

  const handleSearch = (value) => {
    const result = filterData.filter((f) =>
      f.name.toLowerCase().includes(value)
    );
    console.log(result);
    setData(result);
    if (value === "") {
      setData([]);
    }
  };
  // console.log(setData);
  return (
    <div>
      <input type="text" onChange={(e) => handleSearch(e.target.value)}></input>

      {data.map((item) => {
        return (
          <>
            <p>{item.name}</p>
          </>
        );
      })}
    </div>
  );
};

export default SerachData;
