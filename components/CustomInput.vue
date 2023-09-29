<template>
	<div class="flex flex-col gap-2 w-full">
		<label class="text-sm" :for="id"
			>{{ title }}<span v-if="required">*</span></label
		>
		<div
			class="flex w-full items-center justify-between bg-gray-300 rounded-md"
		>
			<input
				v-if="isPassword"
				:class="`px-3 py-2 rounded-l-md bg-gray-200 placeholder:text-sm placeholder:font-light ${
					isPassword ? 'w-[93%]' : 'w-full'
				}`"
				:id="id"
				v-bind:type="[showPassword ? 'text' : 'password']"
				:placeholder="title"
				v-model="modelValue"
				@input="updateValue"
			/>
			<input
				v-else
				class="px-3 py-2 rounded-md bg-gray-200 placeholder:text-sm placeholder:font-light w-full"
				:id="id"
				:type="type"
				:placeholder="title"
				v-model="modelValue"
				@input="updateValue"
			/>
			<span
				v-if="isPassword"
				class="cursor-pointer"
				@click="showPassword = !showPassword"
			>
				<EyeIcon v-if="showPassword" class="w-4 h-4 mr-2" />
				<EyeSlashIcon v-else class="w-4 h-4 mr-2" />
			</span>
		</div>
	</div>
</template>
<script setup>
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
	title: {
		type: String,
		default: "Default input title",
	},
	type: {
		type: String,
		default: "text",
	},
	id: {
		type: String,
		default: "input",
	},
	required: {
		type: Boolean,
		default: false,
	},
	isPassword: {
		type: Boolean,
		default: false,
	},
});
let { title, type, id, required, isPassword } = props;
const modelValue = ref("");

const emit = defineEmits(["update:modelValue"]);
const updateValue = (event) => {
	emit("update:modelValue", event.target.value);
};
const showPassword = ref(false);
</script>
