<script>
  import client from '$lib/index.js';
  import { onMount } from 'svelte';

	import '../app.postcss';
	import Header from '../components/layout/Header.svelte';
	import Footer from '../components/layout/Footer.svelte';

	let business;
	let navItems;
	onMount(async () => {
		const fetchedData = await client.fetch('*[_type == "navigation"]{ business, navItems }[0]');
		business = fetchedData?.business;
		navItems = fetchedData?.navItems;
	});
</script>

<Header {business} {navItems} />

<slot />

<Footer {business} />
