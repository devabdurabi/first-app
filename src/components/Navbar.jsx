import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }




  return (
    <nav className='flex justify-between items-center h-24 px-4 max-w-[1240px] mx-auto text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Bedrijf</li>
            <li className='p-4'>Mogelijkheden</li>
            <li className='p-4'>Over</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25}/> }
            
        </div>

        {/* dit is mobiele versie/menu */}
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>React.</h1>
        <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-500'>Home</li>
            <li className='p-4 border-b border-gray-500'>Bedrijf</li>
            <li className='p-4 border-b border-gray-500'>Mogelijkheden</li>
            <li className='p-4 border-b border-gray-500'>Over</li>
            <li className='p-4'>Contact</li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar