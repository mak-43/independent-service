import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name,id,img,price,description}=service
    const navigate=useNavigate()
    return (
        <div className='service flex flex-col justify-center items-center  m-10'>
            <div className='flex justify-center items-center'>
                <img className='rounded-xl mt-2' src={img} alt="" />
            </div>
            <div className='flex flex-col text-left justify-center items-center p-5'>
                <p className='text-xl font-semibold pb-3'>{name}</p>
                <p>{description}</p>
                <p className='text-xl font-bold'>{price}</p>
                <button onClick={()=>navigate(`/checkout/${id}`)} className='text-black bg-gray-400 font-bold py-2 px-5 my-2 submit rounded-xl hover:text-blue-700 ' >Checkout</button>
            </div>
          
        </div>
    );
};

export default Service;