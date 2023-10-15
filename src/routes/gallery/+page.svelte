<script>
	import { afterUpdate, onMount } from 'svelte';
	import ImageModal from '../../components/UI/ImageModal.svelte';
	import PhotoGrid from '../../components/gallery/PhotoGrid.svelte';
	import Categories from '../../components/gallery/Categories.svelte';
	import client from '$lib/index.js';

	let isOpen = false;
	let currentImage = null;
	let selectedCategory = 'All';

	afterUpdate(() => {
		if (typeof window !== 'undefined') window.dispatchEvent(new Event('resize'));
	});
	let title;
	let subtitle;
	let categories;
	let images;
	let allImages = [];
	let filteredImages = [];
	onMount(async () => {
		const fetchedData = await client.fetch(
			'*[_type == "gallery"]{ title, subtitle, photographs  , "categories": photographs[].category->title, "imageUrls": photographs[].image.asset->url }[0]'
		);
		title = fetchedData?.title;
		subtitle = fetchedData?.subtitle;
		categories = fetchedData?.categories;

		const fetchedData2 = await client.fetch(
			'*[_type == "photograph"] {"category": category->title, "imageUrl": image.asset->url}'
		);
		allImages = fetchedData2;
	});
	$: {
		filteredImages = allImages.filter(
			(item) => selectedCategory === 'All' || item.category === selectedCategory
		);
	}
</script>

<section class="min-h-screen">
	{#if !title || !allImages}
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
		<div class="text-center my-8">
			<h1>{title}</h1>
			{#if subtitle}
				<p>{subtitle}</p>
			{/if}
		</div>
		<Categories
			{categories}
			bind:selectedCategory
			on:categoryChange={(e) => (selectedCategory = e.detail)}
		/>
		<PhotoGrid
			items={filteredImages}
			bind:currentImage
			on:openChange={(e) => {
				currentImage = e.detail;
				isOpen = true;
			}}
		/>

		{#if isOpen}
			<ImageModal images={filteredImages} {currentImage} on:openChange={() => (isOpen = false)} />
		{/if}
	{/if}
</section>
