import React, { useContext } from "react";
import { LanguageContext } from "../../context";
import { Content } from "../../types";
import { Section } from "../";

export default function Experience() {
	const { language } = useContext(LanguageContext);
	const content: Content = {
		title: {
			en: "Experience",
			es: "Experiencia",
		},
	};
	return (
		<Section>
			<div className='font-title text-xl'>{content.title[language]}</div>
			<div className='font-par'>test</div>
		</Section>
	);
}
