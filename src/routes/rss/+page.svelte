<script>

export let data;

import { browser} from '$app/environment';

import { goto } from '$app/navigation';

//console.log(data);
//console.log(data.feed.title);

let feed_items = data.feed.items;
// console.log(feed_items);

let feeds = data.feeds;


console.log("feeds: ", feeds);

function gotoFirstFeed() {

	let addfeed = "/rss/add"
	if(feeds.length > 0) {

		let firstfeed = "/rss/" + feeds[0].feed_name;
		console.log(feeds[0].feed_name)
		console.log(firstfeed)
		if (browser) {
			//goto(firstfeed);
			window.location.href = firstfeed;
		}
	}
	else {
		console.log("No feeds, redirecting to /rss/add")
		if (browser) {
			//goto(addfeed);
			window.location.href = addfeed;
		}

	}

}

gotoFirstFeed()

</script>




	





