import React from 'react';
import { useNavigate } from 'react-router-dom';
import Acitve from '../Active/Acitve';
import img from '../images/hmmrbk.png'

const Header = () => {
    const navigate=useNavigate()
    return (
        <div>
            <div className='grid grid-cols-2 py-5  '>
                <div className='flex ml-20'>
                    <img onClick={()=>navigate('/')} className='h-20' src={img} alt="" />
                </div>
                <div className='flex gap-5 justify-end mr-20 '>
                    <Acitve to='/'>Home</Acitve>
                    < Acitve to='/services'>Services</Acitve>
                    < Acitve to='/blogs'>Blogs</Acitve>
                    < Acitve to='/about'>About</Acitve>
                    < Acitve to='/login'>Login</Acitve>
               
                </div>
            </div>
        </div>
    );
};

export default Header;