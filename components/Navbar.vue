<template>
	<header>
		<nav
			class="flex flex-row justify-between items-center w-full h-20 py-4 px-8 xl:py-2 xl:px-4 gap-9 font-semibold bg-white"
		>
			<NuxtLink
				to="/"
				class="flex items-center w-full justify-between md:w-auto"
			>
				<div class="flex items-center">
					<img
						class="w-[150px] cursor-pointer"
						src="@/assets/images/svg/Crobata-logo.svg"
						alt="Crobata logo home button"
					/>
				</div>
			</NuxtLink>
			<div
				class="hidden lg:flex flex-row w-full justify-between gap-4 mt-1 items-center"
			>
				<div class="flex flex-row items-center gap-5">
					<nuxt-link
						to="/platform"
						class="flex gap-2 items-center hover:text-pinky"
					>
						Platform <ChevronRightIcon class="w-3 h-3 mt-1" />
					</nuxt-link>
					<nuxt-link
						to="/solutions"
						class="flex gap-2 items-center hover:text-bluey"
					>
						Solutions <ChevronRightIcon class="w-3 h-3 mt-1" />
					</nuxt-link>
					<a
						href="https://calendly.com/guidopawluk-kj0/crobata-book-a-demo-schedule"
						class="flex gap-2 items-center hover:text-pinky cursor-pointer"
						target="_blank"
						rel="noopener noreferrer"
						>Book a demo <ChevronRightIcon class="w-3 h-3 mt-1"
					/></a>
					<nuxt-link
						to="/pricing"
						class="flex gap-2 items-center hover:text-bluey"
					>
						Pricing <ChevronRightIcon class="w-3 h-3 mt-1" />
					</nuxt-link>
				</div>
				<div class="flex items-center gap-4">
					<!-- border-2 border-gray-600 text-gray-800 px-4 py-2 rounded-full text-sm bg-transparent  -->
					<Button
						class="border-2 border-gray-300 text-gray-600 px-4 py-2 rounded-md enabled:hover:bg-gray-600 enabled:hover:border-gray-600 focus:shadow-none enabled:active:bg-gray-600 enabled:active:border-gray-600"
						label="Contact Sales"
						size="small"
					/>
					<Button
						class="bg-pinky border-pinky text-white px-4 py-2 rounded-md enabled:hover:bg-rose-700 enabled:hover:border-rose-700 focus:shadow-none enabled:active:bg-rose-700 enabled:active:border-rose-700"
						label="Sign up for free"
						size="small"
					/>
					<Button
						class="bg-bluey text-white px-4 py-2 rounded-md enabled:hover:bg-blue-800 enabled:hover:border-blue-800 focus:shadow-none enabled:active:bg-blue-800 enabled:active:border-blue-800"
						label="Sign in"
						size="small"
					/>
				</div>
			</div>
			<div class="lg:hidden">
				<XMarkIcon v-if="wasClicked" class="w-8 h-8" @click="toggleMenu" />
				<Bars3Icon v-else class="w-8 h-8" @click="toggleMenu" />
			</div>
		</nav>
		<div v-if="wasClicked" class="relative flex justify-end items-start">
			<div
				v-if="wasClicked"
				class="absolute flex flex-col gap-4 w-full px-6 pb-2 h-[calc(100vh - 70px)] bg-white font-semibold text-xl"
			>
				<span class="w-full border-t" />
				<div class="flex justify-between items-center">
					<p class="w-full py-2">Platform</p>
					<ChevronRightIcon class="w-6 h-6" />
				</div>
				<div class="flex justify-between items-center">
					<p class="w-full py-2">Solutions</p>
					<ChevronRightIcon class="w-6 h-6" />
				</div>
				<div class="flex justify-between items-center">
					<p class="w-full py-2">Book a demo</p>
					<ChevronRightIcon class="w-6 h-6" />
				</div>
				<div class="flex justify-between items-center">
					<p class="w-full py-2">Pricing</p>
					<ChevronRightIcon class="w-6 h-6" />
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
import { ref } from "vue";
import {
	Bars3Icon,
	XMarkIcon,
	ChevronRightIcon,
} from "@heroicons/vue/24/outline";

const wasClicked = ref(false);
const toggleMenu = () => {
	wasClicked.value = !wasClicked.value;
};
const closeMenu = () => {
	wasClicked.value = false;
};
</script>

<style scoped></style>
