import React from "react";
import "./Total.css";


const Total = (props) => {
  const { total } = props;
  let totalprice = 0;
  for (const city of total) {
    totalprice = totalprice + city.cost;
    
  }

  return (
    <div>
      <h3 className="order-sum">Order summary</h3>
      <h5>Ticket Ordered : {props.total.length}</h5>
      <p>Total Cost : {totalprice} Taka</p>
      <div>
        <h3 className="selected-loc">Selected Locations:</h3>
        <ul>
          {
            total.map(city => <li>{city.name}</li>)
          }
        </ul>
      </div>
    </div>
  );
};

export default Total;
