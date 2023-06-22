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

  import { onMount, onDestroy } from 'svelte';
  import { goto } from '$app/navigation';

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
  let spanElement;

  function animateText() {
    let iteration = 0;
    const originalText = spanElement.innerText;
    const originalStyles = spanElement.getAttribute("style");

    clearInterval(interval);

    interval = setInterval(() => {
      spanElement.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(interval);
        spanElement.style = originalStyles;
      }

      iteration += 1 / 3;
    }, 30);
  }

  function stopAnimation() {
    clearInterval(interval);
  }

  onMount(() => {
    spanElement = document.querySelector("h1 span");
    animateText(); // Call the animateText function on page load

    const handleRouteChange = () => {
      stopAnimation();
      animateText();
    };

    goto(null, { noscroll: true }); // Initialize the title animation on initial page load

    // Listen for route changes and update the title animation
    app.on('goto', handleRouteChange);

    onDestroy(() => {
      app.off('goto', handleRouteChange); // Clean up the event listener on component destruction
    });
  });


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
				<a href="{post.link}" target="_blank" class="z-50 text-2xl font-supply text-beige75 hover:text-green-500 underline underline-offset-4 decoration-green-300 hover:underline max-w-6xl">{post.title} </a> 
				<p class="font-supply text-2xl ml-1 text-beige50">↗️</p><br>
			</div>
		</div>
	{/each}
{:else}
<p class="ml-[539px] font-supply text-2xl text-beige75">404 feed not found</p>

{/if}


</div>
