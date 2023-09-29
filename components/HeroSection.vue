<template>
	<XyzTransitionGroup class="hero xyz-in" :appear="true" xyz="fade">
		<section
			class="flex flex-col mdb:flex-row w-full gap-6 justify-center lg:justify-evenly items-center py-20"
			key="mainSection"
		>
			<div
				class="flex flex-col w-full lg:w-[50%] mxl:w-[40%] gap-5 p-6 xl:gap-7 md:items-center mdb:justify-center mdb:items-start text-center mdb:text-start font-semibold"
			>
				<h1
					class="text-5xl lg:text-6xl 2xl:text-7xl leading-snug xyz-nested text-bluey"
					xyz="fade up front delay-3"
				>
					Unlock the power of your A/B Tests
				</h1>
				<span class="font-medium w-full xyz-nested" xyz="fade up front delay-6">
					Streamline, visualize and collaborate on your experiments
				</span>
				<div class="flex flex-col justify-center gap-5 sm:flex-row md:text-xl">
					<nuxt-link
						to="/signup"
						xyz="fade up front delay-8"
						class="flex px-4 py-2 rounded-md xyz-nested text-sm items-center text-white bg-bluey enabled:hover:bg-blue-800 enabled:hover:border-blue-800 focus:shadow-none enabled:active:bg-blue-800 enabled:active:border-blue-800"
					>
						Sign up for free
					</nuxt-link>
					<Button
						class="border-2 px-4 py-2 rounded-md xyz-nested border-gray-300 text-gray-600 enabled:hover:bg-gray-600 enabled:hover:border-gray-600 focus:shadow-none enabled:active:bg-gray-600 enabled:active:border-gray-600"
						label="Contact Sales"
						xyz="fade up front delay-8"
					/>
				</div>
			</div>

			<img
				class="w-[90%] xs:w-[75%] sm:w-[45%] lg:w-[35%] 2xl:w-[30%] rounded-lg mirrored-svg"
				src="@/assets/images/svg/crobata-logo-svg.svg"
				alt="Visual data illustration by Jeremiah Shaw"
			/>
		</section>
	</XyzTransitionGroup>
</template>

<script setup></script>

<style>
.hero {
	--xyz-duration-default: 2.5s;
}
.mirrored-svg {
	transform: scaleX(-1);
}
</style>
