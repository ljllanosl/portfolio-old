import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Experience () {
  return (
    <section className='pt-10 h-screen'>
      <div className='flex flex-row justify-start items-center gap-2'>
        <h1>Experiencia</h1>
        <FontAwesomeIcon icon={faBriefcase} size='2xl' />
      </div>

    </section>
  )
}
