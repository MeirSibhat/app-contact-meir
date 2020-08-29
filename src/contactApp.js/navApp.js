import React from 'react'
import { Link} from "react-router-dom";

function NavApp() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top  ">
                <span style={{ color: "white" }} >Contact App</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li>
                            <Link className="nav-link" to="/">Add</Link>
                        </li>
                        <li >
                            <Link className="nav-link" to="/list">List</Link>
                        </li>
                        <li >
                            <Link className="nav-link" to="/total">Total</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavApp
