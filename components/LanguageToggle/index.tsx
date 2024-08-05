import React, { useContext } from "react";
import { LanguageContext } from "../../context";

export default function LanguageToggle() {
	const { language, toggleLanguage } = useContext(LanguageContext);

	return (
		<div className=''>
			<label className='flex gap-1 items-center cursor-pointer'>
				🇦🇷
				<div
					className='my-2 relative w-12 h-6 bg-gray-400 rounded-full shadow-inner bg-white-dark dark:bg-white-light'
					onClick={toggleLanguage}
				>
					<div
						className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform bg-brightWhite-light dark:bg-black-light ${
							language === "en"
								? "right-6 translate-x-full"
								: "left-2 translate-x-0"
						}`}
					/>
				</div>
				🇺🇸
			</label>
		</div>
	);
}
