<script setup lang="ts">
import type { ArtworkItem } from '@/data/artworks'

defineProps<{
	artwork: ArtworkItem
}>()

const emit = defineEmits<{
	select: [artwork: ArtworkItem]
}>()
</script>

<template>
	<article class="artwork-card page-surface" @click="emit('select', artwork)">
		<div class="artwork-image">
			<img :src="artwork.src" :alt="artwork.title" />
		</div>
		<div class="artwork-info">
			<h3>{{ artwork.title }}</h3>
			<p>{{ artwork.location.locName }}</p>
			<span>{{ artwork.location.dimension }}</span>
		</div>
	</article>
</template>

<style scoped>
.artwork-card {
	overflow: hidden;
	padding: 0;
	cursor: pointer;
	transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
}

.artwork-card:hover {
	transform: translateY(-4px);
	border-color: rgba(122, 219, 213, 0.4);
	box-shadow: 0 24px 48px rgba(0, 0, 0, 0.35);
}

.artwork-image {
	aspect-ratio: 4 / 3;
	overflow: hidden;
}

.artwork-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.28s ease;
}

.artwork-card:hover .artwork-image img {
	transform: scale(1.04);
}

.artwork-info {
	display: grid;
	gap: 0.35rem;
	padding: 1.2rem;
}

.artwork-info h3,
.artwork-info p,
.artwork-info span {
	margin: 0;
}

.artwork-info h3 {
	font-size: 1.35rem;
	font-family: var(--font-display);
}

.artwork-info p,
.artwork-info span {
	color: var(--text-secondary);
}
</style>
