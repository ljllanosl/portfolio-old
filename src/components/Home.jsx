import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export function Home () {
  return (
    <section id='home' className='pt-10 h-screen'>
      <div className='content flex flex-col justify-center items-center'>
        <div className='hero-main flex flex-col md:flex-row justify-center items-center'>
          <div className='hero-text flex flex-col'>
            <h1 className=''>
              Desarrollador Front End
            </h1>
            <p className=''>Hola, soy Luis Llanos. Desarrollador Front-end de Lima, Perú</p>
            <span className='flex justify-center md:justify-normal gap-1 cursor-pointer'>
              <a href='https://www.linkedin.com/in/luisllanoslucas/'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href='https://github.com/ljllanosl'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </span>
          </div>
        </div>
        <div className='skills flex flex-col md:flex-row items-center'>
          <h2 className=''>Habilidades</h2>
          <div className='logos'>
            <ul className='flex flex-wrap list-none gap-1 items-center justify-center md:justify-normal'>
              <li>
                <img src='/src/assets/html-5-svgrepo-com.svg' alt='html5' />
              </li>
              <li>
                <img src='/src/assets/css-3-svgrepo-com.svg' alt='css3' />
              </li>
              <li>
                <img src='/src/assets/javascript-svgrepo-com.svg' alt='js' />
              </li>
              <li>
                <img src='/src/assets/react-svgrepo-com.svg' alt='react' />
              </li>
              <li>
                <img src='/src/assets/tailwind-svgrepo-com.svg' alt='tailwind' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}
