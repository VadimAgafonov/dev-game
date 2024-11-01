<script setup lang="ts">
import { ref, onMounted } from "vue";

const className = "b-preloader";
const load = ref(true);

const typedText = ref('');
const isTyping = ref(false);
const textArray = ["php", "vue", "typescript", "javascript", "react"];
const typingDelay = 80;
const erasingDelay = 100;
const newTextDelay = 400;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    isTyping.value = true;
    typedText.value += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    isTyping.value = false;
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    isTyping.value = true;
    typedText.value = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    isTyping.value = false;
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

onMounted(() => {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
</script>

<template>
	<div :class="[className]">
		<div :class="[className + '__btn-wrapper']">
			<div class="v-align">
				<span class="title">DEVELOPER'S GAME</span>
				<br>
				<br>
				<b><span class="typed-text">{{ typedText }}</span></b>
				<span class="cursor" :class="{ typing: isTyping }">|</span>

			</div>
			<span class="preloader"></span>
		</div>
	</div>
</template>

<style scoped lang="scss">
$class-name: "b-preloader";

.#{$class-name} {
	position: relative;
	display: flex;
	align-items: center;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	flex-direction: column;
	width: 100vw;
	height: 100vh;

	.title {
		border-bottom: 1px solid #3f3737;
		padding-bottom: 10px;
		text-transform: uppercase;
	}

	&::after {
		content: "";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		background-color: #000000;
		opacity: 0.7;
	}

	.v-align {
		position: absolute;
		text-align: center;
		left: 0;
		width: 100%;
		max-height: 90vh;
		top: 20%;
		-moz-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
	}

	.typed-text {
		display: inline-block;
		font-weight: 500;
	}

	.cursor {
		display: inline-block;
		vertical-align: middle;
		width: 0px;
		height: 1em;
		background-color: transparent;
		animation: blink 1s infinite;
	}

	.cursor.typing {
		animation: none;
	}

	@keyframes blink {
		0% { opacity: 1; }
		50% { opacity: 0; }
		100% { opacity: 1; }
	}

	/* Прелоадер */
	.preloader {
		display: inline-block;
		width: 2em;
		height: 2em;
		border: 3px solid rgba(151, 144, 144, 0.3);
		border-top: 3px solid #6f2121;
		border-radius: 50%;
		animation: spin 2s linear infinite;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
}
</style>
