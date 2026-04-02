<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
import AboutHero from '@/components/about/AboutHero.vue'
import AboutSectionCard from '@/components/about/AboutSectionCard.vue'
import SponsorGrid from '@/components/about/SponsorGrid.vue'
import PageBackButton from '@/components/common/PageBackButton.vue'
import { aboutMeta, aboutSections, sponsors } from '@/data/about'
</script>

<template>
	<div class="page-shell">
		<NavigationBar />
		<div class="page-container">
			<div class="back-row">
				<PageBackButton />
			</div>

			<AboutHero v-bind="aboutMeta" />

			<section class="content-grid">
				<AboutSectionCard
					v-for="section in aboutSections"
					:key="section.title"
					:title="section.title"
					:body="section.body"
				/>
			</section>

			<SponsorGrid :items="sponsors" />

			<footer class="footer-note">
				<p>© 2025 Quantum Original 服务器 | 由 QOSP 组件驱动</p>
				<p>联系邮箱: hanseroffical@outlook.com</p>
			</footer>
		</div>
	</div>
</template>

<style scoped>
.back-row {
	display: flex;
	justify-content: flex-start;
}

.content-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 1rem;
}

.footer-note {
	padding: 0.5rem 0.4rem 0;
	color: var(--text-secondary);
	display: grid;
	gap: 0.3rem;
	text-align: center;
}

.footer-note p {
	margin: 0;
}
</style>
