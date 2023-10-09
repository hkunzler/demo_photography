<script>
	import FeaturedCard from '../../components/featured/FeaturedCard.svelte';
	import {onMount} from "svelte";
	import client from "$lib/sanityClient.js";

	let featuredData = [];
	onMount(async () => {
		const fetchedData = await client.fetch('*[_type == "publication"]{title,"imageUrl": thumbnail.asset->url, url}');
		featuredData = [ ...fetchedData];
	});
</script>

<section>
	<h1 class="text-4xl font-primary font-bold mb-10 text-center">Featured</h1>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
		{#each featuredData as featured}
			<FeaturedCard item={featured} />
		{/each}
	</div>
</section>
