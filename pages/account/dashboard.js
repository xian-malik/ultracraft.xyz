// import { useSession, getSession } from 'next-auth/client'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import config from '../../config';
import Link from 'next/link'
import Image from 'next/image'
import { VerifyUser } from '../../auth';
import { Header, Footer } from '../../components'
import { TimeStamp } from '../../components/modules';
import SidebarAccount from '../../components/sidebar/_account'

export default function Dashboard() {
	const [ data, setData ] = useState({});

	useEffect( () => {
		const { USER, TOKEN } = VerifyUser();
		const url = config.API_URL + '/users/id/' + ( USER ? USER.toLowerCase() : '' );

		fetch(url, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json; charset=utf-8',
				'Access-Control-Allow-Headers': '*',
				'x-access-token': TOKEN
			},
			method: "GET"
		})
		.then( res => res.json() )
		.then( res => res.user ? setData( res.user ) : window.location( '/u/login' ) )
		.catch(res => console.error(res) );
	}, []);

	return (
		<main className="overflow-hidden">
			<Head>
				<title>User Dashboard</title>	
			</Head>
			<div className="page-wrapper">
				<Header />
				<section className="page-title">
					<picture className="image-bg">
						<source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_480,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_nether.jp2" media="(max-width: 480px)" />
						<source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_768,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_nether.jp2" media="(max-width: 768px)" />
						<source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_nether.jp2" media="(max-width: 1080px)" />
						<img layout="fill" alt="Nether" src="https://res.cloudinary.com/xianmalik/image/upload/c_fill,f_auto,q_auto/v1589143340/UltraCraft/uc_nether.jpg" className="image-bg" />
					</picture>
					<div className="container">
					<div className="row">
						<div className="col-12">
						<h3 className="mb-0">Profile</h3>
						<h1>Account SettingS</h1>
						</div>
					</div>
					</div>
				</section>
				<section className="w-screen justify-center px-8">
					<article className="w-full max-w-screen-xl mx-auto grid grid-cols-4 gap-8">
						<div className="relative bg-uc-secondary rounded-md block w-full max-w-screen-xl -mt-10 col-span-4">
							<h1 className="text-4xl py-6 px-6">Account Details</h1>
						</div>

						<div className="w-full col-span-1">
							<SidebarAccount />
						</div>

						<div className="relative mx-auto bg-uc-secondary rounded-md col-span-3 w-full">
							<div className="flex items-start py-6 px-10 border-b border-uc-gray">
								<div className="col-span-1">
									<Image src={"https://cravatar.eu/helmhead/" + data.username + "/190.png"}
										height='100' width='100' alt={ data.username } />
								</div>
								<div className="col-span-2 ml-4 pt-2">
									<div className="grid grid-flow-col mb-1">
										<h4 className="max-w-max mb-0">{ data.username || 'GUEST #' + Date.now() }</h4>
										<span className='px-3 font-bold uppercase hover-online relative overflow-visible cursor-pointer'>
											<span className={ (data.isLogged ? 'bg-green-500' : 'bg-uc-gray') + ' inline-block w-2 h-2 rounded mr-1 align-middle' }></span>
											<div className="block absolute -mt-1 text-xsm
												-top-2 left-0 bg-black text-white rounded min-w-max w-auto py-0.5 px-2 right-0
												opacity-0 transition-opacity items-center">
												{data.isLogged ? 'online' : 'Last Login ' + TimeStamp( data.lastlogin )}
												<svg className="absolute text-black h-2 left-0 ml-3 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
											</div>
										</span>
									</div>
									<div className="text-base">
										{ ['Admin', 'MVP', 'YouTuber'].map( ( _rank, _index ) => {
											return <span className='border border-uc-primary rounded-full mr-2 py-0.5 px-2 text-xsx font-bold'
												key={ _index }>{ _rank }</span>
										} ) }
									</div>
								</div>
							</div>
							<Link href="/u/settings/account" passHref>
								<a className="text-uc-primary text-xs absolute top-2 right-2">Edit Profile</a>
							</Link>
						</div>

						<div>
							Birthday	Oct 24, 1995 (Age: 25)
							Location	Bangladesh
							Gender	Male
						</div>
					</article>
				</section>
				{/* Sections End */}
			</div>
		</main>
	)
}
