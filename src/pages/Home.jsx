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
            <header className='container'>
                <Header />
            </header>
            <main className='container'>
                <Hero />
                <About />
                <Portfolio />
                <Contact />
            </main>
            <footer className='container'>
                <Footer />
            </footer>
        </>
    )

}

export default Home