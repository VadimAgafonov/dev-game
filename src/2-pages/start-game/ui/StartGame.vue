<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { LanguageCard } from '@/6-shared/language-card';
import 'swiper/css';
import 'swiper/css/navigation';

const className = "b-language";

const cards = [
	{
		logo: '/files/images/language/php.svg',
		bestScore: 228,
		lastScore: 100,
		data: true
	},
	{
		logo: '/files/images/language/js.svg',
		bestScore: 321,
		lastScore: 23,
		data: false
	},
];

const bestPlayers = [
	{
		name: 'PlayerName1',
		bestScore: 123,
		cup: '/files/images/cups/cup-gold.svg',
	},
	{
		name: 'PlayerName2',
		bestScore: 100,
		cup: '/files/images/cups/cup-serebro.svg',
	},
	{
		name: 'PlayerName3',
		bestScore: 95,
		cup: '/files/images/cups/cup-bronz.svg',
	},

];
</script>

<template>
	<div :class="[className]">
		<div :class="[className + '__title', 'margin-violet-top', 'h4']">Выберите язык</div>
		<div :class="[className + '__swiper-container', 'swiper-container', 'margin-green-top']">
			<swiper
				:slides-per-view="1"
				:space-between="50"
				:class="[className + '__swiper-wrapper']"
			>
				<swiper-slide
					v-for="(card, index) in cards"
					:key="index"
					:class="[className + '__swiper-slide', 'l-content-container']"
				>
					<LanguageCard
						:logo="card.logo"
						:best-score="card.bestScore"
						:last-score="card.lastScore"
						:best-players="bestPlayers"
						:data="card.data"
					/>
				</swiper-slide>
			</swiper>
			<div :class="[className + '__finger']">
				<img src="/files/images/language/finger2.svg" alt="cursor">
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	$class-name: "b-language";


	.#{$class-name} {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100dvw;
		height: 100dvh;

		&__title {
			color: rgba(215, 187, 187, 0.84);
		}

		&__swiper-container {
			width: 100dvw;
			height: 100dvh;
		}

		&__swiper-wrapper {
			//
		}

		&__swiper-slide {
			display: block;
			width: 100%;
			height: 500px;
			background-color: transparent;
			padding: 20px 30px;
		}

		&__finger {
			display: flex;
			width: 40px;
			height: 40px;
			margin: 0 auto;
			animation: swipeLeft 2s ease-in-out infinite;

			img {
				object-fit: cover;
				object-position: center;
				width: 100%;
				height: 100%;
			}
		}

		@keyframes swipeLeft {
			0% {
				transform: rotate(0deg);
			}
			50% {
				transform: rotate(-40deg);
			}
			100% {
				transform: rotate(0deg);
			}
		}
	}
</style>

