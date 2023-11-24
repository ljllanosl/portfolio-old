import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer () {
  return (
    <footer className='flex flex-row justify-between items-center mt-10'>
      <p>Imagen de perfil por <a href='https://picrew.me/en/image_maker/1322863'>PepperJackets</a></p>
      <span className='flex flex-row gap-4 items-center justify-center sm:justify-start'>
        <a className='flex items-centertext-[#dbdbdb]' href='https://www.linkedin.com/in/luisllanoslucas/' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} size='xl' />
        </a>
        <a className='flex items-centertext-[#dbdbdb]' href='https://github.com/ljllanosl' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} size='xl' />
        </a>
      </span>
    </footer>
  )
}
