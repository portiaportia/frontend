import "./Dialog.css";
import {useState} from "react";
import DetailsDialog from "./details_dialog/DetailsDialog";
import EditDialog from "./edit_dialog/EditDialog";
import DeleteDialog from "./delete_dialog/DeleteDialog";

const Dialog = (props) => {
    const [showContent, setShowContent] = useState("details");

    const showEdit = (e) => {
        e.preventDefault();
        setShowContent("edit");
    }

    const showDelete = (e) => {
        e.preventDefault();
        setShowContent("delete");
    }

    return (
        <div id="house-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.close_dialog}>
                            &times;
                    </span>
                </div>
                <div id="house-dialog-content">
                    {showContent==="details"?(
                        <DetailsDialog 
                            name={props.name}
                            bedrooms={props.bedrooms}
                            size={props.size}
                            bathrooms={props.bathrooms}
                            main_image={props.main_image}
                            features={props.features}
                            showEdit={showEdit}
                            showDelete={showDelete}
                        />
                    ):showContent === "edit"?(
                        <EditDialog 
                            _id={props._id}
                            name={props.name}
                            size={props.size}
                            main_image={props.main_image}
                            bedrooms={props.bedrooms}
                            bathrooms={props.bathrooms}
                            features={props.features}
                            closeDialog = {props.closeDialog} />
                    ):(
                        <DeleteDialog 
                            _id={props._id}
                            name={props.name}
                            closeDialog = {props.closeHouseDialog} />
                    )}
                </div>
            </div>
        </div>
    )
};

export default Dialog;