export default function Section({
	children,
	className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
	return (
		<div
			className={`w-full text-brightWhite-light dark:text-black-light bg-backgroundHl-light dark:bg-brightCyan-dark p-4 rounded shadow-sm shadow-black-light dark:shadow-brightWhite-dark cursor-default ${className}`}
		>
			{children}
		</div>
	);
}
