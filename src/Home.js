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

			<div className="lg:ml-60 mt-8 lg:mr-60">
				<button className="h1 w-full h-14 mb-6 font-semibold highlight border-2 border-white" type="button">Check Out My Portfolio</button>
				<button className="h1 w-full h-14 mb-6 font-semibold highlight border-2 border-white" type="button">Buy Me A Coffee</button>
				<button className="h1 w-full h-14 mb-6 font-semibold highlight border-2 border-white" type="button">Contact Me</button>
			</div>
		</div>
	)
}