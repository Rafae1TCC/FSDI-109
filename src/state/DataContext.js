import { createContext } from "react";

const DataContext = createContext({

    cart: [],
    user: {},

    addProductToCart: () => {},
    removeProduct: () => {},
    clearCart: () => {},

});

export default DataContext;