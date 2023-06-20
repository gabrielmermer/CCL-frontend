
<script>
    import Page from "../+page.svelte";

	import backarrow from '$lib/images/backarrow.svg';

	export let data;
	
	console.log(data.token);
	console.log(data.payload);
	console.log(data.userid);
	console.log(data.username);
	let [{ username }] = data.username;
	console.log(username)


</script>


<a href="/rss">
<div class="flex mt-8">
<img src="{backarrow}" alt="" class="ml-[539px]">
<p class="font-supply ml-2 text-beige80 text-2xl">back</p>
</div>
</a>

<h1 class="mt-7 ml-[539px]"><span class="bg-party50 font-supply text-[56px] text-beige100">Add new feed</span></h1>

	<form action="http://localhost:3000/createfeed" method="post" class="mt-12 ml-[539px] w-[431px]">

	<label for="feedName" class="text-2xl font-supply text-beige75">name</label>
	<br>
	<input type="text" name="feedName" required class="w-full font-supply text-2xl placeholder:font-supply placeholder:text-2xl pl-5 py-5 mt-2 bg-transparent border border-beige80 focus:font-supply"placeholder="Hacker News">

	<div class="mt-8">
	<label for="feedUrl" class="text-2xl font-supply text-beige75 mt-8">URL</label>
	</div>

	<input type="text" name="feedUrl" required class="w-full font-supply text-2xl placeholder:font-supply placeholder:text-2xl pl-5 py-5 mt-2 bg-transparent border border-beige80 focus:font-supply" placeholder="hacker.news/feed.rss">
	<br>
	<input type="text" name="username" class="hidden" value="{username}">
	<button class="text-white font-supply bg-party 2xl:px-[58px] 2xl:py-5 2xl:mt-10 2xl:text-xl xl:px-[31px] xl:py-4 xl:mt-10 xl:text-lg">Add feed</button>
	</form>
