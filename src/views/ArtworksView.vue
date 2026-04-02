<script setup lang="ts">
import { ref } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'
import ArtworkCard from '@/components/artworks/ArtworkCard.vue'
import ArtworkModal from '@/components/artworks/ArtworkModal.vue'
import { artworks, type ArtworkItem } from '@/data/artworks'

const selectedArtwork = ref<ArtworkItem | null>(null)

function openModal(artwork: ArtworkItem) {
	selectedArtwork.value = artwork
}

function closeModal() {
	selectedArtwork.value = null
}
</script>

<template>
	<div class="page-shell">
		<NavigationBar />
		<div class="page-container">
			<section class="artwork-header page-surface">
				<p class="eyebrow">Gallery</p>
				<h1 class="section-title">艺术作品</h1>
				<p class="section-copy">
					这里存放与 QO 有关的艺术作品。如果您也想提交自己的作品，请联系服务器管理组。
				</p>
			</section>

			<section class="artwork-grid">
				<ArtworkCard
					v-for="artwork in artworks"
					:key="artwork.src"
					:artwork="artwork"
					@select="openModal"
				/>
			</section>
		</div>

		<ArtworkModal :artwork="selectedArtwork" @close="closeModal" />
	</div>
</template>

<style scoped>
.artwork-header {
	padding: clamp(1.4rem, 2vw, 1.8rem);
	display: grid;
	gap: 0.5rem;
}

.artwork-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 1rem;
}
</style>
