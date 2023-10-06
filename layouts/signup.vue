<template>
	<section class="flex flex-col w-full justify-center py-10">
		<NuxtLink to="/" class="flex items-center w-full justify-center md:w-auto">
			<div class="flex items-center">
				<img
					class="w-[150px] cursor-pointer"
					src="@/assets/images/svg/Crobata-logo.svg"
					alt="Crobata logo home button"
				/>
			</div>
		</NuxtLink>
	</section>
	<main class="w-full flex flex-col items-center">
		<slot />
	</main>
</template>

<script setup></script>
