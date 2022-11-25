import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ethImg from '../assets/eth.jpeg'
import { AuthContext } from '../contexts/UserContext'
import Topics from './Topics'
import "./Courses.css"

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
    <section className='bg-gray-100 text-gray-900 min-h-screen bodyy'>
      {user && user.emailVerified ? (
        <div className='container flex flex-col justify-center mx-auto  lg:py-24 lg:flex-row lg:justify-between'>
          <div className='flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'>
          <div>
            
          <div>
                {
                    topics.map(topic=> <p key={topic.id}>
                       <h1 className=''> <button onClick={()=>setTopicid(topic.id)}><h1 className='grid  d-flex grid-cols-3  md:grid-cols-2 lg:grid-cols-3 mx-4 gap-5 '> </h1></button></h1>

                   <h1 className='topic'> <Link to={`/categories/${topic.id}`}>{topic.name}</Link></h1>
                    </p>)
                }
            </div>



  {/* <div className="card w-70 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Category</button>
    </div>
  </div>
</div> */}



        </div>
           
          </div>
          <Topics topicid={topicid}></Topics>
          <div>

          </div>
        </div>
      ) : (
        <div className='flex justify-center p-40'>
          <p className='text-4xl text-center'>
            Please Verify Your Email.
            <br />
            Verification Link Has Been Sent to Your Email Address
          </p>
        </div>
      )}
    </section>
  )
}

export default Courses
