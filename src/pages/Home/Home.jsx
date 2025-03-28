import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h3 className="text-3xl font-poppins font-bold">This is home</h3>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='border'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-2 border'>
                    <p>News Coming Soon...</p>
                </div>
                <div className=''>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;