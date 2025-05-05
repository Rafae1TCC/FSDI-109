import { useState } from "react";
import DataContext from "../../state/DataContext";

function GlobalProvider(props){
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ userName: "Rafael" });
    
    function addProductToCart (prod) {
        let copy = [...cart];
        copy.push(prod);
        setCart(copy);
    }
    
    function removeProduct () {

    }
    
    function clearCart () {
        setCart([]);
    }
    
    return (
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            removeProduct: removeProduct,
            clearCart: clearCart,
        }}>
           {props.children}
        </DataContext.Provider>
    )
}

export default GlobalProvider;