import { createClient } from "@supabase/supabase-js";

let storageOption;

if (process.client) {
	// Nuxt.js specific condition, replace as needed
	storageOption = localStorage;
}

const supabaseUrl = "https://icebaayxliidiovjhrgz.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljZWJhYXl4bGlpZGlvdmpocmd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5MTE4MDMsImV4cCI6MjAwODQ4NzgwM30.xnNn5TEBgg3p2NCgJ9EiiQ4ZR2RKj1dvYRzi7V6xqow";

export const supabase = createClient(supabaseUrl, supabaseKey, {
	db: {
		schema: "crobata_app", // specify the schema here
	},

	auth: {
		storage: storageOption, // Assign storage option here
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: true,
	},
});
export default defineNuxtPlugin((nuxtApp) => {
	// You can inject the Supabase client into the Nuxt context if needed
	nuxtApp.provide("supabase", supabase);
});
