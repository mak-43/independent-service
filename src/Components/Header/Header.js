import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Acitve from '../Active/Acitve';
import img from '../images/hmmrbk.png'

const Header = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <div className='grid grid-cols-2 py-5  '>
                <div className='flex ml-20 items-center '>
                    <img onClick={() => navigate('/')} className='h-10' src={img} alt="" />
                </div>
                <div className='flex gap-5 justify-end mr-20 '>
                    <Acitve to='/'>Home</Acitve>
                    < Acitve to='/services'>Services</Acitve>

                    < Acitve to='/blogs'>Blogs</Acitve>
                    < Acitve to='/about'>About</Acitve>
                    <div>
                        {
                            user ?
                                <button onClick={handleSignOut}>SignOut</button>
                                :
                                < Acitve to='/login'>Login</Acitve>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;