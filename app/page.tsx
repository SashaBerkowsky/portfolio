"use client";
import React from "react";
import {
	About,
	DarkModeToggle,
	Education,
	Experience,
	Future,
	Interests,
	Header,
	LanguageToggle,
	Proyects,
	Socials,
} from "../components";
import { LanguageProvider } from "../context";

export default function Home() {
	return (
		<LanguageProvider>
			<div className='flex flex-col items-center text-foreground-light dark:text-foreground-dark'>
				<Header />
				<Socials />
				<div className='flex gap-12'>
					<DarkModeToggle />
					<LanguageToggle />
				</div>
			</div>
			<div className='flex flex-col gap-2 mt-3'>
				<About />
				<div className='gap-2 md:flex'>
					<Experience />
					<div className='my-2 md:hidden md:my-0' />
					<Education />
				</div>
				<Proyects />
				<Interests />
				<Future />
			</div>
		</LanguageProvider>
	);
}
