import "./Listings.css";

import House from "../../components/house/House";
const Listings = () => {
    return (
        <div id="listings" className="page">
            <House 
                title="Farmhouse"
                description="We have chickens" />
            <House 
                title="Modern Vista"
                description="Lots of glass" />
            <House 
                title="Mansion"
                description="Room for everyone" />
        </div>
    )
};

export default Listings;