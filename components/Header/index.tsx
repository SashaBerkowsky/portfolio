import React, { useState, useEffect } from "react";
import Image from "next/image";
import profilePic from "../../public/profilePic.jpeg";

export default function Header() {
	const [catchPhrase, setCatchPhrase] = useState("");

	useEffect(() => {
		setCatchPhrase(getRandomCatchPhrase());
	}, []);

	function getRandomCatchPhrase(): string {
		const CATCHPHRASES: string[] = [
			"Ahora libre de gluten!",
			"si, hay muchas frases",
			"We do what we must, because we can",
			"F5",
			"The cake is a lie",
			"Mañana es mejor!",
			"To organice the worlds information",
			"Ads free!",
			"Just keep scrolling",
			"git gud",
			"rewrite it in rust",
			"undefined (intended)",
			"Turing complete",
		];

		return CATCHPHRASES[Math.floor(Math.random() * CATCHPHRASES.length)];
	}

	return (
		<div>
			<Image
				className='rounded-full w-3/5 mx-auto'
				src={profilePic}
				alt='profile pic'
			/>
			<div className='py-6 text-center'>
				<div className='font-title text-2xl'>Sasha Berkowsky</div>
				<div className='text-sm opacity-90 dark:opacity-70'>
					computer scientist wannabe
				</div>
				<div className='italic text-sm text-ital pt-6'>
					{catchPhrase ? `-"${catchPhrase}"` : "..."}
				</div>
			</div>
		</div>
	);
}
