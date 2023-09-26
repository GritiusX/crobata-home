// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	devServer: {
		port: 3001,
	},
	modules: ["@nuxtjs/tailwindcss"],
	css: [
		"primevue/resources/themes/lara-light-blue/theme.css",
		"@/assets/css/main.css",
	],
	build: {
		transpile: ["primevue"],
	},
});
