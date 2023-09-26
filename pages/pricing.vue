<template>
	<section class="flex flex-col w-full items-center py-10 px-2 gap-10">
		<h2
			class="text-3xl lg:text-4xl xl:pl-16 leading-snug text-center sm:text-start"
		>
			For every company. For every team.
		</h2>
		<div
			class="flex flex-col w-full items-center justify-center justify-items-center sm:grid sm:grid-cols-2 mdb:flex mdb:flex-row mdb:justify-center gap-4"
		>
			<PricingCard
				title="Free Trial"
				description="For individuals or teams just getting started with Crobata, a free trial of one month."
			/>
			<PricingCard
				title="Growth Plan"
				description="For companies building a strong optimization team."
				:price="growthPriceArray"
				:optionsToShow="growthOptionsArray"
				:buttonType="2"
			/>
			<PricingCard
				title="Business Plan"
				description="For data-driven companies that want to spread the knowledge."
				:price="businessPriceArray"
				:optionsToShow="businessOptionsArray"
				:buttonType="2"
			/>
			<PricingCard
				title="Enterprise Plan"
				description="Power. Unlimited Power."
				price=""
				:optionsToShow="enterpriseOptionsArray"
				:buttonType="3"
				buttonText="Contact Sales"
			/>
		</div>
	</section>
	<section class="self-center w-full mlg:w-[80%] mxl:w-[68%] 2xl:w-[60%] p-4">
		<Accordion :multiple="true" :activeIndex="[0]">
			<AccordionTab header="How does pricing work?">
				<p>
					Pricing is based on the number of seats and experiments. Optionally,
					you can add Users in the middle of the year.
				</p>
			</AccordionTab>
			<AccordionTab header="How does the free trial work?">
				<p>
					Crobata offers a 1 month free trial! So teams of all sizes can test
					the tools. Our Free trial also includes personalised help to set up
					the accounts and previous experiments, so the trial starts with
					everything ready for the company to go data driven from scratch.
				</p>
			</AccordionTab>
			<AccordionTab header="What are my payment options?">
				<p>
					You can pay by credit card or debit card depending on the country. For
					Business/Enterprise Scale accounts purchased through our sales team
					can pay over ACH and wire.
				</p>
			</AccordionTab>
		</Accordion>
	</section>
</template>

<script setup>
const growthPriceArray = ref([99.99, 119]);
const growthOptionsArray = ref([
	"Up to 5 users",
	"Up to 500 Experiments",
	"Optional $19,99 USD per extra seat",
	"Unlimited attachments and storage",
	"All API Integrations",
	"Customer Support",
]);
const businessPriceArray = ref([299.99, 350]);
const businessOptionsArray = ref([
	"Up to 20 users",
	"Up to 2000 Experiments",
	"Optional $9,99 USD per extra seat",
	"Unlimited attachments and storage",
	"All API Integrations",
	"Customer Support",
]);
const enterprisePriceArray = ref([299.99, 350]);
const enterpriseOptionsArray = ref([
	"Unlimited users",
	"Unlimited Experiments",
	"Unlimited attachments and storage",
	"All API Integrations",
	"Customer Priority",
	"Beta features access",
	"New feature selection",
]);
</script>
