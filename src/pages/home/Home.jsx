import About from "../../components/about/About";
import Hero from "../../components/hero/Hero";
import Contact from "../../components/contact/Contact";
import Branding from "../../components/branding/Branding";
import NextSteps from "../../components/nextsteps/NextSteps";
const Home = () => {
    return (
        <div id="home" className="page">
            <Hero />
            <Branding />    
            <About />
            <NextSteps />
            <Contact />
        </div>
    )
}

export default Home;