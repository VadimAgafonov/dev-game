<script setup lang="ts">
import { ref } from 'vue';

const className = "b-language-card";
const isRotating = ref(false);
const rotate = () => {
	isRotating.value = true;
	setTimeout(() => {
		isRotating.value = false;
	}, 2000); // Длительность анимации в миллисекундах
}

interface bestPlayers {
	name: string;
	bestScore: number;
	cup: string;
}

defineProps<{
	logo: string;
	data?: boolean;
	bestScore: number;
	lastScore: number;
	bestPlayers: bestPlayers[]
}>();
</script>

<template>
	<div
		:class="[className + '__card', isRotating ? 'rotate-animation' : '']"
	>
		<div :class="[className + '__line']"></div>
		<div :class="[className + '__left']">
			<img :src="logo" alt="logo">
		</div>
		<div v-if="data === true">
			<div :class="[className + '__best-score']">
				<span>Лучший результат</span>
				<span><b>{{ bestScore }}</b></span>
			</div>
			<div :class="[className + '__last-score']">
				<span>Последний результат</span>
				<span><b>{{ lastScore }}</b></span>
			</div>
			<div :class="[className + '__top-players-wrapper']">
				<div :class="[className + '__top']">ТОП - 3</div>
				<div
					v-for="(player, index) in bestPlayers"
					:key="index"
					:class="[className + '__top-players']"
				>
					<span :class="[className + '__cup']">
						<img :src="player.cup" alt="cup">
						{{ player.name }}
					</span>
					<span>
						<b>{{ player.bestScore }}</b>
					</span>
				</div>
			</div>
			<div
				@click="rotate"
				:class="[className + '__btn']">
					START
			</div>
		</div>
		<div
			v-else
			:class="[className + '__no-tests']"
		>
			<h4>В РАЗРАБОТКЕ...</h4>
		</div>

		<div :class="[className + '__logo-light']">
			<img src="/files/images/header/logo-light.png" alt="logo">
		</div>
	</div>
</template>

<style lang="scss">
	$class-name: "b-language-card";

	.#{$class-name} {
		&__card {
			display: flex;
			position: relative;
			flex-direction: column;
			width: 100%;
			height: 100%;
			background: rgba(255, 255, 255, 0.1);
			backdrop-filter: blur(5px);
			border: 2px solid rgba(255, 255, 255, 0.1);
			border-image: linear-gradient(120deg, #752e2e, #6f2a2a);
			border-image-slice: 1;
			box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
			padding: 10px;
			overflow: hidden;
			font-family: 'Ledger', monospace;
		}

		@keyframes rotateCard {
			0% {
				transform: scale(100%);
			}
			100% {
				transform: scale(0);
			}
		}

		.rotate-animation {
			animation: rotateCard 2s ease-in-out;
		}

		&__left {
			display: flex;
			height: 60px;

			img {
				object-fit: contain;
				width: 100%;
				height: 100%;
			}
		}

		&__best-score {
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: rgba(215, 187, 187, 0.84);
			margin-top: 30px;
			background: linear-gradient(120deg, #914444, #040303);
			border-radius: 10px;
			padding: 5px 10px;
		}

		&__last-score {
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: rgba(215, 187, 187, 0.84);
			margin-top: 10px;
			background-color: rgba(251, 222, 223, 0.18);
			border-radius: 10px;
			padding: 5px 10px;
		}

		&__top-players-wrapper {
			display: flex;
			flex-direction: column;
			margin-top: 30px;
			background: linear-gradient(120deg, #914444, #040303);
			border-radius: 10px;
			padding: 10px;
			color: rgba(215, 187, 187, 0.84);

			b {
				color: #d2c1c1b8;
			}
		}

		&__top-players {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 10px;
			border-bottom: 2px dashed rgba(255, 255, 255, 0.1);

			b {
				font-weight: 600;
			}
		}

		&__cup {
			display: flex;
			align-items: center;
			gap: 5px;

			img {
				width: 20px;
				height: 20px;
				object-fit: contain;
				object-position: center;
				margin-right: 10px;
			}
		}

		&__btn {
			display: flex;
			justify-content: center;
			margin-top: 30px;
			margin-left: auto;
			margin-right: auto;
			width: 100px;
			font-size: 14px;
			color: rgba(215, 187, 187, 0.84);
			background: linear-gradient(180deg, #914444, rgba(38, 11, 11, 0.82));
			border-radius: 4px;
			padding: 5px 10px;
			opacity: 0.8;
			cursor: pointer;
		}

		&__top {
			width: 100%;
			margin: 0 auto;
			border-bottom: 1px solid rgba(215, 187, 187, 0.84);
			font-size: 18px;
			font-weight: bold;
			text-align: center;
		}

		&__logo-light {
			width: 100%;
			height: 20px;
			margin-top: auto;

			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}

		&__no-tests {
			color: rgba(215, 187, 187, 0.84);
			margin: auto auto;
			font-style: italic;
		}
	}
</style>
