import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../pages/Navbar/Navbar';

const Main = () => {
    return (
        <div className='bg-rose-50'>
            
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;