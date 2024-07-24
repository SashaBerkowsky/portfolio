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
			<div className='font-par mt-2'>
				Hi! My name is Sasha, {"I'm"} a proudly argentinan based certified
				systems analyst and computer science student, dedicated full stack
				developer with over 3 years of experience in software development.
				Proactive, detail-oriented, and self-taught, with a proven ability to
				work effectively in small, diverse teams. Currently seeking to advance
				my technical skills and contribute to a collaborative, cross-functional
				environment within a larger organization.
			</div>
		</Section>
	);
}
