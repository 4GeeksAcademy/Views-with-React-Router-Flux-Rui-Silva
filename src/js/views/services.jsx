import React from "react";
import { Link } from "react-router-dom";

const Services = () => {

    // const navigate = useNavigate(); // another way to link

    return (
        <div>
            <h1>Services</h1>
            <Link to="/home" type="button" class="btn btn-link">Home</Link>  
        </div>
    )
}

export default Services;