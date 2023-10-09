<script>
	import {afterUpdate, onMount} from 'svelte';
	import ImageModal from '../../components/UI/ImageModal.svelte';
	import PhotoGrid from '../../components/gallery/PhotoGrid.svelte';
	import Categories from '../../components/gallery/Categories.svelte';
	import client from "$lib/sanityClient.js";

	let isOpen = false;
	let currentImage = null;
	let selectedCategory = 'All';

	afterUpdate(() => {
		if (typeof window !== 'undefined') window.dispatchEvent(new Event('resize'));
	});

	let galleryData;
	onMount(async () => {
		const fetchedData = await client.fetch('*[_type == "photograph"]{"category": category->title,"imageUrls": image.asset->url}');

		galleryData = [ ...fetchedData];
	});

	$: filteredItems = galleryData?.filter(
			(item) => selectedCategory === 'All' || item.category === selectedCategory
	);
</script>

<section class="min-h-screen">
	<div class="text-center my-8">
		<h1>Gallery</h1>
		<p>A collection of my work.</p>
	</div>
	<Categories
		{galleryData}
		bind:selectedCategory
		on:categoryChange={(e) => (selectedCategory = e.detail)}
	/>
	<PhotoGrid
		items={filteredItems}
		bind:currentImage
		on:openChange={(e) => {
			currentImage = e.detail;
			isOpen = true;
		}}
	/>
	{#if isOpen}
		<ImageModal images={filteredItems} {currentImage} on:openChange={() => (isOpen = false)} />
	{/if}
</section>
