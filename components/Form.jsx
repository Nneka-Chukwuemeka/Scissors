'use client';

import { useState } from 'react';
import Button from './Button';
import { LiaCutSolid } from 'react-icons/lia';

const Form = () => {
	const [curent, setcurrent] = useState('');
	const handlesummit=(event)=>{
		event.preventDefault();  
	}
	return (
		<section className="flex flex-col p-[2.5rem] lg:p-[5.2rem] justify-center rounded-[12px] bg-white w-full lg:w-[50%]">
			<form onSubmit={handlesummit} className="flex flex-col gap-[1rem]">
				<div className="form-group w-full">
					<input 
						type="text"
						placeholder="Paste your URL"
					     value=''
						className="input rounded-[6px] border-primary border w-full py-[0.3rem] px-[0.75rem]"
					/>
				</div>
				<div className="dropdown flex gap-[0.7rem] justify-between relative">
					<select className="input text-primary h-[3.4375rem]">
						<option defaultValue="Custom domain">
							Choose Domain
						</option>
					</select>
					<input
						type="text"
						className="input"
						placeholder="Type Alias here"
						value=""
					/>
				</div>
				<Button className="flex justify-center items-center">
					Trim Url <LiaCutSolid />
				</Button>
			</form>
			<p className="text-[0.875rem] text-primary mt-[0.7rem]">
				By clicking TrimURL, I agree to the Terms of Service, Privacy
				Policy and Use of Cookies.
			</p>
		</section>
	);
};

export default Form;
