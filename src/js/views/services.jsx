import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTitle } from "../component/actions.js";
import { Link } from "react-router-dom";


const Services = () => {

    const [newTitle, setNewTitle] = useState("")

    const dispatch = useDispatch();

    // const navigate = useNavigate(); // another way to link

    return (
        <div className="row container">
            <h1>Services</h1>
            <input 
            value={newTitle}
            onChange={(e) => {
                setNewTitle(e.target.value)
            }}
            onKeyDown={(e) => {
                if(e.key === "Enter") {
                    dispatch(addTitle(newTitle))
                }
            }}
            type="text" 
            placeholder="Insert a title" />
            <Link to="/home" type="button" class="btn btn-success">Home</Link>  
        </div>
    )
}

export default Services;