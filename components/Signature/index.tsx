import React, { useContext } from "react";
import { LanguageContext } from "../../context";
import { Content } from "../../types";

export default function Signature() {
	const { language } = useContext(LanguageContext);
	const content: Content = {
		designed: {
			en: "Designed and developed by",
			es: "Diseñado e implementado por",
		},
		built: {
			en: "Built with",
			es: "Hecho con",
		},
		hosted: {
			en: "Hosted on",
			es: "Hosteado en",
		},
	};

	return (
		<div className='flex flex-col gap-1 md:gap-0 opacity-80 mt-4 text-xs sm:text-sm text-foreground-light dark:text-foreground-dark'>
			<div className='gap-1 flex flex-wrap justify-center'>
				<div>{content.designed[language]}</div>
				<div className='font-title'>Sasha Berkowsky</div>
			</div>
			<div className='gap-1 flex flex-wrap justify-center '>
				<div>{content.built[language]}</div>
				<div className='font-title'>NextJs, Tailwind & ThreeJs.</div>
				<div>{content.hosted[language]}</div>
				<div className='font-title'>Vercel</div>
			</div>
		</div>
	);
}
