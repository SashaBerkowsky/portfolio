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
				en: "Designed, implemented and managed a power web app with thousands of users, serving as a plataform that transforms the real estate sector into a collaborative ecosystem without intermediaries. ",
				es: "Participé en el desarrollo y mantenimiento de una power web app con miles de usuarios la cual sirve como plataforma que transforma el sector inmobiliario en un ecosistema colaborativo sin intermediarios.",
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
				en: "Designed and implemented a stats website for an amateur basketball tournament featuring more than fourty teams and over six hundred played matches.",
				es: "Participé en el diseño e implementación de una página de estadísticas para un torneo amateur de basquet donde participan más de cuarenta equipos con más de seiscientos partidos jugados",
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
				en: "Designed, implemented and managed a power web app with thousands of users, serving as a plataform that transforms the real estate sector into a collaborative ecosystem without intermediaries. ",
				es: "Participé en el desarrollo y mantenimiento de una power web app con miles de usuarios la cual sirve como plataforma que transforma el sector inmobiliario en un ecosistema colaborativo sin intermediarios.",
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
						key={job.title[language]}
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
