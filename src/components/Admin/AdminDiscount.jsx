import "./AdminDiscount.css"

function AdminDiscount() {
    return (
        <div className="adm-discount main-container">
            <h3 className="">Discounts</h3>
            <div className="form-container">
                <label htmlFor="" className="form-label">Code</label>
                <input type="text" className="form-control" />  
            </div>
        </div>
    )
}

export default AdminDiscount;