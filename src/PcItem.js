import "./PC.css";
import { StoreContext } from "./Store";
import { useContext } from "react";
import Buy from "./Buy";

function PcItem(props) {
  const context = useContext(StoreContext);

  function addToBasket() {
    const data = {
      id: props.data.id,
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
    <div className="pc-container">
      <ul className="pc-item">
        <li className="pc">
          <img src={props.data.img} alt="photo" />
          <h1>{props.data.title}</h1>
          <div className="buy">
            <button onClick={Buy}>{props.data.desc}</button>
            <button className="button" onClick={addToBasket}>
              <span>Добавить </span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default PcItem;
