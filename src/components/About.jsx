import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function About () {
  return (
    <section id='about'>
      <article>
        <span className='flex flex-row justify-start items-center gap-3'>
          <h1>Acerca de mi</h1>
          <FontAwesomeIcon icon={faUser} size='2x' />
        </span>
        <p>+1 año de experiencia en desarrollo web. Enfoque en el desarrollo de aplicaciones centradas en el cliente que satisfacen las necesidades del negocio. Mentalidad positiva con un constante afán de superación.</p>
      </article>
    </section>
  )
}
