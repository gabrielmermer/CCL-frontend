export async function load({ cookies }) {
	const token = cookies.get('accessToken');
	const tokenParts = token.split('.');
	const encodedPayload = tokenParts[1];
	const decodedPayload = atob(encodedPayload);
	const payload = JSON.parse(decodedPayload);
	let userid = payload.id
	userid = userid.toString()
	const usernamefetch = await fetch('http://localhost:3000/username/' + userid);
	const username = await usernamefetch.json()

	let [{ usernameValue }] = username;

	// logged in username
	console.log(usernameValue);


	// add feed to the logged in user 
	

	// TODO form action that will allow the user to log in 



	return {
		token, payload, userid, username
	};
}

//export const actions = {
//	default: async ({ request }) => {
//		const data = await request.formData();
//		console.log(data);
//		const values = data.map(obj => obj.value);
//		try {
//			const response = await fetch('http://localhost:3000/createfeed', {
//				method: 'POST',
//				//body: JSON.stringify(data)
//				// TODO fix this
//				body: values
//			});
//
//			if (response.ok) {
//				// Handle successful response
//				console.log('Data successfully submitted');
//			} else {
//				// Handle error response
//				console.error('Error submitting data:', response.status);
//			}
//		} catch (error) {
//			// Handle network error
//			console.error('Network error:', error);
//		}
//	}
//};
