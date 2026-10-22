import "./Listings.css";

import House from "../../components/house/House";
const Listings = () => {
    return (
        <div id="listings" className="page">
            <House 
                title="Farmhouse"/>
            <House 
                title="Modern Vista"/>
            <House 
                title="Mansion"/>
        </div>
    )
};

export default Listings;