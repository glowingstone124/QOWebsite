<script setup>
import {useRouter} from "vue-router";
const router = useRouter();
const props = defineProps({
	title: {
		type: String,
		default: "Landscape"
	},
	description: {
		type: String,
		default: "Landscape description"
	},
	link: {
		type: String,
		default: "/"
	}
})
function push() {
	if (props.link.startsWith("/")) {
		router.push({ path: props.link });
	} else {
		router.push({
			path: '/redirect',
			query: { url: props.link }
		});

	}
}
</script>

<template>
	<div class="landscape" @click="push">
		<h1 class="landscape-title"> {{ title }}</h1>
		<p class="landscape-desc"> {{ description }} </p>
	</div>
</template>

<style scoped>


.landscape-desc {
	font-size: var(--p-font-size);
}

.landscape-title {
	font-size: var(--h1-font-size);
}

.landscape {
	padding: 0 60px;
	--h1-font-size: 2em;
	--p-font-size: 1em;
	backdrop-filter: brightness(0.5);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: auto;
	height: 100%;
}
@media (max-width: 800px) {
	.landscape {
		padding: 0;
	}
}
.landscape:hover {
	cursor: pointer;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	h1 {
		font-size: calc(var(--h1-font-size) * 1.3);
	}

	backdrop-filter: brightness(0.9) blur(30px);
}
</style>
