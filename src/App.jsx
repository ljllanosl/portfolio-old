import './App.css'
import { About } from './components/About'
import { Contacts } from './components/Contacts'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'

function App () {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contacts />
    </>
  )
}

export default App
