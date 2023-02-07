import React from 'react'
import Laptop from '../assets/laptop.jpeg'

const Werkwijze = () => {
  return (
    <section className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} alt="" />
            <div>
                <p>Altijd al interesse gehad?</p>
                <h1>Voordelen van Acro Gymnastics Now</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate exercitationem voluptate suscipit?</p>
            </div>
        </div>
    </section>
  )
}

export default Werkwijze