export async function load({ fetch }) {
  // Define the caching options
  const cachingOptions = {
    method: 'GET',
    headers: { 'Cache-Control': 'max-age=3600' }, // Cache for 1 hour (3600 seconds)
  };

  // Make the fetch request for the 'http://localhost:3000/rss' endpoint with caching options
  const res = await fetch('http://localhost:3000/rss', cachingOptions);
  const feed = await res.json();

  // Make the fetch request for the 'http://localhost:3000/feeds/Rick' endpoint with caching options
  const res_feeds = await fetch('http://localhost:3000/feeds/Rick', cachingOptions);
  const feeds = await res_feeds.json();

  return { feed, feeds };
}

