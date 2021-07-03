// import { useSession, getSession } from 'next-auth/client'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Header, Footer } from '../../components'
import config from '../../config';
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { VerifyUser } from '../../auth';
import { TimeStamp } from '../../components/modules';

export default function Profile() {
	const [ data, setData ] = useState({});
	const router = useRouter()
	const { username } = router.query

	useEffect( () => {
		const url = `${ config.API_URL }/users/public/${ username }`

		if ( username ) {
			fetch(url, {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json; charset=utf-8',
					'Access-Control-Allow-Headers': '*',
				},
				method: "GET"
			})
			.then( res => res.json() )
			.then( res => res.user ? setData( res.user ) : window.location( '/u/login' ) )
			.catch(res => console.error(res) )
		}

	}, [username]);

	return (
		<main className="overflow-hidden">
			<Head>
				<title>User Dashboard</title>	
			</Head>
			<div className="page-wrapper">
				<Header />
				<section className="grid items-center text-center pt-44 pb-40 text-uc-secondary">
					<picture className="image-bg">
						<source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_480,h_768,c_fill,f_auto,q_auto/e_blur:800/v1589059497/UltraCraft/home_background.webp" media="(max-width: 480px)" />
						<source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_768,h_768,c_fill,f_auto,q_auto/e_blur:800/v1589059497/UltraCraft/home_background.webp" media="(max-width: 768px)" />
						<source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_768,c_fill,f_auto,q_auto/e_blur:800/v1589059497/UltraCraft/home_background.webp" media="(max-width: 1080px)" />
						<img layout="fill" alt="Nether" src="https://res.cloudinary.com/xianmalik/image/upload/c_fill,f_auto,q_auto/e_blur:800/v1589143340/UltraCraft/home_background.webp" className="image-bg" />
					</picture>
					<div className="w-full">
						<h3 className="m-0 text-subhead font-sans uppercase">Ultracraft</h3>
						<h1 className="text-uc-gold leading text-pagehead text-7xl text-shadow-md">Member ProfilE</h1>
					</div>
				</section>
				<section className="w-screen grid ijustify-center grid-cols-1 px-8 -mt-16">
					<article className="relative mx-auto bg-uc-secondary rounded-md block w-full max-w-screen-xl">
						<div className="flex items-start py-6 px-10 border-b border-uc-gray">
							<div className="col-span-1 border border-uc-gray rounded-full h-48 w-48 grid items-center justify-center">
								<Image src={"https://cravatar.eu/helmhead/" + data.username + "/190.png"}
									height='140' width='140' alt={ data.username } />
							</div>
							<div className="col-span-2 ml-4 pt-2">
								<div className="grid grid-flow-col items-center mb-1">
									<h4 className="max-w-max mb-0 text-5xl">{ data.username || 'Loading...' }</h4>
									<span className='px-3 font-bold uppercase hover-online relative overflow-visible cursor-pointer'>
										<span className={ (data.isLogged ? 'bg-green-500' : 'bg-uc-gray') + ' inline-block w-2 h-2 rounded mr-1 align-middle' }></span>
										<div className="block absolute -mt-1 text-xsm
											-top-2 left-0 bg-black text-white rounded min-w-max w-auto py-0.5 px-2 right-0
											opacity-0 transition-opacity items-center">
											{data.isLogged ? 'online' : 'offline'}
											<svg className="absolute text-black h-2 left-0 ml-3 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
										</div>
									</span>
								</div>
								<div className="text-base">
									{ ['Admin', 'MVP', 'YouTuber'].map( ( _rank, _index ) => {
										return <span className='border border-uc-primary rounded-full mr-2 py-0.5 px-2 text-xs font-bold'
											key={ _index }>{ _rank }</span>
									} ) }
								</div>
								<div className="text-base mt-4">
									Last Login: { data.isLogged ? 'Just Now!' : TimeStamp( data.lastlogin, { time: true } ) }
								</div>
							</div>
						</div>
					</article>

					<article className="relative mt-4 py-6 px-10 mx-auto bg-uc-secondary rounded-md block w-full max-w-screen-xl">
						Other Informations:
					</article>
				</section>

				{/* Sections End */}
			</div>
		</main>
	)
}
