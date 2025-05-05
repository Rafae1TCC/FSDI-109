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
          onMouseOver={handleMouseOver} 
          onMouseOut={handleMouseOut} 
          className="card"
          >

          {isHovered && 
          <div className="">
            <QuantityPicker onChange={handleQuantityChange} />
          </div>
          }

          <div className="overlay">
            {isHovered && 
              <div className="description inner-container">
                <h2>{props.data.title}</h2>
                <p>{props.data.description}</p>
                <label>{props.data.category}</label>
              </div>
            }
            <img src={props.data.image} alt="" />
            {isHovered && 
              <div className="description controls">
                <label className="price">Price: ${props.data.price.toFixed(2)}</label>
                <button className="product green-btn" onClick={add}>
                  Add
                </button>
              </div>
            }
          </div>
          
        </div>
    </>
  );
}

export default Product;