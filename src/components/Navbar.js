import { useContext } from 'react'
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

  console.log(user)
  return (
    <header className='text-gray-600 body-font nav-body '>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link
          to='/'
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
          
          <img src="abacus.png" className="w-20 h-15 text-white p-2  rounded-full" alt=""></img>
          <span className='ml-3 text-xl'>Abacus Academy</span>
         
        </Link>
         <button  
           className='inline-flex items-center bg-gray-300 border-0 py-1 px-3 ml-7 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'
           >
            
            <Link to='/toggle'><input type="checkbox" class="toggle" checked /></Link>
            </button>
            
      
     
            <Link to='/blog' className='ml-7 hover:text-gray-900 font-bold'>
                Blog
              </Link>

        
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link to='/home' className='mr-5 hover:text-gray-900 font-bold'>
            Home
          </Link>
          <Link to='/courses' className='mr-5 hover:text-gray-900 font-bold'>
                Courses
              </Link>

          {user?.email ? (
            <>
             
          
              <Link to='/faq' className='mr-5 hover:text-gray-900 font-bold'>
                FAQ
              </Link>
              
              <Link to='/profile' className=' text-stone-50 mr-5 hover:text-blue-900 font-bold border-2 p-2'>
                {user.displayName}
              </Link>
              <button
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
              </button>
            </>
          ) : (
            <Link to='/login' className='mr-5 hover:text-gray-900'>
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
