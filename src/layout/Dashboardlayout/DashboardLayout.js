import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { AuthContext } from '../../contexts/UserContext';
import useAdmin from './Allusers/UseAdmin';
import './Dashboard.css'
// import { AuthContext } from '../contexts/AuthProvider';
// import useAdmin from '../hooks/useAdmin';




const DashboardLayout = () => {
     const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)
    return (
        <div className='dashboard'>
      <Navbar className='dashboard'></Navbar>
            <div className="drawer drawer-mobile dashboard">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                   <Outlet></Outlet>
                </div>
                <div className="drawer-side dashboard">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay dashboard"></label>
                    <ul className="menu p-4 w-80 side text-base-content">
                        <li><Link to="/dashboard">My Products</Link></li>
                        <li><Link to="/dashboard/allusers">All Users</Link></li>


                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
            
        </div>
    );
};

export default DashboardLayout;