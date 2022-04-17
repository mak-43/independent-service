import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import google from '../images/google.png'
import facebook from '../images/fb.png'
import github from '../images/github.png'
import auth from '../../firebase.init';
const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [signInWithGoogle, guser,  gerror] = useSignInWithGoogle(auth);
      const [signInWithGithub, gituser, giterror] = useSignInWithGithub(auth);
      const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
      
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleEmail=(e)=>{
        setEmail(e.target.value)    
    }

    const location=useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate=useNavigate()
    if(user||guser||gituser){
        navigate(from, { replace: true });
    }
    const handlePassword=e=>{
        setPassword(e.target.value)
    }
    const handleSubmit=e=>{
        e.preventDefault()
        signInWithEmailAndPassword(email,password)
        console.log(email,password)
    }
    let errorElement
    if (error|| gerror||giterror) {    
         errorElement=   <p className='text-red-700'>Error: {error?.message}{gerror?.message}{giterror?.message} </p>
      }
      const resetPassword=async()=>{
        await sendPasswordResetEmail(email);
          alert('Sent email');
      }

    return (
        <div className=' login '>        
            <div className='form-container md:w-1/2 mx-auto py-10 sm:w-full'>
                <form onSubmit={handleSubmit} className='flex flex-col w-1/2 mx-auto '>
                    <h1 className='text-3xl pb-5'>Please Login</h1>
                    <input onBlur={handleEmail} type="email" name="email" id="" placeholder='Email' required />
                    <input onBlur={handlePassword} type="password" name="password" id="" placeholder='Password' required />
                    <input className='text-black bg-gray-400 font-bold py-2 submit rounded-xl hover:text-blue-700 ' type="submit" value="Login" />
                </form>
                {
                    loading?'Loading':''
                }
                {
                    errorElement
                }
                <p className='text-black py-4 '>New to this site ?<Link className='text-blue-700 ' to='/register'> Sign Up</Link> </p>
                <p>Forget Password ?  <Link to=' ' className='text-blue-700' onClick={resetPassword}>Reset Password</Link> </p>
                <div className='or flex justify-center items-center gap-2'>
                    <hr className='w-1/5' /> OR <hr className='w-1/5' />
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <div onClick={()=>signInWithGoogle()} className='w-1/2 flex justify-center items-center text-black gap-2 bg-gray-400  py-2 mt-2  rounded-xl hover:text-blue-700  '>
                        <img className='h-8' src={google} alt="" />
                        <button className='font-bold'> Google Sign In</button>
                    </div>
                    {/* <div className='w-1/2 flex justify-center items-center text-black  bg-gray-400  py-2 mt-2  rounded-xl hover:text-blue-700  '>
                        <img className='h-8 ' src={facebook} alt="" />
                        <button className='font-bold'> Facebook Sign In</button>
                    </div> */}
                    <div onClick={()=>signInWithGithub()} className='w-1/2 flex justify-center items-center text-black gap-2 bg-gray-400  py-2 mt-2  rounded-xl hover:text-blue-700  '>
                        <img className='h-8' src={github} alt="" />
                        <button className='font-bold'> Github Sign In</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;