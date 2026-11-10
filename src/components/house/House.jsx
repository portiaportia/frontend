import "./House.css";
import { API_BASE_URL } from "../../config";
import HouseDialog from "../house_dialog/HouseDialog";

const House = (props) => {
    return (
        <section className="house">
            <img src={`${API_BASE_URL}/images/${props.src}`} alt="House" />
            <h3>{props.title}</h3>
            <HouseDialog />
        </section>
    )
};

export default House;