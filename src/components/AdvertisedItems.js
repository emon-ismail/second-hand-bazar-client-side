import React from 'react';

const AdvertisedItems = () => {
    return (
       <div>
        <h1  className='text-3xl text-center my-5' >Advertisement</h1>
         <div className=' grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 mx-4 gap-10 '>
            
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
         </div>
       </div>
    );
};

export default AdvertisedItems;