import React from 'react'

export default function Home() {
	return (
		<div className="">
			<div className="p-8">
				<div className="mt-5">
					<img className="profile-pic w-36 h-36 rounded-lg mx-auto border-solid border-red-400" src="swithin.png" alt="" width="384" height="512" />
				</div>
				<div className="mt-2 text-center text-white text-lg">
					<a href="https://instagram.com/swithinn_" target="_blank" rel="noopener noreferrer">@swithinn_</a>
				</div> 
			</div>

			<div className="ml-5 mr-5 lg:ml-60 lg:mr-60 mt-8">
				<a href="https://swithinokyere.netlify.app">
					<button className="h1 w-full h-14 mb-6 font-semibold highlight border-2 border-white" type="button">Check Out My Portfolio</button>
				</a>
				<a href="https://www.buymeacoffee.com/swithin">
					<button className="h1 w-full h-14 mb-6 font-semibold highlight border-2 border-white" type="button">Buy Me A Coffee</button>
				</a>
				<a href="mailto:jayswithin@gmail.com">
					<button className="h1 w-full h-14 mb-6 font-semibold highlight border-2 border-white" type="button">Contact Me</button>
				</a>
			</div>

			<div className="text-center">
				<a className="btn btn-outline-primary mr-2" href="https://gmail.com"><i className="bx bxl-twitter text-4xl px-3"></i></a>
				<a className="btn btn-outline-primary ml-2" href="https://github.com/JaySwithin"><i className="bx bxl-github text-4xl px-3"></i></a>
			</div>
		</div>
	)
}