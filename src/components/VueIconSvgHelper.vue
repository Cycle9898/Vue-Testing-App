<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import IconSvgError from "./icons/IconSvgError.vue";
import LoadingSpinner from "./LoadingSpinner.vue";

const { name } = defineProps<{
	name: string;
}>();

const SvgIcon = defineAsyncComponent({
	loader: () => {
		const iconName = name[0].toUpperCase() + name.slice(1);

		return import(`./icons/${iconName}.vue`);
	},
	errorComponent: IconSvgError,
	loadingComponent: LoadingSpinner
});
</script>

<template>
	<component :is="SvgIcon" />
</template>
