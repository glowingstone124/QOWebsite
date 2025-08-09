<script setup>
import {useRouter} from "vue-router";
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
		<div class="menu" @click="push('https://app.qoriginal.vip')"><h2>去App看看！</h2></div>
	</div>
</template>

<style scoped>

.menu {
	border-radius: 10px;
	h2 {
		font-size: 1rem;
		margin: 0 40px;
		padding: 8px 20px;
	}
}
.menu:hover {
	cursor: pointer;
	background-color: rgb(136, 135, 135, 0.4);
}

.nav {
	display: flex;
	align-items: center;
	width: 100%;
	height: 60px;
	backdrop-filter: blur(30px);
	border-radius: 10px;
	background-color: rgba(21, 64, 87, 0.3);
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
	background-color: rgba(194, 82, 18, 0.8);
}

.logo img {
	max-width: 100%;
	max-height: 100%;
	width: auto;
	height: auto;
	object-fit: contain;
}

</style>
