<template>
	<section
		:class="`flex w-full h-[760px] md:h-[654px] ${
			isLargeScreen ? 'backgroundImageLarge' : 'backgroundImageSmall'
		}`"
	>
		<div
			class="flex flex-col w-full gap-5 p-6 lg:p-8 xl:gap-7 mdb:w-[50%] md:items-center mdb:justify-center mdb:text-start mdb:items-start text-center font-semibold"
		>
			<h1
				class="text-5xl lg:text-7xl xl:px-16 xl:w-[90%] leading-snug text-bluey"
			>
				Unlock the power of your A/B Tests
			</h1>
			<span class="font-medium w-full xl:px-16">
				Streamline, visualize and collaborate on your experiments
			</span>
			<div
				class="flex flex-col gap-5 md:flex-row mdb:flex-col lg:flex-row md:text-xl xl:px-16"
			>
				<Button
					class="bg-pinky text-white px-4 py-2 rounded-md"
					label="Sign up for free"
				/>
				<Button
					class="border-2 border-gray-400 text-gray-600 px-4 py-2 rounded-md"
					label="Contact Sales"
					size="small"
				/>
			</div>
		</div>
	</section>
</template>

<script setup>
const { isLargeScreen } = useScreenSize(); //esto chequea el tamaño de la pagina, para que podamos usar un background o el otro sin hacer tanto codeo
</script>

<style scoped>
.backgroundImageLarge {
	background-image: url("@/assets/images/backgroundLarge.webp");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
.backgroundImageSmall {
	background-image: url("@/assets/images/backgroundSmall.webp");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
@media screen and (min-width: 700px) {
	.backgroundImageSmall {
		background-position: center bottom -10px;
	}
}
@media screen and (min-width: 768px) {
	.backgroundImageSmall {
		background-position: center bottom -100px;
	}
}
@media screen and (min-width: 850px) {
	.backgroundImageSmall {
		background-position: center bottom -230px;
	}
}
@media screen and (min-width: 900px) {
	.backgroundImageLarge {
		background-position: center left -300px;
	}
}
@media screen and (min-width: 1200px) {
	.backgroundImageLarge {
		background-position: center left -280px;
	}
}
@media screen and (min-width: 1300px) {
	.backgroundImageLarge {
		background-position: center left -180px;
	}
}
@media screen and (min-width: 1500px) {
	.backgroundImageLarge {
		background-position: center left -100px;
	}
}
@media screen and (min-width: 1800px) {
	.backgroundImageLarge {
		background-position: center;
	}
}
</style>
