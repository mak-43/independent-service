import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Service from '../Services/Service';
import Services from '../Services/Services';

import useCart from '../Services/useCart';
import Banner from './Banner';
import h1 from '../images/services/h1.jpg'
import h2 from '../images/services/h2.jpg'
import h3 from '../images/services/h3.jpg'

const Home = () => {
    const [cart,setCart]=useCart([])
    const navigate=useNavigate()
    return (
        <>
            
            <Banner></Banner>
            <h1 className='text-4xl font-semibold py-10'>Legal Practices Area</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    cart.slice(0,6).map(service=><Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
            <button className='text-black bg-gray-400 font-bold py-2 px-5 my-5 submit rounded-xl hover:text-blue-700 ' onClick={()=>navigate('/services')}>See All Services...</button>
            <br />
           <p className='py-5 text-4xl'>What Clients Say About  Services</p>
           <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
               <div className='flex flex-col justify-center items-center p-10'>
                   <img className='' src={h1} alt="" />
                   <p className='px-5 py-2'>At his best,man is the noblest of all animals,separated from law and justice he is the worth</p>
                   <p><small>JIMMY SPENSE | U.S Marshal </small></p>
               </div>
               <div className='flex flex-col justify-center items-center p-10' >
                   <img src={h2} alt="" />
                   <p className='px-5 py-2'>Every step toward justice requires suffering and struggle the tireless concer of dedicated individuals</p>
                   <p><small>Martine crane | Investigator </small></p>
               </div>
               <div className='flex flex-col justify-center items-center p-10'>
                   <img src={h3} alt="" />
                   <p className='px-5 py-2'>All the Great things are simple,and many can be expressed in a single word freedom justice honor</p>
                   <p><small>Samuals crane | Secretary </small></p>
               </div>
           </div>
        </>
    );
};

export default Home;