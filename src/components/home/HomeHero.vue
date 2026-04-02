<script setup>
defineProps({
	image: {
		type: String,
		required: true,
	},
	highlights: {
		type: Array,
		default: () => [],
	},
})
</script>

<template>
	<section class="hero page-surface">
		<div class="hero-copy">
			<p class="eyebrow">Quantum Original 2</p>
			<h1 class="hero-title">不止于原版生存。</h1>
			<p class="hero-description">
				从 QOSP 组件、服务器性能到社区内容整理，这里把主要入口、新闻流和视觉内容放在同一套统一的响应式体验里。
			</p>
			<div class="pill-row">
				<span v-for="item in highlights" :key="item" class="status-pill">{{ item }}</span>
			</div>
			<div class="hero-actions">
				<router-link class="action-button" to="/docs">查看指南</router-link>
				<router-link class="action-button action-button--ghost" to="/about">了解服务器</router-link>
			</div>
		</div>
		<div class="hero-media">
			<div class="hero-image-wrap">
				<img :src="image" alt="Quantum Original artwork" />
			</div>
			<div class="hero-note">
				<strong>Pixel Fantasia</strong>
				<span>现已作为卡面上线 Quantum Original APP。</span>
			</div>
		</div>
	</section>
</template>

<style scoped>
.hero {
	display: grid;
	grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
	gap: 2rem;
	padding: clamp(1.4rem, 2vw, 2rem);
	min-height: min(78vh, 780px);
	overflow: hidden;
	position: relative;
}

.hero::before {
	content: '';
	position: absolute;
	inset: 0;
	background:
		radial-gradient(circle at top left, rgba(122, 219, 213, 0.14), transparent 34%),
		linear-gradient(135deg, rgba(8, 20, 30, 0.92), rgba(6, 14, 23, 0.78));
	pointer-events: none;
}

.hero-copy,
.hero-media {
	position: relative;
	z-index: 1;
}

.hero-copy {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1.2rem;
	padding: clamp(0.5rem, 1vw, 1rem);
}

.hero-title {
	margin: 0;
	max-width: 12ch;
	font-size: clamp(2.8rem, 7vw, 5.6rem);
	line-height: 0.94;
	letter-spacing: -0.05em;
	font-family: var(--font-display);
}

.hero-description {
	margin: 0;
	max-width: 60ch;
	font-size: clamp(1rem, 1.6vw, 1.2rem);
	line-height: 1.7;
	color: var(--text-secondary);
}

.pill-row {
	display: flex;
	flex-wrap: wrap;
	gap: 0.75rem;
}

.hero-actions {
	display: flex;
	flex-wrap: wrap;
	gap: 0.85rem;
}

.hero-media {
	display: grid;
	align-content: center;
	gap: 1rem;
}

.hero-image-wrap {
	border-radius: 24px;
	overflow: hidden;
	border: 1px solid rgba(255, 255, 255, 0.08);
	box-shadow: 0 24px 50px rgba(0, 0, 0, 0.45);
	aspect-ratio: 1 / 1;
}

.hero-image-wrap img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.hero-note {
	display: flex;
	flex-direction: column;
	gap: 0.35rem;
	padding: 1rem 1.1rem;
	background: rgba(8, 18, 28, 0.7);
	border: 1px solid rgba(255, 255, 255, 0.08);
	border-radius: 18px;
	color: var(--text-secondary);
}

.hero-note strong {
	color: var(--text-primary);
}

@media (max-width: 900px) {
	.hero {
		grid-template-columns: 1fr;
		min-height: auto;
	}

	.hero-title {
		max-width: none;
	}
}
</style>
