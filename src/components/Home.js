import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/UserContext'
import "./Home.css"
import buy from '../assets/buy.json'
import Lottie from "lottie-react";
import AdvertisedItems from './AdvertisedItems'
import ProductCategories from './ProductCategories'
import Courses from './Courses'

const Home = () => {
  const { user } = useContext(AuthContext)
  return (
    <section className='home-body'>
      <div className=''>
        <div className='container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900'>
    
  
{
  <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
   
       <Lottie animationData={buy} loop={true} />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
       
      <h1 className='text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900'>
            Welcome To Second Hand Bazar
          </h1>
          <p className='mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900'>
          Get second hand products easily
          </p>
       
      </div>
    </div>
  </div>
</div>



}

        </div>
      </div>
    

{/* <ProductCategories></ProductCategories> */}

  
      <Courses></Courses>
      <AdvertisedItems></AdvertisedItems>
    </section>
  )
}

export default Home
