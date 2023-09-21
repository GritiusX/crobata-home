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
			src="@/assets/images/ExperimentDetailsImageComparison.png"
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
				View all integrations <ArrowLongRightIcon class="h-4 w-4 mt-1" />
			</p>
		</div>
	</section>

	<div class="self-center w-full mlg:w-[80%] mxl:w-[68%] p-4">
		<Accordion multiple="true" :activeIndex="[0]">
			<AccordionTab
				headerClass="gap-5 bg-gray-200 border border-white rounded-t-lg p-4"
				contentClass="bg-gray-50 p-4"
				header="What problem does CROBATA solve?"
			>
				<p class="">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</AccordionTab>
			<AccordionTab
				headerClass="bg-gray-200 border border-white p-4"
				contentClass="bg-gray-50 p-4"
				header="Is CROBATA suitable for both beginners and experts in A/B testing?"
			>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
					ab illo inventore veritatis et quasi architecto beatae vitae dicta
					sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
					aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
					qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit,
					sed quia non numquam eius modi.
				</p>
			</AccordionTab>
			<AccordionTab
				headerClass="bg-gray-200 border border-white p-4"
				contentClass="bg-gray-50 p-4"
				header="Can multiple team members collaborate on CROBATA?"
			>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
					ab illo inventore veritatis et quasi architecto beatae vitae dicta
					sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
					aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
					qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit,
					sed quia non numquam eius modi.
				</p>
			</AccordionTab>
			<AccordionTab
				headerClass="bg-gray-200 border border-white p-4"
				contentClass="bg-gray-50 p-4"
				header="Why use CROBATA instead of my classic spreadsheets?"
			>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
					ab illo inventore veritatis et quasi architecto beatae vitae dicta
					sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
					aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
					qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit,
					sed quia non numquam eius modi.
				</p>
			</AccordionTab>
			<AccordionTab
				headerClass="bg-gray-200 border border-white p-4"
				contentClass="bg-gray-50 p-4"
				header="How does CROBATA integrate with A/B testing tools?"
			>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
					ab illo inventore veritatis et quasi architecto beatae vitae dicta
					sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
					aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
					qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit,
					sed quia non numquam eius modi.
				</p>
			</AccordionTab>
			<AccordionTab
				headerClass="bg-gray-200 border border-white p-4"
				contentClass="bg-gray-50 p-4"
				header="How do I start using CROBATA?"
			>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
					ab illo inventore veritatis et quasi architecto beatae vitae dicta
					sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
					aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
					qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit,
					sed quia non numquam eius modi.
				</p>
			</AccordionTab>
			<AccordionTab
				headerClass="bg-gray-200 border border-white rounded-b-lg p-4"
				contentClass="bg-gray-50 p-4"
				header="What is the price?"
			>
				<p>
					At vero eos et accusamus et iusto odio dignissimos ducimus qui
					blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
					et quas molestias excepturi sint occaecati cupiditate non provident,
					similique sunt in culpa qui officia deserunt mollitia animi, id est
					laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
					distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
					cumque nihil impedit quo minus.
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
						class="bg-bluey text-white px-4 py-2 rounded-md xl:text-xl whitespace-nowrap"
						label="Sign up for free"
					/>
					<Button
						class="border-2 bg-white/30 border-gray-400 text-gray-600 px-4 py-2 rounded-md xl:text-xl whitespace-nowrap"
						label="Contact Sales"
						size="small"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
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
