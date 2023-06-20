import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Contacts</h1>
            <button onClick={() => navigate("/home")} type="button" class="btn btn-link">Home</button>
        </div>
    )
}

export default Contact;