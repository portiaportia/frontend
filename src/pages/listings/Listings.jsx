import "./Listings.css";
import pic from "./farmhouse.jpeg";
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
                    title="Farmhouse"
                    description="We have chickens"
                    src={pic} />
            ))}
            
        </div>
    )
};

export default Listings;