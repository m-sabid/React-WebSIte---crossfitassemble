import React from 'react';
import { FaFacebook, FaGlobe } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-primary'>
            <footer className="mid-container items-center p-4 text-neutral-content">
                <div className='flex justify-center'>
                    <p className='text-sm text-center'><sup className='text-[#ffefba] c-white'>Developed BY -</sup> <span className='font-bold text-white c-white'>Tawakkul IT & Marketing</span></p>
                    {/* <div className="flex gap-5 py-2 text-white justify-center">
                        <a href="/"><FaFacebook /></a>
                        <a href="/"><AiOutlineInstagram /></a>
                        <a href="/"><FaGlobe /></a>
                        <a href="/"><BsYoutube /></a>
                    </div> */}
                    {/* <div className='flex items-center justify-center'> */}
                    {/* </div> */}
                </div>
            </footer>
        </div>
    );
};

export default Footer;