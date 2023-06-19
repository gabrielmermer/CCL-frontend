export async function load({ cookies }) {
	const token = cookies.get('accessToken');
	const tokenParts = token.split('.');
	const encodedPayload = tokenParts[1];
	const decodedPayload = atob(encodedPayload);
	const payload = JSON.parse(decodedPayload);
	let userid = payload.id
	userid = userid.toString()
	const usernamefetch = await fetch('http://localhost:3000/username/' + userid);
	const username = usernamefetch.json()




	return {
		token, payload, userid, username
	};
}
