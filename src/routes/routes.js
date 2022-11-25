import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Main from '../layout/Main'
// import Wallet from '../components/Wallet'
import Profile from '../components/Profile'
import PrivateRoute from './PrivateRoute'
import Courses from '../components/Courses'
import Toggle from '../components/Toggle'
import Faq from '../components/Faq'
import Blog from '../components/Blog'


import DashboardLayout from '../layout/Dashboardlayout/DashboardLayout'
import Dashboard from '../components/Dashboard'
import MyProduct from '../layout/Dashboardlayout/MyProduct'
import AllUser from '../layout/Dashboardlayout/Allusers/AllUser'
import CategoryItem from '../components/CategoryItem'
import AdminRoute from './admin route/AdminRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
   
   
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      
// path:'/topics/${category_id}`',


// {
//   path:'/details/:id',
//   element : <TopicDetails></TopicDetails>,
//   loader : ({params}) => fetch(`https://abacus-academy-server.vercel.app/topicsDetails/${params.id}`)
//             },
{
  path:'/categories/:id',
  element:<CategoryItem></CategoryItem>,
  loader : ({params}) => fetch(`http://localhost:5000/allcategories/${params.id}`)
        },



      {
        path:'/faq',
        element:<Faq></Faq>
      },
      {
        path:'/blog',
        element:<Blog></Blog>,
      },
      // {
      //   path:'/dashboard',
      //   element:<DashboardLayout></DashboardLayout>,
      // },
      {
      path:'/toggle',
      element:<Toggle></Toggle>
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
       
      },
      {
        path: '/courses',
        element: (
          <PrivateRoute>
           
            <Courses></Courses>
          </PrivateRoute>
        ),
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile />
            
          </PrivateRoute>
        ),
        
      },
    ],
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        path:'/dashboard' ,
        element: <MyProduct></MyProduct>,
      },
      // {
      //   path:'/dashboard/allusers' ,
      //   element: <AdminRoute><AllUser></AllUser></AdminRoute>
      // },
      {
        path:'/dashboard/allusers' ,
        element: <AllUser> </AllUser>
      },
    ]
  }
])

export default router
