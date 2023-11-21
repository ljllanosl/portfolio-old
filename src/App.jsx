import './App.css'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Home } from './components/Home'

function App () {
  return (
    <>
      <main className='flex flex-col gap-16'>
        <Home />
        <About />
        <hr />
        <Experience />
      </main>
    </>
  )
}

export default App
