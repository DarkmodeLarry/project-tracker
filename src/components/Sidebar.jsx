import { NavLink } from 'react-router-dom'
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'
import Avatar from './Avatar'

export default function Sidebar() {
  return (
    <div className='sidebar min-w-[300px] border-2 border-red-500 bg-gray-200 min-h-screen relative text-gray-500 box-border'>
      <div className='sidebar-content fixed min-w-[300px]'>
        <div className='user font-bold text-center tracking-wide py-10 px-8 border-b-2  border-b-[rgba(255,255,255,0.2)]'>
          <Avatar />
          <p>Hey Bro!</p>
        </div>
        <nav className='links mt-20 ml-5'>
          <ul>
            <li className='mt-3'>
              <NavLink to='/' className='flex p-3 none w-full text-gray-700 box-border'>
                <img src={DashboardIcon} alt='dashboard icon' className='mr-3 filter-invert-100 ' />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className='mt-3'>
              <NavLink to='/create' className='flex p-3 none w-full text-gray-700 box-border'>
                <img src={AddIcon} alt='add project icon' className='mr-3 filter-invert-100 ' />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
