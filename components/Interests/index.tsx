import React, { useContext, lazy, Suspense } from "react";
import { LanguageContext } from "../../context";
import { Content } from "../../types";
import { Section } from "../";
import ThreeModel from "./components/ThreeModel";

function LoadingScreen() {
	return (
		<svg
			className='w-8 h-8 text-background-light animate-spin mx-auto'
			viewBox='0 0 64 64'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
		>
			<path
				d='M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z'
				stroke='currentColor'
				stroke-width='5'
				stroke-linecap='round'
				stroke-linejoin='round'
			></path>
			<path
				d='M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762'
				stroke='currentColor'
				stroke-width='5'
				stroke-linecap='round'
				stroke-linejoin='round'
				className='text-background-dark'
			></path>
		</svg>
	);
}

export default function Interests() {
	const { language } = useContext(LanguageContext);
	const content: Content = {
		title: {
			en: "Interests",
			es: "Intereses",
		},
	};

	return (
		<Section className='min-h-[550px] md:min-h-0'>
			<div className='font-title text-xl text-center'>
				{content.title[language]}
			</div>
			<div className='md:flex h-[400px]'>
				<div className='flex w-full py-5 '>
					<div className='flex w-full h-10 rounded-md bg-brightWhite-dark px-2 '>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-6 cursor-pointer my-auto'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15.75 19.5 8.25 12l7.5-7.5'
							/>
						</svg>
						<div className='flex w-full font-title overflow-scroll divide-x-2'>
							<div className='text-nowrap px-2 my-auto opacity-70'>
								Custom Keyboards
							</div>
							<div className='px-2 my-auto'>Music</div>
							<div className='px-2 my-auto'>Games</div>
							<div className='px-2 my-auto'>Baking</div>
						</div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-6 cursor-pointer my-auto'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='m8.25 4.5 7.5 7.5-7.5 7.5'
							/>
						</svg>
					</div>
				</div>
				<Suspense fallback={<LoadingScreen />}>
					{<ThreeModel /> || <LoadingScreen />}
				</Suspense>
			</div>
		</Section>
	);
}
