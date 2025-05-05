import "./Cart.css";
import { useContext } from "react";
import DataContext from "../../state/DataContext";

function Info(){
    const cart = useContext(DataContext).cart;
    const clearCart = useContext(DataContext).clearCart;

    function clear(){
        clearCart();
    }

    function getTotalOfProducts(){
        let total = 0;
        
        for(let i=0; i<cart.length; i++){
          total += cart[i].quantity * cart[i].price;
        }
  
        return total.toFixed(2);
    }

    return(
        <div className="total-info main-container">
            { cart.length > 0 ?
                <div>
                    <div className="gray-container title-card">
                            <h3>Your total is ${getTotalOfProducts()}!</h3>
                            <button className="green-btn">Pay now</button>
                    </div>
                    <div className="gray-container title-card">
                            <button onClick={clear} className="yellow-btn">Clear Cart</button>
                    </div>    
                </div>
                    : 
                <div className="gray-container title-card">
                    <h3>Your cart is empty</h3>
                </div>
                
            }
        </div>
    )
}

export default Info;