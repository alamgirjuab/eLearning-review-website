import React from 'react';
import image from '../../image/edu_2.png'

const About = () => {
    return (
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <h2>Know About E-Learn Learning Platform</h2>
                    <p>
                        Students learn best when they feel safe, cared for, engaged, and confident in themselves as learners. We believe positive, authentic relationships are the key to unlocking the incredible potential each and every student has.
                        Classes at Fusion are one-to-one: one student and one teacher per classroom. This allows teachers to personalize course content for each student’s strengths, interests, and learning style. Our thoughtfully designed approach of love, motivate, teach, sets a strong foundation of trust and understanding.
                    </p>
                    <h2>Our Mission</h2>
                    <p>
                        Guided by a fundamental belief in the immense potential within every person, our mission is to help each student flourish – emotionally, socially, and academically – through positive, mentoring relationships and a personalized education experience.
                    </p>
                    <h2>Our History</h2>
                    <p>
                        Michelle Rose Gilman founded Fusion Academy out of frustration with the status quo, and a need for personalized education in her community. What began with one campus in Solana Beach, California in 1989 expanded to add a Los Angeles campus in 2010 through the help of what is now Fusion Education Group. Since then, Fusion has expanded to over 60 campuses across the country and changes the lives of thousands of families each year.
                    </p>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img className='img-fluid' src={image} alt="" />
                </div>

            </div>
        </div>
    );
};

export default About;