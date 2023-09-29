<template>
	<header>
		<nav
			class="flex flex-row w-full justify-center border-b items-center sm:items-center sm:justify-start h-20 py-4 px-8 xl:py-2 xl:px-4 bg-white"
		>
			<NuxtLink
				to="/"
				class="flex items-center w-full justify-center md:w-auto"
			>
				<div class="flex items-center">
					<img
						class="w-[150px] cursor-pointer"
						src="@/assets/images/svg/Crobata-logo.svg"
						alt="Crobata logo home button"
					/>
				</div>
			</NuxtLink>
		</nav>
	</header>
	<main class="w-full flex flex-col items-center">
		<slot />
	</main>
</template>

<script setup></script>
