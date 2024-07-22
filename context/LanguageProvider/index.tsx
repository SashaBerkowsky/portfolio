// I shouldn use this but i didnt want to think
import React, { createContext, useContext, useState } from "react";
import { LanguageContext as LanguageContextType } from "../../types";

export const LanguageContext = createContext<LanguageContextType>({
	language: "en",
	toggleLanguage: () => {},
});

export function LanguageProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [language, setLanguage] = useState("en"); // Initial theme state

	const toggleLanguage = () => {
		setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
	};

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}

export const useLanguage = () => {
	const context = useContext(LanguageContext);

	if (!context) {
		throw new Error("useTheme must be used within a LanguageProvider");
	}

	return context;
};
