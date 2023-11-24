import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import me from '../assets/download20231105133408.png'

export function Home () {
  return (
    <section id='home' className='pt-10'>
      <article className='flex sm:flex-row flex-col gap-5 items-center justify-center sm:justify-start'>
        <div className='w-40 h-40 rounded-full border-4 border-black shrink-0'>
          <img src={me} alt='yo' className=' rounded-full bg-slate-50 ' />
        </div>

        <div className='flex flex-col gap-4 items-center sm:items-start justify-center sm:justify-start'>
          <h1>Luis Llanos</h1>
          <p>Programador web Front End Junior</p>
          <span className='flex flex-row gap-4 items-center justify-center sm:justify-start'>
            <a className='flex items-center rounded bg-[#0c151c] hover:bg-[#040a0f] text-[#dbdbdb] p-2 hover:no-underline' href='https://www.linkedin.com/in/luisllanoslucas/' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} size='xl' className='mr-2' />
              Linkedin
            </a>
            <a className='flex items-center rounded bg-[#0c151c] hover:bg-[#040a0f] text-[#dbdbdb] p-2 hover:no-underline' href='https://github.com/ljllanosl' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faGithub} size='xl' className='mr-2' />
              Github
            </a>
          </span>
        </div>
      </article>
    </section>

  )
}
