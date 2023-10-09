<script>
	import { onMount } from 'svelte';
	import client from '$lib/sanityClient.js';

	let heroData;

	onMount(async () => {
		const bgImage = document.querySelector('.parallax-bg');

		window.addEventListener('scroll', () => {
			let offset = window.pageYOffset;
			bgImage.style.transform = `translateY(${offset * 0.5}px)`;
		});

		const fetchedData = await client.fetch('*[_type == "hero"]{ title, subtitle, ctaText, "imageUrl": image.asset->url }[0]');
		heroData = { ...fetchedData };
	});
</script>

<section class="relative h-screen overflow-hidden">
	<div
		class="parallax-bg absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed bg-no-repeat')]" style="background-image: url({heroData?.imageUrl});"

	/>
	<div class="relative z-10 h-full text-center flex flex-col justify-center">
		<div class="mx-auto flex flex-col justify-around h-full">
			<div>
				<h1 class="drop-shadow-xl text-5xl">{heroData?.title}</h1>
				<p class="drop-shadow-xl text-2xl font-secondary mb-8">
					{heroData?.subtitle}
				</p>
			</div>
			<a class="text-xl drop-shadow-xl" href="/gallery">{heroData?.ctaText}</a>
		</div>
	</div>
</section>
