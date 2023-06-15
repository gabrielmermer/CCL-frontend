<script>
	export let data;
	console.log(data.feed)
	console.log(data)

	let feed_items = data.feed.items;
	console.log(feed_items);

	let title = data.feed.feed_name;
	console.log(title)
</script>


<h1 class="mt-7 ml-[539px]"><span class="bg-party50 font-supply text-[56px] text-beige100">{data.feed_name.feed_name}</span></h1>

{#each feed_items as post, i}
	<div class="flex mb-5 ml-[539px]">
		<p class="mr-5 font-supply text-right text-beige50 text-2xl">{i + 1}</p>
		<a href="{post.link}" target="_blank" class="text-2xl font-supply text-beige75 hover:text-blue-400 hover:underline max-w-6xl">{post.title}…</a> <br>
	</div>
{/each}

