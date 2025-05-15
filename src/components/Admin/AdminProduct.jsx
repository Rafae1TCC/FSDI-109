import { useState, useEffect } from "react";
import "./AdminProduct.css"
import DataService from "../../services/DataService";

function AdminProduct() {
const [allProducts, setAllProducts] = useState([])
const [product, setProduct] = useState({
        "title": "",
        "category": "",
        "price": "",
        "description": "",
        "image": "",
    })

    async function loadProducts() {
        let allProds = await DataService.getCatalog();
        setAllProducts(allProds);
      }
    
      useEffect(function() {
        loadProducts();
      }, []);

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

            case "description":
                temp.description = text;
            break

            case "image":
                temp.image = text;
            break

            case "price":
                temp.price = parseFloat(text);
            break
        }
        setProduct(temp)
    }

    async function save(){
        console.log(product)
        let response = await DataService.saveProduct(product);
        console.log(response)

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
                    <label className="form-label">Description: </label>
                    <input onBlur={handleInput} name="description" type="text" className="form-control" />  
                </div>
                <div className="form-container">
                    <label className="form-label">Image: </label>
                    <input onBlur={handleInput} name="image" type="text" className="form-control" />  
                </div>
                <div className="form-container">
                    <label className="form-label">Price: </label>
                    <input onBlur={handleInput} name="price" type="number" className="form-control" />  
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