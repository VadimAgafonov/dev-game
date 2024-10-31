<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const className = 'b-navigation';
const route = useRoute();

</script>

<template>
	<div :class="[className + '__btns']">
		<NuxtLink
			to="/"
			:class="[className + '__btn', 'back', route.fullPath == '/' ? 'hide' : '']"
		/>
		<NuxtLink
			to="/start"
			:class="[className + '__btn', 'start']"
			activeClass="active"
		/>
		<NuxtLink
			to="settings"
			:class="[className + '__btn', 'settings']"
			activeClass="active"
		/>
	</div>
</template>

<style scoped lang="scss">
$class-name: 'b-navigation';

.#{$class-name} {
	position: fixed;

	&__btns {
		display: flex;
		flex-direction: row;
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	&__btn {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		padding: 10px 30px;
		border: 1px solid transparent;
		color: #fff;
		font-size: 20px;
		transition: border 0.2s linear;
		width: 100%;
		height: 50px;
		background-color: transparent;
		&.start {
			position: relative;

			&::after {
				content: '';
				width: 25px;
				height: 25px;
				mask-image: url('/files/images/navigation/play.svg');
				mask-position: center;
				mask-size: cover;
				position: absolute;
				background-color: rgba(215, 187, 187, 0.84);
				transition: all 0.3s linear;
			}

			&::before {
				content: "";
				display: flex;
				margin-top: 5px;
				position: absolute;
				bottom: 5%;
				left: 50%;
				transform: translateX(-50%);
				width: 40%;
				height: 3px;
				background-color: rgba(215, 187, 187, 0.84);
				transition: all 0.3s linear;
			}

			&.active {
				&::before {
					background: linear-gradient(120deg, #914444, #200606);
				}

				&::after {
					background: linear-gradient(120deg, #914444, #200606);
				}
			}
		}

		&.back {
			border-top-left-radius: 35px;

			&::after {
				content: '';
				width: 25px;
				height: 25px;
				mask-image: url('/files/images/navigation/back.svg');
				mask-position: center;
				mask-size: cover;
				background-color: rgba(215, 187, 187, 0.84);
				position: absolute;
				transition: all 0.2s linear;
			}

			&::before {
				content: "";
				display: flex;
				margin-top: 5px;
				position: absolute;
				bottom: 5%;
				left: 50%;
				transform: translateX(-50%);
				width: 40%;
				height: 3px;
				background-color: rgba(215, 187, 187, 0.84);
				transition: all 0.3s linear;
			}
		}

		&.active {
			user-select: none;
			pointer-events: none;
			background-color: transparent;
		}

		&.hide {
			user-select: none;
			pointer-events: none;
			opacity: 0.4;
		}

		&.settings {
			border-top-right-radius: 35px;

			&::after {
				content: '';
				width: 25px;
				height: 25px;
				mask-image: url('/files/images/navigation/settings.svg');
				mask-position: center;
				mask-size: cover;
				background-color: rgba(215, 187, 187, 0.84);
				position: absolute;
				transition: all 0.2s linear;
			}

			&::before {
				content: "";
				display: flex;
				margin-top: 5px;
				position: absolute;
				bottom: 5%;
				left: 50%;
				transform: translateX(-50%);
				width: 40%;
				height: 3px;
				background-color: rgba(215, 187, 187, 0.84);
				transition: all 0.3s linear;
			}
		}
	}
}

</style>
