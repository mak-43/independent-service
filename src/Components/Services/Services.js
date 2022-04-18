import React from 'react';

const Services = () => {
    return (
        <div>
            Services
            <form  className='flex flex-col w-1/2 mx-auto '>
                    <h1 className='text-3xl pb-5'>Please Login</h1>
                    <input type="email" name="email" id="" placeholder='Email' required />
                    <input  type="password" name="password" id="" placeholder='Password' required />
                    <input className='text-black bg-gray-400 font-bold py-2 submit rounded-xl hover:text-blue-700 ' type="submit" value="Login" />
                </form>
        </div>
    );
};

export default Services;