// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	devServer: {
		port: 3001,
	},
	modules: [
		"@nuxtjs/tailwindcss",
		[
			"@vee-validate/nuxt",
			{
				// disable or enable auto imports
				autoImports: true,
				// Use different names for components
				componentNames: {
					Form: "VeeForm",
					Field: "VeeField",
					FieldArray: "VeeFieldArray",
					ErrorMessage: "VeeErrorMessage",
				},
			},
		],
	],
	css: [
		"primevue/resources/themes/lara-light-blue/theme.css",
		"@/assets/css/main.css",
	],
	build: {
		transpile: ["primevue", "@animxyz/core", "@animxyz/vue3", "clsx"],
	},
});
