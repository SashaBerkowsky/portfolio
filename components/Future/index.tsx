import React, { useContext } from "react";
import { LanguageContext } from "../../context";
import { Content } from "../../types";
import { Section, Title } from "../";

export default function Future() {
	const { language } = useContext(LanguageContext);
	const content: Content = {
		title: {
			en: "Future",
			es: "Futuro",
		},
		future: {
			en: "I think that my biggest influence in the tech world is George Hotz, even if I don't necessarily agree with all of his takes, he has managed to put into words a lot of different doubts and frustrations that I had about the world of software development and its use. I'm strongly against the role of programmer that puts it in a place of translator of business requirements into code, my main aspiration as a professional and what I believe that a programmer should be centers around resolving in a creative manner really complex problems with a positive impact in my country or in my community either in the field of science that or in projects that I really believe in and I'm passionate about.",
			es: "Creo que mi mayor influencia en el mundo de la tecnología es George Hotz, si bien no estoy de acuerdo con todo lo que dice, logró poner en palabras distintas dudas y frustraciones que tenía en su momento sobre el mundo del desarrollo de software y el uso del mismo. Estoy fuertemente en contra de ver al programador como un simple traductor de requerimientos de negocio a código, mi principal aspiración profesional y lo que yo creo que debería ser un programador se centra en resolver de forma creativa problemas realmente complejos de impacto positivo en mi país o en mi comunidad ya sea en el campo de la ciencia o en proyectos en los que realmente crea y me apasionen.",
		},
	};

	return (
		<Section>
			<Title title={content.title[language]} />
			<div className='font-par text-center md:text-left mt-4'>
				{content.future[language]}
			</div>
		</Section>
	);
}
