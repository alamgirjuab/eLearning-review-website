import React from 'react';
import useServices from '../../hooks/useServices';
import Courses from '../Courses/Courses';
import './Services.css'

const Service = () => {
    const [services] = useServices();
    return (
        <div>
            {
                services.map(service => <Courses service={service}></Courses>)
            }
        </div>
    );
};

export default Service;