import './App.css';
import Header from "../src/components/Header";
import ProductList from './components/ProductList';
import { Switch, Route, Redirect } from "react-router-dom";
// import ShopCart from './components/ShopCart';
import { connect } from "react-redux";


function App() {
  return (
    <div className="App">
      <nav>
        <Header />
      </nav>
      <Switch>
        <Route path={"/"} exact component={ProductList} />
        {/* <Route path={"/cart"} exact component={ShopCart} /> */}
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     data: state.ProductList.data,
//   };
// };

// export default connect(mapStateToProps)(App);
export default App;
