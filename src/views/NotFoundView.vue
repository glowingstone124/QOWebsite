<script setup lang="ts">
</script>

<template>
	<div class="page-shell">
		<div class="page-container">
			<section class="bg page-surface">
				<p class="eyebrow">404</p>
				<h1>页面不存在</h1>
				<p>你发现了一个全新的领域。</p>
				<router-link class="action-button" to="/">返回首页</router-link>
			</section>
		</div>
	</div>
</template>

<style scoped>
.bg {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	min-height: 60vh;
	font-size: clamp(1.2rem, 2vw, 1.5rem);
	font-weight: bold;
	padding: 2rem;
}

.bg h1,
.bg p {
	margin: 0;
}

.bg h1 {
	font-size: clamp(2rem, 5vw, 4rem);
	font-family: var(--font-display);
}

.bg p {
	color: var(--text-secondary);
}
</style>
