<script setup lang="ts">
import CounterComponent from "@/components/CounterComponent.vue";
import QuestionMod from "@/components/QuestionMod.vue";

const vGreen = {
	mounted: (element: HTMLElement) => {
		element.classList.add("green");
	}
};
</script>

<template>
	<div class="about">
		<h1 v-green>This is a test about page</h1>

		<QuestionMod />

		<CounterComponent />
	</div>
</template>

<style scoped>
@media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 15px;
	}
}
</style>
