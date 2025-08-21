<script setup>
import {useRouter} from "vue-router";
const router = useRouter();
const props = defineProps({
	title: {
		type: String,
		default: "-"
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
	<span class="nav_item" @click="push"> {{ title }}</span>
</template>

<style scoped>
	.nav_item {
		cursor: pointer;
		padding: 0 1rem;
		border-right: 1px solid #ccc;
		font-size: larger;
	}
	.nav_item:last-child {
		border-right: none;
	}
	.nav_item:hover {
		color: #ea6f5a;
	}
	.nav_item:active {
		color: #ea6f5a;
	}
</style>
