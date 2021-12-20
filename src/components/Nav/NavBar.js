import React from "react";
import '../../style/NavBar.css';
import Burger from "./Burger";

const NavBar = () => {
    return (
        <div>
            <div className="nav">
                <div className="logo">
                    Nav Bar
                </div>
              <Burger />
            </div>
        </div>
    )
}

export default NavBar