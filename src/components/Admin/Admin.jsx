import "./Admin.css";
import AdminDiscount from './AdminDiscount';
import AdminProduct from "./AdminProduct";

function Admin(){

    return (
        <div className="admin main-container">
            <div className="gray-container title-card">
                <h3>Balatro Administration</h3>
                <div className="admin inner-container">
                    <img src="/images/LocalThunkLogo.webp" alt="" />
                </div>
            </div>
            <div className="parent">
                <AdminDiscount />
                <AdminProduct />
            </div>
        </div>
    );

}

export default Admin;