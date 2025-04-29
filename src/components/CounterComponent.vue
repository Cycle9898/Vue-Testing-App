<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const counterStore = useCounterStore();
const { count, doubleCount } = storeToRefs(counterStore);
const { increment } = counterStore;
</script>

<template>
	<div class="container">
		<h2>Access counter store</h2>

		<p>Counter: {{ count }}</p>

		<p>Double counter: {{ doubleCount }}</p>

		<button @click="() => increment()">Increase</button>
	</div>
</template>

<style scoped>
.container {
	padding: 10px 15px;
	border: 2px solid var(--vue-green);
	border-radius: 10px;
}
</style>
