import React from 'react';
import Header from './Shared/Header';
import Navbar from './Shared/navbar/Navbar';
import Leftnav from './Shared/Leftnav';
import Rightnav from './Shared/Rightnav';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <h1>This is home</h1>
            <Header></Header>
            <Slider></Slider>
            <Navbar></Navbar>
            <div className=' grid grid-cols-4 gap-8'>
                <div className='border border-red-200'><Leftnav></Leftnav></div>
                <div className='col-span-2 border border-red-200'> News Coming soon</div>
                <div className='border border-white'><Rightnav></Rightnav></div>
            </div>


        </div>
    );
};

export default Home;