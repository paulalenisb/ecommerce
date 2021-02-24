import './App.css';
import Header from "../src/components/Header";
import {Switch, Route, NavLink, Redirect} from "react-router-dom";
import ProductList from './components/ProductList';
import ShopCart from './components/ShopCart';


function App() {
  return (
    <div className="App">
            <nav>
            <Header/>
      </nav>
      <Switch>
        <Route path={"/"} exact component={ProductList} />
        <Route path={"/cart"} exact component={ShopCart} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
