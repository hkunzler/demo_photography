<script>
	import { afterUpdate } from 'svelte';
	import ImageModal from '../../components/UI/ImageModal.svelte';
	import PhotoGrid from '../../components/gallery/PhotoGrid.svelte';
	import Categories from '../../components/gallery/Categories.svelte';

	let isOpen = false;
	let currentImage = null;
	let selectedCategory = 'All';

	const galleryItems = [
		{
			id: 1,
			title: 'Title 1',
			category: 'Category 1',
			imageUrl:
				'https://images.unsplash.com/photo-1490718720478-364a07a997cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			description: 'Description 1'
		},
		{
			id: 2,
			title: 'Title 2',
			category: 'Category 2',
			imageUrl:
				'https://images.unsplash.com/photo-1583122624368-93607357113c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			description: 'Description 2'
		},
		{
			id: 3,
			title: 'Title 2',
			category: 'Category 2',
			imageUrl:
				'    https://images.unsplash.com/photo-1590787996529-a542c86ca267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
			description: 'Description 2'
		},
		{
			id: 4,
			title: 'Title 1',
			category: 'Category 1',
			imageUrl:
				'https://images.unsplash.com/photo-1490718720478-364a07a997cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			description: 'Description 1'
		},
		{
			id: 5,
			title: 'Title 2',
			category: 'Category 2',
			imageUrl:
				'https://images.unsplash.com/photo-1583122624368-93607357113c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			description: 'Description 2'
		},
		{
			id: 6,
			title: 'Title 2',
			category: 'Category 2',
			imageUrl:
				'    https://images.unsplash.com/photo-1590787996529-a542c86ca267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
			description: 'Description 2'
		},
		{
			id: 7,
			title: 'Title 1',
			category: 'Category 1',
			imageUrl:
				'https://images.unsplash.com/photo-1490718720478-364a07a997cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			description: 'Description 1'
		},
		{
			id: 8,
			title: 'Title 2',
			category: 'Category 2',
			imageUrl:
				'https://images.unsplash.com/photo-1583122624368-93607357113c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			description: 'Description 2'
		},
		{
			id: 9,
			title: 'Title 2',
			category: 'Category 2',
			imageUrl:
				'    https://images.unsplash.com/photo-1590787996529-a542c86ca267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
			description: 'Description 2'
		},
		{
			id: 10,
			title: 'Title 1',
			category: 'Category 1',
			imageUrl:
				'https://images.unsplash.com/photo-1490718720478-364a07a997cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			description: 'Description 1'
		},
		{
			id: 11,
			title: 'Title 2',
			category: 'Category 2',
			imageUrl:
				'https://images.unsplash.com/photo-1583122624368-93607357113c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			description: 'Description 2'
		},
		{
			id: 12,
			title: 'Title 2',
			category: 'Category 2',
			imageUrl:
				'    https://images.unsplash.com/photo-1590787996529-a542c86ca267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
			description: 'Description 2'
		}
	];

	const categories = ['All', ...new Set(galleryItems.map((item) => item.category))];

	$: filteredItems = galleryItems.filter(
		(item) => selectedCategory === 'All' || item.category === selectedCategory
	);

	afterUpdate(() => {
		if (typeof window !== 'undefined') window.dispatchEvent(new Event('resize'));
	});
</script>

<section>
	<div class="text-center my-8">
		<h1>Gallery</h1>
		<p>A collection of my work.</p>
	</div>
	<Categories
		{categories}
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
		<ImageModal images={filteredItems} {currentImage} on:openChange={(e) => (isOpen = false)} />
	{/if}
</section>
