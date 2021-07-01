// import { useSession, getSession } from 'next-auth/client'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Header, Footer } from '../../components'
import config from '../../config';

export default function Login() {
	const [ data, setData ] = useState({});

	useEffect( () => {	
		const USER = localStorage.getItem('USERNAME');
		const TOKEN = localStorage.getItem('TOKEN');

		if ( ! USER || ! TOKEN ) {
			window.location = '/u/login'
		}

		let url = config.API_URL + '/users/id/' + ( USER ? USER.toLowerCase() : '' );

		fetch(url, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json; charset=utf-8',
				'Access-Control-Allow-Headers': '*',
				'x-access-token': TOKEN
			},
			method: "GET"
		})
		.then( res => {
			return res.json()
		})
		.then( res => {
			setData( res.user );
		})
		.catch(function(res){ console.log(res) });
	}, []);

	return (
		<main>
			<Head>
				<title>User Dashboard</title>	
			</Head>
			<div className="page-wrapper">
				<Header />
				<section className="h-screen w-screen grid items-center justify-center grid-cols-1">
					<article className="mx-auto bg-uc-secondary rounded-md p-8 block w-full max-w-screen-lg px-4">
						<h2 className="text-4xl mb-12">Profile</h2>
						<h4 className="">
							{ data.username || '' }
							<span className='p-2 px-3 font-bold uppercase hover-online relative overflow-visible cursor-pointer'>
								<span className={ (data.isLogged ? 'bg-green-500' : 'bg-uc-gray') + ' inline-block w-2 h-2 rounded mr-1 align-middle' }></span>
								<div className="block absolute -mt-1 text-xsm top-0 left-0 bg-black text-white rounded h-5 w-20 py-0.5 px-2 right-0 bottom-full opacity-0 transition-opacity items-center">
									{data.isLogged ? 'online' : 'offline'}
									<svg className="absolute text-black h-2 left-0 ml-3 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
								</div>
							</span>
						</h4>
						<p>
							<span className="text-bold">Cordinates:</span> X: { data.x }, Y: { data.y }, Z: { data.z }
						</p>
					</article>
				</section>

				{/* Sections End */}
			</div>
		</main>
	)
}
