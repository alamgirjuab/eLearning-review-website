import React from 'react';
import './Banner.css'
import image from '../../image/edu_1.png';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-6 col-sm-12 text-white'>
                        <h1>Study Beyond The Classroom</h1>
                        <p>Develop your talents by taking courses, earning certificates, and earning degrees from Learnup world-class universities and companies instructors who are capable of building you.
                        </p>
                        <button className='btn btn-danger'>Enroll Now</button>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <img className='img-fluid' src={image} alt="" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;