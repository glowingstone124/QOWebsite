<script setup>
import { useRouter } from 'vue-router'
import { navigateToLink } from '@/utils/navigation'

const props = defineProps({
	title: String,
	description: String,
	link: String,
	image: String,
	time: String,
})

const router = useRouter()

function openLink() {
	navigateToLink(router, props.link || '/')
}
</script>

<template>
	<article class="news-card page-surface" @click="openLink">
		<div v-if="image && image !== 'none'" class="news-image">
			<img :src="image" :alt="title" />
		</div>
		<div class="news-content">
			<p class="news-time">
				<font-awesome-icon icon="clock" />
				<span>{{ time }}</span>
			</p>
			<h3>{{ title }}</h3>
			<p>{{ description }}</p>
		</div>
	</article>
</template>

<style scoped>
.news-card {
	display: grid;
	grid-template-columns: minmax(0, 320px) minmax(0, 1fr);
	gap: 1.2rem;
	padding: 1rem;
	cursor: pointer;
	transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
}

.news-card:hover {
	transform: translateY(-3px);
	border-color: rgba(122, 219, 213, 0.42);
	box-shadow: 0 24px 54px rgba(0, 0, 0, 0.34);
}

.news-image {
	border-radius: 20px;
	overflow: hidden;
	min-height: 220px;
	background: rgba(255, 255, 255, 0.03);
}

.news-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.news-content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 0.85rem;
	padding: 0.4rem 0.35rem;
}

.news-content h3 {
	margin: 0;
	font-size: clamp(1.35rem, 2.4vw, 2rem);
	line-height: 1.15;
	font-family: var(--font-display);
}

.news-content p {
	margin: 0;
	color: var(--text-secondary);
	line-height: 1.65;
}

.news-time {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	color: var(--accent-2);
	font-size: 0.92rem;
}

@media (max-width: 820px) {
	.news-card {
		grid-template-columns: 1fr;
	}

	.news-image {
		min-height: 180px;
	}
}
</style>
