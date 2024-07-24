export default function Section({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className='w-full text-brightWhite-light dark:text-black-light bg-backgroundHl-light dark:bg-brightCyan-dark p-5 rounded shadow-sm shadow-black-light dark:shadow-brightWhite-dark cursor-default'>
			{children}
		</div>
	);
}
