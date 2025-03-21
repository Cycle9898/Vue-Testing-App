<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import { vueIntroductionPoints } from "@/constants/vueIntroductionPoints";
</script>

<template>
	<WelcomeItem
		v-for="item of vueIntroductionPoints"
		:key="item.heading"
		:iconName="item.iconName"
		:heading="item.heading"
		:p-content="item.pContent" />
</template>
