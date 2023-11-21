import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Experience () {
  return (
    <section className='flex flex-col gap-5'>
      <span className='flex flex-row justify-start items-center my-3 gap-3'>
        <h1 className=''>Experiencia</h1>
        <FontAwesomeIcon icon={faBriefcase} size='2xl' className='mb-[12px] mt-[24px]' />
      </span>
      <article>
        <div>
          <h2>Desarrollador Web Fullstack Junior como freelance</h2>
          <small>Octubre 2022 - Diciembre 2022</small>
        </div>
        <div>
          <h3>RESPONSABILIDADES</h3>
          <ul className='list-disc ml-5'>
            <li>
              Maquetar y desarrollar un sistema web basado en Angular y Laravel para la generación de reportes para entidades educativas.
            </li>
          </ul>
        </div>

      </article>
      <article>
        <div>
          <h2>Desarrollador Web Front End Trainee en Globant</h2>
          <small>Febrero 2018 - Julio 2018</small>
        </div>
        <div>
          <h3>RESPONSABILIDADES</h3>
          <ul className='list-disc ml-5'>
            <li>
              Desarrollar un sistema web interno basado en Angular para la reserva de salas de reunión.
            </li>
            <li>
              Implementar y maquetar el diseño de una aplicación web basada en React para la venta y distribución de tickets para parques temáticos.
            </li>
          </ul>
        </div>
        <div>
          <h3>LOGROS</h3>
          <ul className='list-disc ml-5'>
            <li>
              Se diseñó e implementó un novedoso patrón de diseño para menús de selección en aplicaciones web.
            </li>
          </ul>
        </div>
      </article>

    </section>
  )
}
