 import React from 'react'
 import Laptop from '../assets/laptop.jpeg'

const Werkwijze = () => {
  return (
    <section className='w-full bg-white py-16 px-4'>
        <div className=' max-w-[1240px] mx-auto my-4 grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Beste wedstrijd schema</p>
                <h1 className='md-text-4xl sm:text-3xl text-2xl font-bold py-2'>Ontdek alle voordelen 2.0</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum incidunt quasi atque hic vel animi sit amet consectetur adipisicing elit. Ut eum incidunt quasi atque hic vel an qui?</p>
                <button className='bg-[#aadf4a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Meld aan</button>
            </div>
        </div>
    </section>
  )
}

export default Werkwijze