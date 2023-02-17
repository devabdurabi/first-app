import React from 'react'
import Werk from '../assets/Werk.jpg'
import laptop from '../assets/laptop.jpeg'
import python from '../assets/python.png'
import scala from '../assets/scala.png'
import ruby from '../assets/ruby.png'
const Cards = () => {
  return (
    <section className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='flex flex-col w-full p-4 my-4 duration-300 rounded-lg shadow-xl hover:scale-105 '>
                <img className='w-40 mx-auto mt-[-3rem]' src={ruby} alt="" />
                <h2 className='py-8 text-2xl font-bold text-center'>Ruby User</h2>
                <p className='text-4xl font-bold text-center'>$223</p>
                <div className='font-medium text-center'>
                    <p className='py-2 mx-8 mt-8 border-b'>500 GB Storage</p>
                    <p className='py-2 mx-8 border-b '>1 Granted User</p>
                    <p className='py-2 mx-8 border-b '>Send up to 10 GB</p>
                </div>
                <button className='bg-[#aadf4a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Start Now</button>
        
            </div>
            <div className='flex flex-col w-full bg-gray-200 p-4 my-8 duration-300 rounded-lg shadow-xl md:my-0 hover:scale-105 '>
                <img className='w-40 mx-auto bg-transparent mt-[-3rem]' src={scala} alt="" />
                <h2 className='py-8 text-2xl font-bold text-center'>Scala User</h2>
                <p className='text-4xl font-bold text-center'>$223</p>
                <div className='font-medium text-center'>
                    <p className='py-2 mx-8 mt-8 border-b'>500 GB Storage</p>
                    <p className='py-2 mx-8 border-b '>1 Granted User</p>
                    <p className='py-2 mx-8 border-b '>Send up to 10 GB</p>
                </div>
                <button className='bg-[#aadf4a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Start Now</button>
        
            </div>
            <div className='flex flex-col w-full p-4 my-4 duration-300 rounded-lg shadow-xl hover:scale-105 '>
                <img className='w-40 mx-auto mt-[-3rem]' src={python} alt="" />
                <h2 className='py-8 text-2xl font-bold text-center'>Python User</h2>
                <p className='text-4xl font-bold text-center'>$223</p>
                <div className='font-medium text-center'>
                    <p className='py-2 mx-8 mt-8 border-b'>500 GB Storage</p>
                    <p className='py-2 mx-8 border-b '>1 Granted User</p>
                    <p className='py-2 mx-8 border-b '>Send up to 10 GB</p>
                </div>
                <button className='bg-[#aadf4a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Start Now</button>
        
            </div>

        </div>

    </section>
  )
}

export default Cards