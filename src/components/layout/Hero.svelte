<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const bgImage = document.querySelector('.parallax-bg');

		window.addEventListener('scroll', () => {
			let offset = window.pageYOffset;
			bgImage.style.transform = `translateY(${offset * 0.5}px)`;
		});
	});
</script>

<section class="relative h-screen overflow-hidden">
	<div
		class="parallax-bg absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed bg-no-repeat bg-[url('https://images.unsplash.com/photo-1693711943126-52903b3a6b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1995&q=80')]"
	/>
	<div class="relative z-10 h-full text-center flex flex-col justify-center">
		<div class="mx-auto flex flex-col justify-around h-full">
			<div>
				<h1 class="drop-shadow-xl text-5xl">Capturing Moments</h1>
				<p class="drop-shadow-xl text-2xl font-secondary mb-8">
					Exploring the world through my lens, one photo at a time.
				</p>
			</div>
			<a class="text-xl drop-shadow-xl" href="/gallery">View Gallery</a>
		</div>
	</div>
</section>
