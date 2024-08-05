import React, { useContext } from "react";
import { LanguageContext } from "../../context";
import { Content } from "../../types";
import { Button, Input, Textarea } from "@nextui-org/react";

export default function ContactMe() {
	const { language } = useContext(LanguageContext);
	const content: Content = {
		title: {
			en: "Contact Me!",
			es: "Contactame!",
		},
		emailPlaceholder: {
			en: "Enter your email",
			es: "Ingrese su email",
		},
		subjectLabel: {
			en: "Subject",
			es: "Asunto",
		},
		subjectPlaceholder: {
			en: "Enter subject",
			es: "Ingrese el asunto",
		},
		messagePlaceholder: {
			en: "Enter message",
			es: "Ingrese su mensaje",
		},
		send: {
			en: "Send",
			es: "Enviar",
		},
	};
	return (
		<div className='text-foreground-light dark:text-foreground-dark'>
			<div className='flex justify-center'>
				<div>
					<div className='font-title text-xl'>{content.title[language]}</div>
					<div className='h-1 w-8 bg-foreground-light dark:bg-foreground-dark' />
				</div>
			</div>
			<form className='flex flex-col justify-center w-11/12 md:w-3/4 lg:w-1/2 2xl:w-2/5 mx-auto mt-6'>
				<div className='flex flex-col gap-2 md:gap-3'>
					<div className='flex flex-col gap-2 xl:flex-row'>
						<Input
							type='email'
							label='Email'
							labelPlacement='inside'
							placeholder={content.emailPlaceholder[language]}
							variant='faded'
							color='primary'
						/>
						<Input
							type='email'
							label={content.subjectLabel[language]}
							labelPlacement='inside'
							placeholder={content.subjectPlaceholder[language]}
							variant='faded'
							color='primary'
						/>
					</div>
					<Textarea
						placeholder={content.messagePlaceholder[language]}
						color='primary'
						variant='faded'
					/>
				</div>
				<Button
					color='primary'
					variant='solid'
					className='w-full sm:w-2/3 md:w-2/5 mx-auto my-6'
				>
					{content.send[language]}
				</Button>
			</form>
		</div>
	);
}
