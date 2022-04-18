import React from 'react';
import img from './69.jpg'
const About = () => {
    return (
        <div className='w-1/2 mx-auto my-10 '>
            <div className=''>
                <img className='mx-auto rounded'style={{height:'325px'}} src={img} alt="" />
            </div>
            <div>
                <p className='text-xl font-bold p-3'>Name : Muslim Ahmed Khan (MAK)</p>
                <p className='font-semibold py-2'>Goal:Full Stack Web Developer</p>
                <p>To achieve my goals i will concentrate rest of my course module and  keep practicing previous .I have learned html, css framwork bootstrap and tailwind ,javascript and react till now and many ways to go  .This Eid also an advantage to recover myself .I have completed my graduation from Cse last year till now jobless so My first terget is to get a job by completing this course after that i will focus on backend .That's how i thinking to achieve my goal </p>
            </div>
        </div>
    );
};

export default About;