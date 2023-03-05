import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,

} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-50'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Believe</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis praesentium laudantium.</p>
            <div className='flex justify-between md:w-[75%] my-5 '>
                <FaFacebookSquare size={30} />
                <FaDribbbleSquare size={30} />
                <FaGithubSquare size={30} />
                <FaTwitterSquare size={30} />
                <FaInstagram size={30} />
            </div>
        </div>

        <div className='lg:col-span-2 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-200'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Sports</li>
                    <li className='py-2 text-sm'>Bewegen</li>
                    <li className='py-2 text-sm'>Onderhandelen</li>
                    <li className='py-2 text-sm'>Strategie </li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-200'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Sports</li>
                    <li className='py-2 text-sm'>Bewegen</li>
                    <li className='py-2 text-sm'>Onderhandelen</li>
                    <li className='py-2 text-sm'>Strategie </li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-200'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Sports</li>
                    <li className='py-2 text-sm'>Bewegen</li>
                    <li className='py-2 text-sm'>Onderhandelen</li>
                    <li className='py-2 text-sm'>Strategie </li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-200'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Sports</li>
                    <li className='py-2 text-sm'>Bewegen</li>
                    <li className='py-2 text-sm'>Onderhandelen</li>
                    <li className='py-2 text-sm'>Strategie </li>
                </ul>
            </div>

        </div>

    </footer>
  )
}

export default Footer