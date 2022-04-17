import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            Home
            <Link to='/checkout'> Proceed Checkout</Link>
        </div>
    );
};

export default Home;