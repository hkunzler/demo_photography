<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let images;
	export let currentImage;

	function nextImage() {
		const currentIndex = images.indexOf(currentImage);
		if (currentIndex < images.length - 1) currentImage = images[currentIndex + 1];
	}

	function prevImage() {
		const currentIndex = images.indexOf(currentImage);
		if (currentIndex > 0) currentImage = images[currentIndex - 1];
	}
</script>

<div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
	<div class="relative">
		<img src={currentImage.imageUrl + '?w=700&fm=webp'} class="rounded-lg max-h-[80vh] mx-auto" />

		<button
			on:click={() => dispatch('openChange', null)}
			class="absolute top-0 right-0 m-2 text-white">Close</button
		>
		<button
			on:click={prevImage}
			class="absolute left-0 my-auto h-full px-4 text-white bg-black bg-opacity-50">Prev</button
		>
		<button
			on:click={nextImage}
			class="absolute right-0 my-auto h-full px-4 text-white bg-black bg-opacity-50">Next</button
		>
	</div>
</div>
