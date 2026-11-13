import { API_BASE_URL } from "../../../../config";

const DetailsDialog = (props) => {

    return (
        <>
            <h2>{props.name}</h2>
            <section id="edit-links">
                <a href="edit-link" onClick={props.showEdit}>&#9998;</a>
                <a href="delete-link" onClick={props.showDelete}>&#x2715;</a>
            </section>
            <img src={`${API_BASE_URL}/images/${props.main_image}`} alt="House" />
            <p>{props.bedrooms} Bedrooms</p>
            <p>{props.bathrooms} Bathrooms</p>
            <p>Size: {props.size} sqft</p>
            <p>Features: {props.features.join(", ")}</p>
        </>

    );
};

export default DetailsDialog;