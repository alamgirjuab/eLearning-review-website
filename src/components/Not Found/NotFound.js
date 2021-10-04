import React from 'react';
import './NotFound.css'
import image from '../../image/404.png'
import 'bootstrap/dist/css/bootstrap.min.css';
/* import Button from '@restart/ui/esm/Button'; */
import { Button } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div className='text-center d-flex align-items-center justify-content-center not-found'>
            <div>
                <h1>404</h1>
                <h3>Page not found</h3>
                <p>We’re unable to find a page you are looking for, Try later or click the button.</p>
                <Button variant="danger">Back to Home</Button>
            </div>
            <div>
                <img className='img-fluid' src={image} alt="" />
            </div>
        </div>
    );
};

export default NotFound;