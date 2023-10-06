// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss", "@vee-validate/nuxt"],
	plugins: ["~/plugins/supabase.js"],
	css: [
		"primevue/resources/themes/lara-light-blue/theme.css",
		"@/assets/css/main.css",
	],
	build: {
		transpile: ["primevue", "@animxyz/core", "@animxyz/vue3", "clsx"],
	},
});
