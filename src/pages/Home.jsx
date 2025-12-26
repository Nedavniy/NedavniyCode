import Header from '../components/Header.jsx'
import './Home.css'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Portfolio from '../components/Portfolio.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
    return (
        <>
            <div className="container">
                <Header />
            </div>
            
            <main>
                <Hero />
                <About />
                <Portfolio />
                <Contact />
            </main>
            
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Home