import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Skills () {
  return (
    <section className='flex flex-col gap-5'>
      <span className='flex flex-row justify-start items-center gap-3'>
        <h1>Conocimientos</h1>
        <FontAwesomeIcon icon={faLightbulb} size='2x' />
      </span>
      <ul className='flex flex-wrap gap-5'>
        <li>
          <img src='/src/assets/html-5-svgrepo-com.svg' title='HTML5' alt='HTML5' className='w-16 h-auto transition hover:-translate-y-1' />
        </li>
        <li>
          <img src='/src/assets/css-3-svgrepo-com.svg' title='CSS3' alt='CSS3' className='w-16 h-auto transition hover:-translate-y-1' />
        </li>
        <li>
          <img src='/src/assets/javascript-svgrepo-com.svg' title='JavaScript' alt='JS' className='w-16 h-auto rounded transition hover:-translate-y-1' />
        </li>
        <li>
          <img src='/src/assets/react-svgrepo-com.svg' title='React' alt='React' className='w-16 h-auto transition hover:-translate-y-1' />
        </li>
        <li>
          <img src='/src/assets/tailwind-svgrepo-com.svg' title='Tailwind' alt='TW' className='w-16 h-auto transition hover:-translate-y-1' />
        </li>
      </ul>
    </section>

  )
}
