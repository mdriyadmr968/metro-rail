import React from "react";
import "./Total.css";


const Total = (props) => {
  const { total } = props;
  let totalprice = 0;
  let clicked = "";
  for (const city of total) {
    totalprice = totalprice + city.cost;
    
  }
  for (const city of total){
    clicked = clicked +' ' + city.name ;
  }

  return (
    <div>
      <h3>Order summary</h3>
      <h5>Ticket Ordered : {props.total.length}</h5>
      <p>Total Cost : {totalprice}</p>
      <div>
        <h3>clicked by:</h3>
        <h3 className = "clicked">{clicked}</h3>
      </div>
    </div>
  );
};

export default Total;
