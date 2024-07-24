type ExperienceItemProps = {
	work: string;
	role: string;
	description: string;
	finished: boolean;
	period: string;
};

export default function ExperienceItem({
	work,
	role,
	description,
	period,
	finished,
}: ExperienceItemProps) {
	return (
		<div className='flex h-44 gap-3'>
			<div className='relative w-full bg-brightBlue-dark dark:bg-brightWhite-dark rounded-xl shadow-sm shadow-cyan-dark px-4 py-1 text-center'>
				<div className='text-center font-title'>{work}</div>
				<div className='opacity-80 text-xs text-center font-title'>{role}</div>
				<div className='h-3/5 mt-2 text-center text-xs'>{description}</div>
				<div className='opacity-80 text-center text-xs'>{period}</div>
				<div className='absolute top-1 right-1'>
					{finished ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
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
			<div className='w-2 bg-brightBlue-dark dark:bg-brightWhite-dark opacity-60' />
		</div>
	);
}
