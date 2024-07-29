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
				{children}
			</body>
		</html>
	);
}
