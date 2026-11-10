import "./Step.css";

const Step = (props) => {
    return (
        <article className="step">
            <span className="step-number">{props.number}</span>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </article>
    );
};

export default Step;