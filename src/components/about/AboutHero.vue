<script setup>
defineProps({
	title: String,
	subtitle: String,
	chips: {
		type: Array,
		default: () => [],
	},
	stats: {
		type: Array,
		default: () => [],
	},
	links: {
		type: Array,
		default: () => [],
	},
})
</script>

<template>
	<section class="about-hero page-surface">
		<div class="about-main">
			<div class="brand-lockup">
				<img src="/qologo.svg" alt="Quantum Original logo" />
				<div>
					<p class="eyebrow">About The Server</p>
					<h1>{{ title }}</h1>
				</div>
			</div>
			<p class="hero-copy">{{ subtitle }}</p>
			<div class="chip-row">
				<span v-for="chip in chips" :key="chip" class="status-pill">{{ chip }}</span>
			</div>
			<div class="hero-links">
				<a v-for="link in links" :key="link.href" :href="link.href" target="_blank" rel="noopener" class="action-button action-button--ghost">
					{{ link.label }}
				</a>
			</div>
		</div>
		<div class="stats-grid">
			<article v-for="stat in stats" :key="stat.label" class="stat-card">
				<span>{{ stat.label }}</span>
				<strong>{{ stat.value }}</strong>
				<small>{{ stat.detail }}</small>
			</article>
		</div>
	</section>
</template>

<style scoped>
.about-hero {
	display: grid;
	grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.8fr);
	gap: 1.5rem;
	padding: clamp(1.4rem, 2vw, 2rem);
}

.about-main {
	display: flex;
	flex-direction: column;
	gap: 1.1rem;
}

.brand-lockup {
	display: flex;
	align-items: center;
	gap: 1rem;
}

.brand-lockup img {
	width: clamp(72px, 10vw, 112px);
	height: auto;
	filter: drop-shadow(0 16px 22px rgba(0, 0, 0, 0.35));
}

.brand-lockup h1 {
	margin: 0;
	font-size: clamp(2.2rem, 5vw, 3.7rem);
	line-height: 1;
	font-family: var(--font-display);
}

.hero-copy {
	margin: 0;
	max-width: 42rem;
	font-size: clamp(1.05rem, 1.6vw, 1.28rem);
	line-height: 1.7;
	color: var(--text-secondary);
}

.chip-row,
.hero-links {
	display: flex;
	flex-wrap: wrap;
	gap: 0.75rem;
}

.stats-grid {
	display: grid;
	gap: 1rem;
}

.stat-card {
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	padding: 1.1rem 1.15rem;
	border-radius: 20px;
	background: rgba(7, 17, 26, 0.72);
	border: 1px solid rgba(255, 255, 255, 0.08);
}

.stat-card span,
.stat-card small {
	color: var(--text-secondary);
}

.stat-card strong {
	font-size: clamp(1.35rem, 2vw, 1.8rem);
	color: var(--text-primary);
	font-family: var(--font-display);
}

@media (max-width: 920px) {
	.about-hero {
		grid-template-columns: 1fr;
	}
}

@media (max-width: 620px) {
	.brand-lockup {
		align-items: flex-start;
	}
}
</style>
