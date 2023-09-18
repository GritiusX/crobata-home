import { ref, onMounted, onUnmounted } from "vue";

export function useScreenSize(breakpoint = 920) {
	const isLargeScreen = ref(false);

	const updateSize = () => {
		if (typeof window !== "undefined") {
			isLargeScreen.value = window.innerWidth >= breakpoint;
		}
	};

	onMounted(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("resize", updateSize);
			updateSize(); // Initialize the value
		}
	});

	onUnmounted(() => {
		if (typeof window !== "undefined") {
			window.removeEventListener("resize", updateSize);
		}
	});

	return { isLargeScreen };
}
