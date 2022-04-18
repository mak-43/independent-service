import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import b1 from '../images/b3.jpg'
import b2 from '../images/b2.jpg'
import b3 from '../images/b1.jpg'
import b4 from '../images/b4.jpg'

const Banner = () => {
    return (
        <div>
            
            <Carousel className=''>
                <div>
                    <img className='' src={b1} />
                    <p className="legend">We Appear When You Can't</p>
                </div>
                <div>
                    <img src={b2}/>
                    <p className="legend">Voice of Justice</p>
                </div>
                <div>
                    <img src={b3} />
                    <p className="legend">You Deserve Fair Trial</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;