import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sasha Berkowsky",
	description: "My little corner on the Internet",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='dark'>
			<body
				className={`${inter.className} bg-background-light dark:bg-background-dark`}
			>
				<main className='flex min-h-screen flex-col w-full mx-auto md:w-5/6 lg:w-3/4 2xl:w-1/2 p-8 bg-background-light dark:bg-background-dark'>
					{children}
				</main>
			</body>
		</html>
	);
}
