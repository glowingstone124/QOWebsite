<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { navigationSections } from '@/data/siteNavigation'
import { navigateToLink } from '@/utils/navigation'

const router = useRouter()
const route = useRoute()
const opened = ref(false)

const quickLinks = computed(() => navigationSections[0].items)

function openLink(link) {
	opened.value = false
	navigateToLink(router, link)
}

watch(
	() => route.fullPath,
	() => {
		opened.value = false
	}
)
</script>

<template>
	<header class="site-nav">
		<div class="nav-shell">
			<button class="brand-button" type="button" @click="openLink('/')">
				<img src="/qologo.svg" alt="Quantum Original logo" />
				<div>
					<strong>Quantum Original 2</strong>
					<span>官方网站</span>
				</div>
			</button>

			<nav class="quick-links">
				<button
					v-for="item in quickLinks"
					:key="item.link"
					type="button"
					class="quick-link"
					:class="{ active: item.link === route.path }"
					@click="openLink(item.link)"
				>
					{{ item.label }}
				</button>
			</nav>

			<button class="menu-button" type="button" :aria-expanded="opened" @click="opened = !opened">
				<span></span>
				<span></span>
			</button>
		</div>
	</header>

	<transition name="menu-fade">
		<div v-if="opened" class="drawer-backdrop" @click="opened = false">
			<aside class="drawer-panel page-surface" @click.stop>
				<section v-for="section in navigationSections" :key="section.title" class="drawer-section">
					<p class="drawer-title">{{ section.title }}</p>
					<button
						v-for="item in section.items"
						:key="item.link"
						type="button"
						class="drawer-link"
						:class="{ active: item.link === route.path }"
						@click="openLink(item.link)"
					>
						{{ item.label }}
					</button>
				</section>
			</aside>
		</div>
	</transition>
</template>

<style scoped>
.site-nav {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1100;
	padding: 0.8rem clamp(1rem, 2vw, 1.5rem);
}

.nav-shell {
	width: min(1200px, 100%);
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	padding: 0.7rem 0.85rem;
	background: rgba(6, 15, 23, 0.72);
	border: 1px solid rgba(255, 255, 255, 0.08);
	border-radius: 999px;
	backdrop-filter: blur(24px);
	box-shadow: 0 16px 36px rgba(0, 0, 0, 0.28);
}

.brand-button {
	display: inline-flex;
	align-items: center;
	gap: 0.85rem;
	padding: 0;
	border: none;
	background: transparent;
	color: var(--text-primary);
	cursor: pointer;
}

.brand-button img {
	width: 42px;
	height: 42px;
}

.brand-button strong,
.brand-button span {
	display: block;
	text-align: left;
}

.brand-button strong {
	font-family: var(--font-display);
	font-size: 1rem;
}

.brand-button span {
	color: var(--text-secondary);
	font-size: 0.85rem;
}

.quick-links {
	display: flex;
	align-items: center;
	gap: 0.45rem;
}

.quick-link,
.drawer-link,
.menu-button {
	border: none;
	background: transparent;
	color: var(--text-secondary);
	cursor: pointer;
}

.quick-link {
	padding: 0.7rem 0.95rem;
	border-radius: 999px;
	transition: background 0.2s ease, color 0.2s ease;
}

.quick-link:hover,
.quick-link.active,
.drawer-link:hover,
.drawer-link.active {
	color: var(--text-primary);
	background: rgba(255, 255, 255, 0.08);
}

.menu-button {
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	gap: 0.35rem;
	width: 44px;
	height: 44px;
	border-radius: 999px;
	padding: 0 11px;
	background: rgba(255, 255, 255, 0.04);
}

.menu-button span {
	display: block;
	height: 2px;
	width: 100%;
	background: currentColor;
	border-radius: 999px;
}

.drawer-backdrop {
	position: fixed;
	inset: 0;
	z-index: 1090;
	background: rgba(2, 9, 15, 0.62);
	backdrop-filter: blur(20px);
	display: flex;
	justify-content: flex-end;
	padding: 5.5rem 1rem 1rem;
}

.drawer-panel {
	width: min(360px, 100%);
	padding: 1.1rem;
	display: grid;
	gap: 1rem;
}

.drawer-section {
	display: grid;
	gap: 0.45rem;
}

.drawer-title {
	margin: 0 0 0.3rem;
	color: var(--text-secondary);
	font-size: 0.85rem;
	text-transform: uppercase;
	letter-spacing: 0.08em;
}

.drawer-link {
	text-align: left;
	padding: 0.9rem 1rem;
	border-radius: 18px;
}

.menu-fade-enter-active,
.menu-fade-leave-active {
	transition: opacity 0.22s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
	opacity: 0;
}

@media (max-width: 820px) {
	.quick-links {
		display: none;
	}

	.brand-button span {
		display: none;
	}
}
</style>
