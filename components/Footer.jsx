import React,{useEffect} from 'react'
import Image from 'next/image';
import divider from '@/public/assets/divider.svg'
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from 'react-icons/fa';
import logofooter from '@/public/assets/Logof.svg'
import AOS from "aos";
import "aos/dist/aos.css";
export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up">
        <section className=''>
         <div>
         <Image
						className=" p-4 ml-6 xl:ml-[10rem] "
						src={logofooter}
						alt="/"
						height={50}
						width={120}
					/>
         </div>
         <ul className=' flex  space-x-12 p-4 ml-6  md:space-x-4 xl:ml-[10rem] '>
            <li><FaTwitter size={25}/></li>
            <li><FaInstagram size={25}/></li>
            <li><FaLinkedin size={25}/></li>

            <li><FaFacebook size={25} /></li>
         </ul>
         <ul className='p-4 ml-6 md:ml-[13rem] md:-mt-[7rem] xl:ml-[25rem]'>
           <div className=' font-bold'>Why Scissor ?</div> 
           <div>Scissor 101</div> 
           <div>Integrations & API
</div> 
           <div>Pricing</div> 
         </ul>

         <ul className='p-4 ml-[12rem]  -mt-[8rem] md:ml-[24rem] xl:ml-[38rem] '>
           <div className=' font-bold'>Solutions</div> 
           <div>Social Media</div> 
           <div>Digital Marketing</div> 
           <div>Customer Service</div> 
           <div>For Developers</div>
         </ul>

         <ul className='p-4 ml-[1rem] md:ml-[33rem]  md:-mt-[9.4rem] xl:ml-[50rem] '>
           <div className=' font-bold'> Products</div> 
           <div>Link Management</div> 
           <div>QR Codes</div> 
           <div>Link-in-bio</div>
         </ul>


         <ul className='p-4 ml-[12rem] -mt-[8rem] md:ml-[43rem] xl:ml-[63rem] '>
           <div className=' font-bold'>Company</div> 
           <div>About Scissor</div> 
           <div>Careers</div> 
           <div>Partners</div>
           <div>Press</div>
           <div>Contact</div>
           <div>Reviews</div>
         </ul>
       
         <ul className='p-4 ml-[2rem] md:-mt-[1rem]  md:ml-[13rem] xl:ml-[25rem] '>
           <div className=' font-bold'>Resources </div> 
           <div>Blog</div> 
           <div>Resource Library</div> 
           <div>Developers</div>
           <div>App Connectors</div>
           <div>Support</div>
           <div>Trust Center</div>
           <div>Browser Extension</div>
           <div>Mobile App</div>
         </ul>


         <ul className='p-4 ml-[12rem] -mt-[15.5rem] md:ml-[23rem] xl:ml-[38rem] '>
           <div className=' font-bold'>Features</div> 
           <div>Branded Links </div>
<div>Mobile Links</div>
<div>Campaign</div>
<div>Management &</div>
<div>Analytics </div>
<div> QR Code generation</div> 
      
         </ul>




         <ul className='p-4 ml-[2rem] mt-10 md:-mt-[12rem]  md:ml-[34rem] xl:ml-[50rem] '>
           <div className=' font-bold'>Legal </div> 
           <div>Pravacy Policy</div> 
           <div>Cookie Policy</div> 
           <div>Teams of Service </div>
           <div>App Connectors</div>
           <div>Acceptable Use Policy</div>
           <div>Code of Conduct</div>
         </ul>

         <ul className=' p-6 flex space-x-2 -mt-[2rem] pb-6 top-6 relative ml-5 md:ml-[25rem] md:top-16 xl:ml-[50rem]  '>
            <li>Term of Service <Image
						className=" top-[-1.5rem] relative ml-[7.4rem]  "
						src={divider}
						alt="/"
						height={5}
						width={3.6}
                    
					/></li>
            <li>Security <Image
						className=" top-[-1.5rem] relative ml-[4rem]  "
						src={divider}
						alt="/"
						height={5}
						width={3.6}
                    
					/></li>
            <li> Scissor 2023</li>
         </ul>
        </section>
      
    </div>
  )
}
