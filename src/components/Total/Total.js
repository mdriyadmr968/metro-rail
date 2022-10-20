import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Total.css";

const Total = (props) => {
  const { total } = props;
  console.log(total);

  let totalprice = 0;
  for (const city of total) {
    totalprice = totalprice + city.cost;
  }

  return (
    <div>
      <Card border="primary" className="card-header">
        <Card.Body>
          <h1>Order summary</h1>
          <h3>Ticket Ordered : {props.total.length}</h3>
          <div class="card-item-container">
            <div class="">
              <img class="card-image" src={props.total.img} />
            </div>
            <div class="card-item-detail">
              <div class="row">
                <h3>Total Cost : {totalprice} $</h3>
                <h3>SELECTED CITY</h3>
              </div>
              <div class="">
                <ul>
                  {total.map((city) => (
                    <div>
                      <li className="li-container">
                        <img className="cart-images" src={city.img} alt="" />
                        <div>
                          <h3>{city.name}</h3>
                          <h4>{city.cost}$</h4>
                        </div>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Total;

{
  /* <div className="">
  <h3 className="order-sum">Order summary</h3>
  <h5>Ticket Ordered : {props.total.length}</h5>
  <p>Total Cost : {totalprice} Taka</p>
  <div>
    <h3 className="selected-loc">Selected Locations:</h3>
    <ul>
      {total.map((city) => (
        <li>{city.name}</li>
      ))}
    </ul>
  </div>
</div>; */
}
