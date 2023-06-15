<script>

export let data;

import blobBlue from '$lib/images/blob-blue.svg';
import blobGreen from '$lib/images/blob-green.svg';
import blobPink from '$lib/images/blob-pink.svg';
import blobPink3 from '$lib/images/blob-pink-3.svg';

import plus from '$lib/images/plus.svg';
import minus from '$lib/images/minus.svg';


import logout from '$lib/images/logout.svg';

import { each } from 'svelte/internal';


console.log(data);
console.log(data.feed.title);

let feed_items = data.feed.items;
console.log(feed_items);

let sources = ['Hacker News', 'r/datahoarder', 'Elon Musk', 'CBN']


console.log(data.feeds);

</script>

<div class="fixed top-0 left-0 h-screen w-[475px] m-0 bg-gradient-to-br from-[#F3F3F3]/90 to-white/10 z-20">
	<div class="mt-8"></div>
	<a href="/" class="text-5xl font-supply text-beige100 text-opacity-[85] ml-10">STR0NA</a>
	<div class="2xl:w-[57px] xl:w-[46px] h-1 ml-10 bg-beige100 bg-opacity-[85]"></div>
	
	<div class="flex items-center">
		<img draggable="false" src="{plus}" alt="" class="mt-10 ml-10">
		<img draggable="false" src="{minus}" alt="" class="ml-9 mt-[39px]">
	</div>


	<div class="mt-8"></div>
	{#each data.feeds as feed}
		<div class="mt-5"></div>
		<a href="/rss/{feed.feed_name}" class="ml-10 font-supply text-2xl text-beige80">{feed.feed_name}</a> <br>
	{/each}


	<img draggable="false" src="{logout}" alt="" class="fixed bottom-8 left-8">

</div>

<div class="fixed top-0 left-0 h-screen">
	<img draggable="false" src="{blobBlue}" alt="" class="fixed mt-[529px] -z-40">
	<img draggable="false" src="{blobPink}" alt="" class="fixed mt-[61px] ml-20 -z-50">
	<img draggable="false" src="{blobGreen}" alt="" class="fixed mt-[109px] -z-50">
</div>




<body class="bg-beige">
	
	<h1 class="mt-7 ml-[539px]"><span class="bg-party50 font-supply text-[56px] text-beige100">{data.feed.title}</span></h1>



{#each feed_items as post, i}
	<div class="flex mb-5 ml-[539px]">
		<p class="mr-5 font-supply text-right text-beige50 text-2xl">{i + 1}</p>
		<a href="{post.link}" target="_blank" class="text-2xl font-supply text-beige75 hover:text-blue-400 hover:underline max-w-6xl">{post.title}…</a> <br>
	</div>
{/each}


<img draggable="false" src="{blobPink3}" alt="" class="mt-10 ml-10 fixed bottom-0 right-0">

<p class="fixed right-[-630px] bottom-[415px] -rotate-90 text-[150px] font-supply bg-clip-text text-transparent bg-gradient-to-b from-white/90 to-white/20">00110100011001</p>


</body>
