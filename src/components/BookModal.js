import { clear } from '@testing-library/user-event/dist/clear';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/UserContext';
// import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const BookModal = ({price,title,refetch,img}) => {
    const {user} = useContext(AuthContext)
    

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        
        const seller = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const title = form.title.value;
        const price = form.price.value;
        const meetLocation = form.meetLocation.value;
        // form.clear();
        //  console.log(seller,meetLocation,email,phone,title,price)
        const booking ={
            seller,
            mobileName:title,
            email,
            phone,
            price,
            img,
            meetLocation

        }
        fetch('https://assignment-12-server-zeta.vercel.app/bookings',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(booking)

        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
               
                
                
                alert('booking successfull')
                
                
                refetch();
            }
            else {
                alert(`${data.message}`)
                
            }
            
        })

    }
    return (
        <div>
            
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h3 className="font-bold text-lg">{title}</h3> */}
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 mt-10'>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled className="input input-bordered w-full " />
                        <input name='email' type="email" defaultValue={user?.email} disabled  className="input input-bordered w-full " />
                        <input name='price' type="number" defaultValue={price} disabled  className="input input-bordered w-full " />
                        <input name='title' type="text" defaultValue={title} disabled  className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="phone" required className="input input-bordered w-full " />
                        <input name='meetLocation' type="text" placeholder="meetLocation" required className="input input-bordered w-full " />
                        <input type="submit" value='submit' className="btn btn-primary w-full text-white  " />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookModal;