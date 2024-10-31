<script setup lang="ts">
	import { definePageMeta } from "#imports";
	import { HomePage } from "@/2-pages/home-page";

	definePageMeta({
		headerOffset: false,
		name: "home",
        h1: "Главная",
	});
</script>

<template>
	<HomePage />
</template>
