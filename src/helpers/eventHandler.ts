import { onMounted, onUnmounted } from "vue";

export function useEventListener(target: EventTarget, eventName: string, callback: EventListener) {
	onMounted(() => target.addEventListener(eventName, callback));
	onUnmounted(() => target.removeEventListener(eventName, callback));
}
