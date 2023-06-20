import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {

    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid col-9">
                <a className="navbar-brand text-light" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#">{props.link1}</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => navigate("/about")} className="nav-link active text-white-50" aria-current="page" href="#">{props.link2}</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => navigate("/services")} className="nav-link active text-white-50" aria-current="page" href="#">{props.link3}</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => navigate("/contact")} className="nav-link active text-white-50" aria-current="page" href="#">{props.link4}</a>
                            </li>    
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;