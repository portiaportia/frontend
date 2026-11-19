import "./House.css";
import {useState} from "react";
import { API_BASE_URL } from "../../config";
import Dialog from "./dialog/Dialog";

const House = (props) => {
    const [showDialog, setShowDialog] = useState(false);
    const [showHouse, setShowHouse] = useState(true);
    const [house, setHouse] = useState(props);

    const showDetails = () => {
        setShowDialog(true);
    };

    const hideDetails = () => {
        setShowDialog(false);
    };

    const updateHouse = (house) => {
        setHouse(house);
      };

    const hideHouse = () => {
        setShowHouse(false);
      };

    return (
        <>
            {showHouse && (
                <section className="house" onClick={showDetails}>
                    <img src={`${API_BASE_URL}/images/${house.main_image}`} alt="House" />
                    <h3>{house.name}</h3>    
                </section>
            )}
            
            {showDialog && <Dialog 
                    _id={props._id}
                    name={props.name}
                    bedrooms={props.bedrooms}
                    size={props.size}
                    bathrooms={props.bathrooms}
                    main_image={props.main_image}
                    features={props.features}
                    updateHouse = {updateHouse}
                    hideHouse = {hideHouse}
                    close_dialog={hideDetails}/>}
        </>
        
    )
};

export default House;