import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export function Navbar () {
  return (
    <header>
      <nav className='flex items-center justify-between p-5 w-full h-auto shadow top-0 left-0 fixed bg-slate-50'>
        <h3 className='my-auto'>Logo</h3>
        <ul className='flex list-none gap-8'>
          <li>
            <a href='#home' className='hidden sm:block font-semibold'>Home</a>
          </li>
          <li>
            <a href='#about' className='hidden sm:block font-semibold'>Acerca de</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faBars} className='sm:hidden' />
          </li>
        </ul>
      </nav>
    </header>

  )
}
