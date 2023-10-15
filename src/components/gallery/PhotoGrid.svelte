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
	let images;

	$: {
		images = items;
	}
</script>

<MasonryGrid
	loading="lazy"
	bind:this={grid}
	class="container"
	{defaultDirection}
	{gap}
	{align}
	{column}
	{columnSize}
	{columnSizeRatio}
>
	{#each images || [] as item}
		<div
			class="shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 max-w-md hover:scale-105"
			on:click={() => setOpen(item)}
		>
			<img src={item?.imageUrl + '?w=700&fm=webp'} />
		</div>
	{/each}
</MasonryGrid>
