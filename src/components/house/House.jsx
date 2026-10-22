import "./House.css";

const House = (props) => {
    return (
        <section className="house">
            <img src={props.src} alt="House" />
            <h3>{props.title}</h3>
        </section>
    )
};

export default House;