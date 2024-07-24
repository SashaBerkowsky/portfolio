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
		description: {
			es: "Hola! Me llamo Sasha, soy un analista en sistemas certificado y estudiante de ciencias de la computación orgullosamente argentino, desarrollador full stack con más de 3 años de experiencia desarrollando software. Proactivo y detallista con gran habilidad puesta a prueba trabajando efectivamente en equipos pequeños y diversos. Actualmente busco avanzar en mis habilidades tecnicas y contribuir en un entorno colaborativo dentro de organizaciones de mayor nivel",
			en: "Hi! My name is Sasha, I'm a proudly argentinan certified systems analyst and computer science student, dedicated full stack developer with over 3 years of experience in software development. Proactive and detail-oriented with a proven ability to work effectively in small, diverse teams. Currently seeking to advance my technical skills and contribute to a collaborative, cross-functional environment within a larger organization.",
		},
	};
	return (
		<Section>
			<div className='font-title text-xl text-center'>
				{content.title[language]}
			</div>
			<div className='text-center md:text-left font-par mt-2'>
				{content.description[language]}
			</div>
		</Section>
	);
}
