import { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import DataContext from "../../state/DataContext";

function Navbar() {

  let user = useContext(DataContext).user;
  let cart = useContext(DataContext).cart;

  function getNumOfProducts(){
    let total = 0;
    for(let i=0; i<cart.length; i++){
      total += cart[i].quantity;
    }
    return total;
  }

  return (
    <>
      <nav className="sidebar-container">
        <h1 className="title">Balatro Shop</h1>
        <div className="menu">
          <Link className="cart-btn yellow-btn" to="/home">
            Home 
          </Link>
          <Link className="red-btn cart-btn" to="/catalog">
            Catalog
          </Link>
          <Link className="red-btn cart-btn" to="/about">
            About
          </Link>
          <Link className="yellow-btn cart-btn" to="/admin">
            Admin
          </Link>
        </div>
        <div className="menu">
          <div>
            <div className="gray-container cart-btn total">
              <p>Total</p>
              <p className="y-txt inner-container">${getNumOfProducts()}</p>
            </div>
          </div>
          <Link className="no-deco" to="/cart">
          <div className="gray-container cart-btn total">
            <p>Items</p>
            <p className="y-txt inner-container">{getNumOfProducts()}</p>
          </div>
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
