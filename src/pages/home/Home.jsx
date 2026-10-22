import About from "../../components/about/About";
import Hero from "../../components/hero/Hero";
import Contact from "../../components/contact/Contact";
import Branding from "../../components/branding/Branding";
const Home = () => {
    return (
        <div id="home" className="page">
            <Hero />
            <Branding />    
            <About />
            <Contact />
        </div>
    )
}

export default Home;