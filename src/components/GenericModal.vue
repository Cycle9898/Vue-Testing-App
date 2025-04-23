<script setup lang="ts">
defineProps<{
	isOpen: boolean;
}>();
</script>

<template>
	<div v-if="isOpen" class="container">
		<div class="modal">
			<button @click="$emit('close')" class="close-btn">Close</button>

			<slot name="header">
				<h1>Default header</h1>
			</slot>

			<slot>
				<p>Default body</p>
			</slot>

			<slot name="footer">
				<p>Default footer</p>
			</slot>
		</div>
	</div>
</template>

<style scoped>
.container {
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	color: black;
	backdrop-filter: blur(10px);
}

.modal {
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 35px;
	align-items: center;
	background-color: white;
	min-width: 500px;
	padding: 50px;
}

.close-btn {
	position: absolute;
	top: 0;
	right: 0;
}
</style>
