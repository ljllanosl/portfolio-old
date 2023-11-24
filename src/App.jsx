import './App.css'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Projects } from './components/Projects'

function App () {
  return (
    <>
      <main className='flex flex-col gap-14'>
        <Home />
        <About />
        <hr />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
