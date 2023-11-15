import './App.css'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'

function App () {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
    </>
  )
}

export default App
