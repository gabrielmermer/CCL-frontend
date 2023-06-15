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




<body class="bg-beige">
	
	<h1 class="mt-7 ml-[539px]"><span class="bg-party50 font-supply text-[56px] text-beige100">{data.feed.title}</span></h1>





</body>
