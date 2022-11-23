import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Topics.css'
import ReactPrint from 'react-to-print'
import {useRef} from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = ({topicid}) => {
    const [topic,setTopic]= useState([])
    const ref=useRef()
    
    useEffect(()=>{
        fetch(`https://abacus-academy-server.vercel.app/course/${topicid}`)
        .then(res => res.json())
        .then(data=>setTopic(data))
    },topicid)

const {category_id}=topic
    return (
   
        <div>
            <div>
            <h1 className='Topics'> Topics : {topic?.length}</h1> 
          
            { 
                topic?.map(top=>
                     (   <div >
 
 <div   className="card w-96 bg-base-100 shadow-xl my-5 card">
  <figure className="px-10 pt-10">
    <img src={top.image_url} alt="Shoes" className="rounded-xl" />
  </figure>
  <div  className="card-body items-center text-center ">
    <h2 className="card-title">{top.title}</h2>

    <div className="card-actions">

        <div className='btn btn-primary'><Link to={`/details/${top._id}`} >Checkout
          </Link> </div>
     
    </div>
  </div>
</div>
                        
</div>)

                    
                     
                     
                     )
            }
            
          
        </div>
        </div>
    );
};

export default Topics;