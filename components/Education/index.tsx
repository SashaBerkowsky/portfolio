import React, { useContext } from "react";
import { LanguageContext } from "../../context";
import { Content } from "../../types";
import { Section } from "../";
import EducationItem from "./components/EducationItem";

export default function Education() {
	const { language } = useContext(LanguageContext);
	const content: Content = {
		title: {
			en: "Education",
			es: "Educación",
		},
	};
	const experience: Content[] = [
		{
			title: {
				en: "Computer Science",
				es: "Ciencias de la Computación",
			},
			role: {
				en: "Bachelor's, University of Buenos Aires",
				es: "Licenciatura, Universidad de Buenos Aires",
			},
			description: {
				en: "As a current computer science student I'm building a solid theoretical and practical foundation in order to pursue scientific research and continue to expand the body of knowledge in the field.",
				es: "Actualmente me encuentro estudiando para obtener una sólida formación teórica y práctica con el fin de dedicarme a la investigación científica para continuar trabajando en ampliar el cuerpo de conocimientos de la disciplina",
			},
			period: { en: "2022-2024", es: "2022-2024" },
		},
		{
			title: {
				en: "Systems Analysis",
				es: "Analista de Sistemas",
			},
			role: {
				en: "Associate Degree, ORT Argentina",
				es: "Título Terciario, ORT Argentina",
			},
			description: {
				en: "I'm Educated to perform professionally as a Developer, Tester, Functional Analyst, Software Architect, Database Administrator, Quality Assurance Specialist, or Systems Auditor.",
				es: "Capacitado para desempeñarme en diferentes roles, tales como Desarrollador, Tester, Analista Funcional, Arquitecto de Software, Administrador de Bases de Datos, Asegurador de Calidad (QA) o Consultor en informática.",
			},
			period: { en: "2020-2022", es: "2020-2022" },
		},
		{
			title: {
				en: "Technical High School",
				es: "Secundario Técnico",
			},
			role: {
				en: "High School Diploma, ORT Argentina",
				es: "Título Secundario, ORT Argentina",
			},
			description: {
				en: "Focused on Computer Science and Digital Media. Because of this I was able to get into programming in a very early age",
				es: "Con orientación en Informática y Medios de Comunicación Digitales. Gracias a esto pude introducirme a la programación desde una muy temprana edad",
			},
			period: { en: "2013-2018", es: "2013-2018" },
		},
	];

	return (
		<Section>
			<div className='font-title text-xl text-center'>
				{content.title[language]}
			</div>
			<div className='flex flex-col gap-3 mt-4'>
				{experience.map((job, i) => (
					<EducationItem
						key={`education-item-${job.title[language]}-${i}`}
						finished={i !== 0}
						work={job.title[language]}
						role={job.role[language]}
						description={job.description[language]}
						period={job.period[language]}
					/>
				))}
			</div>
		</Section>
	);
}
