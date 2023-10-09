<script>
	import { onMount, afterUpdate } from 'svelte';
	import client from "$lib/sanityClient.js";

	let currentIndex = 1;
	let containerWidth = 0;
	let isLooping = false;

	function updateContainerWidth() {
		containerWidth = document.querySelector('.carousel-container').offsetWidth;
	}

	function showNext() {
		if (currentIndex >= imageUrls.length - 1) {
			currentIndex = 0;
			isLooping = true;
		} else {
			currentIndex++;
			isLooping = false;
		}
	}

	function showPrev() {
		if (currentIndex <= 0) {
			currentIndex = imageUrls.length - 1;
			isLooping = true;
		} else {
			currentIndex--;
			isLooping = false;
		}
	}

	let title;
	let imageUrls = [];
	onMount(async () => {
		updateContainerWidth()


		const fetchedData = await client.fetch('*[_type == "carousel"]{ name, "imageUrls": slides[].image.asset->url }[0]');
		let carouselData = { ...fetchedData };
title = carouselData?.name;
		imageUrls = carouselData?.imageUrls || [];
	});
	afterUpdate(updateContainerWidth);

	$: offset = (-currentIndex * containerWidth) / 3 + containerWidth / 2 - containerWidth / 6;

	$: {
		if (currentIndex === imageUrls.length - 1 && !isLooping) {
			currentIndex = 1;
		}
		if (currentIndex === 0 && !isLooping) {
			currentIndex = imageUrls.length - 2;
		}
	}
</script>

<div class="carousel-container text-center relative overflow-hidden mx-auto py-8">
	<h2 class="mb-8">{title}</h2>
	<div
		class="flex transition-transform duration-300 {isLooping ? 'bounce-transition' : ''}"
		style="transform: translateX({offset}px)"
	>
		{#each imageUrls as image, index}
			<img
				src={image}
				alt={`Carousel Image ${index + 1}`}
				class={`w-1/3 ${
					index === currentIndex
						? 'opacity-100'
						: index === currentIndex - 1 || index === currentIndex + 1
						? 'opacity-50'
						: 'opacity-0'
				}`}
			/>
		{/each}
	</div>

	<button
		on:click={showPrev}
		class="absolute top-1/2 left-0 ml-4 p-2 bg-black bg-opacity-50 text-white z-10"
	>
		Prev
	</button>

	<button
		on:click={showNext}
		class="absolute top-1/2 right-0 mr-4 p-2 bg-black bg-opacity-50 text-white z-10"
	>
		Next
	</button>
</div>

<style>
	.carousel-container {
		width: 80%;
		max-width: 1200px;
	}
	.bounce-transition {
		transition: transform 0.6s cubic-bezier(0.52, 0.01, 0.47, 1.16);
	}
</style>
