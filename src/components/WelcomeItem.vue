<script setup lang="ts">
import VueIconSvgHelper from "./VueIconSvgHelper.vue";

defineProps<{
	iconName: string;
	heading: string;
	pContent: string;
}>();

const emit = defineEmits(["enlarge-text"]);
</script>

<template>
	<div class="item">
		<i>
			<VueIconSvgHelper :name="iconName" />
		</i>

		<div class="details">
			<h3>
				{{ heading }}
			</h3>

			<p v-html="pContent" />

			<button @click="emit('enlarge-text')">Enlarge text</button>
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
	display: flex;
	flex-direction: column;
}

.details button {
	margin-top: 10px;
	align-self: center;
	margin-top: 5px;
	cursor: pointer;
	border: 2px solid black;
	border-radius: 5px;
	font-size: 0.8rem !important;
	padding: 2px 5px;
	background-color: hsla(160, 100%, 37%, 1);
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
