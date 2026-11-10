import "./NextSteps.css";
import Step from "./steps/Step";

const NextSteps = () => {
    return (
        <section id="next-steps">
            <h2>Your Next Chapter Starts Here</h2>

            <p className="center-section next-steps-intro">
                From your first look to your next move, start picturing
                the possibilities.
            </p>

            <div className="steps">
                <Step
                    number="01"
                    title="Find Your Favorites"
                    description="Browse our homes and discover the spaces, styles, and features that catch your eye."
                />

                <Step
                    number="02"
                    title="Picture Your Life Here"
                    description="Explore the details, from room to entertain to a quiet spot for your morning coffee."
                />

                <Step
                    number="03"
                    title="Let’s Connect"
                    description="Found something you love? Reach out with questions or take the next step toward a visit."
                />
            </div>
        </section>
    );
};

export default NextSteps;