import "./Hero.css";
import {useState} from "react";

const Hero = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("./images", false, /\.(png|jpe?g|svg$|webp)/)
    );

    const slideForward = () => {
        /*
        if(slideIndex == images.length -1){
            setSlideIndex(0);
        }
        else {
            setSlideIndex(slideIndex+1);
        }
            */
        setSlideIndex(slideIndex == images.length -1 ? 0 : slideIndex + 1);
    };

    const slideBackward = () => {
        setSlideIndex(slideIndex == 0 ? images.length -1 : slideIndex-1);
    }

    return (
        <section id="hero">
            <img src={images[slideIndex]} alt="Country House" />
            <a id="next-arrow" href="#" className="arrow" onClick={slideForward}>&rsaquo;</a>
            <a id="prev-arrow" href="#" className="arrow" onClick={slideBackward}>&lsaquo;</a>
        </section>
    )
};

export default Hero;