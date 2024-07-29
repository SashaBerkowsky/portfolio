"use client";
import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../context";
import { Content } from "../../types";
import { Section, Title } from "..";
import Image from "next/image";
import espaciosYa from "../../public/proyects/espaciosya.png";
import espaciosYaLogo from "../../public/proyects/espaciosya-logo.png";
import overtime from "../../public/proyects/overtime.png";
import overtimeLogo from "../../public/proyects/overtime-logo.png";
import github from "../../public/proyects/github.png";

export default function Projects() {
	const ESPACIOSYA_LINK: string = "https://espaciosya.com/";
	const OVERTIME_LINK: string = "https://overtimebasquet.com/";
	const GITHUB_LINK: string = "https://github.com/SashaBerkowsky";

	const carouselRef = useRef<HTMLDivElement>(null);
	const { language } = useContext(LanguageContext);
	const content: Content = {
		title: {
			en: "Projects",
			es: "Proyectos",
		},
		espaciosya: {
			en: "EspaciosYA!",
			es: "EspaciosYA!",
		},
		overtime: {
			en: "Overtime",
			es: "Overtime",
		},
		github: {
			en: "github",
			es: "github",
		},
	};

	const espaciosYaContent: Content = {
		title: {
			en: "EspaciosYA!",
			es: "EspaciosYA!",
		},
		description: {
			en: "A power web app with thousands of users, serving as a plataform that transforms the real estate sector into a collaborative ecosystem without intermediaries.",
			es: "Una power web app con miles de usuarios. Esta es una plataforma que transforma el sector inmobiliario en un ecosistema colaborativo sin intermediarios.",
		},
	};

	const overtimeContent: Content = {
		title: {
			en: "Overtime",
			es: "Overtime",
		},
		description: {
			en: "A stats website for an amateur basketball tournament featuring more than fourty teams and over six hundred played matches.",
			es: "Una página de estadísticas para un torneo amateur de basquet donde participan más de cuarenta equipos con más de seiscientos partidos jugados.",
		},
	};

	const githubContent: Content = {
		title: {
			en: "See more!",
			es: "Más!",
		},
		description: {
			en: "I'm constantly learning and improving as a developer, always willing to try new languages and tecnologies so feel free to check my Github if you want to see what I'm up to!",
			es: "Estoy en constante desarrollo y aprendizaje como desarrollador, siempre dispuesto a probar nuevos lenguajes y tecnologias asi que si queres estar al día con lo que estoy haciendo pasate por mi Github!",
		},
	};

	function redirect(url: string): void {
		window.open(url, "_blank");
	}

	const scrollLeft = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollTo({
				left:
					carouselRef.current.scrollLeft - carouselRef.current.scrollWidth / 3,
				behavior: "smooth",
			});
		}
	};

	const scrollRight = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollTo({
				left:
					carouselRef.current.scrollLeft + carouselRef.current.scrollWidth / 3,
				behavior: "smooth",
			});
		}
	};

	return (
		<Section>
			<div className='flex justify-center gap-3'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-6 cursor-pointer my-auto'
					onClick={scrollLeft}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M15.75 19.5 8.25 12l7.5-7.5'
					/>
				</svg>
				<Title title={content.title[language]} />
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-6 cursor-pointer my-auto'
					onClick={scrollRight}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='m8.25 4.5 7.5 7.5-7.5 7.5'
					/>
				</svg>
			</div>
			<div className='flex gap-2'>
				<div
					className='flex gap-2 w-full overflow-scroll snap-mandatory snap-x mt-4'
					style={{ scrollbarWidth: "none" }}
					ref={carouselRef}
				>
					<div className='md:flex gap-3 flex-shrink-0 w-full snap-start'>
						<Image
							src={espaciosYa}
							alt='espaciosya preview'
							className='w-full md:w-2/3 rounded-lg shadow-sm shadow-black-light'
						/>
						<div className='md:w-1/3 flex flex-col rounded-md gap-1'>
							<div
								className='flex justify-end mt-2 md:mt-0 cursor-pointer'
								onClick={() => redirect(ESPACIOSYA_LINK)}
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
										d='M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
									/>
								</svg>
							</div>

							<div className='flex gap-2 justify-center'>
								<Image
									src={espaciosYaLogo}
									alt='espaciosya logo'
									className='w-5'
								/>
								<div className='text-center text-lg font-title mt-2'>
									{espaciosYaContent.title[language]}
								</div>
							</div>
							<div className='flex gap-2 justify-center italic my-3'>
								<div className='bg-brightBlue-dark dark:bg-brightWhite-dark text-xs rounded-lg px-2 '>
									NodeJs
								</div>
								<div className='bg-brightBlue-dark dark:bg-brightWhite-dark text-xs rounded-lg px-2 '>
									ReactJs
								</div>
								<div className='bg-brightBlue-dark dark:bg-brightWhite-dark text-xs rounded-lg px-2 '>
									Firebase
								</div>
							</div>
							<div className='h-2/3 text-center text-sm text-wrap'>
								{espaciosYaContent.description[language]}
							</div>
						</div>
					</div>
					<div className='md:flex gap-3 flex-shrink-0 w-full snap-start'>
						<Image
							src={overtime}
							alt='overtime preview'
							className='w-full md:w-2/3 rounded-lg shadow-sm shadow-black-light'
						/>
						<div className='flex md:w-1/3 flex-col rounded-md'>
							<div
								className='flex justify-end mt-2 md:mt-0 cursor-pointer'
								onClick={() => redirect(OVERTIME_LINK)}
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
										d='M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
									/>
								</svg>
							</div>
							<div className='flex text-center text-lg font-title justify-center gap-1'>
								<Image
									src={overtimeLogo}
									alt='overtime logo'
									className='w-10'
								/>
								<div className='text-center text-lg font-title mt-1'>
									{overtimeContent.title[language]}
								</div>
							</div>
							<div className='flex gap-2 justify-center italic my-3'>
								<div className='bg-brightBlue-dark dark:bg-brightWhite-dark text-xs rounded-lg px-2 '>
									NextJs
								</div>
								<div className='bg-brightBlue-dark dark:bg-brightWhite-dark text-xs rounded-lg px-2 '>
									Tailwind
								</div>
							</div>
							<div className='text-center text-sm text-wrap'>
								{overtimeContent.description[language]}
							</div>
						</div>
					</div>
					<div className='md:flex gap-3 flex-shrink-0 w-full snap-start'>
						<Image
							src={github}
							alt='github profile preview'
							className='w-full md:w-2/3 rounded-lg shadow-sm shadow-black-light'
						/>
						<div className='flex md:w-1/3 flex-col rounded-md'>
							<div
								className='flex justify-end mt-2 md:mt-0 cursor-pointer'
								onClick={() => redirect(GITHUB_LINK)}
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
										d='M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
									/>
								</svg>
							</div>
							<div className='flex text-center text-lg font-title justify-center gap-1'>
								<svg
									height='32'
									aria-hidden='true'
									viewBox='0 0 16 16'
									version='1.1'
									width='32'
								>
									<path d='M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z'></path>
								</svg>
								<div className='text-center text-lg font-title mt-1'>
									{githubContent.title[language]}
								</div>
							</div>
							<div className='flex flex-wrap gap-2 justify-center italic my-3'>
								<div className='bg-brightBlue-dark dark:bg-brightWhite-dark text-xs rounded-lg px-2 '>
									Java
								</div>
								<div className='bg-brightBlue-dark dark:bg-brightWhite-dark text-xs rounded-lg px-2 '>
									Python
								</div>
								<div className='bg-brightBlue-dark dark:bg-brightWhite-dark text-xs rounded-lg px-2 '>
									Haskell
								</div>
								<div className='bg-brightBlue-dark dark:bg-brightWhite-dark text-xs rounded-lg px-2 '>
									C#
								</div>
								<div className='bg-brightBlue-dark dark:bg-brightWhite-dark text-xs rounded-lg px-2 '>
									Go
								</div>
								<div className='bg-brightBlue-dark dark:bg-brightWhite-dark text-xs rounded-lg px-2 '>
									Bash
								</div>
								<div className='bg-brightBlue-dark dark:bg-brightWhite-dark text-xs rounded-lg px-2 '>
									Lua
								</div>
								<div className='bg-brightBlue-dark dark:bg-brightWhite-dark text-xs rounded-lg px-2 '>
									Latex
								</div>
							</div>
							<div className='text-center text-sm text-wrap'>
								{githubContent.description[language]}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
