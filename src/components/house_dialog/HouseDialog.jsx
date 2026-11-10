import "./HouseDialog.css";

const HouseDialog = () => {
    return (
        <div id="house-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close"
                        className="w3-button w3-display-topright">
                            &times;
                        </span>
                </div>
                <div id="house-dialog-content">
                    <h2>What's up</h2>
                </div>
            </div>
        </div>
    )
};

export default HouseDialog;