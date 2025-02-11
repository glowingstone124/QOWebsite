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
	link.href = "/document_style.css"
	document.head.appendChild(link);

	const script = document.createElement("script");
	script.src = "//cdn.jsdelivr.net/npm/docsify@4";
	script.onload = () => {
		window.$docsify = {
			loadNavbar: true,
			loadSidebar: true,
			routerMode: "hash"
		}
	};
	document.body.appendChild(script);
});
</script>

<style scoped>
</style>
