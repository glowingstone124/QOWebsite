<template>
	<div>
		<div id="app">
		</div>
	</div>
</template>

<script setup>
import {onMounted} from "vue";

onMounted(() => {
	const link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = "//cdn.jsdelivr.net/npm/docsify/themes/dark.css"
	document.head.appendChild(link);

	const script = document.createElement("script");
	script.src = "//cdn.jsdelivr.net/npm/docsify@4";
	script.onload = () => {
		window.$docsify = {
			loadNavbar: true
		}
	};
	document.body.appendChild(script);
});
</script>

<style scoped>
</style>
