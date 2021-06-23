import PcItem from "./PcItem";
import pc from "./data/pc.json";
import "./PC.css";

function PcList(props) {
  return (
    <div className="pc-list">
      {
        pc.filter(item => {
          if (props.search == ""){
            return item
          }else if (item.title.toLowerCase().includes(props.search.toLowerCase())){
            return item
          }
        }).map((item) => {
          return (<PcItem data={item}/>)
        })
      } 
    </div>
  );
}

export default PcList;
