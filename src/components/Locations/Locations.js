import React, { useEffect, useState } from "react";
import City from "../City/City";
import Total from "../Total/Total";
import "./Locations.css";

const Locations = () => {
  const [allcity, setAllcity] = useState([]);
  const [total, setTotal] = useState([]);
  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setAllcity(data));
  }, []);

  const handleTotal = (city) => {
    const newtotal = [...total, city];
    setTotal(newtotal);
  };

  return (
    <div className="locations-container">
      <div className="allcity-container">
        {allcity.map((city) => (
          <City key={city.name} city={city} handleTotal={handleTotal}></City>
        ))}
      </div>
      <div className="total-container">
        <Total total={total}></Total>
      </div>
    </div>
  );
};

export default Locations;
