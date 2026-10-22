import "./Listings.css";
import pic from "./farmhouse.jpeg";

import House from "../../components/house/House";
const Listings = () => {
    return (
        <div id="listings" className="page">
            <House 
                title="Farmhouse"
                description="We have chickens"
                src={pic} />
            <House 
                title="Modern Vista"
                description="Lots of glass"
                src={pic} />
            <House 
                title="Mansion"
                description="Room for everyone"
                src={pic} />
        </div>
    )
};

export default Listings;