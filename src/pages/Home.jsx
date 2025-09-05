import Header from '../components/Header.jsx'
import './Home.css'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Portfolio from '../components/Portfolio.jsx'
function Home() {

    return (
        <>
            <main className='container'>
                <Header />
                <Hero />
                <About />
                <Portfolio />
            </main>
        </>
    )

}

export default Home