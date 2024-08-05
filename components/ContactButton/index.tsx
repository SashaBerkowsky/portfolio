"use client";
import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context";
import { Content } from "../../types";
import { Button } from "@nextui-org/react";

export default function ContactButton() {
	const { language } = useContext(LanguageContext);
	const [showBtn, setShowBtn] = useState(true);
	const [clickBtn, setClickBtn] = useState(false);

	const content: Content = {
		contactMe: {
			en: "Contact Me!",
			es: "Contactame!",
		},
	};

	function handleContactMe() {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: "smooth", // This makes the scroll smooth
		});
		setClickBtn(true);
	}

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		const scrollHeight = document.documentElement.scrollHeight;
		const clientHeight = document.documentElement.clientHeight;
		const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

		// Adjust the threshold percentage as needed
		const threshold = 86; // Hide the element when 50% of the page is scrolled

		if (scrollPercentage > threshold) {
			setShowBtn(false);
		}
	};

	// Set up scroll event listener
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		!clickBtn &&
		showBtn && (
			<div className='relative w-full'>
				<div className='fixed w-full flex justify-center bottom-5 z-50 animate-bounce'>
					<Button
						radius='full'
						color='secondary'
						variant='shadow'
						endContent={
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.25}
								stroke='currentColor'
								className='size-4'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3'
								/>
							</svg>
						}
						onClick={handleContactMe}
					>
						{content.contactMe[language]}
					</Button>
				</div>
			</div>
		)
	);
}
