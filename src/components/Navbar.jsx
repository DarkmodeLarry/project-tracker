import { Link } from 'react-router-dom'
import Temple from '../assets/temple.svg'

function Navbar() {
  return (
    <div className='navbar min-w-full p-8 mb-20'>
      <ul className='flex my-0 mx-auto items-center justify-end'>
        <li className='logo font-bold tracking-wider flex items-center mr-auto'>
          <img src={Temple} alt='dojo logo' className='mr-3 filter-invert-25 w-9 -mt-2' />
          <span>The Dojo</span>
        </li>

        <li className='none mr-5 text-slate-500'>
          <Link to='/login'>Login</Link>
        </li>
        <li className='none mr-5 text-slate-500'>
          <Link to='/signup'>Signup</Link>
        </li>
        <li className='none mr-5 text-slate-500'>
          <button className='btn'>Logout</button>
        </li>
      </ul>
    </div>
  )
}
export default Navbar
