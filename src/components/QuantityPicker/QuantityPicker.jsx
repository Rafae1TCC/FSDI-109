import { useState } from "react";
import "./QuantityPicker.css";

function QuantityPicker(props) {
  const [quantity, setQuantity] = useState(1);

  function increase() {
      const newQty = quantity + 1;
      setQuantity(newQty);
      props.onChange(newQty);
  }

  function decrease() {
      if (quantity > 1) {
          const newQty = quantity - 1;
          setQuantity(newQty);
          props.onChange(newQty);
      }
  }
  return (
    <div className="picker">
      <button className="yellow-btn" disabled={quantity == 1} onClick={decrease}>
        -
      </button>
      <label>{quantity}</label>
      <button className="yellow-btn" onClick={increase}>+</button>
    </div>
  );
}

export default QuantityPicker;
