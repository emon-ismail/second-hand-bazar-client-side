import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../contexts/UserContext'
import "./Navbar.css"

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  const handleLogout = () => {
    logout()
      .then(toast.warning('User logged out!'))
      .catch(error => console.log(error))
  }

  const menuItems = <React.Fragment>
  <li><Link to="/home">Home</Link></li>
   {/* <Link to='/profile' className=' text-base-50 mr-5 hover:text-blue-900 font-bold border-2 p-2'>
           {user.displayName}
            </Link> */}

 


  <li><Link to="/blog">Blog</Link></li>
  <li><Link to='/courses'>Products</Link></li>
  {user?.email ?
      <>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><button
           onClick={handleLogout}
             className='inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'
           >
               Logout
                <svg
                 fill='none'
                  stroke='currentColor'
                strokeLinecap='round'
                 strokeLinejoin='round'
                 strokeWidth='2'
                  className='w-4 h-4 ml-1'
                 viewBox='0 0 24 24'
               >
                 <path d='M5 12h14M12 5l7 7-7 7'></path>
               </svg>
               </button></li>
      </>
      : <li><Link to="/login">Login</Link></li>}
       {/* <Link to='/profile' className=' text-base-50 mr-5 hover:text-blue-900 font-bold border-2 p-2'>
           {user.displayName}
            </Link> */}
</React.Fragment>



  return (
    <div className="navbar bg-base-100 flex justify-between">
    <div className="navbar-start">
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {menuItems}
            </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">Second Hand Bazar</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
            {menuItems}
        </ul>
    </div>
    <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
</div>

    
  )
};

export default Navbar
