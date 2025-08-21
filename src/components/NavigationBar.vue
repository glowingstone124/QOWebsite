<script setup>
import {useRouter} from "vue-router";
import NavItem from "@/components/NavItem.vue";
const router = useRouter();
function push(link) {
	if (link.startsWith("/")) {
		router.push({ path: link });
	} else {
		router.push({
			path: '/redirect',
			query: { url: link }
		});
	}
}

</script>

<template>
	<div class="nav">
		<div class="logo">
			<img src="/qo_transparent_icon.png">
			<p>Quantum Original 2 | 官方网站</p>
		</div>
		<div class="placeholder"></div>
		<!--div class="menu" @click="push('https://app.qoriginal.vip')"><h2>去App看看！</h2></div-->
		<div class="menu">
			<NavItem :title="'关于'" :link="'/about'"></NavItem>
			<NavItem :title="'加入我们'" :link="'https://qm.qq.com/q/7rjlo2MSxa'"></NavItem>
			<NavItem :title="'指南'" :link="'/docs'"></NavItem>
			<NavItem :title="'捐赠'" :link="'https://afdian.com/a/glowingstone124'"></NavItem>
			<NavItem :title="'前往App'" :link="'https://app.qoriginal.vip'"></NavItem>
		</div>
	</div>
</template>

<style scoped>

.menu:hover {
	cursor: pointer;
}

.nav {
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	align-items: center;
	height: 60px;
	backdrop-filter: blur(30px);
	border-radius: 10px;
	background-color: rgba(248, 245, 245, 0.3);
	margin: 8px;
}

.logo {
	width: auto;
	height: 100%;
	margin: 0 15px;
	display: flex;
	border-radius: 10px;
	align-items: center;

	p {
		font-weight: 800;
		font-size: 1.2rem;
	}
}

.nav:hover {
	box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5);
}

.logo img {
	max-width: 100%;
	max-height: 100%;
	width: auto;
	height: auto;
	object-fit: contain;
}

.placeholder {
	flex: 0.9;
}

@media (max-width: 768px) {
	.logo {
		p {
			display: none;
		}
	}
}

</style>
