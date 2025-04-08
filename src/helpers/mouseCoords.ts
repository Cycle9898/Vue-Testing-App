import { ref } from "vue";
import { useEventListener } from "./eventHandler";

export function useMouseIndicator() {
	const xPos = ref<number | undefined>(0);
	const yPos = ref<number | undefined>(0);

	const handleMouseChange = (event: MouseEventInit) => {
		xPos.value = event.screenX;
		yPos.value = event.screenY;
	};

	useEventListener(window, "mousemove", handleMouseChange);

	return { xPos, yPos };
}
