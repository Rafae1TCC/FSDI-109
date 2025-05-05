import { useState } from "react";
import "./AdminProduct.css"

function AdminProduct() {
const [allProducts, setAllProducts] = useState([])
const [product, setProduct] = useState({
        "title": "",
        "category": "",
        "quality": "",
        "image": "",
        "price": "",
    })

    function handleInput(e){
 
        let text = e.target.value;
        let name = e.target.name;

        let temp = {...product};
        switch(name){
            case "title":
                temp.title = text;
            break

            case "category":
                temp.category = text;
            break

            case "quality":
                temp.quality = text;
            break

            case "image":
                temp.image = text;
            break

            case "price":
                temp.price = text;
            break
        }
        setProduct(temp)
    }

    function save(){
        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }

    return (
        <div className="adm-product gray-container">
            <h3 className="">Products</h3>
            <div className="inner-container">
                <div className="form-container">
                    <label className="form-label">Product Name: </label>
                    <input onBlur={handleInput} name="title" type="text" className="form-control" />  
                </div>
                <div className="form-container">
                    <label className="form-label">Product Category: </label>
                    <input onBlur={handleInput} name="category" type="text" className="form-control" />  
                </div>
                <div className="form-container">
                    <label className="form-label">Joker Quality: </label>
                    <input onBlur={handleInput} name="quality" type="text" className="form-control" />  
                </div>
                <div className="form-container">
                    <label className="form-label">Image: </label>
                    <input onBlur={handleInput} name="image" type="text" className="form-control" />  
                </div>
                <div className="form-container">
                    <label className="form-label">Price: </label>
                    <input onBlur={handleInput} name="price" type="text" className="form-control" />  
                </div>
                <div className="form-container">
                        <button onClick={save} className="green-btn">Save Product</button>
                </div>
                <ul className="list-container">
                        {allProducts.map(prod=><li key={prod.title} className="inner-gray-container list-card">
                            <img src={prod.image}/>
                            {prod.title} - ${prod.price}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default AdminProduct;