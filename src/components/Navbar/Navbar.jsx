import { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import DataContext from "../../state/DataContext";

function Navbar() {

  let user = useContext(DataContext).user;
  let cart = useContext(DataContext).cart;

  return (
    <>
      <nav>
        <span className="title">Balatro Shop</span>
        <div className="menu">
          <Link className="navbtn" to="./home">
            Home
          </Link>
          <Link className="navbtn" to="./catalog">
            Catalog
          </Link>
          <Link className="navbtn" to="./about">
            About
          </Link>
          <Link className="navbtn" to="./admin">
            Admin
          </Link>
        </div>
        <label className="navbtn">{user.userName}</label>
          <Link className="navbtn" to="./cart">
          {cart.length} Cart
          </Link>
      </nav>
    </>
  );
}
export default Navbar;
