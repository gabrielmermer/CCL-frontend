
<script>

import img from '$lib/images/CCL.png';

import cross from '$lib/images/cross.svg';

let usernameVar = ""

</script>


<body>

<div class="flex justify-between">
	<div>
		<a href="/">
		<h1 class="font-supply text-white 2xl:text-5xl xl:text-4xl font-normal mt-8 ml-10">STR0NA</h1>
		</a>
		<div class="2xl:w-[57px] xl:w-[46px] h-1 ml-10 bg-white"></div>
	</div>

	<div>
	<a href="/signin" class="text-white font-supply 2xl:mt-8 2xl:py-2 2xl:text-2xl 2xl:mr-8 xl:mt-5   xl:py-2 xl:text-lg xl:mr-5">sign in</a>
	<form action="/signup" class="inline">
	<button href="/signup" class="text-black bg-white font-supply 2xl:mt-8 2xl:text-2xl 2xl:px-3 2xl:py-2 2xl:mr-10   xl:mt-5 xl:text-lg xl:px-3 xl:py-2 xl:mr-10">Sign up</button>
	</form>
	</div>
</div>
<div class="bg-beige25 w-[659px] mx-auto py-8 px-10 mt-[255px]">
	<div class="flex justify-between">
		<h1 class="text-3xl font-supply text-beige200">Sign in</h1>
		<a href="/">
			<img draggable="false" src="{cross}" alt="">
		</a>
	</div>
	<form action="http://localhost:3000/login" method="post" class="mt-12">

	<label for="usernameVar" class="text-2xl font-supply text-beige75">username</label>
	<br>
	<input bind:value={usernameVar} type="text" name="username" required class="w-full font-supply text-2xl placeholder:font-supply placeholder:text-2xl pl-5 py-5 mt-2 bg-transparent border border-beige80 focus:font-supply"placeholder="John331">

	<div class="mt-8">
	<label for="password" class="text-2xl font-supply text-beige75 mt-8">password</label>
	</div>

	<input type="password" name="password" required class="w-full font-supply text-2xl placeholder:font-supply placeholder:text-2xl pl-5 py-5 mt-2 bg-transparent border border-beige80 focus:font-supply" placeholder="bananas123">
	<br>
	<button class="text-white font-supply bg-party 2xl:px-[58px] 2xl:py-5 2xl:mt-10 2xl:text-xl xl:px-[31px] xl:py-4 xl:mt-10 xl:text-lg">Sign in</button>
	</form>
</div>

</body>




<style>

body {
	background-image: url('$lib/images/CCL.png');
	background-attachment:fixed;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>

