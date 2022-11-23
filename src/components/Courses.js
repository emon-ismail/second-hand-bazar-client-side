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
      fetch('https://abacus-academy-server.vercel.app/topics')
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
                       <h1 className='topic'> <button onClick={()=>setTopicid(topic.id)}><h1 className=''> {topic.name} </h1></button></h1>

                    {/* <Link to={`/topics/${topic.id}`}>{topic.name}</Link> */}
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
