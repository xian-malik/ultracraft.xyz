import { useEffect } from "react";

export default function Logout() {

	useEffect(() => {
		localStorage.removeItem('USERNAME')
		localStorage.removeItem('TOKEN')
		window.location = '/account/login';
	}, [])

	return <main></main>
}
