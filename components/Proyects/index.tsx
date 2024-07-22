import React, { useContext } from "react";
import { LanguageContext } from "../../context";
import { Content } from "../../types";
import { Section } from "../";

export default function Proyects() {
	const { language } = useContext(LanguageContext);
	const content: Content = {
		title: {
			en: "Proyects",
			es: "Proyectos",
		},
	};

	return (
		<Section>
			<div className='font-title text-xl'>{content.title[language]}</div>
			<div className='font-par'>test</div>
		</Section>
	);
}
