<script setup>
defineProps({
	title: String,
	body: String,
})
</script>

<template>
	<article class="about-section page-surface">
		<h2>{{ title }}</h2>
		<p>{{ body }}</p>
	</article>
</template>

<style scoped>
.about-section {
	padding: 1.5rem;
}

.about-section h2 {
	margin: 0 0 0.8rem;
	font-size: clamp(1.4rem, 2.3vw, 1.85rem);
	font-family: var(--font-display);
}

.about-section p {
	margin: 0;
	color: var(--text-secondary);
	line-height: 1.75;
}
</style>
