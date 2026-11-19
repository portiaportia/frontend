import React, { useState } from "react"
import { API_BASE_URL } from "../../../../config";
import "./DeleteDialog.css";

const DeleteDialog = (props) => {
    const[result, setResult] = useState("");

    const deleteHousePlan = async() => {
        setResult("Sending ...");

        const response = await fetch(`${API_BASE_URL}/api/houses/${props._id}`,{
            method:"DELETE"
        });

        if(response.status ===200){
            setResult("Successfully deleted");
            props.closeDialog()
            props.hideHouse();
        }
    };

    return (
        <>
            <h3>Are you sure you want to delete the {props.name}</h3> 
            <section id="delete-buttons">
              <button onClick = {props.closeDialog}>No</button>            
              <button onClick={deleteHousePlan}>Yes</button>
            </section>
            <p id="status-message">{result}</p>
        </>
    );
};

export default DeleteDialog;