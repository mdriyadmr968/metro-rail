import React, { useEffect, useState } from "react";
import City from "../City/City";
import Total from "../Total/Total";
import "./Locations.css";

const Locations = () => {
  const [allcity, setAllcity] = useState([]);
  const [total, setTotal] = useState([]);
  const [total2, setTotal2] = useState([]);
  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setAllcity(data));
  }, []);

  const handleTotal = (city) => {
    const newtotal = [...total, city];
    setTotal(newtotal);
  };

  const handleClickedby = (city) => {
    const newClicked = [...total2, city];
    setTotal2(newClicked);
  };
  return (
    <div className="locations-container">
      <div className="allcity-container">
        {allcity.map((city) => (
          <City
            key={city.name}
            city={city}
            handleTotal={handleTotal}
            handleClickedby={handleClickedby}
          ></City>
        ))}
      </div>
      <div className="total-container">
        <Total total={total}></Total>
      </div>
    </div>
  );
};

export default Locations;
