import "./AdminProduct.css"

function AdminProduct() {
    return (
        <div className="adm-product main-container">
            <h3 className="">Products</h3>
            <div className="form-container">
                <label htmlFor="" className="form-label">Product Name: </label>
                <input type="text" className="form-control" />  
            </div>
            <div className="form-container">
                <label htmlFor="" className="form-label">Product Category: </label>
                <input type="text" className="form-control" />  
            </div>
            <div className="form-container">
                <label htmlFor="" className="form-label">Joker Quality: </label>
                <input type="text" className="form-control" />  
            </div>
            <div className="form-container">
                <label htmlFor="" className="form-label">Image: </label>
                <input type="text" className="form-control" />  
            </div>
            <div className="form-container">
                <label htmlFor="" className="form-label">Price: </label>
                <input type="text" className="form-control" />  
            </div>
        </div>
    )
}

export default AdminProduct;