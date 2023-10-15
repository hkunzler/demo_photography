<script>
	export let business;
	export let navItems;
</script>

<nav class="sticky z-[11] top-0 bg-primary text-white py-4">
	<div class="container mx-auto px-4 flex justify-between items-center">
		<a href="/" class="text-2xl font-primary font-bold">{business}</a>
		<div>
			{#each navItems || [] as navItem}
				<a href={navItem.link} class="mr-4">{navItem.label}</a>
			{/each}
		</div>
	</div>
</nav>
