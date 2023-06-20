export async function load({ fetch }) {


  // Define the caching options

  // Make the fetch request for the 'http://localhost:3000/rss' endpoint with caching options
  const res = await fetch('http://localhost:3000/rss');
  const feed = await res.json();

  // Make the fetch request for the 'http://localhost:3000/feeds/Rick' endpoint with caching options
  const res_feeds = await fetch('http://localhost:3000/feeds/Rick');
  const feeds = await res_feeds.json();

  return { feed, feeds };
}

