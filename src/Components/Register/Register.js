import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Register.css'
import google from '../images/google.png'
import facebook from '../images/fb.png'
import github from '../images/github.png'
import auth from '../../firebase.init';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        error,
        loading
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [signInWithGoogle,  gerror] = useSignInWithGoogle(auth);
      const [signInWithGithub,  giterror] = useSignInWithGithub(auth);
      const [updateProfile, ] = useUpdateProfile(auth);
 
      const passwordRef=useRef('')
      const emailRef=useRef('')
      const nameRef=useRef('')
      //const [agree,setAgree]=useState(false)
      const navigate=useNavigate()
      let errorElement
    const handleSubmit =async(e)  => {
        e.preventDefault()
        const name=nameRef.current.value
        const email=emailRef.current.value
        const password=passwordRef.current.value  
       await createUserWithEmailAndPassword(email,password)
        await updateProfile({displayName:name})
        alert('Updated profile')
        navigate('/')     
    }  
    if (error|| gerror||giterror) {     
        errorElement=   <p className='text-red-700'>Error: {error?.message}{gerror?.message}{giterror?.message} </p>
     }
    return (
        <div className=' register '>

            <div className='form-container md:w-1/2 mx-auto py-10 sm:w-full'>
                <form onSubmit={handleSubmit} className='flex flex-col w-1/2 mx-auto '>
                <h1 className='text-3xl pb-5'>Please Sign Up</h1>
                    <input ref={nameRef} type="text" name="text" id="" placeholder='Name' />
                    <input ref={emailRef} type="email" name="email" id="" placeholder='Email' required />
                    <input ref={passwordRef} type="password" name="password" id="" placeholder='Password' required />
                   
                    {/* <div className='flex items-center gap-2'>
                        <input onClick={()=>setAgree(!agree)} type="checkbox" name="" id="" />
                        <p className={agree?'text-blue-700':'text-red-700'}>Accept Terms And Conditions</p>
                    </div> */}
                    <input  className='text-black bg-gray-400 font-bold py-2 submit  rounded-xl hover:text-blue-700 ' type="submit" value="Sign Up" />
                </form>
                {
                    loading?'Loading':''
                }
                {
                    errorElement
                }
                <p className='text-black py-4 '>Already have an account ?<Link className='text-blue-700 ' to='/login'> Login</Link> </p>
                <div className='or flex justify-center items-center gap-2'>
                    <hr className='w-1/5' /> OR <hr className='w-1/5' />
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <div onClick={()=>signInWithGoogle()}  className='w-1/2 flex justify-center items-center text-black gap-2 bg-gray-400  py-2 mt-2  rounded-xl hover:text-blue-700  '>
                        <img className='h-8' src={google} alt="" />
                        <button className='font-bold'> Google Sign In</button>
                    </div>
                    {/* <div className='w-1/2 flex justify-center items-center text-black  bg-gray-400  py-2 mt-2  rounded-xl hover:text-blue-700  '>
                        <img className='h-8 ' src={facebook} alt="" />
                        <button className='font-bold'> Facebook Sign In</button>
                    </div> */}
                    <div onClick={()=>signInWithGithub()}  className='w-1/2 flex justify-center items-center text-black gap-2 bg-gray-400  py-2 mt-2  rounded-xl hover:text-blue-700  '>
                        <img className='h-8' src={github} alt="" />
                        <button className='font-bold'> Github Sign In</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Register;