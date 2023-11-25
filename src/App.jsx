import './App.css'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import Skills from './components/Skills'

function App () {
  return (
    <>
      <main className='flex flex-col gap-14'>
        <Home />
        <About />
        <hr />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
