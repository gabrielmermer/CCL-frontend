export async function load({ fetch, params }) {
  //const res = await fetch('http://localhost:3000/rss');
  //const feed = await res.json();

  const res_feeds = await fetch('http://localhost:3000/feeds/Rick');
  const feeds = await res_feeds.json();
  const feed = feeds.find((feed) => feed.feed_name === params.slug);
	
  return { feed, feeds };
}

