import React from 'react';
import './Courses.css'

const Courses = (props) => {
    console.log(props.service)
    const { img, title, description, price } = props.service;
    return (
        <div className='body'>
            <div>
                <img className='img-fluid image' src={img} alt="" />
                <h4><span className='font-weight'> {title}</span></h4>
                <p><span className='font-weight'>{description}</span></p>
                <h5>Price $ : <span className='font-weight'>{price}</span></h5>
            </div>
        </div>

    );
};

export default Courses;