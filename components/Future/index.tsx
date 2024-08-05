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
			en: "I'm strongly against the role of programmer that puts it in a place of translator of business requirements into code, my main aspiration as a professional and what I believe that a programmer should be centers around solving really complex problems in a creative manner with a positive impact in my country or in my community either in the field of science or in projects that I really believe in and I'm passionate about.",
			es: "Estoy fuertemente en contra de ver al programador como un simple traductor de requerimientos de negocio a código, mi principal aspiración profesional y lo que yo creo que debería ser un programador se centra en resolver de forma creativa problemas realmente complejos de impacto positivo en mi país o en mi comunidad ya sea en el campo de la ciencia o en proyectos en los que realmente crea y me apasionen.",
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
