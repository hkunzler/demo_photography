<script>
	import FeaturedCard from '../../components/featured/FeaturedCard.svelte';
	import { onMount } from 'svelte';
	import client from '$lib/index.js';

	let title;
	let featuredData = [];
	let items = [];

	onMount(async () => {
		try {
			const data = await client.fetch(
				'*[_type == "featuredSection"]{sectionTitle, "featured": featuredItems[]{  title, ctaLabel, description, date, "imageUrl": image.asset -> url+ "?w=700&fm=webp"} }[0]'
			);
			title = data.sectionTitle;
			featuredData = [...data.featured];

			const fetchedData2 = await client.fetch('*[_type == "featuredItem"] {title}');
			items = [...fetchedData2];
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	});
</script>

<section class="min-h-screen">
	{#if !title || !featuredData}
		<div class="lds-roller">
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</div>
	{:else}
		<h1 class="text-4xl font-primary font-bold mb-10 text-center">{title}</h1>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
			{#each featuredData || [] as featured}
				<FeaturedCard item={featured} />
			{/each}
		</div>
	{/if}
</section>
