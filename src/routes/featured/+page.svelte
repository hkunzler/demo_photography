<script>
	import FeaturedCard from '../../components/featured/FeaturedCard.svelte';

	let featuredWork = [
		{
			id: 1,
			title: "Nature's Marvels: A Photographic Journey",
			date: 'October 1, 2023',
			description:
				'A feature in "Photography Today" magazine highlighting the wonders of nature as captured through the lens.',
			thumbnail: 'https://via.placeholder.com/150',
			url: 'https://photographytoday.com/natures-marvels'
		},
		{
			id: 2,
			title: 'Urban Landscapes: Capturing the City Vibe',
			date: 'August 23, 2023',
			description:
				'An article in "Urban Explorer" that delves into the essence of cityscapes and street photography.',
			thumbnail: 'https://via.placeholder.com/150',
			url: 'https://urbanexplorer.com/urban-landscapes'
		},
		{
			id: 3,
			title: 'The Ethereal Charm of Deserts',
			date: 'July 15, 2023',
			description:
				'Featured in "Traveler\'s Journal", this article showcases the mesmerizing beauty of deserts from around the world.',
			thumbnail: 'https://via.placeholder.com/150',
			url: 'https://travelersjournal.com/desert-charm'
		},
		{
			id: 4,
			title: 'In Focus: Underwater Wonders',
			date: 'June 5, 2023',
			description:
				'Dive into the depths with "Marine Life Magazine" as we explore stunning underwater photography.',
			thumbnail: 'https://via.placeholder.com/150',
			url: 'https://marinelife.com/underwater-wonders'
		},
		{
			id: 5,
			title: 'Spotlight: The Magic of Golden Hour',
			date: 'May 20, 2023',
			description:
				'A special feature in "Sunset Magazine" dedicated to the magical moments during golden hour.',
			thumbnail: 'https://via.placeholder.com/150',
			url: 'https://sunsetmagazine.com/golden-hour-magic'
		},
		{
			id: 6,
			title: 'Mountain Peaks: Touching the Sky',
			date: 'April 30, 2023',
			description:
				'Join "Adventure Weekly" in exploring breathtaking mountain vistas from around the globe.',
			thumbnail: 'https://via.placeholder.com/150',
			url: 'https://adventureweekly.com/mountain-peaks'
		},
		{
			id: 7,
			title: 'Whispers of the Forest',
			date: 'March 25, 2023',
			description:
				'A serene journey through enchanting forests, as featured in "Nature\'s Symphony" magazine.',
			thumbnail: 'https://via.placeholder.com/150',
			url: 'https://naturessymphony.com/forest-whispers'
		},
		{
			id: 8,
			title: 'Frozen Realms: Polar Photography',
			date: 'February 14, 2023',
			description:
				'Venture into the cold with "Polar Explorer" magazine to witness the pristine beauty of the poles.',
			thumbnail: 'https://via.placeholder.com/150',
			url: 'https://polarexplorer.com/frozen-realms'
		},
		{
			id: 9,
			title: 'The Lively Streets of Europe',
			date: 'January 8, 2023',
			description:
				'Walk through Europe with "Globe Trotter" as we capture the everyday charm of its streets.',
			thumbnail: 'https://via.placeholder.com/150',
			url: 'https://globetrotter.com/european-streets'
		},
		{
			id: 10,
			title: 'Celestial Beauty: Starry Nights',
			date: 'December 25, 2022',
			description:
				'Stargaze with "Cosmic Visions" magazine as we explore nights filled with stars and dreams.',
			thumbnail: 'https://via.placeholder.com/150',
			url: 'https://cosmicvisions.com/starry-nights'
		}
	];
</script>

<section>
	<h1 class="text-4xl font-primary font-bold mb-10 text-center">Featured</h1>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
		{#each featuredWork as featured}
			<FeaturedCard item={featured} />
		{/each}
	</div>
</section>
