<script setup>

</script>

<template>
	<div class="nav">
		<div class="logo">
			<img src="@/assets/svg.svg">
			<p>Quantum Original 2 | 官方网站</p>
		</div>
	</div>
</template>

<style scoped>
.nav {
	height: 60px;
	background-color: rgba(102, 116, 126, 0.5);
	backdrop-filter: blur(30px);
	padding: 10px;
}

.logo {
	width: auto;
	height: 100%;
	display: flex;
	align-items: center;
	p {
		font-weight: 800;
		font-size: 1.2rem;
	}
}
.logo:hover {
	border-radius: 10px;
	background-color: rgba(89, 161, 222, 0.8);
}

.logo img {
	max-width: 100%;
	max-height: 100%;
	width: auto;
	height: auto;
	object-fit: contain;
}

</style>
