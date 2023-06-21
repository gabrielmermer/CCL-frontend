import { redirect } from '@sveltejs/kit';
export async function load({ fetch, cookies }) {

	const token = cookies.get('accessToken');
	const tokenParts = token.split('.');
	const encodedPayload = tokenParts[1];
	const decodedPayload = atob(encodedPayload);
	const payload = JSON.parse(decodedPayload);
	let userid = payload.id
	userid = userid.toString()
	const usernamefetch = await fetch('http://localhost:3000/username/' + userid);
	let username = await usernamefetch.json()

	console.log(username);
	//let [{ usernameValue }] = username;
	const usernameValue = username[0].username;

	// logged in username
	console.log(usernameValue);

	// Define the caching options

	// Make the fetch request for the 'http://localhost:3000/rss' endpoint with caching options
	const res = await fetch('http://localhost:3000/rss');
	const feed = await res.json();

	// Make the fetch request for the 'http://localhost:3000/feeds/Rick' endpoint with caching options
	const res_feeds = await fetch('http://localhost:3000/feeds/' + usernameValue);
	const feeds = await res_feeds.json();




	return { feed, feeds, username, usernameValue};
}

