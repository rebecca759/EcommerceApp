import Home from "./pages/Home"
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom"
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Register from "./pages/Register"
import "./app.css"
import { useSelector } from "react-redux";

const App = () => {
  // useAlan()
  const user = useSelector(function(state) {
    console.log(state);
    return state?.user?.currentUser
  });
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        <Route path="/product/:id">
          <Product/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/login">
        {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/register">
        {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  )
};

export default App;