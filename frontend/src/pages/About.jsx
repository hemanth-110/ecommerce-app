import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>ShopIt shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the Internet using a web browser or a mobile app.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptate corrupti neque quas amet, soluta ullam consectetur reprehenderit provident quos nesciunt dolores repudiandae, quasi laboriosam labore. Eos voluptas harum voluptatem.</p>
          <b className='text-gray-800'>OUR MISSION</b>
          <p>Our Mission was lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique soluta porro cum veniam, eos libero incidunt eveniet laboriosam impedit ullam.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore odit natus similique sapiente. Dolore dolorem mollitia alias sapiente consequatur.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore odit natus similique sapiente. Dolore dolorem mollitia alias sapiente consequatur.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore odit natus similique sapiente. Dolore dolorem mollitia alias sapiente consequatur.</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About
