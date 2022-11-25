import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import BookModal from './BookModal';
import Topics from './Topics';

const AdvertisedItems = () => {
  const { user } = useContext(AuthContext)
  const [title,setTitle]= useState('');
  const [price,setPrice]= useState('');
  const [img,setImg]= useState('');
  const {data: users = [], refetch} = useQuery({
    queryKey: ['users'],
    queryFn: async() =>{
        const res = await fetch('http://localhost:5000/advertisement');
        const data = await res.json();
        return data;
    }
});
    return (
       <div>
        <h1  className='text-3xl text-center my-5' >Advertisement</h1>


       


<div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mx-4 gap-5'>
                {
                    users.map(user => <div key={user._id} >
                        <div className="card w-70 bg-base-100 shadow-xl">
                            <figure><img className='object-cover h-60' src={user.image} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{user.title}</h2>
                             
                                <p>  Price:{user.Price}</p>
                               
                   
                                <div className="card-actions justify-end">
                                   
                                    <label 
                                    onClick={()=>{
                                        setTitle(user.title)
                                        setPrice(user.Price)
                                        setImg(user.image)
                                    }}
                                    htmlFor="my-modal" 
                                    className="btn"><Link to='/bookmodal'>Order Now</Link></label>
                                </div>
                                {/* <Topics topicid={topicid}></Topics> */}
                               {/* <Link to='/bookmodal'>
                               <BookModal
                                    setTitle
                                    title={title}
                                    price={price}
                                    img={img}
                                ></BookModal> 
                               </Link> */}
                            </div>
                        </div>
                    </div>)
                }

            </div>















{/* 
         <div className=' grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 mx-4 gap-10 '>
            
            <div className="card w-70 bg-base-100 shadow-xl">
   <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
   <div className="card-body">
     <h2 className="card-title">{}</h2>
     <p>If a dog chews shoes whose shoes does he choose?</p>
     <div className="card-actions justify-end">
       <button className="btn btn-primary">Category</button>
     </div>
   </div>
 </div>
 
            <div className="card w-70 bg-base-100 shadow-xl">
   <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
   <div className="card-body">
     <h2 className="card-title">Shoes!</h2>
     <p>If a dog chews shoes whose shoes does he choose?</p>
     <div className="card-actions justify-end">
       <button className="btn btn-primary">Category</button>
     </div>
   </div>
 </div>
         </div> */}
       </div>
    );
};

export default AdvertisedItems;