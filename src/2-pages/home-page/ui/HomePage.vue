<script setup lang="ts">
import { Avatar } from "@/6-shared/avatar";

const className = "b-main-page";
</script>

<template>
	<div :class="[className]">
		<Avatar class="l-content-container padding-violet-top"/>
	</div>
</template>

<style lang="scss">
$class-name: "b-main-page";

.#{$class-name} {
	//
}
</style>
