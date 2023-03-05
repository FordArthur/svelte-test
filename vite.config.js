import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		fs: {
		  allow: ['..']
		}
	  },
	base:'/svelte-app/'
};

export default config;

