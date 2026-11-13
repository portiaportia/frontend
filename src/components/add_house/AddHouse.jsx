import {useState} from "react";
import { API_BASE_URL } from "../../config";

const AddHouse = (props) => {
    const [prevSrc, setPrevSrc] = useState("");
    const [result, setResult] = useState("");

    const uploadImage = (e) => {
        setPrevSrc(URL.createObjectURL(e.target.files[0]));
    };

    const addHouseToServer = async(e) => {
        e.preventDefault();
        setResult("Sending ...");
        const formData = new FormData(e.target);
        //console.log(...formData);

        const response = await fetch(`${API_BASE_URL}/api/houses`,{
            "method":"POST",
            "body":formData
        });

        if(response.status==200){
            setResult("House successfully added");
            props.add_house_to_list(await response.json());
            props.close_dialog();
        } else {
            setResult("Error Adding House");
        }

    };

    return(
        <div id="add-house-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.close_dialog}>
                            &times;
                    </span>
                </div>
                <div id="house-dialog-content">
                    <h2>Add House</h2>

                    <form onSubmit={addHouseToServer}>
                            <p>
                                <label htmlFor="name">House Name:</label>
                                <input type="text" id="name" name="name" required minLength="3"></input>
                            </p>

                            <p>
                                <label htmlFor="size">Size:</label>
                                <input type="number" id="size" name="size" required min="0"></input>
                            </p>

                            <p>
                                <label htmlFor="bedrooms">Bedrooms:</label>
                                <input type="number" id="bedrooms" name="bedrooms" required min="0"></input>
                            </p>

                            <p>
                                <label htmlFor="bathrooms">Bathrooms:</label>
                                <input type="number" id="bathrooms" name="bathrooms" required min="0"></input>
                            </p>

                            <p>
                                <label htmlFor="features">Features:</label>
                                <textarea type="text" id="features" name="features"></textarea>
                            </p>

                            <section>
                                <p id="img-prev-section">
                                    {prevSrc===""?(""):(
                                        <img id="img-prev" src={prevSrc} />
                                    )}
                                </p>
                                <p>
                                    <label htmlFor="img">Select Image</label>
                                    <input type="file" id="img" name="img" accept="images/*" onChange={uploadImage}></input>
                                </p>
                            </section>

                            <p>
                                <button type="submit">Submit</button>
                            </p>
                            <p id="status-message">{result}</p>
                        </form>   
                </div>
            </div>
        </div>
    )
};

export default AddHouse;