import React, { useContext } from "react";
import { LanguageContext } from "../../context";
import { Content } from "../../types";
import { Section, Title } from "../";
import ExperienceItem from "./components/ExperienceItem";

export default function Experience() {
	const { language } = useContext(LanguageContext);
	const content: Content = {
		title: {
			en: "Experience",
			es: "Experiencia",
		},
	};
	const experience: Content[] = [
		{
			title: {
				en: "EspaciosYA!",
				es: "EspaciosYA!",
			},
			role: {
				en: "Full stack dev, Freelance",
				es: "Full stack dev, Freelance",
			},
			description: {
				en: "Designed, implemented and managed a power web app with thousands of users, serving as a plataform that transforms the real estate sector into a collaborative ecosystem without intermediaries. ",
				es: "Participé en el desarrollo y mantenimiento de una power web app con miles de usuarios la cual sirve como plataforma que transforma el sector inmobiliario en un ecosistema colaborativo sin intermediarios.",
			},
			period: { en: "2023-2024", es: "2023-2024" },
		},
		{
			title: {
				en: "Overtime Basquet",
				es: "Overtime Basquet",
			},
			role: {
				en: "Full stack dev, Freelance",
				es: "Full stack dev, Freelance",
			},
			description: {
				en: "Designed and implemented a stats website for an amateur basketball tournament featuring more than fourty teams and over six hundred played matches.",
				es: "Participé en el diseño e implementación de una página de estadísticas para un torneo amateur de basquet donde participan más de cuarenta equipos con más de seiscientos partidos jugados",
			},
			period: { en: "2022-2023", es: "2022-2023" },
		},
		{
			title: {
				en: "EspaciosYA!",
				es: "EspaciosYA!",
			},
			role: {
				en: "Full stack dev",
				es: "Full stack dev",
			},
			description: {
				en: "Designed, implemented and managed a power web app with thousands of users, serving as a plataform that transforms the real estate sector into a collaborative ecosystem without intermediaries. ",
				es: "Participé en el desarrollo y mantenimiento de una power web app con miles de usuarios la cual sirve como plataforma que transforma el sector inmobiliario en un ecosistema colaborativo sin intermediarios.",
			},
			period: { en: "2021-2022", es: "2021-2022" },
		},
	];

	return (
		<Section>
			<Title title={content.title[language]} />
			<div className='flex flex-col gap-3 mt-4'>
				{experience.map((job, i) => (
					<ExperienceItem
						key={`experience-item-${job.title[language]}-${i}`}
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
