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

		let url = config.API_URL + '/users/id/' + USER.toLowerCase();

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
			console.log( res );
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
							<span className={(data.isLogged ? 'text-green-500 border-green-500' : 'text-uc-gray border-uc-gray') + ' text-xs font-bold border rounded ml-4 px-2 uppercase'}>
								<span className={
									(data.isLogged ? 'bg-green-500 text-green-500' : 'bg-uc-gray text-uc-gray') + ' inline-block w-2 h-2 rounded mr-1'
								}></span>
								{data.isLogged ? 'online' : 'offline'}
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
