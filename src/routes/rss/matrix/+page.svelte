<script>
  import { onMount, onDestroy } from 'svelte';

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
    spanElement.addEventListener("mouseover", animateText);
    spanElement.addEventListener("mouseout", stopAnimation);
  });

  onDestroy(() => {
    if (spanElement) {
      spanElement.removeEventListener("mouseover", animateText);
      spanElement.removeEventListener("mouseout", stopAnimation);
    }
  });
</script>


<a href="/rss">
  <div class="flex mt-8">
    <p class="font-supply ml-2 text-beige80 text-2xl">back</p>
  </div>
</a>

<h1 class="mt-7 ml-[539px]">
  <span class="bg-party50 font-supply text-[56px] text-beige100">MATRIX</span>
</h1>

