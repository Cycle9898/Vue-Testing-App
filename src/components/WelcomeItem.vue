<script setup lang="ts">
import VueIconSvgHelper from "./VueIconSvgHelper.vue";

defineProps<{
	iconName: string;
	heading: string;
	pContent: string;
}>();

const emit = defineEmits<{
	"enlarge-text": [value: number];
	"reduce-text": [value: number];
}>();
const textSizeChangeValue = 0.2;
</script>

<template>
	<div class="item">
		<i>
			<VueIconSvgHelper class="text-green" :name="iconName" />
		</i>

		<div class="details">
			<h3>
				{{ heading }}
			</h3>

			<p v-html="pContent" />

			<div class="text-size-controls">
				<span>Text size:</span>

				<button @click="emit('enlarge-text', textSizeChangeValue)">+</button>

				<button @click="emit('reduce-text', textSizeChangeValue)">-</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.item {
	margin-top: 2rem;
	display: flex;
	position: relative;
}

.details {
	flex: 1;
	margin-left: 1rem;
}

.text-size-controls {
	margin-top: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 15px;
}

.text-size-controls button {
	cursor: pointer;
	border: 2px solid black;
	border-radius: 5px;
	font-size: 0.8rem;
	padding: 3px 8px;
	aspect-ratio: 1;
	min-height: 28px;
	background-color: hsla(160, 100%, 37%, 1);
}

.text-green {
	color: hsla(160, 100%, 37%, 1);
}

i {
	display: flex;
	place-items: center;
	place-content: center;
	width: 32px;
	height: 32px;

	color: var(--color-text);
}

h3 {
	font-size: 1.2rem;
	font-weight: 500;
	margin-bottom: 0.4rem;
	color: var(--color-heading);
}

@media (min-width: 1024px) {
	.item {
		margin-top: 0;
		padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
	}

	i {
		top: calc(50% - 25px);
		left: -26px;
		position: absolute;
		border: 1px solid var(--color-border);
		background: var(--color-background);
		border-radius: 8px;
		width: 50px;
		height: 50px;
	}

	.item:before {
		content: " ";
		border-left: 1px solid var(--color-border);
		position: absolute;
		left: 0;
		bottom: calc(50% + 25px);
		height: calc(50% - 25px);
	}

	.item:after {
		content: " ";
		border-left: 1px solid var(--color-border);
		position: absolute;
		left: 0;
		top: calc(50% + 25px);
		height: calc(50% - 25px);
	}

	.item:first-of-type:before {
		display: none;
	}

	.item:last-of-type:after {
		display: none;
	}
}
</style>
