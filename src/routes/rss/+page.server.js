export async function load({ fetch }) {
  const res = await fetch('http://localhost:3000/rss');
  const feed = await res.json();
  return { feed };
}

