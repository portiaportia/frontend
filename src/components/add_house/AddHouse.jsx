import "./AddHouse.css";

const AddHouse = () => {
    return(
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
                    <h2>{props.title}</h2>
                </div>
            </div>
        </div>
    )
};

export default AddHouse;