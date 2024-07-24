export default function Section({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className='w-full text-brightWhite-light dark:text-black-light bg-backgroundHl-light dark:bg-purple-dark p-6 rounded shadow-sm shadow-black-light dark:shadow-brightWhite-dark cursor-default'>
			{children}
		</div>
	);
}
