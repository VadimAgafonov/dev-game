<script setup lang="ts">
import { ref, onMounted } from 'vue';

const className = 'b-avatar';
const userName = ref('');
const userPhoto = ref('/files/images/avatar/fake-avatar.svg');

onMounted(() => {
	if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
		const user = window.Telegram.WebApp.initDataUnsafe.user;

		if (user) {
			userName.value = user.first_name + ' ' + (user.last_name || '');
			userPhoto.value = user.photo_url || userPhoto.value;
		}
	}
});
</script>

<template>
	<div :class="className">
		<div :class="[className + '__wrapper']">
			<div :class="[className + '__avatar']">
				<img v-if="userPhoto" :src="userPhoto" alt="User Photo">
			</div>
			<div :class="[className + '__desc']">
				<div :class="[className + '__best-score']">Welcome</div>
				<div v-if="userName" :class="[className + '__name']">{{ userName }}</div>
				<div v-else :class="[className + '__name']">User Name</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
$class-name: 'b-avatar';

.#{$class-name} {
	margin: 0 auto;
	width: 100%;

	&__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		border-radius: 20px;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(35px);
		border: 2px solid rgba(255, 255, 255, 0.1);
		box-shadow: 0 0 80px rgba(0, 0, 0, 0.25);
		padding: 30px 30px 30px 30px;
		overflow: hidden;
	}

	&__desc {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	&__avatar {
		width: 60px;
		height: 60px;
		border: 1px solid rgba(215, 187, 187, 0.84);
		overflow: hidden;
		border-radius: 50%;
		cursor: pointer;

		img	{
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
		}
	}

	&__name {
		display: flex;
		justify-content: space-between;
		color: rgba(215, 187, 187, 0.84);
	}

	&__best-score {
		color: rgba(215, 187, 187, 0.84);
		border-bottom: 1px solid rgba(215, 187, 187, 0.84);
		padding-bottom: 10px;

		b {
			font-weight: 700;
		}
	}
}
</style>
