import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Experience () {
  return (
    <section className='pt-10'>
      <span className='flex flex-row justify-start items-center gap-2'>
        <h1>Experiencia</h1>
        <FontAwesomeIcon icon={faBriefcase} size='2xl' />
      </span>
      <article>
        <h2>Desarrollador Web Fullstack Junior como freelance</h2>
        <small>Octubre 2022 - Diciembre 2022</small>
        <h2>RESPONSABILIDADES</h2>
        <ul>
          <li>
            Maquetar y desarrollar un sistema web basado en Angular y Laravel para la generación de reportes para entidades educativas.
          </li>
        </ul>
      </article>
      <article>
        <h2>Desarrollador Web Front End Trainee en Globant</h2>
        <small>Febrero 2018 - Julio 2018</small>
        <h2>RESPONSABILIDADES</h2>
        <ul>
          <li>
            Desarrollar un sistema web interno basado en Angular para la reserva de salas de reunión.
          </li>
          <li>
            Implementar y maquetar el diseño de una aplicación web basada en React para la venta y distribución de tickets para parques temáticos.
          </li>
        </ul>
        <h2>LOGROS</h2>
        <ul>
          <li>
            Se diseñó e implementó un novedoso patrón de diseño para menús de selección en aplicaciones web.
          </li>
        </ul>
      </article>

    </section>
  )
}
