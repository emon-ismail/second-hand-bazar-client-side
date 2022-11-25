import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext'
import { useQuery } from '@tanstack/react-query';

const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings`
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className="text-3xl mb-5">My Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Resale Price</th>
                            <th>Mobile Number</th>
                            <th>Mobile </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.
                               mobileName}</td>

                                <td>{booking.

                                    meetLocation
                                }
                                </td>
                                <td>{booking.

price
                                }
                                </td>

                                <td>{booking.phone

                                }</td>
                                
                                <td><div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={booking.img} />
  </div>
</div></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;