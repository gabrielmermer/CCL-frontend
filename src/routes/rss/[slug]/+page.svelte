<script>
    import Page from "../+page.svelte";

	export let data;
	//console.log(data.feed)
	//console.log(data)

	// old working version
	//let feed_items = data.feed.items;

	// new version
	//console.log(data)
	let feed_items = data.slugfeedjson.items;
	//console.log("feed items ", feed_items);

	let title = data.slugfeedjson.title;
	//console.log("slugfeedjson: ", title);
	let feed_data = data.slugfeedjson.title;
	//console.log("test client: ", feed_data);
	//console.log(data)



</script>


<h1 class="mt-7 ml-[539px]"><span class="bg-party50 font-supply text-[56px] text-beige100">{data.feed_name.feed_name}</span></h1>


<div class="w-[1551px]">

{#if data.isFeedOnline == true}
	
	{#each data.slugfeedjson.items as post, i}
		<div class="flex mb-5 ml-[539px]">
			{#if i < 9}
				<p class="mr-5 font-supply text-right text-beige50 text-2xl">0{i + 1}</p>
			{:else}
			<p class="mr-5 font-supply text-right text-beige50 text-2xl">{i + 1}</p>
			{/if}
			<div class="flex">
				<a href="{post.link}" target="_blank" class="text-2xl font-supply text-beige75 hover:text-blue-400 underline underline-offset-4 decoration-green-300 hover:underline max-w-6xl">{post.title} </a> 
				<p class="font-supply text-2xl ml-1 text-beige50">↗️</p><br>
			</div>
		</div>
	{/each}
{:else}
<p class="ml-[539px] font-supply text-2xl text-beige75">404 feed not found</p>

{/if}


</div>
