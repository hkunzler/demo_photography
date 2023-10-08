<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let selectedCategory;
	export let categories;

	function setCategory(category) {
		selectedCategory = category;
		dispatch('categoryChange', selectedCategory);
	}
</script>

<div class="mb-6 flex justify-center">
	{#each categories as category}
		<button
			on:click={() => setCategory(category)}
			class="px-4 py-2 rounded mr-2 text-sm {selectedCategory === category
				? 'bg-primary text-white'
				: 'bg-transparent text-primary border'} transition-colors duration-300 hover:bg-primary hover:text-white"
		>
			{category}
		</button>
	{/each}
</div>
