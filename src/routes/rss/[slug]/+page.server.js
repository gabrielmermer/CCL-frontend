export async function load({ fetch, params }) {
  // Define the caching options
  const cachingOptions = {
    method: 'GET',
    headers: { 'Cache-Control': 'max-age=3600' }, // Cache for 1 hour (3600 seconds)
  };

  // Make the fetch request with caching options
  const res = await fetch('http://localhost:3000/rss', cachingOptions);
  const feed = await res.json();

  const title = params.slug;

  const res_feeds = await fetch('http://localhost:3000/feeds/Rick', cachingOptions);
  const feeds = await res_feeds.json();
  const feed_name = feeds.find((feed) => feed.feed_name === params.slug);


  // Fetch the specific feed with caching options
  const slugfeed = await fetch('http://localhost:3000/rss' + '/' + feed_name.feed_url, cachingOptions);
  const slugfeedjson = await slugfeed.json();
	// this updates in real time
	//console.log("server title: ", slugfeedjson.title);


  return { feed, feed_name, feeds, title, slugfeedjson };
}

export async function logout() {
	const logoutFetch = fetch('localhost:3000/logout');
	return {}


}
