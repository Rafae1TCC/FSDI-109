import "./About.css";
import { useState } from "react";

function About(){
    const [showEmail, setShowEmail] = useState(false);

    function displayEmail(){
        setShowEmail(true);
    }

    return (
        <div className="about">
            <img src="/images/Jokers/Joker.webp" alt="" className="picture" />
            <h2>Cabrera Contreras Rafael Tonathiu</h2>
            { showEmail ? <h5>rafaelcabrera@sdgku.edu</h5> : null}

            <a className="btn" onClick={displayEmail}>Show email</a>
        </div>
    );

}

export default About;