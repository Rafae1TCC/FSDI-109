import "./Home.css";
import { Link } from "react-router-dom";

function Home(){

    return (
        <div className="home">
            <div>
            <h1>Balatro Shop Home Page</h1>
            <img src="/images/Site-logo.png" alt="" />
            </div>
            <Link className="green-btn" to="../catalog">
            Catalog
          </Link>
        </div>
    );

}

export default Home;