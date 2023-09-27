<template>
	<HeroSection />
	<BrandsSection />
	<section
		class="flex flex-col w-full gap-10 px-2 justify-around lg:justify-around items-center py-20 sm:px-8 mlg:px-16 sm:flex-row bg-white"
	>
		<div
			class="text-2xl mdb:text-3xl xl:text-4xl sm:w-[55%] lg:w-[45%] 2xl:w-[35%] font-medium text-center sm:text-start"
		>
			<h2>Shape the future of your business.</h2>
			<h2 class="mt-3 xs:mt-0">
				Empower you teams to design better user experiences from the ground up.
			</h2>
		</div>
		<img
			class="w-[90%] xs:w-[75%] sm:w-[45%] lg:w-[35%] mxl:w-[24%] 2xl:w-[25%] rounded-lg"
			src="@/assets/images/HomeImage3.png"
			alt="Visual data illustration by Jeremiah Shaw"
		/>
	</section>
	<section
		class="flex flex-col w-full gap-10 px-2 justify-around items-center py-20 sm:px-6 xl:px-16 2xl:px-32 sm:flex-row bg-gray-100"
	>
		<img
			class="w-[90%] xs:w-[75%] sm:w-[45%] lg:w-[35%] mxl:w-[24%] 2xl:w-[25%] rounded-lg"
			src="@/assets/images/5-PINK-Data-analysis-amico.png"
			alt="Data driven isometric illustration by Storyset in Freepik"
		/>
		<div
			class="flex flex-col gap-4 text-2xl mdb:text-3xl xl:text-4xl sm:w-[55%] lg:w-[45%] 2xl:w-[35%] font-medium text-center sm:text-start"
		>
			<h2>
				Harness the insights from past experimets to create wining strategies
				for tomorrow.
			</h2>
			<p
				class="flex gap-2 items-center justify-center sm:justify-start text-sm lg:text-base text-pink-600"
			>
				Know how to use Crobata: COMING SOON
			</p>
		</div>
	</section>
	<section
		class="flex flex-col w-full lg:w-[75%] self-center gap-10 sm:gap-4 justify-around items-center my-20 sm:flex-row bg-purple-100 xs:mx-6 xs:rounded-lg pb-5 sm:pb-0"
	>
		<div
			class="flex flex-col items-center w-full py-20 sm:py-10 sm:w-[55%] lg:w-[45%] xs:rounded-lg xs:shadow-lg bg-purple-200"
		>
			<img
				class="w-[90%] xs:w-[75%] lg:w-[45%] rounded-lg"
				src="../assets/images/computerImage.png"
				alt="Data driven isometric illustration by Storyset in Freepik"
			/>
		</div>
		<div
			class="flex flex-col gap-4 px-6 w-full sm:w-[45%] lg:w-[55%] sm:px-2 mdb:px-6 xl:px-12 items-center text-xl font-medium text-center sm:items-start sm:text-start"
		>
			<h2 class="text-lg mdb:text-xl font-normal text-gray-700">
				UPCOMING FEATURE
			</h2>
			<p
				class="text-2xl mdb:text-3xl xl:text-4xl font-semibold text-purple-800"
			>
				Get conclusions from our super advanced AI
			</p>
			<p class="text-sm lg:text-base font-normal text-gray-700 pb-6 sm:pb-0">
				AI + Experimentation = HYPERGROWTH!
			</p>
		</div>
	</section>
	<section
		class="flex flex-col w-full gap-10 px-2 justify-around items-center py-20 sm:px-6 xl:px-16 2xl:px-32 sm:flex-row"
	>
		<div
			class="flex flex-col gap-4 sm:w-[55%] lg:w-[45%] 2xl:w-[35%] items-center text-2xl mdb:text-3xl xl:text-4xl font-medium text-center sm:items-start sm:text-start"
		>
			<h2>Integrated with the big A/B testing Platforms</h2>
			<p class="flex gap-2 items-center text-sm lg:text-base text-gray-500">
				Connect your experimentation platform and let the Crobata do the work.
				Share access and allow your company to feed from your knowledge
			</p>
			<p
				class="flex gap-2 items-center justify-center sm:justify-start text-sm lg:text-base text-pink-600"
			>
				View all integrations: COMING SOON
			</p>
		</div>
		<img
			class="w-[90%] xs:w-[75%] sm:w-[45%] lg:w-[35%] mxl:w-[24%] 2xl:w-[25%] rounded-lg"
			src="@/assets/images/6-PINK-Sentiment-analysis-amico.png"
			alt="Data driven isometric illustration by Storyset in Freepik"
		/>
	</section>
	<section
		class="flex flex-col sm:flex-row w-full justify-center text-center sm:text-start items-center gap-10 px-4 xs:px-8 sm:px-10 xl:px-16 mxl:px-20 2xl:px-16 3xl:px-32 py-20 bg-white"
	>
		<h2 class="text-4xl lg:text-5xl font-semibold 2xl:w-[40%]">
			User-Friendly platform, Expert results:
		</h2>
		<p class="text-base lg:text-lg 2xl:w-[40%]">
			No steep learning curve - our intuitive interface makes A/B test
			management a breeze.
		</p>
	</section>
	<section
		class="flex flex-col w-full lg:w-[85%] self-center gap-10 sm:gap-4 justify-around items-center my-20 sm:flex-row bg-gray-100 xs:mx-6 xs:rounded-lg p-5 lg:p-12"
	>
		<img
			class="w-[90%] sm:w-[50%] rounded-lg shadow-lg"
			src="@/assets/images/PlatformImage1.png"
			alt="Crobata Platform home page illustration"
		/>
		<div
			class="flex flex-col gap-4 md:gap-10 px-6 w-full sm:w-[45%] sm:px-2 mdb:px-6 xl:px-12 items-center sm:items-start text-xl font-medium text-center sm:text-start"
		>
			<h2 class="text-lg md:text-2xl text-gray-700 w-[75%]">
				Crobata helped us to break down silos between data scientists, UI
				designers and marketing teams
			</h2>
			<div class="flex items-center space-x-4">
				<div class="w-12 h-12 rounded-full bg-blue-300"></div>
				<div>
					<h3 class="text-lg font-semibold">John Doe</h3>
					<p class="text-sm text-gray-600">Product Manager, Equinox</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ArrowLongRightIcon } from "@heroicons/vue/24/outline";

definePageMeta({
	layout: "default",
});
</script>

<style lang="scss" scoped></style>
