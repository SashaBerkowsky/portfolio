"use client";
import React from "react";
import {
	About,
	ContactButton,
	ContactMe,
	DarkModeToggle,
	Education,
	Experience,
	Future,
	Interests,
	Header,
	LanguageToggle,
	Projects,
	Signature,
	Socials,
} from "../components";
import { LanguageProvider } from "../context";

export default function Home() {
	return (
		<LanguageProvider>
			<ContactButton />
			<main className='flex min-h-screen flex-col w-full mx-auto md:w-5/6 lg:w-3/4 2xl:w-1/2 p-4 md:p-8 bg-background-light dark:bg-background-dark'>
				<div className='flex flex-col items-center text-foreground-light dark:text-foreground-dark'>
					<Header />
					<Socials />
					<div className='flex gap-12'>
						<DarkModeToggle />
						<LanguageToggle />
					</div>
				</div>
				<div className='flex flex-col gap-4 md:gap-3 mt-3'>
					<About />
					<div className='gap-3 md:flex'>
						<Experience />
						<div className='my-4 md:hidden md:my-0' />
						<Education />
					</div>
					<Projects />
					<Interests />
					<Future />
				</div>
			</main>
			<footer className='bg-background-dark dark:bg-brightWhite-dark bg-opacity-10 dark:bg-opacity-5 mt-6 py-4'>
				<ContactMe />
				<Signature />
			</footer>
		</LanguageProvider>
	);
}
