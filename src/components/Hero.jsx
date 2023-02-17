import React from 'react'
import Werk from '../assets/Werk.jpg'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <section className='flex flex-col justify-between w-full h-screen py-20 bg-white'>
        <div className='grid md:grid-cols-2 max-w-[1240px] mx-auto'>
            <div className='flex flex-col justify-center w-full px-2 py-8 md:items-start'>
                <p className='text-2xl'>Welkom bij de AcroApp 2.0</p>
                <h1 className='py-3 text-5xl font-bold md:text-7xl'>Acrobatic <br></br>Solutions or <Typed strings={['Studenten', 'Atleten', 'Beginners']} typeSpeed={120} backSpeed={140} loop  /> </h1>
                
                <p className='text-1xl '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident et, ad eos adipisci esse molestias, corrupti id mollitia quam animi ab rerum?</p>
            

                <button className='py-3 bg-sky-500 my-5 font-medium rounded-md w-[200px] mx-auto '>Maak nu een afspraak</button>
            </div>


            <div>
                <img src={Werk} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero