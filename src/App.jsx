import './style.css'
import { SectionCard } from './components/section-card'

function App() {
    return (
        <>
            <header>
                <h1 className='logo-title'>Music Hub</h1>
            </header>
            <main>
                <section className='section-presentation'>
                    <div className='container-text'>
                        <h1 className='title'>Introducing a revolutionary concept for independent artists.</h1>
                        <h2 className='subtitle'>I am developing a project idea with a strong focus on independent artists.</h2>
                    </div>
                </section>
                <SectionCard />
            </main>
        </>
    )
}

export default App
