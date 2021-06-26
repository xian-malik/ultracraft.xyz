import React from 'react'
import Head from 'next/head'
import LazyLoad from 'react-lazyload'
import Header from '../components/header'
import Footer from '../components/footer'

import { rules } from '../content/rules.content'

export default function Rules() {
	return (
		<main>
			<Head>
				<title>Rulebook | UltraCraft</title>
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
						<h1>RulebooK</h1>
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
					<div className="grid w-11/12 max-w-6xl mx-auto list-none py-12">
						<h2 className="text-center">General Rules</h2>
						<ul>{
							rules.map( ( rule, index ) => {
								return <li key={ index } className="mb-8 block">
									<h4 className="text-2xl mb-2">{ rule.title }</h4>
									<p className="px-8">{ rule.desc }</p>
								</li>
							} )
						}</ul>
						
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
