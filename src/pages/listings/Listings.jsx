import "./Listings.css";
import {useState, useEffect} from "react";
import axios from "axios";
import { API_BASE_URL } from "../../config";

import House from "../../components/house/House";
const Listings = () => {
    const [houses, setHouses] = useState([]);
    const [pending, setPending] = useState(true);
    const [showAddDialog, setShowAddDialog] = useState(false);

    const openAddDialog = () => {
        setShowAddDialog(true);
    };

    const closeAddDialog = () => {
        setShowAddDialog(false);
    }
    
    //after the page has loaded
    useEffect(()=>{
        const loadHouses = async()=>{
            const response = await axios.get(`${API_BASE_URL}/api/houses/`);
            setPending(false);
            setHouses(response.data);
        };

        loadHouses();
    },[]);

    return (
        <div id="listings" className="page">
            <h2>Listings</h2>
            <button id="btn-add-house">+</button>
            <div id="houses">
                {pending && <p>Loading houses...</p>}
                {houses.map((house)=>(
                    <House 
                        title={house.name}
                        description="Best House"
                        src={house.main_image} />
                ))}
            </div>
        </div>
    )
};

export default Listings;