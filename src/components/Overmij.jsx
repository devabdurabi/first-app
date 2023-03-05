import React from 'react'
import Werk from '../assets/Werk.jpg'

const Overmij = () => {
  return (
    
      <div class="bg-white flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h2 class="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
            A Simple Bookmark Manager
          </h2>
          <p class="text-bookmark-grey text-lg text-center lg:text-left mb-6">
            A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
            load instantly. Try it for free.
          </p>
          <div class="flex justify-center flex-wrap gap-6">
            <button type="button" class="hover:bg-bookmark-white hover:text-black">
              Get it on Chrome
            </button>
            <button type="button" class="hover:bg-bookmark-purple hover:text-white">
              Get it on Firefox
            </button>
          </div>
        </div>
        
        <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={Werk} alt="" />
        </div>
      </div>
      
  )
 }

export default Overmij