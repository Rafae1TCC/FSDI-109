import { useState } from "react";
import "./AdminDiscount.css"

function AdminDiscount() {

    const [allCoupons, setAllCoupons] = useState([]);

    const [coupon, setCoupon] = useState({
        code: "",
        discount: ""
    });

    function handleInput(e){
 
        let text = e.target.value;
        let name = e.target.name;
        console.log(name, text)

        let copy = {...coupon};
        if(name == "code"){
            copy.code = text;
        }else if (name == "discount"){
            copy.discount = text;
        }
        setCoupon(copy)
    }

    function save(){
        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    return (
        <div className="adm-discount gray-container">
            <h3 className="">Discounts</h3>
            <div className="inner-container">
                <div className="form-container">
                    <label className="form-label">Code</label>
                    <input onBlur={handleInput} type="text" name="code" className="form-control" />  
                </div>
                <div className="form-container">
                    <label className="form-label">Discount</label>
                    <input onBlur={handleInput} type="text" name="discount" className="form-control" />  
                </div>
                <div className="form-container">
                    <button onClick={save} className="green-btn">Save Discount</button>
                </div>
                <ul className="list-container">
                    {allCoupons.map(coup=><li className="inner-gray-container list-card" key={coup.code}>{coup.code}-{coup.discount}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default AdminDiscount;