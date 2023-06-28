import React from 'react'
import Image from 'next/image';
import line70 from '../public/assets/Line70.svg'
import checkcircle from '../public/assets/checkcircle.svg'
export default function Pricingplan() {
  return (
    <div className=' -mt-14 '>
      <div>
      <Image
							src={line70}
							width={5}
							height={24}
							alt='/'
							 className=' relative top-[5.4rem] ml-7 xl:ml-[16.4rem]  '
						/>
         <h1 className=' text-left text-[2.3rem] p-10 leading-[2.5rem] xl:ml-[15rem]  '>A <span className=' text-[#005AE2]'>price perfect
          </span> for your needs</h1>
         <h3 className=" p-8 -mt-[4rem] md:text-left md:w-[64%] xl:text-center xl:w-[50%] xl:ml-[12rem]  ">From catering for your personal, business, event, socials needs, you can be rest assured we have you in mind in our pricing.</h3>
         <section className=' md:mt-20 p-6 border border-[#005AE2] w-[85%] ml-7 md:w-[30%] xl:w-[30%] rounded-2xl xl:ml-[6rem] '>
         <div className='p-2 ml-1 text-2xl font-medium '>Basic</div>
          <div className='p-3 '>
         <ul className=' space-y-4'>
         <h1 className='text-4xl font-semibold   '>Free</h1>
               <h1 className=' text-xl font-medium '>Free plan for all users</h1>
         </ul>
               <ul className=' space-y-3 px-2'>
              <li className=' px-4 '> <Image
							src={checkcircle}
							width={15}
							height={24}
							alt='/'
							 className=' relative top-5 -ml-6    '
						/>Unlimited URL Shortening</li>
                <li className=' px-4'> <Image
							src={checkcircle}
							width={15}
							height={24}
							alt='/'
							 className=' relative top-5 -ml-6    '
						/> Basic Link Analytics</li>
                <li className=' px-4'> <Image
							src={checkcircle}
							width={15}
							height={24}
							alt='/'
							 className=' relative top-5 -ml-6    '
						/>Customizable Short Links</li>
                <li className=' px-4'> <Image
							src={checkcircle}
							width={15}
							height={24}
							alt='/'
							 className=' relative top-5 -ml-6    '
						/>Standard Support</li>
                <li className=' px-4'> <Image
							src={checkcircle}
							width={15}
							height={24}
							alt='/'
							 className=' relative top-5 -ml-6    '
						/>Ad-supported</li>
               </ul>
          </div>
         </section>
         <section className=' mt-10 bg-[#1E3448]   p-6 border text-white border-[#005AE2] w-[85%] ml-7 md:w-[33%] xl:w-[33%] rounded-2xl relative md:bottom-[7rem] md:-mt-[32rem] md:z-[5] md:h-[660px] md:ml-[16rem] xl:ml-[26rem] xl:bottom-1 xl:h-[560px] '>
          <div className='wrapper py-12 '>
          <div className='p-2 ml-1 text-2xl font-medium '>Professional</div>
          <div className='p-3 '>
         <ul className=' space-y-4'>
         <h1 className='text-4xl font-semibold   '>$15/month</h1>
               <h1 className=' text-xl font-medium '>Ideal for business creators</h1>
         </ul>
               <ul className=' space-y-3 px-2'>
              <li className=' px-4 '> <Image
							src={checkcircle}
							width={15}
							height={24}
							alt='/'
							 className=' relative top-5 -ml-6    '
						/>Enhanced Link Analytics</li>
                <li className=' px-4'> <Image
							src={checkcircle}
							width={15}
							height={24}
							alt='/'
							 className=' relative top-5 -ml-6    '
						/> Custom Branded Domains</li>
                <li className=' px-4'> <Image
							src={checkcircle}
							width={15}
							height={24}
							alt='/'
							 className=' relative top-5 -ml-6    '
						/>Advanced Link Customization</li>
                <li className=' px-4'> <Image
							src={checkcircle}
							width={15}
							height={24}
							alt='/'
							 className=' relative top-5 -ml-6    '
						/>Priority Support</li>
                <li className=' px-4'> <Image
							src={checkcircle}
							width={15}
							height={24}
							alt='/'
							 className=' relative top-5 -ml-6    '
						/>Ad-free Experience</li>
               </ul>
          </div>
          </div>
         
         </section>
         <section className=' mt-6 md:-mt-20 p-6 border border-[#005AE2] w-[85%] ml-7 md:w-[33%] xl:w-[30%] rounded-2xl relative md:bottom-[39rem] md:ml-[32rem] xl:bottom-[27rem] xl:ml-[52rem]  '>
         <div className='p-2 ml-1 text-2xl font-medium '>Teams</div>
          <div className='p-3 '>
         <ul className=' space-y-4'>
         <h1 className='text-4xl font-semibold   '>$25/month</h1>
               <h1 className=' text-xl font-medium '>Share with up to 10 users</h1>
         </ul>
               <ul className=' space-y-3 px-2'>
              <li className=' px-4 '> <Image
							src={checkcircle}
							width={15}
							height={24}
							alt='/'
							 className=' relative top-5 -ml-6    '
						/>Team Collaboration</li>
                <li className=' px-4'> <Image
							src={checkcircle}
							width={15}
							height={24}
							alt='/'
							 className=' relative top-5 -ml-6    '
						/>User Roles and Permissions</li>
                <li className=' px-4'> <Image
							src={checkcircle}
							width={15}
							height={24}
							alt='/'
							 className=' relative top-5 -ml-6    '
						/>Enhanced Security</li>
                <li className=' px-4'> <Image
							src={checkcircle}
							width={15}
							height={24}
							alt='/'
							 className=' relative top-5 -ml-6    '
						/>API Access</li>
                <li className=' px-4'> <Image
							src={checkcircle}
							width={15}
							height={24}
							alt='/'
							 className=' relative top-5 -ml-6    '
						/>Dedicated Account Manager</li>
               </ul>
          </div>
         </section>
      </div>
    </div>
  )
}
