import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./City.css";

const City = (props) => {
  const { name, distance, area, famousPlace, cost, img } = props.city;
  const element = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div class="container page-wrapper">
      <div class="page-inner">
        <div class="row">
          <div class="el-wrapper">
            <div class="box-up">
              <img class="img" src={img} />
              <div class="img-info">
                <div class="info-inner">
                  <span class="p-name">{name}</span>
                  <span class="p-company">Distance is: {distance} KM</span>
                </div>
                <div class="a-size">
                  Famous place: <span class="size">{famousPlace}</span>
                </div>
              </div>
            </div>

            <div class="box-down">
              <div class="h-bg">
                <div class="h-bg-inner"></div>
              </div>

              <a class="cart" href="#">
                <span class="price">{cost} $</span>
                <span class="add-to-cart">
                  <span
                    class="txt"
                    onClick={() => props.handleTotal(props.city)}
                  >
                    Buy Ticket
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default City;
