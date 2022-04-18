import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import useCart from '../Services/useCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const [cart,setCart]=useCart([])
    const {serviceId}=useParams()


    const passwordRef=useRef('')
    const emailRef=useRef('')
    const nameRef=useRef('')

    const handleSubmit =async(e)  => {
        e.preventDefault()
        const name=nameRef.current.value
        const email=emailRef.current.value
        const password=passwordRef.current.value 

        toast('Thank you for the booking')
    }
    return (
        <div>
            
            <form onSubmit={handleSubmit} className='flex flex-col w-1/2 mx-auto '>
                <h1 className='text-3xl pb-4'>Booking Form</h1>
                <p className='pb-2'>Service No : {serviceId}</p>
                    <input ref={nameRef} type="text" name="text" id="" placeholder='Name' />
                    <input ref={emailRef} type="email" name="email" id="" placeholder='Email address' required />
                    <input ref={passwordRef} type="text" name="address" id="" placeholder='Address' 
                    required />
                    <input type="text" name="text" id="" placeholder='Phone number' />
                    <textarea name=""className='pt-2 px-5'  id="" cols="30" rows="8" placeholder='Write your problems in shorts.........'></textarea>
                   
                    {/* <div className='flex items-center gap-2'>
                        <input onClick={()=>setAgree(!agree)} type="checkbox" name="" id="" />
                        <p className={agree?'text-blue-700':'text-red-700'}>Accept Terms And Conditions</p>
                    </div> */}
                    <input  className='text-black bg-gray-400 font-bold py-2 submit  rounded-xl hover:text-blue-700 ' type="submit" value="Submit" />
                    <ToastContainer /> 
                </form>
           


        </div>
    );
};

export default Checkout;