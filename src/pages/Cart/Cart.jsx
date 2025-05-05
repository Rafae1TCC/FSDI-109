import "./Cart.css";
import { useContext } from "react";
import DataContext from "../../state/DataContext";
import { Link } from "react-router-dom";
import Info from './Info';

function Cart(){
    const cart = useContext(DataContext).cart;

    function getNumOfProducts(){
      let total = 0;
      for(let i=0; i<cart.length; i++){
        total += cart[i].quantity;
      }
      return total;
    }

    return (
        <div className="cart cart-container">
            <div className="prod-info main-container">
                <div className="gray-container title-card">
                    { cart.length > 0 ? 
                    <>
                        <h1>Ready to complete your order?</h1>
                        <h3>We have {getNumOfProducts()} products ready for you!</h3>
                        <div className="list-container inner-container">
                            {cart.map( prod => 
                                <div className="list-card-row inner-gray-container cart-list">
                                    <div className="card-content">
                                        <img src={prod.image} alt="" />
                                        <h5>{prod.title}</h5>
                                    </div>
                                        <div className="inner-container card-content">
                                            <label>Quantity:</label>
                                            <p className="inner-gray-container">{prod.quantity}</p>  
                                        </div>
                                        <div className="inner-container card-content">
                                            <label>Price:</label>
                                            <p className="inner-gray-container">${prod.price}</p>  
                                        </div>
                                        <button className="red-btn">Remove</button>
                                </div>
                            )}
                        </div>
                    </>
                    : 
                    <>
                        <h1>Ready to start your order?</h1>
                        <h3>We have a big <Link to="/catalog">Catalog</Link> of products ready for you!</h3>
                    </>
                    }

                </div>
            </div>
            <Info></Info>
        </div>
    );
}

export default Cart;