import './App.css';
import Header from "../src/components/Header";
import ProductList from './components/ProductList';
import { Switch, Route, Redirect } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <nav>
        <Header />
      </nav>
      <Switch>
        <Route path={"/"} exact component={ProductList} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
