import React from "react";
import { useContext } from "react";
import { StoreContext } from "../Store";
import "./basket.css";
import Buy from "../Buy"

function Basket(props) {
  const context = useContext(StoreContext);
  const deleteFromBasket = (id) => {
    const newBasket = context.basket.filter((item) => item.id != id);
    console.log(id);
    console.log(newBasket);
    context.setBasket(newBasket);
  };

  return (
    <div className="mainbasket">
      {console.log(context.basket)}
      {context.basket.map((item) => {
        return (
          <div className="basket-list">
            <ul className="basket-item">
              <li className="basket">
                <img src={item.img}></img>
                <h1>{item.title}</h1>
                <div className="btns">
                  <button onClick={Buy}>Купить</button>
                  <button
                    className="button"
                    onClick={() => {
                      deleteFromBasket(item.id);
                    }}
                  >
                    <span>Удалить</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Basket;
