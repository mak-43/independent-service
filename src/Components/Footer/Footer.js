import React from 'react';
import logo from '../images/lawyer2.png'
const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='mt-5 bottom-0 w-full mb-0 '>
            <div className='relative'>
                <div className='grid md:grid-cols-2  bg-zinc-800 h-[20vh] text-white '>
                    <div className='flex items-center justify-center'>
                        <img  src={logo} alt="" className='' />
                    </div>
                    <div className='grid grid-cols-2 '>
                        <div className='flex items-center justify-center text-left'>
                            <div>
                                <p className='text-xl pb-2'>Get help</p>
                                <p>Get Online Support</p>
                                <p>Read our blogs</p>
                                <p>Sign up to support</p>
                                <p>Read FaQs</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-center text-left'>
                            <div>
                                <p className='text-xl pb-2'>Contact</p>
                                <p>Banani, R-28, H-36</p>
                                <p>Email: <small>letsmailmak@gmail.com</small></p>
                                <p>Phone:01613900027</p>
                                <p>Get Directions</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 bg-zinc-800 text-white content-center pb-6 sm:grid-cols-1  py-5'>
                    <div className=''>
                        <p><small>Copyright &copy; {year} Better Call Mak</small></p>
                    </div>
                    <div className='flex justify-center gap-5'>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                        <p>Pricing</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;