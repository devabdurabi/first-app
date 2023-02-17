import React from 'react'

const Newsletter = () => {
  return (
    <section className='w-full px-4 py-16 text-white'>
        {/* dit is een container.. hanteer deze wijze */}
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='my-5 lg:col-span-2 '>
              <h1 className='py-2 text-2xl font-bold md:text-4xl sm:text-3xl'>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis possimus consequuntur deleniti!</p>  
            </div>
            <div className='my-4'>
                <div className='flex flex-col items-center justify-between w-full sm:flex-row'>
                    <input className='flex w-full p-3 text-black rounded-md sm:flex-col' type="email" name="" placeholder='Enter Email' id="" />
                    <button className='bg-[#aadf4a] w-[200px] rounded-md font-medium my-6 ml-4 px-6 py-3 text-black'>Notify me</button>
                    
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur <span className='text-[#aadf4a] font-bold'>adipisicing</span>  elit. Ab, eos!</p>
            </div>
            
        </div>

    </section>
  )
}

export default Newsletter