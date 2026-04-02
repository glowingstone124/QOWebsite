<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'
import HomeHero from '@/components/home/HomeHero.vue'
import NewsCard from '@/components/home/NewsCard.vue'
import { heroHighlights, heroSlides, homeNewsSections } from '@/data/home'

const currentSlide = ref(heroSlides[0])
const currentIndex = ref(0)
let intervalId = null

onMounted(() => {
	intervalId = setInterval(() => {
		currentIndex.value = (currentIndex.value + 1) % heroSlides.length
		currentSlide.value = heroSlides[currentIndex.value]
	}, 7000)
})

onUnmounted(() => {
	clearInterval(intervalId)
})
</script>

<template>
	<div class="page-shell">
		<NavigationBar />
		<div class="page-container">
			<HomeHero :image="currentSlide" :highlights="heroHighlights" />

			<section v-for="section in homeNewsSections" :key="section.title" class="news-section">
				<div class="section-header">
					<p class="eyebrow">Updates</p>
					<h2 class="section-title">{{ section.title }}</h2>
					<p class="section-copy">{{ section.description }}</p>
				</div>
				<div class="news-stack">
					<NewsCard
						v-for="item in section.items"
						:key="`${section.title}-${item.title}`"
						v-bind="item"
					/>
				</div>
			</section>
		</div>
	</div>
</template>

<style scoped>
.news-section {
	display: grid;
	gap: 1rem;
}

.section-header {
	display: grid;
	gap: 0.4rem;
	padding: 0.25rem 0.2rem;
}

.news-stack {
	display: grid;
	gap: 1rem;
}
</style>
