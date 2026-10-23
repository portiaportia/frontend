import "./About.css";
import team from "./team.png";

const About = () => {
    return(
        <section id="about" className="columns">
            <img src={team} alt="Our Team" className="one"/>
            
            <div className="two details">
                <h2>About Us</h2>
                <p>
                    At Finding A Home, we believe your home should fit the
                    way you live. Whether you’re searching for your first
                    house, room to grow, or a quieter place to settle down,
                    our goal is to make exploring your options feel simple
                    and inviting.
                </p>

                <p>
                    Browse a variety of homes, discover the details that
                    matter to you, and picture the possibilities. A big
                    backyard, a cozy kitchen, or space for your favorite
                    hobbies—whatever home looks like to you, we’re here
                    to help you find it.
                </p>
            </div>
        </section>
    );
};

export default About;