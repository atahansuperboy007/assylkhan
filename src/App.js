import "./App.css";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import { useState } from "react";
import SmartphoneList from "./SmartphoneList";
import TvList from "./TvList";
import PcList from "./PcList";
import SmartphoneItem from "./PcItem";
import PcItem from "./PcItem";
import TvItem from "./TvItem";
import Basket from "./box/Basket";
import { StoreProvider } from "./Store";
import Otziv from "./Otziv";
import Landing from "./Landing"
import Soc from "./Soc"
import Footer from "./Footer"

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <div className="container">
        <StoreProvider>
          <BrowserRouter>
            <div className="main-links">
              <div className="links">
                <Link to="/tovars">Все товары</Link>
                <Link to="/smartphones">Смартфоны</Link>
                <Link to="/tv">Телевизоры</Link>
                <Link to="/pc">Компьютеры</Link>
                <Link to="/">О нас</Link>
              </div>
              <input type="text" name="search" placeholder="Search.." id="search" onChange={(e) => {setSearch(e.target.value)}}></input>
              <div className="otzivi">
                <Link to="/otziv">Отзыв</Link>
              </div>
              <div className="Basket">
                <Link to="/box">Корзина</Link>
              </div>
            </div>
            <Switch>
              <Route path="/tovars">
                <SmartphoneList  search={search}/>
                <TvList search={search}/>
                <PcList search={search}/>
                <Basket search={search}/>
                <Soc />
                <Footer />  
              </Route>
              <Route path="/smartphones">
                <SmartphoneList search={search}/>
                <Soc />
                <Footer />
              </Route>
              <Route path="/tv">
                <TvList search={search}/>
                <Soc />
                <Footer />
              </Route>
              <Route path="/pc">
                <PcList search={search}/>
                <Soc />
                <Footer />
              </Route>
              <Route path="/otziv">
                <Otziv search={search}/>
                <Soc />
                <Footer />
              </Route>
              <Route path="/box">
                <Basket search={search}/>
                <Soc />
                <Footer />
              </Route>
              <Route exact path="/">
                <Landing />
                <Soc />
                <Footer />
              </Route>
            </Switch>
          </BrowserRouter>
        </StoreProvider>
      </div>
    </div>
  );
}

export default App;
