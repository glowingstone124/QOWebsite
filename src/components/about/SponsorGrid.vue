<script setup>
defineProps({
	items: {
		type: Array,
		default: () => [],
	},
})
</script>

<template>
	<section class="sponsor-section">
		<div class="section-heading">
			<p class="eyebrow">Partners</p>
			<h2 class="section-title">Quantum Original 由以下厂商支持</h2>
		</div>
		<div class="sponsor-grid">
			<article v-for="item in items" :key="item.name" class="sponsor-card page-surface">
				<div class="logo-wrap">
					<img :src="item.logo" :alt="item.name" />
				</div>
				<div>
					<h3>{{ item.name }}</h3>
					<p>{{ item.description }}</p>
				</div>
			</article>
		</div>
	</section>
</template>

<style scoped>
.sponsor-section {
	display: grid;
	gap: 1rem;
}

.section-heading {
	display: grid;
	gap: 0.45rem;
}

.sponsor-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	gap: 1rem;
}

.sponsor-card {
	padding: 1.35rem;
	display: grid;
	gap: 1rem;
	align-content: start;
}

.logo-wrap {
	height: 88px;
	display: grid;
	place-items: center;
	padding: 1rem;
	background: rgba(255, 255, 255, 0.03);
	border-radius: 18px;
}

.logo-wrap img {
	max-width: 100%;
	max-height: 100%;
	object-fit: contain;
}

.sponsor-card h3,
.sponsor-card p {
	margin: 0;
}

.sponsor-card h3 {
	font-size: 1.1rem;
	font-family: var(--font-display);
}

.sponsor-card p {
	color: var(--text-secondary);
	line-height: 1.6;
}
</style>
