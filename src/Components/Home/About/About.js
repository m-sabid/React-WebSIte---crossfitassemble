import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/Image.jpg'
import './About.css'

const About = () => {

    const [bgImage, setBgImage] = useState([])

      // background video and images
  useEffect(() => {
    fetch(`http://crossfitassemble.xyz/api/static_file_web`)
      .then((res) => res.json())
      .then((data) => setBgImage(data.data.home_image));
  }, []);

    return (
        <div className=' mid-container'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-7 md:gap-5 my-12'>
                <div className='overflow-hidden rounded-xl flex items-center md:justify-start lg:w-[500px] md:w-[350px] lg:mt-[50px] lg:mb-[50px]'>
                    <img className='homeImage' src={bgImage ? bgImage : img} alt="" />
                </div>
                <div className='flex '>
                    <div>
                        <h1 className='lg:text-4xl md:text-3xl text-3xl font-bold lg:my-5 md:my-3 my-4 text-center'>ALL progress takes place outside the comfort zone</h1>
                        <div className='mb-10'>
                            <div className='mb-5'>
                                <h1 className='text-2xl font-bold mb-2 text-primary about'>Mission</h1>
                                <p className='text-secondary text-justify'>We want to forge a community through elite functional fitness that drives people to be fit and live a healthy life.</p>
                            </div>

                            <div className='mb-5'>
                                <h1 className='text-2xl font-bold text-primary about mb-2'>Vision</h1>
                                <p className='text-secondary text-justify'>We envision to be a hub of health & fitness; a place people can rely on to reach their goals and a platform where they can share their experiences that will enlighten the path for others.</p>
                            </div>

                            <div>
                                <h1 className='text-2xl vision font-bold text-primary about mb-2'>Core Values</h1>
                                <p className='text-secondary text-justify'>We envision to be a hub of health & fitness; a place people can rely on to reach their goals and a platform where they can share their experiences that will enlighten the path for others.</p>
                            </div>
                        </div>

                        <Link to='/about'><button className='btn btn-primary btn-md md:mt-0 px-5' type="">About US</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;