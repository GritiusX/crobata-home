<template>
	<div
		class="flex flex-col w-full max-w-[254px] h-[600px] p-8 gap-4 rounded-lg border border-gray-200 bg-white"
	>
		<div class="flex flex-col gap-2">
			<p class="text-xl font-medium">{{ title }}</p>
			<p class="text-sm h-20">
				{{ description }}
			</p>
		</div>
		<div class="h-20">
			<p v-if="typeof price === 'string'" class="text-3xl font-medium">
				{{ formatPrice }}
			</p>
			<div v-else class="flex flex-col gap-1 w-full">
				<p class="flex w-full gap-3 items-center">
					<span class="text-3xl font-semibold w-[60%] whitespace-nowrap"
						>${{ formatPrice[0] }}</span
					>
					<span class="text-xs font-light w-[40%]"
						>per month billed annually</span
					>
				</p>
				<p class="font-light text-sm">
					<span class="font-semibold">${{ formatPrice[1] }}</span> billed
					monthly
				</p>
			</div>
		</div>
		<nuxt-link to="/signup" xyz="fade up front delay-8" :class="formatButton">
			{{ buttonText }}
		</nuxt-link>

		<div class="mt-4">
			<p class="mb-2 font-semibold">Tier includes:</p>
			<ul class="text-xs flex flex-col items-start gap-2">
				<li class="flex gap-2" v-for="options in optionsToShow">
					<CheckIcon class="h-4 w-4" />{{ options }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/24/outline";
const props = defineProps({
	title: {
		type: String,
		default: "Card Title",
	},
	description: {
		type: String,
		default: "Card description",
	},
	price: {
		type: [Object, String],
		default: "Free",
	},
	buttonType: {
		type: Number,
		default: 1,
	},
	buttonText: {
		type: String,
		default: "Sign up",
	},
	optionsToShow: {
		type: Array,
		default: [
			"Unlimited Experiments",
			"Unlimited users",
			"All API Integrations",
			"Interface Designer",
		],
	},
});
const { price, buttonType } = props;
const formatPrice = computed(() => {
	if (typeof price !== "string") {
		const mappedPrices = Object.values(price).map((value) => {
			return value;
		});

		return mappedPrices;
	}
	return price;
});
const formatButton = computed(() => {
	if (buttonType === 1) {
		return "border-2 border-gray-600 text-gray-800 px-4 py-3 rounded-full text-sm bg-transparent enabled:hover:bg-gray-600 enabled:hover:border-gray-600 focus:shadow-none enabled:active:bg-gray-600 enabled:active:border-gray-600";
	}
	if (buttonType === 2) {
		return "bg-pinky border-pinky px-4 py-3 text-white rounded-full enabled:hover:bg-rose-700 enabled:hover:border-rose-700 focus:shadow-none enabled:active:bg-rose-700 enabled:active:border-rose-700";
	}
	return "bg-bluey text-white px-4 py-3 rounded-full text-sm focus:shadow-none enabled:hover:bg-blue-800";
});
</script>
