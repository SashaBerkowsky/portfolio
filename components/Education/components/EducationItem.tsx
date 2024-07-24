type ExperienceItemProps = {
	work: string;
	role: string;
	description: string;
	finished: boolean;
	period: string;
};

export default function EducationItem({
	work,
	role,
	description,
	period,
	finished,
}: ExperienceItemProps) {
	return (
		<div className='flex h-44 gap-3 hover:scale-105'>
			<div className='w-2 bg-brightBlue-dark dark:bg-brightWhite-dark opacity-60' />
			<div className='relative w-full bg-brightBlue-dark dark:bg-brightWhite-dark rounded-xl shadow-sm shadow-cyan-dark px-4 py-1 text-center'>
				<div className='text-center font-title'>{work}</div>
				<div className='opacity-60 text-xs text-center font-title'>{role}</div>
				<div className='h-3/5 mt-2 text-center text-xs text-pretty'>
					{description}
				</div>
				<div className='opacity-80 text-center text-xs'>{period}</div>
				<div className='absolute top-1 left-1'>
					{finished ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-5'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
							/>
						</svg>
					)}
				</div>
			</div>
		</div>
	);
}
