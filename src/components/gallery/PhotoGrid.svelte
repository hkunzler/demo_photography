<script>
	import { MasonryGrid } from '@egjs/svelte-grid';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let items;
	export let currentImage;

	let grid;

	const gap = 5;
	const defaultDirection = 'end';
	const align = 'justify';
	const column = 0;
	const columnSize = 0;
	const columnSizeRatio = 0;

	function setOpen(image) {
		currentImage = image;
		dispatch('openChange', currentImage);
	}
</script>

<MasonryGrid
	bind:this={grid}
	class="container"
	{defaultDirection}
	{gap}
	{align}
	{column}
	{columnSize}
	{columnSizeRatio}
>
	{#each items as item}
		<div
			class="shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
			on:click={() => setOpen(item)}
		>
			<img src={item.imageUrl} alt={item.description} />
		</div>
	{/each}
</MasonryGrid>
