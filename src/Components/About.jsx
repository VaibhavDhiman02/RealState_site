import React from 'react'
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:pc-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
      <p className='text-gary-500 max-w-80 text-center mb-8'>
        Passionate about Properties, Dedicated  to your Dream.
      </p>
      <div className='flex flex-col md:flex-row  items-center md:items-start md:gap-20'>
        <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 '>
            <div>
              <p className='text-4xl font-medium text-gray-800'>8+</p>
              <p>
                Years of Excellence
              </p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>15+</p>
              <p>
                Projects Completed
              </p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>20+</p>
              <p>
                Mn. Sq. Ft. Delivered
              </p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>22+</p>
              <p>
                Ongoing Projects
              </p>
            </div>
          </div>
          <p className='my-10 max-w-lg'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo optio fugiat, voluptatum nemo, asperiores velit eveniet non minus molestias, ea magnam officiis deserunt aperiam omnis? Nam praesentium maxime veniam aliquid quis. Sint harum mollitia aliquam? Nam quae itaque reiciendis beatae!
          </p>
          <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default About;