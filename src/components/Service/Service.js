import React from 'react';
import useServices from '../../hooks/useServices';
import Courses from '../Courses/Courses';
import './Services.css'

const Service = () => {
    const [services] = useServices();
    return (
        <div className='container text-center mt-5'>
            <h1>Our services</h1>
            <div className='my-5 data'>
                {
                    services.map(service => <Courses service={service}></Courses>)
                }
            </div>
        </div>
    );
};

export default Service;