import React, { useContext } from "react";
import { LanguageContext } from "../../context";
import { Content } from "../../types";
import { Title } from "../";

export default function ContactMe() {
	const { language } = useContext(LanguageContext);
	const content: Content = {
		title: {
			en: "Contact Me!",
			es: "Contactame!",
		},
	};
	return (
		<div>
			<div className='flex justify-center'>
				<div>
					<div className='font-title text-xl'>{content.title[language]}</div>
					<div className='h-1 w-8 bg-foreground-light dark:bg-foreground-dark' />
				</div>
			</div>
		</div>
	);
}
