import "./Product.css";
import QuantityPicker from "../QuantityPicker/QuantityPicker";
import { useContext, useState } from 'react';
import DataContext from './../../state/DataContext';

function Product(props) {

  const globalAdd = useContext(DataContext).addProductToCart;
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  function add(){
    let prodForCart = {...props.data, quantity};
    globalAdd(prodForCart)
    console.log('Added', quantity, 'of', props.data.title, 'to cart');
  }

  function handleQuantityChange(newQuantity) {
    console.log(`Quantity changed to ${newQuantity}`);
    setQuantity(newQuantity);
  }

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }

  return (
    <>
      <div 
        className="card-wrapper" 
        onMouseEnter={handleMouseOver} 
        onMouseLeave={handleMouseOut}
      >
        <div className="card">
          <img src={props.data.image} alt="" />
        </div>

        {isHovered && (
          <>
            <div className="desc-container overlay quantity-picker">
              <QuantityPicker onChange={handleQuantityChange} />
            </div>
            <div className="desc-container overlay description-box">
              <div className="desc-left">
                <h2>{props.data.title}</h2>
                <label>{props.data.category}</label>
              </div>
              <div className="white-container desc-right">
                <p>{props.data.description}</p>
              </div>
            </div>
          <div className="desc-container overlay controls-box">
            <div className="desc-right">
              <label className="price">Price: ${props.data.price.toFixed(2)}</label>
              <button className="product green-btn" onClick={add}>Add</button>
            </div>
          </div>
        </>
        )}
      </div>
    </>
  );
}

export default Product;