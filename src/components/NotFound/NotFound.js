import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../images/404_error.png';

const NotFound = () => {
    return (
        <div className='font-mono grid grid-cols-1 text-center lg:grid-cols-2 lg:text-left xl:grid-cols-2 h-screen items-center '>
            <div className='px-5 lg:px-16'>
                <img src={errorImg} alt="404_error"/>
            </div>
            <div className='px-5 lg:px-16'>
                <h1 className='text-6xl font-bold lg:text-8xl text-gray-800'>404</h1>
                <h3 className='text-2xl font-bold lg:text-4xl text-gray-800 mb-2'>PAGE NOT FOUND</h3>
                <h3 className='text-2xl font-bold lg:text-4xl text-gray-800 mb-2'>OOPS! THAT PAGE DOESN'T EXIST!</h3>
                <Link to={"/home"} className='px-3 py-2 text-xl font-bold text-white bg-gray-800 rounded-lg mb-2 hover:bg-red-500'>RETURN TO THE WEBSITE</Link>
            </div>
        </div>
    );
};

export default NotFound;