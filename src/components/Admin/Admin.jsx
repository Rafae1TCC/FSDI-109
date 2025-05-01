import "./Admin.css";
import AdminDiscount from './AdminDiscount';
import AdminProduct from "./AdminProduct";

function Admin(){

    return (
        <div className="admin">
            <h1>Balatro Administration</h1>
            <img src="/images/LocalThunkLogo.webp" alt="" />

            <div className="parent">
                <AdminDiscount />
                <AdminProduct />
            </div>
        </div>
    );

}

export default Admin;