import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from './BookModal';


const CategoryItem = () => {
    const collections = useLoaderData();
    const [title,setTitle]= useState('');
    const [price,setPrice]= useState('');
    const [img,setImg]= useState('');


    console.log(collections)
    return (
        <div className='container mx-auto my-10'>
            <h1>item : {collections.length}</h1>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mx-4 gap-5'>
                {
                    collections.map(collection => <div key={collection._id} >
                        <div className="card w-70 bg-base-100 shadow-xl">
                            <figure><img className='object-cover h-60' src={collection.image} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{collection.title}</h2>
                                <p>Location:{collection.location}</p>
                                <p>Resale  Price:{collection.resalePrice}</p>
                                <p>Years of Use:{collection.UseYear}</p>
                                {/* <p>year Of Use:{collection.yearOfUse}</p>
                                <p>Post Time:{collection.postTime}</p>
                                <p>Seller Name:{collection.sellerName}</p> */}
                                <div className="card-actions justify-end">
                                    {/* <button className="btn btn-primary">Book Now</button> */}
                                    <label 
                                    onClick={()=>{
                                        setTitle(collection.title)
                                        setPrice(collection.resalePrice)
                                        setImg(collection.image)
                                    }}
                                    htmlFor="my-modal" 
                                    className="btn">Order Now</label>
                                </div>
                                <BookModal
                                    setTitle
                                    title={title}
                                    price={price}
                                    img={img}
                                ></BookModal>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default CategoryItem;