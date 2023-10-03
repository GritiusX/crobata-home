<template>
	<section
		class="flex flex-col mdb:flex-row w-full items-center justify-center center px-4 py-10 gap-10"
	>
		<div class="flex flex-col w-full mdb:w-[40%] gap-6">
			<h1 class="text-4xl text-center sm:text-start">Create an account</h1>

			<Form
				@submit="onSubmit"
				:validation-schema="schema"
				class="flex flex-col xs:h-fit w-full gap-4"
				v-slot="{ errors }"
			>
				<div class="flex flex-col sm:flex-row w-full gap-4">
					<div class="flex flex-col w-full gap-2">
						<Field
							name="first_name"
							type="text"
							class="px-3 py-2 rounded-md bg-gray-200 placeholder:text-sm placeholder:font-light placeholder:text-black w-full"
							:class="{
								'bg-red-100 border border-red-400 outline-red-600':
									errors.first_name,
							}"
							label="First Name"
							placeholder="First Name"
						/>
						<ErrorMessage class="text-sm text-red-400" name="first_name" />
					</div>
					<div class="flex flex-col w-full gap-2">
						<Field
							name="last_name"
							type="text"
							class="px-3 py-2 rounded-md bg-gray-200 placeholder:text-sm placeholder:font-light placeholder:text-black w-full"
							:class="{
								'bg-red-100 border border-red-400 outline-red-600':
									errors.last_name,
							}"
							placeholder="Last name"
						/>
						<ErrorMessage class="text-sm text-red-400" name="last_name" />
					</div>
				</div>
				<div class="flex flex-col gap-2">
					<Field
						name="organization"
						type="text"
						class="px-3 py-2 rounded-md bg-gray-200 placeholder:text-sm placeholder:font-light placeholder:text-black w-full"
						:class="{
							'bg-red-100 border border-red-400 outline-red-600':
								errors.organization,
						}"
						placeholder="Organization"
					/>
					<ErrorMessage class="text-sm text-red-400" name="organization" />
				</div>
				<div class="flex flex-col gap-2">
					<Field
						name="email"
						type="email"
						class="px-3 py-2 rounded-md bg-gray-200 placeholder:text-sm placeholder:font-light placeholder:text-black w-full"
						:class="{
							'bg-red-100 border border-red-400 outline-red-600': errors.email,
						}"
						placeholder="test@email.com"
					/>
					<ErrorMessage class="text-sm text-red-400" name="email" />
				</div>
				<div class="flex flex-col gap-2">
					<Field
						name="password"
						type="password"
						class="px-3 py-2 rounded-md bg-gray-200 placeholder:text-sm placeholder:font-light placeholder:text-black w-full"
						:class="{
							'bg-red-100 border border-red-400 outline-red-600':
								errors.password,
						}"
						placeholder="Password"
					/>
					<ErrorMessage class="text-sm text-red-400" name="password" />
				</div>
				<Button
					type="submit"
					class="w-full sm:w-[150px] justify-center bg-black border-black focus:shadow-none"
					>Sign up</Button
				>
			</Form>
		</div>
		<div class="flex flex-col items-center w-full mdb:w-[50%] gap-6">
			<div class="flex flex-row items-center justify-center w-full gap-6">
				<img
					class="w-[45%] rounded-xl"
					src="@/assets/images/workingOnComputer.jpg"
					alt="Crobata complete logo"
				/>
				<img
					class="w-[45%] rounded-xl"
					src="@/assets/images/cooperatingTeamWorking.jpg"
					alt="Crobata complete logo"
				/>
			</div>
			<div class="flex flex-row items-center justify-center w-full gap-6">
				<img
					class="w-[45%] rounded-xl"
					src="@/assets/images/menWomenWorking.jpg"
					alt="Crobata complete logo"
				/>
				<img
					class="w-[45%] rounded-xl"
					src="@/assets/images/startingToWork.jpg"
					alt="Crobata complete logo"
				/>
			</div>
		</div>
	</section>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
definePageMeta({
	layout: "signup",
});

const schema = yup.object({
	first_name: yup.string().required("First name is a required field"),
	last_name: yup.string().required("Last name is a required field"),
	organization: yup.string().required("Organization is a required field"),
	email: yup
		.string()
		.email("Email must be valid")
		.required("Email is a required field"),
	password: yup
		.string()
		.required("Password is a required field")
		.min(8, "Password must be at least 8 characters long"),
});

const onSubmit = (values, { resetForm }) => {
	console.log(JSON.stringify(values, null, 2));
	resetForm();
};
</script>
