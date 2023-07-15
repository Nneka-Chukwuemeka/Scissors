"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect,useState } from 'react'
import faqs_line from '../public/assets/faqs-line.svg'
import Image from 'next/image'

const faqsData = [
    {
        title:'How does URL shortening work?',
        content:'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.'
    },
    {
        title:'Is it necessary to create an account to use the URL shortening service?',
        content:'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.'
    },
    {
        title:'Are the shortened links permanent? Will they expire?',
        content:'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.'
    },
    {
        title:'Are there any limitations on the number of URLs I can shorten?',
        content:'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.'
    },
    {
        title:'Can I customize the shortened URLs to reflect my brand or content?',
        content:'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.'
    },
    {
        title:'Can I track the performance of my shortened URLs?',
        content:'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.'
    },
    {
        title:'How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?',
        content:'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.'
    },
    {
        title:'What is a QR code and what can it do?',
        content:'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.'
    },
    {
        title:'Is there an API available for integrating the URL shortening service into my own applications or websites?',
        content:'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.'
    },
]

const Faqs = () => {

    const [state, setState] = useState()

    const stateToggle = (val) => state === val ? setState(null) : setState(val)
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    return (
        <section data-aos="fade-up">
            <div className='mx-auto w-full max-w-[768px] pt-[3rem] pb-[8rem] px-4'>
                <header className='grid place-items-center pb-14'>
                    <div className='flex gap-x-4'>
                        <Image src={faqs_line} alt="Faqs Line" />
                        <h1 className='text-[40px] font-semibold leading-[40px]'>FAQS</h1>
                    </div>
                </header>
                <article>
                    <div>
                        {
                            faqsData.map((fd, i) => (
                                <div key={i} className='border-b-[1px] border-[#d6d6d6] py-5'>
                                    <header className='flex justify-between text-[20px] gap-x-5 cursor-pointer' onClick={() => stateToggle(i)}>
                                        <h1>{fd.title}</h1>
                                        <span className='text-[30px]'>{state === i ? '-' : '+'}</span>
                                    </header>
                                    {
                                        state === i ?
                                            <div className='pt-5'>
                                                <p>{fd.content}</p>
                                            </div> : null
                                    }
                                </div>
                            ))
                        }
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Faqs
