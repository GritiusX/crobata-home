<template>
	<XyzTransitionGroup
		tag="section"
		class="flex flex-col mlg:flex-row w-full gap-4 justify-center items-center py-6 mlg:px-6 bg-blue-200 hero xyz-in"
		:appear="true"
		xyz="fade"
		duration="auto"
	>
		<h2
			class="text-2xl mlg:w-[20%] text-end xyz-nested"
			xyz="fade left front delay-3"
		>
			Integrated with:
		</h2>
		<div
			class="grid grid-cols-2 gap-2 mt-4 sm:mt-0 w-full mlg:w-[80%] mlg:flex mlg:flex-row mlg:justify-evenly place-items-center"
		>
			<img
				class="h-[90px] w-[90px] xyz-nested"
				src="@/assets/images/svg/Abtasty-logo.svg"
				alt="AB Tasty logo illustration"
				xyz="fade right front delay-6"
			/>
			<img
				class="h-[45px] w-[45px] xyz-nested"
				src="@/assets/images/svg/figma-logo.svg"
				alt="Figma logo illustration"
				xyz="fade right front delay-6"
			/>
			<img
				class="h-[90px] w-[90px] xyz-nested"
				src="@/assets/images/svg/google_analytics-ar21.svg"
				alt="Google Analytics 4 logo illustration"
				xyz="fade right front delay-6"
			/>
			<img
				class="h-[90px] w-[90px] xyz-nested"
				src="@/assets/images/svg/vwo-seeklogo.com.svg"
				alt="VWO logo illustration"
				xyz="fade right front delay-6"
			/>
		</div>
	</XyzTransitionGroup>
</template>

<script setup></script>

<style>
.hero {
	--xyz-duration-default: 2.5s;
}
</style>
