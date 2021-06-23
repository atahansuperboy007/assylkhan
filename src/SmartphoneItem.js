import "./List.css";
import { StoreContext } from "./Store";
import { useContext } from "react";
import Buy from "./Buy"

function SmartphoneItem(props) {
  const context = useContext(StoreContext);

  function addToBasket() {
    const data = {
      id:props.data.id,
      img: props.data.img,
      title: props.data.title,
      desc: props.data.desc,
    };
    context.setBasket([...context.basket, data]);
    {
      console.log(context.basket);
    }
  }
  return (
    <div className="smartphone-container">
      <ul className="smartphone-item">
        <li className="smartphones">
          <img src={props.data.img} alt="photo" />
          <h1>{props.data.title}</h1>
          <div className="buy">
            <button onClick={Buy}>{props.data.desc}</button>
            <button className="button" onClick={addToBasket}><span>Добавить </span></button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SmartphoneItem;
