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
						class="w-36 cursor-pointer"
						src="@/assets/images/logo_transparent.png"
						alt="Crobata logo home button"
					/>
				</div>
			</NuxtLink>
			<div class="hidden lg:flex flex-row w-full justify-between gap-4 mt-1">
				<div class="flex flex-row items-center gap-5">
					<span class="flex gap-2 items-center hover:text-pinky"
						>Platform <ChevronRightIcon class="w-3 h-3 mt-1"
					/></span>
					<span class="flex gap-2 items-center hover:text-bluey"
						>Solutions <ChevronRightIcon class="w-3 h-3 mt-1"
					/></span>
					<span class="flex gap-2 items-center hover:text-pinky"
						>Book a demo <ChevronRightIcon class="w-3 h-3 mt-1"
					/></span>
					<span class="flex gap-2 items-center hover:text-bluey"
						>Pricing <ChevronRightIcon class="w-3 h-3 mt-1"
					/></span>
				</div>
				<div class="flex items-center gap-4">
					<Button
						class="border-2 border-gray-200 text-gray-600 px-4 py-2 lg:py-2 lg:px-1 mlg:px-4 mlg:py-2 rounded-md"
						label="Contact Sales"
						size="small"
					/>
					<Button
						class="bg-pinky text-white px-4 py-2 lg:py-2 lg:px-1 mlg:px-4 mlg:py-2 rounded-md"
						label="Sign up for free"
						size="small"
					/>
					<Button
						class="bg-bluey text-white px-4 py-2 lg:py-2 lg:px-1 mlg:px-4 mlg:py-2 rounded-md"
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
