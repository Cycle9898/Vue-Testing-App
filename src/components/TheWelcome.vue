<script setup lang="ts">
import { ref } from "vue";
import WelcomeItem from "./WelcomeItem.vue";
import { vueIntroductionPoints, type VueIntroductionPointType } from "@/constants/vueIntroductionPoints";

const welcomeItemFontSize = ref(1);

let vueIntroductionPointArray = ref(vueIntroductionPoints);
const selectedOption = ref("");

const headingAscSorting = (a: VueIntroductionPointType, b: VueIntroductionPointType) => {
	if (a.heading > b.heading) return 1;
	if (a.heading < b.heading) return -1;

	return 0;
};

const headingDescSorting = (a: VueIntroductionPointType, b: VueIntroductionPointType) => {
	if (a.heading > b.heading) return -1;
	if (a.heading < b.heading) return 1;

	return 0;
};

const onChange = () => {
	switch (selectedOption.value) {
		case "H:A-Z":
			vueIntroductionPointArray.value = [...vueIntroductionPoints].sort(headingAscSorting);
			break;

		case "H:Z-A":
			vueIntroductionPointArray.value = [...vueIntroductionPoints].sort(headingDescSorting);
			break;

		default:
			vueIntroductionPointArray.value = [...vueIntroductionPoints];
	}
};
</script>

<template>
	<div class="sorting">
		<label for="bullet-point-sort">Sort by:</label>

		<select name="sort" id="bullet-point-sort" v-model.lazy="selectedOption" @change="onChange">
			<option selected value="">Default</option>
			<option value="H:A-Z">Heading: A-Z</option>
			<option value="H:Z-A">Heading: Z-A</option>
		</select>
	</div>

	<div :style="{ fontSize: welcomeItemFontSize + 'rem' }">
		<WelcomeItem
			v-for="item of vueIntroductionPointArray"
			:key="item.heading"
			:iconName="item.iconName"
			:heading="item.heading"
			:p-content="item.pContent"
			@enlarge-text="welcomeItemFontSize += 0.2" />
	</div>
</template>

<style scoped>
.sorting {
	display: flex;
	column-gap: 15px;
	justify-content: end;
	align-items: center;
	margin-bottom: 50px;
}

.sorting select {
	background-color: grey;
	border: 2px solid black;
	border-radius: 10px;
	padding: 5px 10px;
	text-align: center;
	font-size: 1rem;
}
</style>
