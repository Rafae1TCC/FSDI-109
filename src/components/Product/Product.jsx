import "./Product.css";
import QuantityPicker from "../QuantityPicker/QuantityPicker";
import { useContext, useState } from 'react';
import DataContext from './../../state/DataContext';

function Product(props) {

  const globalAdd = useContext(DataContext).addProductToCart;
  const [quantity, setQuantity] = useState(1);

  function add(){
    let prodForCart = {...props.data, quantity};
    globalAdd(prodForCart)
    console.log('Added' ,quantity, 'of', props.data.title,'to cart');
  }

  function handleQuantityChange(newQuantity) {
    console.log('Quantity changed to ${newQuantity}');
    setQuantity(newQuantity);
  }

  return (
    <>
      <div className="card">
        <img src={props.data.image} alt="" />
        <h3>{props.data.title}</h3>
        <div className="prices">
          <label className="total">Total: ${props.data.price.toFixed(2)}</label>
          <label className="price">Price: ${props.data.price.toFixed(2)}</label>
        </div>

        <div className="controls">
        <QuantityPicker onChange={handleQuantityChange} />

          <button className="btn-success" onClick={add}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
