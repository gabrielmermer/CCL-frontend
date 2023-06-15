<script>

export let data;



console.log(data);
console.log(data.feed.title);

let feed_items = data.feed.items;
console.log(feed_items);


</script>

{#each feed_items as post}
	<a href="{post.link}" target="_blank">{post.title}</a> <br>
{/each}
