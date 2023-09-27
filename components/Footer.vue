<template>
	<footer
		class="flex flex-col items-center justify-center w-full gap-6 mt-10 py-8 border-t 2xl:px-36"
	>
		<NuxtLink to="/" class="flex w-full justify-start">
			<div class="flex items-center px-8">
				<img
					class="w-[150px] cursor-pointer"
					src="@/assets/images/svg/Crobata-logo.svg"
					alt="Crobata logo home button"
				/>
			</div>
		</NuxtLink>
		<div
			class="flex flex-col px-10 xs:grid xs:grid-cols-2 xs:gap-x-0 xs:gap-y-4 mdb:grid-cols-4 mdb:gap-x-8 mdb:gap-y-0 mlg:gap-0 w-full gap-4"
		>
			<div class="flex flex-col items-start gap-1">
				<h2 class="font-medium">Quick Links</h2>
				<nuxt-link class="text-sm" to="/platform">Platform</nuxt-link>
				<nuxt-link class="text-sm" to="/solutions">Solutions</nuxt-link>
				<a
					class="text-sm"
					href="https://calendly.com/guidopawluk-kj0/crobata-book-a-demo-schedule"
					>Book a demo</a
				>
				<nuxt-link class="text-sm" to="/Pricing">Pricing</nuxt-link>
			</div>
			<div class="flex flex-col items-start gap-1">
				<h2 class="font-medium">News</h2>

				<ul>
					<li class="text-sm" v-for="news in newsLinks" :key="news">
						{{ news }} <Tag class="py-0.5" value="Soon" rounded />
					</li>
				</ul>
			</div>
			<div class="flex flex-col items-start gap-1">
				<h2 class="font-medium">Support</h2>
				<ul>
					<li
						class="text-sm mb-1"
						v-for="support in supportLinks"
						:key="support"
					>
						{{ support }} <Tag class="py-0.5" value="Soon" rounded />
					</li>
				</ul>
			</div>
			<div class="flex flex-col items-start gap-1">
				<h2 class="font-medium">Company</h2>
				<ul>
					<li class="text-sm" v-for="company in companyLinks" :key="company">
						{{ company }} <Tag class="py-0.5" value="Soon" rounded />
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<script setup>
const newsLinks = ref(["Upcoming features"]);
const supportLinks = ref(["Contact Us", "Help Center"]);
const companyLinks = ref(["About Us"]);
</script>
