<template>
	<section
		class="flex flex-col mdb:flex-row w-full items-center justify-center center px-4 py-10 gap-10"
	>
		<div class="flex flex-col items-center w-full gap-3">
			<h1 class="text-4xl text-center font-semibold">
				Access your Free Trial account
			</h1>
			<p class="text-xl text-center font-light text-gray-500">
				Get a 1-month service for Free at Crobata
			</p>

			<Form
				@submit="onSubmit"
				:validation-schema="schema"
				class="flex flex-col xs:h-fit w-full sm:w-[500px] gap-4 mt-6"
				v-slot="{ errors }"
			>
				<div v-if="actualPage === 0" class="flex flex-col gap-2 py-6">
					<div>
						<button
							class="w-full p-2 bg-white text-black rounded flex items-center justify-center border border-gray-300 hover:bg-gray-100"
						>
							<img
								src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
								alt="Google Icon"
								class="h-5 w-5 mr-2"
							/>
							Sign up with Google
						</button>
					</div>
					<div class="my-2 flex items-center justify-center">
						<div class="text-center text-gray-500 px-2">OR</div>
					</div>
					<Button
						class="flex w-full items-center justify-center border-bluey text-bluey font-medium enabled:hover:bg-blue-800 enabled:hover:border-blue-800 focus:shadow-none enabled:active:bg-blue-800 enabled:active:border-blue-800"
						@click="handleWorkEmail"
						>Sign up with work email</Button
					>
					<p class="text-gray-500 text-xs mt-2">
						By creating an account, you agree to the
						<span class="text-black font-semibold"> Terms of Service </span>
						and
						<span class="text-black font-semibold">Privacy Policy</span>
					</p>
				</div>
				<XyzTransitionGroup
					v-if="actualPage === 1"
					class="hero xyz-in"
					:appear="true"
					xyz="fade"
				>
					<div class="flex flex-col gap-2 py-6" key="SignUpPage">
						<label for="email" class="font-medium">Work email</label>
						<Field
							name="email"
							type="email"
							class="px-3 py-2 rounded-md bg-gray-200 placeholder:text-sm placeholder:font-light placeholder:text-black w-full"
							:class="{
								'bg-red-100 border border-red-400 outline-red-600':
									errors.email,
							}"
							placeholder="test@email.com"
						/>
						<ErrorMessage class="text-sm text-red-400" name="email" />
						<Button
							type="submit"
							class="w-full justify-center mt-4 bg-black border-black focus:shadow-none"
							>Sign up to Crobata</Button
						>
						<p class="text-gray-500 text-xs mt-2">
							By signing up, you agree to the
							<span class="text-black font-semibold"> Terms of Use </span> &
							<span class="text-black font-semibold">Privacy Policy</span>
						</p>
					</div>
				</XyzTransitionGroup>
				<XyzTransitionGroup
					v-if="actualPage === 2"
					class="hero xyz-in"
					:appear="true"
					xyz="fade"
				>
					<div class="flex flex-col gap-2 py-6" key="SignUpPage">
						<h2 class="text-3xl text-center font-semibold">
							Please verify your email
						</h2>
						<p class="text-lg text-center font-light text-gray-500">
							We've sent a special link to your address
						</p>

						<Button
							@click="goHomePage"
							type="button"
							class="w-full justify-center mt-4 bg-black border-black focus:shadow-none"
							>Home</Button
						>
					</div>
				</XyzTransitionGroup>
			</Form>
		</div>
	</section>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { supabase } from "~/plugins/supabase";

definePageMeta({
	layout: "signup",
});

const actualPage = ref(0);

const schema = yup.object({
	email: yup
		.string()
		.email("Email must be valid")
		.required("Email is a required field"),
});

const handleWorkEmail = () => {
	actualPage.value = 1;
};
const goHomePage = () => {
	navigateTo("/");
};
const onSubmit = async (values) => {
	let { email } = values;

	await supabase.auth.signInWithOtp({
		email: email,
		options: {
			emailRedirectTo: "https://crobata.vercel.app/",
		},
	});

	actualPage.value = 2;
};
/* 
const handleAuth = async () => {
	isLoading.value = true;

	if (isRegistering.value) {
		const registerStatus = await userStore.registerUser(
			registerEmail.value,
			registerPassword.value,
			fullName.value,
			organization.value
		);

		if (!registerStatus.success) {
			toast.error(registerStatus.message, { rtl: true });
			isLoading.value = false;
		} else {
			toast.success("Successfully registered. Logging you in...", {
				rtl: true,
			});
			isLoading.value = false;

			try {
				// Attempt to sign the user in after successful registration
				await userStore.signIn(registerEmail.value, registerPassword.value);
				toast.success("Successfully logged in. Redirecting...", { rtl: true });
				navigateTo("/app/settings");
				isLoading.value = false;
			} catch (error) {
				toast.error("Login failed after registration: " + error.message, {
					rtl: true,
				});
				isLoading.value = false;

				// Handle or navigate to a recovery state, as login failed immediately after registration
			}
		}
	}

	if (!isValidLoginEmail.value) {
		toast.error("Invalid email address.", { rtl: true });
		isLoading.value = false;

		return;
	}

	if (!isValidLoginPassword.value) {
		toast.error("Password must be at least 8 characters long.", { rtl: true });
		isLoading.value = false;

		return;
	}

	// If not register, then SIG IN
	try {
		let toastId = null;
		let toastIdSuccess = null;

		toastId = toast.info("Initiating Experiment Hub", {
			duration: 300,
			rtl: true,
		});

		await userStore.signIn(loginEmail.value, loginPassword.value);

		toast.dismiss(toastId);
		toastIdSuccess = toast.success("Successfully signed in.", {
			duration: 500,
			rtl: true,
		});
		await new Promise((resolve) => setTimeout(resolve, 200));
		isLoading.value = false;

		if (toastIdSuccess !== null) {
			toast.dismiss(toastId, { rtl: true });
		}
		navigateTo("/app/experimentsMain");
	} catch (err) {
		isLoading.value = false;

		console.error("Login failed:", err);
		toast.error(`Login failed: ${err.message || "An unknown error occurred"}`, {
			rtl: true,
		});
	}
	isLoading.value = false;
}; */
</script>
