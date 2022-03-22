import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import SideBar from "../SideBar/SideBar";

const MannageBooking = () => {
    const [bookings, setBookings] = useState([]);
        const {user} = useAuth();
        useEffect(() => {
            fetch('https://ibrars-smile.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
        }, [])

        const filterBooking = bookings.filter(booking => booking.user === user.email)
           const handleDeleteService = id => {
               console.log(id)
               const proceed = window.confirm('Are you sure, you want to delete?')
               if (proceed) {
                   const url = `https://ibrars-smile.herokuapp.com/bookings/${id}`;
                   fetch(url, {
                           method: 'DELETE',
                       })
                       .then(res => res.json())
                       .then(data => {
                           if (data.deletedCount) {
                               alert('delete successfully')
                               const remainingBookings = bookings.filter(service => service._id !== id);
                               setBookings(remainingBookings);
                           }
                       })
               }
           }
        
        return (
            <div className="sm:flex block">
                <div className="w-60">
                    <SideBar />
                </div>
                <div className="mt-5 ml-2">
                    {
                    filterBooking.length > 0 ?
                    <table>
                        <tr className="text-center bg-yellow-300 border">
                            
                            
                            
                            
                            
                        </tr>
                            {
                                filterBooking.map(booking => (
                                    <tr className="border border-black grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2">
                                        <div>
                                        <th>Booking date</th>
                                        <td className="px-3">{booking.date.slice(0, 10)}</td>
                                        </div>
                                        <div>
                                        <th>Product</th>
                                        <td className="px-3">{booking.service.data.name}</td>
                                        </div>
                                        <div>
                                        <th>Provider</th>
                                        <td className="px-3">{booking.service.data.provider}</td>
                                        </div>
                                        <div>
                                        <th>Price</th>
                                        <td className="px-3">BDT {booking.service.data.price}</td>
                                        </div>
                                        <div>
                                        <th>Status</th>
                                        <td className="px-3">{booking.status}</td>
                                        </div>
                                        <div>
                                        <td onClick={() => handleDeleteService(booking._id)} className="px-3"><i className="fas fa-window-close text-2xl text-red-500"></i></td>
                                        </div>
                                    </tr>
                                ))
                            }
                    </table>
                    :
                    <div>
                        <h3 className="text-red-500 text-center">You haven't booking yet, Want to booking now?</h3>
                        <Link to='/explore' className="bg-red-600 text-white px-4 py-2 rounded text-lg font-semibold no-underline">Make your day</Link>
                    </div>
                    }
                </div>
                
            </div>
        );
    };

export default MannageBooking;
