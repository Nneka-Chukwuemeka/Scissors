import Image from 'next/image';
import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const AboutCard = ({ type }) => {
	let heading,
		headingTwo,
		span,
		desc,
		icon = '';
	const handleType = (value) => {
		if (value.toLowerCase() === 'one stop') {
			heading = ' One Stop';
			headingTwo = 'Four';
			span = 'Possibilites';
		}
		if (value.toLowerCase() === '3m') {
			heading = '3M';
			headingTwo = '';
			span = '';
			desc = 'Active users';
		}
		if (value.toLowerCase() === '60m') {
			heading = '60M';
			desc = 'Links & QR codes created';
		}
		if (value.toLowerCase() === '1b') {
			heading = '1B';
			desc = 'Clicked & Scanned Connection';
		}
		if (value.toLowerCase() === '300k') {
			heading = '300K';
			desc = 'App Integrations';
		}
		if (value.toLowerCase() === 'why') {
			heading = 'Why Choose';
			span = 'Scissors';
			desc =
				'Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. ';
		}
		if (value.toLowerCase() === 'url') {
			heading = 'URL Shortening';
			desc =
				'Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.';
			icon = '/assets/link-2.svg';
		}
		if (value.toLowerCase() === 'custom') {
			heading = 'Custom URLs';
			desc =
				'With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.';
			icon = '/assets/edit.svg';
		}
		if (value.toLowerCase() === 'qr') {
			heading = 'QR Codes';
			desc =
				'Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.';
			icon = '/assets/grid.svg';
		}
		if (value.toLowerCase() === 'data') {
			heading = 'Data Analytics';
			desc =
				'Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.';
			icon = '/assets/activity.svg';
		} 
	};
	handleType(type);

	let style = 'border-l-2 border-border pl-1 text-2rem';
		useEffect(() => {
		  AOS.init({ duration: 1000 });
		}, []);
	return (
		<section
			className={
				type.toLowerCase() === '3m' ||
				type.toLowerCase() === '60m' ||
				type.toLowerCase() === '1b' ||
				type.toLowerCase() === '300k'
					? 'w-1/2 lg:w-full'
					: ''
			}>
			{icon === '' ? (
				<>
					<h3
						className={`
							${
								type.toLowerCase() === 'one stop'
									? 'text-[#141414] text-[2.5rem]'
									: 'text-[2rem]'
							} ${type === 'why' ? style : ''}
						`}>
						{heading}
						{type.toLowerCase() === 'why' ? (
							<span className="text-primary"> {span}</span>
						) : (
							''
						)}
					</h3>
					<h3 className="text-[#141414] text-[2.5rem]">
						{headingTwo}
						{type.toLowerCase() === 'one stop' ? (
							<span className="text-primary"> {span}</span>
						) : (
							''
						)}
					</h3>
					<p>{desc}</p>
				</>
			) : (
				<>
					<div className=" rounded-[56px] flex flex-shrink-0  justify-center bg-icon-color max-w-[3.5rem] max-h-[3.5rem] h-full  w-full p-1">
						<Image
							src={icon}
							width={24}
							height={24}
							alt={`${heading} icon`}
							className="object-contain"
						/>
					</div>
					<h3
						className={`
							${
								type.toLowerCase() === 'one stop'
									? 'text-[#141414] text-[2.5rem]'
									: 'text-[2rem]'
							} ${type === 'why' ? style : ''}
						`}>
						{' '}
						{heading}
					</h3>
					<h3>
						{headingTwo} <span className="text-">{span}</span>
					</h3>
					<p className="text-[1rem]">{desc}</p>
				</>
			)}
		</section>
	);
};
export default AboutCard;
