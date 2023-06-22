export async function load({ fetch, params, cookies}) {
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





	// Define the caching options
	const cachingOptions = {
		method: 'GET',
		headers: { 'Cache-Control': 'max-age=3600' }, // Cache for 1 hour (3600 seconds)
	};

	// Make the fetch request with caching options
	const res = await fetch('http://localhost:3000/rss', cachingOptions);
	const feed = await res.json();

	const title = params.slug;


	const res_feeds = await fetch('http://localhost:3000/feeds/'+ usernameValue, cachingOptions);
	const feeds = await res_feeds.json();
	const feed_name = feeds.find((feed) => feed.feed_name === params.slug);



	// Fetch the specific feed with caching options
	const slugfeed = await fetch('http://localhost:3000/rss' + '/' + feed_name.feed_url, cachingOptions);
	const slugfeedjson = await slugfeed.json();
	console.log(slugfeedjson);



	let isFeedOnline = true;
	console.log(slugfeedjson.status)
	if(slugfeedjson.status == "404") {
		console.log("Feed url not found")
		isFeedOnline = false;
		

	}
	
	// this updates in real time
	//console.log("server title: ", slugfeedjson.title);


	return { feed, feed_name, feeds, title, slugfeedjson, isFeedOnline };
}


