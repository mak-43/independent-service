import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import google from '../images/google.png'
import facebook from '../images/fb.png'
import github from '../images/github.png'

const Register = () => {
    return (
        <div className=' register '>

            <div className='flex justify-center items-center py-10'>
                <img className='w-1/3 ' src='' alt="" />
            </div>
            <div className='form-container md:w-1/2 mx-auto py-10 sm:w-full'>
                <form className='flex flex-col w-1/2 mx-auto '>
                    <input type="text" name="text" id="" placeholder='Name' />
                    <input type="email" name="email" id=""placeholder='Email' required/>
                    <input type="password" name="password" id=""placeholder='Password'required />
                    <input type="password" name="confirmpassword" required placeholder='Confirm Password' />
                    <input className='text-black bg-gray-400 font-bold py-2 submit  rounded-xl hover:text-blue-700 ' type="submit" value="Sign Up" />
                </form>
                <p className='text-black py-4 '>Already have an account ?<Link className='hover:text-blue-700 font-bold' to='/login'> Login</Link> </p>
                <div className='or flex justify-center items-center gap-2'>
                     <hr className='w-1/5' /> OR <hr className='w-1/5'/>
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <div className='w-1/2 flex justify-center items-center text-black gap-2 bg-gray-400  py-2 mt-2  rounded-xl hover:text-blue-700  '>
                        <img className='h-8' src={google} alt="" />
                        <button className='font-bold'> Google Sign In</button>
                    </div>
                    <div className='w-1/2 flex justify-center items-center text-black  bg-gray-400  py-2 mt-2  rounded-xl hover:text-blue-700  '>
                        <img className='h-8 ' src={facebook} alt="" />
                        <button className='font-bold'> Facebook Sign In</button>
                    </div>
                    <div className='w-1/2 flex justify-center items-center text-black gap-2 bg-gray-400  py-2 mt-2  rounded-xl hover:text-blue-700  '>
                        <img className='h-8' src={github} alt="" />
                        <button className='font-bold'> Github Sign In</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Register;