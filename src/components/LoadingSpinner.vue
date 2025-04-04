<template>
	<div class="container">
		<div class="spinner">
			<div class="spinner-center"></div>
		</div>
	</div>
</template>

<style scoped>
.container {
	--size: 30px;
	--diff: 10px;
	position: relative;
}

.spinner {
	width: var(--size);
	height: var(--size);
	border-radius: 50%;
	background: conic-gradient(var(--vue-green), var(--vt-c-text-dark-2));
	border: 1px solid transparent;
	animation: spinner-kf linear 1s infinite both;
}

.spinner-center {
	background-color: var(--color-background);
	border-radius: 50%;
	width: calc(var(--size) - var(--diff));
	height: calc(var(--size) - var(--diff));
	position: absolute;
	top: calc(50% - (var(--size) / 2 - (var(--diff) / 2)));
	left: calc(50% - (var(--size) / 2 - (var(--diff) / 2)));
	z-index: 1;
}

@keyframes spinner-kf {
	100% {
		transform: rotate(360deg);
	}
}
</style>
