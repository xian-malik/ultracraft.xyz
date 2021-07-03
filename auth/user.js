const VerifyUser = () => {
	const USER = localStorage.getItem('USERNAME');
	const TOKEN = localStorage.getItem('TOKEN');

	if ( ! USER || ! TOKEN ) {
		window.location = '/u/login'
		return { USER: null, TOKEN: null }
	} else {
		return { USER, TOKEN };
	}
}
export default VerifyUser;