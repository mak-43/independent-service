import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import Banner from './Banner';

const Home = () => {
    return (
        <div className=''>
            
            <Banner></Banner>
            <Services/>
            Home <br />
            <Link to='/checkout'> Proceed Checkout</Link>
        </div>
    );
};

export default Home;