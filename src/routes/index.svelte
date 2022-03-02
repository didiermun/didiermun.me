<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	let colors = ["#FFAB4C","#FF5F7E","#B000B9"];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="w-full">
	<div class="w-full  px-8 mx-auto items-center min-h-screen py-20 bg-[#142F43]">
		<div class="flex justify-center">
		<div class="w-5/6 md:w-2/3">
			<div class="w-full px-4 py-4 my-4">
				<p class="font-semibold text-5xl font-para text-center text-white">Hi! I am Didier Munezero.</p>
			</div>
			<div class="w-full">
				<h1 class="font-bold uppercase py-2 font-para text-center text-[#B000B9]">Background</h1>
				<p class="py-4 font-para text-white">Hi, I am Didier Munezero, a software engineer focused on creating real world solutions using computers and technology. I enjoy reading reading books and also writing personal novels.</p>
				<p class="py-4 font-para text-white">I enjoy science studies and researches around Physics, Philosophy, and Psychology.</p>
			</div>
		</div>
	</div>
		<div class="flex justify-center">
			<div>
			<div class="mt-4 px-4">
				<p class="uppercase font-semibold font-para text-[#B000B9]">Connect with me</p>
				<div class="font-para text-white">
					<div class="flex gap-1 mt-2 py-1">
						<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20" height="20" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M36.21,1.07H13.79A12.73,12.73,0,0,0,1.07,13.79V36.21A12.74,12.74,0,0,0,13.79,48.93H36.21A12.74,12.74,0,0,0,48.93,36.21V13.79A12.73,12.73,0,0,0,36.21,1.07Zm9.72,35.14a9.73,9.73,0,0,1-9.72,9.72H13.79a9.73,9.73,0,0,1-9.72-9.72V13.79a9.73,9.73,0,0,1,9.72-9.72H36.21a9.73,9.73,0,0,1,9.72,9.72Z" fill="#fff"></path><path d="M25,13.39A11.61,11.61,0,1,0,36.61,25,11.63,11.63,0,0,0,25,13.39Zm0,20.22A8.61,8.61,0,1,1,33.61,25,8.62,8.62,0,0,1,25,33.61Z" fill="#fff"></path><path d="M38.07,8.72a3,3,0,1,0,3,3A3,3,0,0,0,38.07,8.72Z" fill="#fff"></path></svg>
						<a href="https://www.instagram.com/mun_didier/">mun_didier</a>
					</div>
					<div class="flex gap-1 py-1">
						<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20" height="20" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M19.37,42.29a26.12,26.12,0,0,1-13.5-3.76L1.13,35.64l5.47,1A13.8,13.8,0,0,0,16,34.76a12.33,12.33,0,0,1-6.83-5.37C4.71,22,8,10.77,8.19,10.3l.57-1.88L10,10a22.54,22.54,0,0,0,14.72,8A8.84,8.84,0,0,1,29.33,9.2a9.1,9.1,0,0,1,10.85,1.37,22,22,0,0,0,4.31-1.76l2.09-1.1L46,10a7.38,7.38,0,0,1-1.09,2.33c.47-.17.75-.3.76-.3l3.23-1.51-1.92,3a20.22,20.22,0,0,1-4,4.12c0,9.46-4.12,17.28-11.45,21.5A24.42,24.42,0,0,1,19.37,42.29Zm-8.32-3.55a23.15,23.15,0,0,0,19.43-1.41c6.9-4,10.59-11.13,10.41-20.18v-.53l.42-.32s.7-.53,1.53-1.28a10.21,10.21,0,0,1-1.38.16l-4.7.25,4.16-2.2A7.06,7.06,0,0,0,42.46,12a9.35,9.35,0,0,1-2.57.69l-.48,0-.32-.34A7.15,7.15,0,0,0,30.34,11,6.88,6.88,0,0,0,27,18.85l.32,1.3H26A24.35,24.35,0,0,1,9.71,12.78C9,16.16,8,23.37,11,28.32a10.87,10.87,0,0,0,7.68,5l2.06.39-1.56,1.4A16.82,16.82,0,0,1,11.05,38.74Z" fill="#fff"></path></svg>
						<a href="https://twitter.com/didier_mun">didier_mun</a>
					</div>
					<div class="flex gap-1 py-1">
						<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20" height="20" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M7.4,2.67A6.42,6.42,0,0,0,2.74,4.5,5.87,5.87,0,0,0,1.09,8.76,5.85,5.85,0,0,0,2.74,13a6.37,6.37,0,0,0,4.6,1.84A6.12,6.12,0,0,0,13.77,8.8v0A6.05,6.05,0,0,0,7.4,2.67Zm-.06,9.2a3.37,3.37,0,0,1-2.46-.94,2.92,2.92,0,0,1-.79-2.17A2.9,2.9,0,0,1,4.88,6.6,3.43,3.43,0,0,1,7.4,5.67a3.07,3.07,0,0,1,3.37,3.14C10.76,10.64,9.39,11.87,7.34,11.87Z" fill="#fff"></path><path d="M1.33,47.88H13.47V15.48H1.33Zm3-29.4h6.14v26.4H4.33Z" fill="#fff"></path><path d="M36.68,14.82a12.59,12.59,0,0,0-8.1,2.87l-.23-2.21H17.49l.08,1.57c.11,2.54.23,5.63.23,9.31V47.88H30V29.42a5.13,5.13,0,0,1,.27-1.78,3.41,3.41,0,0,1,3.22-2.43c.85,0,3.13,0,3.13,4.88V47.88H48.71V28.94C48.71,20.1,44.21,14.82,36.68,14.82Zm9,30.06H39.57V30.09c0-7.11-4.29-7.88-6.13-7.88a6.37,6.37,0,0,0-6,4.37A8,8,0,0,0,27,29.42V44.88H20.8V26.36c0-3-.07-5.63-.17-7.88h5l.42,4h2.35l.44-.69a9.26,9.26,0,0,1,7.82-4c5.82,0,9,3.95,9,11.12Z" fill="#fff"></path></svg>
						<a href="https://www.linkedin.com/in/didier-munezero-07b849194/">Didier MUNEZERO</a>
					</div>
					<div class="flex gap-1 py-1">
						<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20" height="20" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M44.1,13.4a10.8,10.8,0,0,0-1.9-3.5c1-3.8.9-6.4-.5-8.2a1.6,1.6,0,0,0-1.1-.5c-2.8-.2-5.6.7-8.7,2.7L28,3.4A32.9,32.9,0,0,0,18,4C14.7,1.6,12,.7,9.9,1.4a1.2,1.2,0,0,0-.9.8,13,13,0,0,0-.6,8.4A13.5,13.5,0,0,0,6,18.3v.6a14.3,14.3,0,0,0,11.9,14,8,8,0,0,0-.6,3v2.9a6.6,6.6,0,0,1-4.6-.2C8.8,36.8,7,31.2,7,31.1a1.5,1.5,0,0,0-1.9-.9,1.5,1.5,0,0,0-1,1.9c.1.2,2.3,6.8,7.4,9.2a8.1,8.1,0,0,0,3.8.8,7.1,7.1,0,0,0,2-.2v4.4a7.7,7.7,0,0,0,.2,1.5A1.4,1.4,0,0,0,18.9,49h.3a1.4,1.4,0,0,0,1.2-1.7,2.8,2.8,0,0,1-.1-.9V35.9a5.1,5.1,0,0,1,1.3-3.3,1.6,1.6,0,0,0,.3-1.6,1.7,1.7,0,0,0-1.4-.9h-.3A11.2,11.2,0,0,1,9,18.9v-.6a11.1,11.1,0,0,1,2.2-6.5,1.9,1.9,0,0,0,.2-1.3,11.2,11.2,0,0,1,0-6.3c.9,0,2.6.5,5.3,2.6a1.9,1.9,0,0,0,1.5.2h0a29.9,29.9,0,0,1,9.5-.6,32.7,32.7,0,0,1,4.2.6,1.6,1.6,0,0,0,1.2-.2,12.6,12.6,0,0,1,6.5-2.7c.3.9.5,2.5-.5,5.7a1.7,1.7,0,0,0,.3,1.4,9.4,9.4,0,0,1,1.9,3.2,10.7,10.7,0,0,1,.7,3.9v.6A11.2,11.2,0,0,1,30.7,30.1a1.4,1.4,0,0,0-1.3.9,1.4,1.4,0,0,0,.2,1.6,4.6,4.6,0,0,1,1.3,3.3V46.3a2.8,2.8,0,0,1-.1.9,1.5,1.5,0,0,0,3,.6,7.6,7.6,0,0,0,.1-1.5V35.9a7.7,7.7,0,0,0-.6-3A14.2,14.2,0,0,0,45,18.9v-.6A14.1,14.1,0,0,0,44.1,13.4Z" fill="#fff"></path></svg>
						<a href="https://github.com/didiermun">didiermun</a>
					</div>
				</div>
			</div>
			</div>
		</div>
	</div>
</section>
