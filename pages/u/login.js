// import { useSession, getSession } from 'next-auth/client'
import { useState } from 'react'
import Head from 'next/head'
import { Header, Footer } from '../../components'

export default function Login() {
	// const [ session, loading ] = useSession()

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = e => {
		e.preventDefault();
		console.log( username, password );
	}

	return (
		<main>
			<Head>
				<title>Login Portal</title>
			</Head>
			<div className="page-wrapper">
				<Header />
				<section className="h-screen w-screen grid items-center justify-center">
					<article className="mx-auto bg-uc-secondary rounded-md p-8 block">
						<h2 className="text-4xl text-center mb-16">Login</h2>
						<form onSubmit={ onSubmit } className="grid grid-cols-5">
							<input placeholder="Username" name="username"
								value={ username } onChange={ e => setUsername(e.target.value) }
								className="bg-transparent border-b border-uc-primary py-2 px-4 col-span-2" />
							<input placeholder="Password" name="password"
								value={ password } onChange={ e => setPassword(e.target.value) }
								className="bg-transparent border-b border-uc-primary mx-4 py-2 px-4 col-span-2" />
							<input className="rounded-lg cursor-pointer bg-uc-primary text-uc-secondary py-2 px-8 uppercase w-full font-medium text-base tracking-wider" type="submit" value="Submit" />
						</form>
					</article>
				</section>

				{/* Sections End */}
			</div>
		</main>
	)
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       session: await getSession(context)
//     }
//   }
// }