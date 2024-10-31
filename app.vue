<script setup lang="ts">
import { ref, useHead, type Ref } from "#imports";
import Preloader from "./src/3-widgets/preloader/ui/Preloader.vue";

useHead({
	script: [
		{ src: "https://telegram.org/js/telegram-web-app.js", defer: true },
	],
});

const className = "b-app";

const isActive: Ref = ref(true);

setTimeout(() => {
	isActive.value = false;
}, 8000);
</script>

<template>
	<Preloader v-if="isActive" />
	<div v-else :class="[className]">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style lang="scss" scoped>
$class-name: "b-app";

.#{$class-name} {
	//
}
</style>
