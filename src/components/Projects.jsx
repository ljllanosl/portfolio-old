import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Projects () {
  return (
    <section>
      <span className='flex flex-row justify-start items-center gap-3'>
        <h1>Proyectos</h1>
        <FontAwesomeIcon icon={faStar} size='2x' />
      </span>
      <h2>En construcción</h2>
    </section>

  )
}
