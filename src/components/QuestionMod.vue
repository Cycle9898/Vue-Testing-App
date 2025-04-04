<script setup lang="ts">
import { onMounted, ref, useTemplateRef, watch } from "vue";

const question = ref("");
const answer = ref("Waiting for the question...");
const loadingState = ref(false);

watch(
	() => question.value,
	async (newQuestion, oldQuestion) => {
		if (newQuestion.includes("?")) {
			loadingState.value = true;
			answer.value = "Thinking...";

			try {
				const res = await fetch("https://yesno.wtf/api");
				const receivedAnswer = await res.json().then(objRes => objRes.answer);
				answer.value = "Answer: '" + receivedAnswer + "'";
			} catch (error) {
				answer.value = "Error! Could not reach the API. " + error;
			} finally {
				loadingState.value = false;
			}
		} else {
			answer.value = "waiting for a real question with a question mark...";
		}
	}
);

const questionInput = useTemplateRef("question-input");

onMounted(() => {
	questionInput.value?.focus();
});
</script>

<template>
	<div class="container">
		<h2>Questions module (watcher)</h2>

		<div class="question-wrapper">
			<label for="question"
				>Ask a question that can be answered by yes or no (don't forget "?"):
				<input
					id="question"
					name="question"
					type="text"
					v-model="question"
					:disabled="loadingState"
					ref="question-input" />
			</label>

			<p>{{ answer }}</p>
		</div>
	</div>
</template>

<style scoped>
.container {
	padding: 10px 15px;
	border: 2px solid var(--vue-green);
	border-radius: 10px;
}

@media (min-width: 1024px) {
	.question-wrapper {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.question-wrapper input {
		margin-top: 5px;
		width: 100%;
	}
}
</style>
