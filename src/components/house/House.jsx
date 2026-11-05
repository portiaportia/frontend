import "./House.css";

const House = (props) => {
    return (
        <section className="house">
            <img src={`https://backendfall2026.onrender.com/images/${props.src}`} alt="House" />
            <h3>{props.title}</h3>
        </section>
    )
};

export default House;