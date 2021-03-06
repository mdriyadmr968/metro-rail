import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./City.css";

const City = (props) => {
  const { name, distance, area, famousPlace, cost, img } = props.city;
  const element = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="card-container">
      <div className="card">
        <div className="container">
          <div className="all-text">
            <img src={img} alt="" />
            <p>Name: {name}</p>
            <p>Area: {area} square km</p>
            <p>Distance: {distance} KM</p>
            <p>Famous place: {famousPlace}</p>
            <p>Ticket cost: {cost} tk</p>
            <button
              onClick={() => props.handleTotal(props.city)}
              className="buy-ticket"
            >
              {element} Buy ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default City;
