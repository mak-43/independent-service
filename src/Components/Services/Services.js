import React, { useEffect, useState } from 'react';
import Service from './Service';


const Services = () => {

    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div>
            <h1 className='text-4xl font-semibold '>Legal Practices Area</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    services.map(service=><Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
            
        </div>
    );
};

export default Services;