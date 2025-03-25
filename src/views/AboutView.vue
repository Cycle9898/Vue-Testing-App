<script setup lang="ts">
import QuestionMod from "@/components/QuestionMod.vue";
</script>

<template>
	<div class="about">
		<h1 class="green">This is a test about page</h1>

		<QuestionMod />
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
