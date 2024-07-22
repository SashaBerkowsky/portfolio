import React, { useContext } from "react";
import { LanguageContext } from "../../context";
import { Content } from "../../types";
import { Section } from "../";

export default function Education() {
	const { language } = useContext(LanguageContext);
	const content: Content = {
		title: {
			en: "Education",
			es: "Educación",
		},
	};

	return (
		<Section>
			<div className='font-title text-xl'>{content.title[language]}</div>
			<div className='font-par'>test</div>
		</Section>
	);
}
