"use client";
import React, { useState, useEffect } from "react";

export default function DarkModeToggle() {
	const [darkMode, setDarkMode] = useState<boolean | undefined>(true);

	function toggleDarkMode(): void {
		const isDarkModeEnabled = checkDarkModeEnabled();
		if (isDarkModeEnabled) {
			document.querySelector("html")?.classList.remove("dark");
		} else {
			document.querySelector("html")?.classList.add("dark");
		}

		setDarkMode(!darkMode);
	}

	function checkDarkModeEnabled(): boolean | undefined {
		return document?.querySelector("html")?.classList?.contains("dark");
	}

	useEffect(() => {
		setDarkMode(true);
	}, []);

	return (
		<div className=''>
			<label className='flex gap-1 items-center cursor-pointer'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-5 top-0'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
					/>
				</svg>
				<div
					className='my-2 relative w-12 h-6 rounded-full shadow-inner bg-white-dark dark:bg-white-light'
					onClick={toggleDarkMode}
				>
					<div
						className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform bg-brightWhite-light dark:bg-black-light ${
							darkMode ? "right-6 translate-x-full" : "left-2 translate-x-0"
						}`}
					/>
				</div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-5 top-3'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z'
					/>
				</svg>
			</label>
		</div>
	);
}
