<template>
	<PlatformBrandsSection />
	<section
		class="flex flex-col w-full gap-10 px-2 xs:px-6 justify-around lg:justify-around items-center py-20 mlg:py-10 sm:px-8 mlg:px-16 sm:flex-row bg-white"
	>
		<div
			class="text-2xl mdb:text-3xl sm:w-[55%] lg:w-[45%] mxl:w-[35%] px-4 sm:px-0 font-medium text-center sm:text-start"
		>
			<h2>Data-backend Decision-Making</h2>
			<h2 class="mt-3 text-sm lg:text-base font-normal">
				Go beyond numbers-turn data into action. CROBATA empowers you to make
				decisions that improve user experiences. Increase conversions and boost
				your bottom line.
			</h2>
		</div>
		<img
			class="w-[90%] xs:w-[75%] sm:w-[45%] md:w-[30%] lg:w-[25%]"
			src="@/assets/images/3-PINK-Visual-data-bro-PINK.png"
			alt="Experiment details Image comparison"
		/>
	</section>
	<section
		class="flex flex-col w-full gap-10 px-2 xs:px-6 justify-around lg:justify-around items-center py-20 sm:px-8 mlg:px-16 sm:flex-row bg-pinky text-white"
	>
		<img
			class="w-[90%] xs:w-[75%] sm:w-[45%] lg:w-[45%] 2xl:w-[35%] rounded-lg"
			src="@/assets/images/ExperimentDetails.png"
			alt="Experiment details entire page"
		/>
		<div
			class="text-2xl mdb:text-3xl sm:w-[55%] lg:w-[45%] mxl:w-[35%] 2xl:px-16 font-medium text-center sm:text-start"
		>
			<h2>Visualize your data for easy decision-making</h2>
			<h2 class="mt-3 text-sm lg:text-base font-normal">
				Say goodbye to boring spreadsheets. CROBATA provides stunning
				visualizations that transform your A/B test results into actionable
				insights. Understand your data instantly and make informed decisions
				faster.
			</h2>
		</div>
	</section>
	<section
		class="w-full md:w-[90%] mxl:w-[80%] self-center my-20 rounded-lg bg-bluey/10"
	>
		<div
			class="w-full flex flex-col gap-4 mt-8 sm:mt-0 sm:flex-row justify-between items-center"
		>
			<div
				class="text-2xl mdb:text-3xl sm:w-[40%] lg:w-[45%] mdb:ml-14 lg:ml-0 mxl:ml-14 px-2 xs:px-6 sm:px-0 sm:pl-4 lg:px-16 xl:px-8 font-medium text-center sm:text-start"
			>
				<h2 class="text-2xl mdb:text-3xl xl:text-4xl font-semibold text-bluey">
					Intuitive user interface
				</h2>
				<h2 class="mt-3 text-sm lg:text-base font-normal">
					Our user-friendly interface is designed with simplicity in mind. You
					don't need to be a data scientist to navigate CROBATA. Start using it
					efficiently from day one.
				</h2>
			</div>
			<div
				class="w-full sm:w-[60%] lg:w-[50%] flex items-center justify-center py-7 rounded-lg bg-bluey/70 xs:shadow-2xl"
			>
				<img
					class="w-[90%] rounded-lg"
					src="@/assets/images/ModalExperiment.png"
					alt="Experiment Modal showing how to create a new experiment"
				/>
			</div>
		</div>
	</section>
	<section
		class="flex flex-col sm:flex-row w-full justify-center text-center sm:text-start items-center gap-10 px-4 xs:px-8 sm:px-10 xl:px-16 mxl:px-20 2xl:px-16 3xl:px-32 py-20 bg-white"
	>
		<h2 class="text-4xl lg:text-5xl font-semibold 2xl:w-[35%]">
			Integrated to avoid extra work
		</h2>
		<div
			class="flex flex-col 2xl:w-[30%] mxl:ml-32 gap-2 items-center sm:items-start"
		>
			<p class="text-base lg:text-lg">
				Our integration with Optimizely and VWO feeds the data so you don't have
				to do it yourself
			</p>
			<p
				class="flex gap-2 items-center text-xs lg:text-sm font-medium text-blue-800"
			>
				View all integrations: COMING SOON
			</p>
		</div>
	</section>

	<div class="self-center w-full mlg:w-[80%] mxl:w-[68%] p-4">
		<Accordion :multiple="true" :activeIndex="[0]">
			<AccordionTab header="What problem does CROBATA solve?">
				<p>
					CROBATA allows you to store, document, organise and share all the
					knowledge gained from previous experiments. Never be worried again by
					designs not respecting previous winning hypotheses.
				</p>
			</AccordionTab>
			<AccordionTab
				header="Is CROBATA suitable for both beginners and experts in A/B testing?"
			>
				<p>
					Absolutely! CROBATA's intuitive interface caters to users of all
					levels. Crobata is created so beginners can quickly start getting
					knowledge without the noise of complex statistics, while experts will
					appreciate the ease of communicating and spreading data driving
					decisions without the need of presentations and political challenges.
				</p>
			</AccordionTab>
			<AccordionTab header="Can multiple team members collaborate on CROBATA?">
				<p>
					Yes, collaboration is at the heart of CROBATA. Multiple team members
					can work together in real-time, making it easy to share insights and
					collectively optimise user experiences.
				</p>
			</AccordionTab>

			<AccordionTab header="How does CROBATA integrate with A/B testing tools?">
				<p>
					CROBATA's team is working tirelessly to integrate with popular A/B
					testing tools, such as Optimizely, AB Tasty and VWO, with the goal of
					ensuring that your experiments' data flows directly into our platform
					for visualisation and analysis.
				</p>
			</AccordionTab>
			<AccordionTab header="How do I start using CROBATA?">
				<p>
					Getting started is easy. Sign up for a free trial, and you'll have
					access to all our platform's features. Our user-friendly interface
					means you'll be up and running in no time.
				</p>
			</AccordionTab>
			<AccordionTab header="Is my data secure on CROBATA?">
				<p>
					Yes, we take data security seriously. Your data is encrypted and
					protected with the latest security measures. We adhere to strict
					privacy standards to ensure your information remains safe.
				</p>
			</AccordionTab>
		</Accordion>
	</div>

	<section class="py-10 my-10 px-4 bg-blue-200">
		<div
			class="flex flex-col md:flex-row w-full lg:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto items-center justify-center gap-8"
		>
			<div class="text-center md:text-left lg:w-[80%] xl:w-[75%]">
				<h2
					class="text-xl mdb:text-2xl mxl:text-3xl font-medium text-center sm:items-start sm:text-start"
				>
					Every day more and more teams decide to stop saying they are
					data-driven and start taking real action by joining our community. Be
					part of it
				</h2>
			</div>

			<div class="text-center md:text-left">
				<div
					class="flex flex-col xs:flex-row md:flex-col gap-3 mdb:flex-col xl:px-16"
				>
					<Button
						class="bg-bluey text-white px-4 py-2 rounded-md xl:text-xl whitespace-nowrap enabled:hover:bg-blue-800 enabled:hover:border-blue-800 focus:shadow-none enabled:active:bg-blue-800 enabled:active:border-blue-800"
						label="Sign up for free"
					/>
					<Button
						class="border-2 bg-white/30 border-gray-400 text-gray-600 px-4 py-2 rounded-md xl:text-xl whitespace-nowrap enabled:hover:bg-gray-600 enabled:hover:border-gray-600 focus:shadow-none enabled:active:bg-gray-600 enabled:active:border-gray-600"
						label="Contact Sales"
					/>
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

<style>
.redbackground {
	background-color: red !important;
}
</style>
