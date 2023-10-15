import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

const config = {
	kit: {
		adapter: adapter({k
			pages: 'build',
			assets: 'build',
			fallback: '200.html'
		})
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
