import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ethImg from '../assets/eth.jpeg'
import { AuthContext } from '../contexts/UserContext'
import Topics from './Topics'
import "./Courses.css"
import Lottie from "lottie-react";
import mail from '../assets/mail.json'

const Courses = () => {
  const { user } = useContext(AuthContext)
  const [topics,setTopics]= useState([]);

  const [topicid,setTopicid]= useState(null);

  
  useEffect(()=>{
      fetch('http://localhost:5000/allcategories')
      .then(res => res.json())
      .then(data=>setTopics(data))
    },[])


  return (
 <div>
  <h1 className='text-3xl text-center my-5'>Categorys</h1>
     <section className='bg-gray-100 text-gray-900 min-h-screen bodyy'>
      {user && user.emailVerified ? (
        <div className='container flex flex-col justify-center mx-auto  lg:py-24 lg:flex-row lg:justify-between'>
          <div className='flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'>
          <div>
            
           
            <br />
          <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mx-4 gap-10'>
                {
                    topics.map(topic=> <p key={topic.id}>
                       <h1 className=''> <button onClick={()=>setTopicid(topic.id)}><h1 className=' '> </h1></button></h1>

                   <h1 className='   '> <Link to={`/categories/${topic.id}`}>
                    
                    
                    
                    
                    
                    
             
                    
                    <div >

                    <div className="card w-80 bg-base-100 shadow-xl">
  <figure><img className='w-20' src={topic.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{topic.name}</h2>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Category</button>
    </div>
  </div>
</div>


                    </div>
                    
                    
                    
                    
                    
                    
                    </Link></h1>
                    </p>)
                }
            </div>




        </div>
           
          </div>
          <Topics topicid={topicid}></Topics>
          <div>

          </div>
        </div>
      ) : (
        <div className='flex justify-center p-40'>
          <p className='text-4xl text-center'>
            Please Verify Your Email. After Verify You can access full Website
            <br />
            Verification Link Has Been Sent to Your Email Address

            <div className='w-25'>
            <Lottie animationData={mail} loop={true} />
            </div>
          </p>
        </div>
      )}
    </section>
 </div>
  )
}

export default Courses
