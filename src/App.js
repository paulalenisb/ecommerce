import './App.css';
import Header from "../src/components/Header";
import ProductList from './components/ProductList';
// import ShopCart from './components/ShopCart';


function App() {
  return (
    <div className="App">
      <Header/>
      <ProductList/>
      {/* <ShopCart/> */}
    </div>
  );
}

export default App;
