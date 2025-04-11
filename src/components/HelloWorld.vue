<script setup lang="ts">
import { computed, ref } from "vue";

const { msg, rawHtml, num } = defineProps<{
	msg: string;
	rawHtml: string;
	num?: number;
}>();

let isHtmlHidden = ref(false);

function toggleCustomHtmlDisplay() {
	isHtmlHidden.value = !isHtmlHidden.value;
}

const addPluralOrNot = computed(() => (num && num > 1 ? "s" : ""));
const changeButtonVerb = computed(() => (isHtmlHidden ? "Display" : "Hide"));
</script>

<template>
	<div class="greetings">
		<h1 :class="{ green: msg }">{{ msg }}</h1>

		<h3>
			You’ve successfully created {{ num ?? "a" }} project{{ addPluralOrNot }} with
			<a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
			<a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
		</h3>

		<p :class="{ green: isHtmlHidden, red: !isHtmlHidden }">(isHtmlHidden state: {{ isHtmlHidden }})</p>

		<div class="if-wrapper">
			<Transition>
				<p v-if="isHtmlHidden">Custom HTML is hidden !</p>

				<p v-else v-html="rawHtml"></p>
			</Transition>
		</div>

		<button class="toggle-btn" @click="toggleCustomHtmlDisplay">{{ changeButtonVerb }} custom HTML</button>
	</div>
</template>

<style scoped>
h1 {
	font-weight: 500;
	font-size: 2.6rem;
	position: relative;
	top: -10px;
}

h3 {
	font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
	text-align: center;
}

.toggle-btn {
	margin-top: 5px;
	cursor: pointer;
	border: 2px solid black;
	border-radius: 5px;
	font-size: 1.1rem;
	font-weight: 500;
	padding: 5px;
	background-color: var(--vue-green);
	min-width: 200px;
}

.red {
	color: red;
}

.green {
	padding: 0;
}
.if-wrapper {
	height: 1.5rem;
	position: relative;
}

.v-enter-active,
.v-leave-active {
	transition: opacity, transform 0.5s ease;
	position: absolute;
}

.v-enter-from {
	opacity: 0;
	transform: translateX(-500px);
}

.v-leave-to {
	transform: translateX(-500px);
}

@media (min-width: 1024px) {
	.greetings h1,
	.greetings h3 {
		text-align: left;
	}
}
</style>
