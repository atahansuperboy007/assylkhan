import SmartphoneItem from "./SmartphoneItem"
import smartphone from "./data/smartphone.json"
import "./List.css";

function SmartphoneList(props) {
  return (
    <div className="smartphone-list">
        {
        smartphone.filter(item => {
          if (props.search == ""){
            return item
          }else if (item.title.toLowerCase().includes(props.search.toLowerCase())){
            return item
          }
        }).map((item) => {
          return (<SmartphoneItem data={item}/>)
        })
      }
    </div>
  );
}

export default SmartphoneList;
