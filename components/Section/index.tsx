export default function Section({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className='w-full text-foregroundHl-light dark:text-foregroundHl-dark bg-backgroundHl-light dark:bg-backgroundHl-dark p-6 rounded shadow-sm shadow-black-light dark:shadow-black-dark cursor-default'>
			{children}
		</div>
	);
}
