import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import me from '../assets/download20231104002652.png'

export function Home () {
  return (
    <section id='home' className='pt-10 h-screen'>
      <div className='hero flex sm:flex-row flex-col gap-5 items-center justify-center sm:justify-start'>
        <img src={me} alt='yo' className='profile w-1/6 h-1/6 rounded-full bg-slate-50' />
        <div className='flex flex-col gap-2 items-center sm:items-start justify-center sm:justify-start'>
          <h1>Luis Llanos</h1>
          <p>Programador web Front End Junior</p>
          <span className='flex flex-row gap-2 items-center justify-center sm:justify-start'>
            <a href='https://www.linkedin.com/in/luisllanoslucas/'>
              <FontAwesomeIcon icon={faLinkedin} size='2xl' />
            </a>
            <a href='https://github.com/ljllanosl'>
              <FontAwesomeIcon icon={faGithub} size='2xl' />
            </a>
          </span>
        </div>
      </div>
    </section>

  )
}
