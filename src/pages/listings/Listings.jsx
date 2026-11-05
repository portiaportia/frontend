import "./Listings.css";
import {useState, useEffect} from "react";
import axios from "axios";

import House from "../../components/house/House";
const Listings = () => {
    const [houses, setHouses] = useState([]);

    //after the page has loaded
    useEffect(()=>{
        const loadHouses = async()=>{
            const response = await axios.get("https://backendfall2026.onrender.com/api/houses/");
            setHouses(response.data);
        };

        loadHouses();
    },[]);

    return (
        <div id="listings" className="page">
            {houses.map((house)=>(
                <House 
                    title={house.name}
                    description="Best House"
                    src={house.main_image} />
            ))}
            
        </div>
    )
};

export default Listings;