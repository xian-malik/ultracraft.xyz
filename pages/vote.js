import React from 'react'
import Head from 'next/head'
import LazyLoad from 'react-lazyload'
import Header from '../components/header'
import Footer from '../components/footer'

import { links } from '../content/voteLinks.content'

export default function Vote() {
	return (
		<main>
			<Head>
				<title>Voting Sites | UltraCraft</title>
			</Head>
			<div className="page-wrapper">
				<Header />
				<section className="page-title">
					<picture className="image-bg">
						<source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_480,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_nether.jp2" media="(max-width: 480px)" />
						<source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_768,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_nether.jp2" media="(max-width: 768px)" />
						<source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_nether.jp2" media="(max-width: 1080px)" />
						<img layout="fill" src="https://res.cloudinary.com/xianmalik/image/upload/c_fill,f_auto,q_auto/v1589143340/UltraCraft/uc_nether.jpg" className="image-bg" alt="Ultracraft Nether" />
					</picture>
					<div className="container">
					<div className="row">
						<div className="col-12">
						<h3 style={{margin: 0}}>All you need to know</h3>
						<h1>Voting siteS</h1>
						</div>
					</div>
					</div>
					<picture className="dividerBottom">
						<source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_480,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2" media="(max-width: 480px)" />
						<source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_768,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2" media="(max-width: 768px)" />
						<source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_95,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2" media="(max-width: 1080px)" />
						<img layout="fill" alt="Divider" className="dividerBottom" src="https://res.cloudinary.com/xianmalik/image/upload/w_1871,h_95,c_fill,f_auto,q_auto/v1589138371/UltraCraft/Borders/header1.png" />
					</picture>
				</section>
				
				<section id="Section2">
					<div className="w-11/12 max-w-6xl mx-auto list-none py-12">
						<h2 className="text-center mb-16 w-full"><span className="border-b-2 border-uc-primary">General Rules</span></h2>
						<ul className="grid grid-cols-2 col-span-8 row-span-8">
							{ links.map( ( link, index ) => {
								return <li key={ index } className="p-4">
									<a href={ link.url } className="text-2xl px-8 border border-uc-primary block text-center p-4 text-uc-primary hover:bg-uc-primary hover:bg-opacity-5 transition-all" target="_">
										<span className="font-bold">{ link.title }</span>
										<span className="text-base block">Every 24 hours</span>
									</a>
								</li>
							} ) }
						</ul>
					</div>
					<picture className="dividerBottom">
						<source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_480,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2" media="(max-width: 480px)" />
						<source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_768,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2" media="(max-width: 768px)" />
						<source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_95,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2" media="(max-width: 1080px)" />
						<img layout="fill" alt="Divider" className="dividerBottom" src="https://res.cloudinary.com/xianmalik/image/upload/w_1871,h_95,c_fill,f_auto,q_auto/v1589138371/UltraCraft/Borders/top_dark.png" />
					</picture>
				</section>

				{/* Sections End */}
			<Footer />
			</div>
		</main>
	)
}
