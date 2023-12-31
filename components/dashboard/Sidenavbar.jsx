'use client'
import React, { useState } from 'react';
import avater from '@/public/assets/placeholder.jpg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { UserAuth } from '@/context/Authcontext';
import { AiFillCaretDown, AiOutlineClose} from 'react-icons/ai';
import Button from '@/components/Button';
import { LiaCutSolid } from 'react-icons/lia';
import Logo from '@/public/assets/Logo.svg';
import Link from 'next/link';
// Import necessary libraries and components

export default function Mainbar() {
  const router = useRouter();
  const { emailuser, logout } = UserAuth();
  const [userprofile, Setuserprofile] = useState(false);
  const [createshortlink, Setcreateshortlink] = useState(false);
  const [longURL, setLongURL] = useState('https://www.longurl.com');
  const [shortenedURL, setShortenedURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const Userprofilefn = () => {
    Setuserprofile(!userprofile);
  };

  const handlesummit = (event) => {
    event.preventDefault();
  };

  const handlecreateshortlink = async () => {
    try {
      const bitlyAccessToken = '0c875b74dbc0954ef1cfaef37463133b6677501c'; // Replace with your Bitly access token
      const bitlyShortenUrl = 'https://api-ssl.bitly.com/v4/shorten';

      setLoading(true);
      setError('');

      const response = await fetch(bitlyShortenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${bitlyAccessToken}`,
        },
        body: JSON.stringify({
          long_url: longURL,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setShortenedURL(data.id);
      } else {
        setError('Failed to shorten URL. Please try again.');
      }
    } catch (error) {
      setError('An error occurred while processing your request.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/');
      console.log('You are logged out');
    } catch (e) {
      console.log(e.message);
    }
  };

  const email = emailuser?.email || '';
  const name = email.split('@')[0];
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  const formattedEmail = email.length > 7 ? email.substring(0, 7) + '.' + email.substring(7) : email;
  const cleanedFormattedEmail = formattedEmail.replace('.@gmail.com', '');

  return (
    <div className='text-center text-white bg-slate-600  w-full h-screen   '>
      <section className=' flex flex-row items-center justify-between pt-4 '>
         <Image className='' src={Logo} alt='/' height={50} width={120} />
         <div className=' bg-black  py-3 p-4 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
          <div className=' flex items-center space-x-2'>
            <Image className='border-neutral-200 cursor-pointer hover:shadow-md transition rounded-full' src={avater} alt='/' height={50} width={30} />
            <p className='pr-[rem]'>{formattedName}</p>
            <div onClick={Userprofilefn}>
              <AiFillCaretDown size={18} />
            </div>
          </div>
        </div>
      </section>

      <div className={userprofile ? 'fixed right-0 top-20 w-[42%] sm:w-[40%] md:w-[21%] lg:w-[13%] z-[1000] text-black bg-white p-10 mt-4 mr-3 lg:mt-6 rounded-lg pr-6' : 'fixed left-[-100%] top-0 p-10 ease-out duration-500'}>
        <section>
          <ul className='space-y-4 text-sm -mt-4 -mb-5'>
            <button> <Link href='/#about'>My Profile</Link> </button>
            <button><Link href='/#about'>Change Password</Link></button>
            <button onClick={handleLogout} className='border px-6 py-2 my-2 rounded-3xl bg-[#0065FE] text-white'><Link href='/#about'>Logout</Link></button>
          </ul>
        </section>
      </div>

      <div className='mt-14'>
        <p className='text-6xl relative md:left md:text-left md:w-[50%] md:p-16 pb-6'>Short Your Loooooog Links :)</p>
        <h1 className='md:text-lg md:font-medium md:text-left md:w-[60%] relative md:ml-16 pb-2'>Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.</h1>
        
        <button onClick={handlecreateshortlink} className='px-6 py-2 my-2 md:mr-[32rem] rounded-3xl lg:mr-[45rem] xl:mr-[60rem] relative bg-[#0065FE] text-white'>Create Short Link</button>
        
        {createshortlink && (
          <div className='fixed flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70'>
            <section className='p-[2.5rem] lg:p-[5.2rem] justify-center rounded-[12px] bg-white w-full lg:w-[50%]'>
              <form onSubmit={handlesummit} className='flex flex-col gap-[1rem]'>
                <div className='form-group w-full'>
                  <div onClick={handlecreateshortlink} className='text-black rounded-full ml-[17rem] xl:ml-[30rem] xl:top-[-3.rem] lg:ml-[22rem] md:ml-[45rem] w-[20%] relative top-[-1.9rem] p-3 cursor-pointer'>
                    <AiOutlineClose size={25} />
                  </div>
                  <input
                    type='text'
                    placeholder='Paste your URL'
                    value={longURL}
                    onChange={(e) => setLongURL(e.target.value)}
                    className='input rounded-[6px] border-primary border w-full py-[0.3rem] px-[0.75rem]'
                  />
                </div>
                <div className='dropdown flex gap-[0.7rem] justify-between relative'>
                  <select className='input text-primary h-[3.4375rem]'>
                    <option defaultValue='Custom domain'>Choose Domain</option>
                  </select>
                  <input type='text' className='input' placeholder='Type Alias here' value='' />
                </div>
                <Button className='flex justify-center items-center' onClick={handlecreateshortlink} disabled={loading}>
                  {loading ? 'Shortening...' : 'Trim Url'} <LiaCutSolid />
                </Button>
              </form>
              <p className='text-[0.875rem] text-primary mt-[0.7rem]'>By clicking TrimURL, I agree to the Terms of Service, Privacy Policy and Use of Cookies.</p>
            </section>
          </div>
        )}

        {/* Display Shortened URL */}
        {shortenedURL && (
          <div className='mt-4'>
            <p className='text-lg font-semibold'>Shortened URL:</p>
            <a href={shortenedURL} target='_blank' rel='noopener noreferrer' className='text-blue-500'>
              {shortenedURL}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
