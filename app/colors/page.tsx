"use client";
import React, { useState, useEffect } from "react";
export default function Page() {
	const colors = [
		"black",
		"blue",
		"cyan",
		"green",
		"red",
		"purple",
		"white",
		"yellow",
	];

	const colorsCap = [
		"Black",
		"Blue",
		"Cyan",
		"Green",
		"Red",
		"Purple",
		"White",
		"Yellow",
	];

	return (
		<div className='w-full'>
			<div className='hidden bg-black-light' />
			<div className='hidden bg-blue-light' />
			<div className='hidden bg-cyan-light' />
			<div className='hidden bg-green-light' />
			<div className='hidden bg-red-light' />
			<div className='hidden bg-purple-light' />
			<div className='hidden bg-white-light' />
			<div className='hidden bg-yellow-light' />

			<div className='hidden bg-black-dark' />
			<div className='hidden bg-blue-dark' />
			<div className='hidden bg-cyan-dark' />
			<div className='hidden bg-green-dark' />
			<div className='hidden bg-red-dark' />
			<div className='hidden bg-purple-dark' />
			<div className='hidden bg-white-dark' />
			<div className='hidden bg-yellow-dark' />

			<div className='hidden bg-brightBlack-light' />
			<div className='hidden bg-brightBlue-light' />
			<div className='hidden bg-brightCyan-light' />
			<div className='hidden bg-brightGreen-light' />
			<div className='hidden bg-brightRed-light' />
			<div className='hidden bg-brightPurple-light' />
			<div className='hidden bg-brightWhite-light' />
			<div className='hidden bg-brightYellow-light' />

			<div className='hidden bg-brightBlack-dark' />
			<div className='hidden bg-brightBlue-dark' />
			<div className='hidden bg-brightCyan-dark' />
			<div className='hidden bg-brightGreen-dark' />
			<div className='hidden bg-brightRed-dark' />
			<div className='hidden bg-brightPurple-dark' />
			<div className='hidden bg-brightWhite-dark' />
			<div className='hidden bg-brightYellow-dark' />

			{colors.map((color) => (
				<div key={color} className='flex w-full h-14 text-center'>
					<div className={`bg-${color}-light w-full text-foreground-light`}>
						{color} light
					</div>
					<div className={`bg-${color}-dark w-full text-foreground-dark`}>
						{color} dark
					</div>
				</div>
			))}
			<div className='my-5'></div>
			{colorsCap.map((color) => (
				<div key={color} className='flex w-full h-14 text-center'>
					<div
						className={`bg-bright${color}-light w-full text-foreground-light`}
					>
						bright {color.toLowerCase()} light
					</div>
					<div className={`bg-bright${color}-dark w-full text-foreground-dark`}>
						bright {color.toLowerCase()} dark
					</div>
				</div>
			))}
		</div>
	);
}
