<script setup lang="ts">

const className = "b-header";

// import { useBackgroundStore } from '@/stores/backgroundStore';

// const backgroundStore = useBackgroundStore();

// const switchMove = () => {
// 	backgroundStore.changeBackground();
// };
</script>

<template>
	<div :class="[className]">
		<div :class="className + '__title'">
			<img src="/files/images/header/logo-light.png" alt="logo">
		</div>
		<div
			:class="className + '__switch'"
		/>
	</div>
</template>

<style lang="scss">
$class-name: "b-header";

.#{$class-name} {
	display: flex;
	align-items: center;
	padding: 0 20px;
	justify-content: space-between;
	background-color: transparent;
	width: 100%;
	height: 50px;
	border-bottom: 3px solid rgba(172, 130, 130, 0.43);

	&__title {
		width: 100px;
		font-size: 20px;
		color: #fff;
		font-weight: 700;

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			object-position: center;
		}
	}

	&__switch {
		display: flex;
		background-image: url("/files/images/header/switch.svg");
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		opacity: 18%;
		cursor: pointer;
		width: 20px;
		height: 20px;
	}
}
</style>
