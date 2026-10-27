import "./Hero.css";
import countryHouse from "./images/country-house.jpg";

const Hero = () => {
    return (
        <section id="hero">
            <img src={countryHouse} alt="Country House" />
            <a id="next-arrow" className="arrow">&rsaquo;</a>
            <a id="prev-arrow" className="arrow">&lsaquo;</a>
        </section>
    )
};

export default Hero;