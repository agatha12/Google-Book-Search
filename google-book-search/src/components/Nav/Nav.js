import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h3>Google Book Search</h3>
            <div>
            <Link
              to="/"
              className="nav-link"
              
            >
              Search
            </Link>
            <Link
              to="/saved"
              className="nav-link"
              
            >
              Saved
            </Link>
            </div>   
            </nav>

        </nav>
    )
}

export default Nav;