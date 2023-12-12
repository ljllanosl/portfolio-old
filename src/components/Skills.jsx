import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import html5Logo from '../assets/html5.svg'
import css3Logo from '../assets/css.svg'
import jsLogo from '../assets/javascript.svg'
import reactLogo from '../assets/react.svg'
import twLogo from '../assets/tailwindcss.svg'

export default function Skills () {
  return (
    <section className='flex flex-col gap-5'>
      <span className='flex flex-row justify-start items-center gap-3'>
        <h1>Conocimientos</h1>
        <FontAwesomeIcon icon={faLightbulb} size='2x' />
      </span>
      <ul className='flex flex-wrap gap-5 items-center'>
        <li>
          <img src={html5Logo} title='HTML5' alt='HTML5' className='w-16 h-auto transition hover:-translate-y-1' />
        </li>
        <li>
          <img src={css3Logo} title='CSS3' alt='CSS3' className='w-16 h-auto transition hover:-translate-y-1' />
        </li>
        <li>
          <img src={jsLogo} title='JavaScript' alt='JS' className='w-16 h-auto rounded transition hover:-translate-y-1' />
        </li>
        <li>
          <img src={reactLogo} title='React' alt='React' className='w-16 h-auto transition hover:-translate-y-1' />
        </li>
        <li>
          <img src={twLogo} title='Tailwind' alt='TW' className='w-16 h-auto transition hover:-translate-y-1' />
        </li>
      </ul>
    </section>

  )
}
