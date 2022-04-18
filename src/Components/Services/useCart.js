import React, { useEffect, useState } from 'react';

const useCart = () => {
    const [services,setServices]=useState([])
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
      
    },[])

    return [services,setServices]
};

export default useCart;