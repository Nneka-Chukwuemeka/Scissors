import React,{useEffect} from 'react'
import Link from 'next/link'
import Button from './Button'
import Image from 'next/image'
import slate_img from "../public/assets/hero-url-slate-img.svg"
import anchor_img from '../public/assets/url-anchor.svg'
import arrow_img from '../public/assets/url-arrow.svg'
import triangle from '../public/assets/triangle.svg'
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <header data-aos="fade-up" className="pt-[6rem] pb-[2rem] px-4">
        <div className="w-full max-w-[60rem] mx-auto text-center">
            <h1 className="text-[40px] md:text-[48px] font-semibold leading-[60px] md:leading-[96px]">Optimize Your Online Experience with Our Advanced <span className="text-primary hero-fancy-text whitespace-nowrap">URL Shortening</span> Solution</h1>
            <p className="text-[18px] leading-[28px] pt-10 max-w-[45rem] mx-auto">Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.</p>
            <div className="max-w-max flex mx-auto py-14">

             <Link  	href="/sign-up">
             <Button>Sign Up</Button>  
             </Link>
           
              
               
                <Button className="bg-white !text-primary font-semibold">Learn more</Button>
            </div>
        </div>
        <div className="pb-14 max-w-fit mx-auto relative"> 
          <Image src={triangle} alt="Scissor URL Anchor" className="absolute -z-10 top-0 -left-32"/>
          <div className="rounded-[24px] border-[1px] bg-white border-primary min-h-[224px] p-8 w-full max-w-[600px] flex gap-x-5">
            <figure className="grid place-items-center basis-[40%]">
              <Image src={anchor_img} alt="Scissor URL Anchor"/>
            </figure>
            <figcaption className="flex gap-x-8 items-center basis-[60%]">
              <Image src={arrow_img} alt="Scissor URL Anchor"/>
              <p>Seamlessly transform your long URLs into concise and shareable links with just few clicks.</p>
            </figcaption>
          </div>
        </div>
        <figure className="flex justify-center">
          <Image src={slate_img} alt="Scissor URL Slate"/>
        </figure>
    </header>
  )
}

export default Hero
