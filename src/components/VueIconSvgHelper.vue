<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const { name } = defineProps<{
	name: string;
}>();

const svgComponent = defineAsyncComponent(async () => {
	const iconName = name[0].toUpperCase() + name.slice(1);

	return await import(`./icons/${iconName}.vue`);
});
</script>

<template>
	<component :is="svgComponent" />
</template>
