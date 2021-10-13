import React from 'react'

export default function Home() {
	return (
		<div className="">
			<div className="p-8 mt-4">
				<div className="mt-5">
					<img className="profile-pic w-36 h-36 rounded-lg mx-auto border-solid border-red-400" src="swithin.png" alt="" width="384" height="512" />
				</div>
				<div className="mt-2 text-center text-white text-lg">
					<a href="https://instagram.com/swithinn_" target="_blank" rel="noopener noreferrer">@swithinn_</a>
				</div> 
			</div>

			<div className="ml-5 mr-5 lg:ml-60 lg:mr-60 mt-4">
				<a href="https://swithinokyere.netlify.app" target="_blank" rel="noreferrer">
					<button className="h1 w-full h-14 mb-4 font-semibold highlight border-2 border-white" type="button">🌍 Check Out My Portfolio</button>
				</a>
				<a href="https://www.linkedin.com/in/swithin-annor-okyere/" target="_blank" rel="noreferrer">
					<button className="h1 w-full h-14 mb-4 font-semibold highlight border-2 border-white" type="button">👫 Connect On LinkedIn</button>
				</a>
				<a href="https://www.buymeacoffee.com/swithin" target="_blank" rel="noreferrer">
					<button className="h1 w-full h-14 mb-4 font-semibold highlight border-2 border-white" type="button">☕️ Buy Me A Coffee</button>
				</a>
				<a href="mailto:jayswithin@gmail.com" target="_blank" rel="noreferrer">
					<button className="h1 w-full h-14 mb-4 font-semibold highlight border-2 border-white" type="button">✉️ Contact Me</button>
				</a>
			</div>

			<div className="text-center mt-6 mb-24">
				<a className="btn btn-outline-primary mr-2 rounded-md" href="https://twitter.com/Swithinnn" target="_blank" rel="noreferrer"><i className="bx bxl-twitter text-4xl px-3"></i></a>
				<a className="btn btn-outline-primary ml-2 rounded-md" href="https://github.com/JaySwithin" target="_blank" rel="noreferrer"><i className="bx bxl-github text-4xl px-3"></i></a>
			</div>
		</div>
	)
}