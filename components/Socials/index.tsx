"use client";
import React, { useContext } from "react";
import { LanguageContext } from "../../context";
import { Section } from "..";

export default function Socials() {
	const LINKEDIN_LINK: string = "https://www.linkedin.com/in/sasha-berkowsky";
	const GITHUB_LINK: string = "https://github.com/SashaBerkowsky";
	const EMAIL_LINK: string = "mailto:snberkowsky@gmail.com";
	const RESUME_LINK_ES: string =
		"https://raw.githubusercontent.com/SashaBerkowsky/cv/main/cv-eng.pdf";
	const RESUME_LINK_EN: string =
		"https://raw.githubusercontent.com/SashaBerkowsky/cv/main/cv-eng.pdf";

	const { language } = useContext(LanguageContext);

	function redirect(url: string): void {
		window.open(url, "_blank");
	}

	return (
		<div className='flex gap-3 justify-center weight-bold my-2 select-none flex-wrap'>
			<div
				className='flex items-center gap-1 text-sm px-2 text-socials bg-linkedin rounded-2xl cursor-pointer hover:animate-bounce'
				onClick={() => redirect(LINKEDIN_LINK)}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					x='0px'
					y='0px'
					width='16'
					height='16'
					viewBox='0 0 192 192'
				>
					{
						<g
							fill='none'
							fillRule='nonzero'
							stroke='none'
							strokeWidth='1'
							strokeLinecap='butt'
							strokeLinejoin='miter'
							strokeMiterlimit='10'
							strokeDasharray=''
							strokeDashoffset='0'
							fontFamily='none'
							fontWeight='none'
							fontSize='none'
							textAnchor='none'
						>
							<path d='M0,192v-192h192v192z' fill='none'></path>
							<g fill='#ffffff'>
								<g id='surface1'>
									<path d='M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z'></path>
								</g>
							</g>
						</g>
					}
				</svg>
				<div>LinkedIn</div>
			</div>
			<div
				className='flex gap-1 text-sm py-1 px-2 bg-github rounded-2xl cursor-pointer items-center hover:animate-bounce'
				onClick={() => redirect(GITHUB_LINK)}
			>
				<svg
					role='img'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 256 256'
					width='16px'
					height='16px'
				>
					<path
						fill='#ffffff'
						d='M212.62 75.17A63.7 63.7 0 0 0 206.39 26A12 12 0 0 0 196 20a63.71 63.71 0 0 0-50 24h-20a63.71 63.71 0 0 0-50-24a12 12 0 0 0-10.39 6a63.7 63.7 0 0 0-6.23 49.17A61.5 61.5 0 0 0 52 104v8a60.1 60.1 0 0 0 45.76 58.28A43.66 43.66 0 0 0 92 192v4H76a20 20 0 0 1-20-20a44.05 44.05 0 0 0-44-44a12 12 0 0 0 0 24a20 20 0 0 1 20 20a44.05 44.05 0 0 0 44 44h16v12a12 12 0 0 0 24 0v-40a20 20 0 0 1 40 0v40a12 12 0 0 0 24 0v-40a43.66 43.66 0 0 0-5.76-21.72A60.1 60.1 0 0 0 220 112v-8a61.5 61.5 0 0 0-7.38-28.83M196 112a36 36 0 0 1-36 36h-48a36 36 0 0 1-36-36v-8a37.87 37.87 0 0 1 6.13-20.12a11.65 11.65 0 0 0 1.58-11.49a39.9 39.9 0 0 1-.4-27.72a39.87 39.87 0 0 1 26.41 17.8a12 12 0 0 0 10.1 5.53h32.35a12 12 0 0 0 10.11-5.53a39.84 39.84 0 0 1 26.41-17.8a39.9 39.9 0 0 1-.4 27.72a12 12 0 0 0 1.61 11.53A37.85 37.85 0 0 1 196 104Z'
					/>
				</svg>
				<div className='text-socials'>Github</div>
			</div>
			<div
				className='flex gap-1 text-sm py-1 px-2 bg-red-dark text-socials rounded-2xl cursor-pointer items-center hover:animate-bounce'
				onClick={() => redirect(EMAIL_LINK)}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-5'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
					/>
				</svg>

				<div>Email</div>
			</div>
			<div
				className='flex gap-1 text-sm px-2 py-1 bg-cyan-light rounded-2xl items-center cursor-pointer hover:animate-bounce'
				onClick={() =>
					redirect(language === "en" ? RESUME_LINK_EN : RESUME_LINK_ES)
				}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-5 text-socials'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
					/>
				</svg>

				<div className='text-socials'>Resume</div>
			</div>
		</div>
	);
}
