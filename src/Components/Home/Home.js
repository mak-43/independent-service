import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Service from '../Services/Service';
import Services from '../Services/Services';

import useCart from '../Services/useCart';
import Banner from './Banner';

const Home = () => {
    const [cart,setCart]=useCart([])
    const navigate=useNavigate()
    return (
        <div className=''>
            
            <Banner></Banner>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    cart.slice(0,6).map(service=><Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
            <button className='text-black bg-gray-400 font-bold py-2 px-5 my-2 submit rounded-xl hover:text-blue-700 ' onClick={()=>navigate('/services')}>See All Services</button>
            <br />
            <Link to='/checkout'> Proceed Checkout</Link>
        </div>
    );
};

export default Home;