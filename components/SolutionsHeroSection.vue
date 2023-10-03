<template>
	<section
		class="flex flex-col mdb:flex-row w-full gap-6 justify-center lg:justify-evenly items-center py-10"
	>
		<div
			class="flex flex-col w-full lg:w-[50%] gap-5 p-6 xl:gap-7 md:items-center mdb:justify-center mdb:items-start text-center mdb:text-start font-semibold"
		>
			<h1 class="text-5xl lg:text-6xl 2xl:text-7xl leading-snug text-bluey">
				Make your data accesible for everyone
			</h1>
			<span class="font-medium w-full lg:w-[70%] 2xl:w-[60%]">
				Easily document and share experiment results for seamless company-wide
				learning.
			</span>
			<div class="flex flex-col justify-center gap-5 sm:flex-row md:text-xl">
				<nuxt-link
					to="/signup"
					xyz="fade up front delay-8"
					class="flex items-center bg-bluey text-white px-4 py-2 rounded-md enabled:hover:bg-blue-800 enabled:hover:border-blue-800 focus:shadow-none enabled:active:bg-blue-800 enabled:active:border-blue-800"
				>
					Sign up for free
				</nuxt-link>
				<Button
					class="border-2 border-gray-300 text-gray-600 px-4 py-2 rounded-md enabled:hover:bg-gray-600 enabled:hover:border-gray-600 focus:shadow-none enabled:active:bg-gray-600 enabled:active:border-gray-600"
					label="Contact Sales"
					size="small"
				/>
			</div>
		</div>

		<img
			class="w-[90%] xs:w-[75%] sm:w-[45%] lg:w-[35%] 2xl:w-[30%] rounded-lg"
			src="@/assets/images/6-BLUE-Company-amico.png"
			alt="Visual data illustration by Jeremiah Shaw"
		/>
	</section>
</template>

<script setup></script>
