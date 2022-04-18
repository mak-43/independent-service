import React, { useEffect, useState } from 'react';

import Service from './Service';
import useCart from './useCart';


const Services = () => {

    const [cart,setCart]=useCart([])
    
    return (
        <div>
            <h1 className='text-4xl font-semibold '>Legal Practices Area</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    cart.map(service=><Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
            
        </div>
    );
};

export default Services;