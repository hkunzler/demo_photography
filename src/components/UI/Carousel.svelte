<script>
	import { onMount, afterUpdate } from 'svelte';

	const BASE_URL = 'https://images.unsplash.com/';
	const IMAGE_PARAMS =
		'?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80';

	let images = [
		'photo-1696050232847-c292539e3159',
		'photo-1695968699604-defce4d13128',
		'photo-1695829078492-6c88a9d1aa36',
		'photo-1695982207544-843360e56f41',
		'photo-1693813428836-de02bcda8888',
		'photo-1682167176169-c74f2a6c6b84'
	].map((img) => `${BASE_URL}${img}${IMAGE_PARAMS}`);

	let currentIndex = 1;
	let containerWidth = 0;
	let isLooping = false;

	function updateContainerWidth() {
		containerWidth = document.querySelector('.carousel-container').offsetWidth;
	}

	function showNext() {
		if (currentIndex >= images.length - 1) {
			currentIndex = 0;
			isLooping = true;
		} else {
			currentIndex++;
			isLooping = false;
		}
	}

	function showPrev() {
		if (currentIndex <= 0) {
			currentIndex = images.length - 1;
			isLooping = true;
		} else {
			currentIndex--;
			isLooping = false;
		}
	}

	onMount(updateContainerWidth);
	afterUpdate(updateContainerWidth);

	$: offset = (-currentIndex * containerWidth) / 3 + containerWidth / 2 - containerWidth / 6;

	$: {
		if (currentIndex === images.length - 1 && !isLooping) {
			currentIndex = 1;
		}
		if (currentIndex === 0 && !isLooping) {
			currentIndex = images.length - 2;
		}
	}
</script>

<div class="carousel-container text-center relative overflow-hidden mx-auto py-8">
	<h2 class="mb-8">Showcase</h2>
	<div
		class="flex transition-transform duration-300 {isLooping ? 'bounce-transition' : ''}"
		style="transform: translateX({offset}px)"
	>
		{#each images as image, index}
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
