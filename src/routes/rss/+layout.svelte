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


//console.log(data);
//console.log(data.feed.title);

let feed_items = data.feed.items;
//console.log(feed_items);

let [{ username }] = data.username;


//console.log(data.feeds);

async function logoutUser() {
	try {
		const response = await fetch('http://localhost:3000/logout');
		document.cookie = "accessToken" + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
										   // Handle the response as needed
		console.log(response);
		alert(response);
	} catch (error) {
		// Handle any errors
		alert("ERROR");
		console.log(error);
	}
}

function setTokenExpiration() {
  const token = getCookie('accessToken');
  if (token) {
    const currentTime = new Date();
    currentTime.setTime(currentTime.getTime());
    document.cookie = `accessToken=${token}; expires=${currentTime.toUTCString()}; path=/`;
  }
}

function getCookie(name) {
  const cookieArr = document.cookie.split(';');
  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split('=');
    if (name === cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

</script>



<div class="fixed top-0 left-0 h-screen w-[475px] m-0 bg-gradient-to-br from-[#F3F3F3]/90 to-white/10 z-20">
	<div class="mt-8"></div>
	<a href="/" class="text-5xl font-supply text-beige100 text-opacity-[85] ml-10">STR0NA</a>
	<div class="2xl:w-[57px] xl:w-[46px] h-1 ml-10 bg-beige100 bg-opacity-[85]"></div>
	
	<div class="flex items-center">
		<a href="/rss/add">
		<img draggable="false" src="{plus}" alt="" class="mt-10 ml-10">
		</a>
		<img draggable="false" src="{minus}" alt="" class="ml-9 mt-[39px]">
	</div>


	<div class="mt-8"></div>
	{#each data.feeds as feed}
		<div class="mt-5"></div>
		<a href="/rss/{feed.feed_name}" class="ml-10 font-supply text-2xl text-beige80">{feed.feed_name}</a> <br>
	{/each}



	<a href="/" on:click={setTokenExpiration}>
		<img draggable="false" src="{logout}" alt="" class="fixed bottom-8 left-8">
	</a>

</div>

<div class="fixed top-0 left-0 h-screen">
	<img draggable="false" src="{blobBlue}" alt="" class="fixed mt-[529px] -z-40">
	<img draggable="false" src="{blobPink}" alt="" class="fixed mt-[61px] ml-20 -z-50">
	<img draggable="false" src="{blobGreen}" alt="" class="fixed mt-[109px] -z-50">
</div>


<img draggable="false" src="{blobPink3}" alt="" class="mt-10 ml-10 fixed bottom-0 right-0">

<p class="fixed right-[-630px] bottom-[415px] -rotate-90 text-[150px] font-supply bg-clip-text text-transparent bg-gradient-to-b from-white/90 to-white/20">00110100011001</p>





<slot />
