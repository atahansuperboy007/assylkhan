import TvItem from "./TvItem"
import tv from "./data/tv.json"
import "./TV.css";

function TvList(props) {
  return (
    <div className="tv-list">
        {
        tv.filter(item => {
          if (props.search == ""){
            return item
          }else if (item.title.toLowerCase().includes(props.search.toLowerCase())){
            return item
          }
        }).map((item) => {
          return (<TvItem data={item}/>)
        })
      }
    </div>
  );
}

export default TvList;

  