export default function Title({ title }: Readonly<{ title: string }>) {
	return (
		<div className='flex justify-center'>
			<div>
				<div className='font-title text-xl'>{title}</div>
				<div className='h-1 w-8 bg-brightWhite-light dark:bg-black-light' />
			</div>
		</div>
	);
}
