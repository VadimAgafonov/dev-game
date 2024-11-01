<script setup lang="ts">
import { Header } from "@/3-widgets/header";
import { Navigation } from "@/3-widgets/navigation";



const className = "b-default-template";
</script>

<template>
	<div :class="className">
		<div :class="[className + '__circle', className + '__circle-1']"></div>
		<div :class="[className + '__circle', className + '__circle-2']"></div>
		<Header />
		<slot />
		<Navigation />
	</div>
</template>

<style lang="scss">
$class-name: "b-default-template";

.#{$class-name} {
	position: relative;
	width: 100dvw;
	height: 100dvh;
	overflow: hidden;
	margin: 0 auto;

	&__header {
		position: absolute;
		z-index: 100;
	}

	&__circle {
		position: absolute;
		border-radius: 50%;
		background: linear-gradient(120deg, #914444, #200606);
	}

	&__circle-1 {
		height: 300px;
		width: 300px;
		top: 100px;
		left: -50px;
		opacity: 0.8;
		animation-timing-function: cubic-bezier(0.54, 0.085, 0.5, 0.92);
		animation-iteration-count: infinite;
		animation-name: float;
		-webkit-animation-name: float;
		animation-duration: 6s;
		-webkit-animation-duration: 6s;
		-webkit-animation-delays: 3.5s;
		animation-delay: 3.5s;
		animation-direction: alternate;
	}

	&__circle-2 {
		height: 240px;
		width: 240px;
		bottom: 145px;
		right: -100px;
		opacity: 0.8;
		animation-timing-function: cubic-bezier(0.54, 0.085, 0.5, 0.92);
		animation-iteration-count: infinite;
		animation-name: float;
		-webkit-animation-name: float;
		animation-duration: 6s;
		-webkit-animation-duration: 6s;
		-webkit-animation-delay: 2s;
		animation-delay: 2s;
		animation-direction: alternate;
	}
}
</style>
