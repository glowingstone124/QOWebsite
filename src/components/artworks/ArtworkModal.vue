<script setup lang="ts">
import type { ArtworkItem } from '@/data/artworks'

defineProps<{
	artwork: ArtworkItem | null
}>()

const emit = defineEmits<{
	close: []
}>()
</script>

<template>
	<div v-if="artwork" class="modal-backdrop" @click.self="emit('close')">
		<div class="modal-panel page-surface">
			<button class="close-button" type="button" @click="emit('close')">关闭</button>
			<div class="modal-image">
				<img :src="artwork.src" :alt="artwork.title" />
			</div>
			<div class="modal-copy">
				<p class="eyebrow">Artwork Detail</p>
				<h2>{{ artwork.title }}</h2>
				<p class="meta">
					地点：{{ artwork.location.locName }}
					<br />
					维度：{{ artwork.location.dimension }}
					<br />
					坐标：{{ artwork.location.coordinate.join(', ') }}
				</p>
				<p class="description">{{ artwork.description }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.modal-backdrop {
	position: fixed;
	inset: 0;
	padding: clamp(1rem, 3vw, 2rem);
	background: rgba(2, 8, 14, 0.78);
	backdrop-filter: blur(18px);
	display: grid;
	place-items: center;
	z-index: 1200;
}

.modal-panel {
	position: relative;
	width: min(1100px, 100%);
	display: grid;
	grid-template-columns: minmax(0, 1.1fr) minmax(260px, 0.9fr);
	gap: 1.2rem;
	padding: 1rem;
}

.modal-image {
	border-radius: 22px;
	overflow: hidden;
	min-height: 320px;
}

.modal-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.modal-copy {
	display: flex;
	flex-direction: column;
	gap: 0.9rem;
	padding: 1rem;
}

.modal-copy h2,
.modal-copy p {
	margin: 0;
}

.meta,
.description {
	color: var(--text-secondary);
	line-height: 1.7;
}

.close-button {
	position: absolute;
	top: 1rem;
	right: 1rem;
	padding: 0.75rem 1rem;
	border-radius: 999px;
	border: 1px solid rgba(255, 255, 255, 0.12);
	background: rgba(7, 16, 24, 0.9);
	color: var(--text-primary);
	cursor: pointer;
}

@media (max-width: 860px) {
	.modal-panel {
		grid-template-columns: 1fr;
		padding-top: 4rem;
	}
}
</style>
