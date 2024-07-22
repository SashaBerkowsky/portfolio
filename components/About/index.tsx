import React, { useContext } from "react";
import { LanguageContext } from "../../context";
import { Content } from "../../types";
import { Section } from "../";

export default function About() {
	const { language } = useContext(LanguageContext);
	const content: Content = {
		title: {
			es: "Sobre mí",
			en: "About Me",
		},
	};
	return (
		<Section>
			<div className='font-title text-xl text-center'>
				{content.title[language]}
			</div>
			<div className='font-par'>test about</div>
		</Section>
	);
}
