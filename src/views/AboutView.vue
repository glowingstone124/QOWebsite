<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Bahnschrift', Tahoma, Geneva, Verdana, sans-serif;
}

body {
	background-color: #0c1b25;
	color: #e1e8ea;
	overflow-x: hidden;
}

.container {
	min-height: 100vh;
	padding: 3rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: linear-gradient(rgba(12, 27, 37, 0.85), rgba(12, 27, 37, 0.95)),
	url("https://bucket.glowingstone.cn/huge_2024-11-24_15.17.13.png");
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
	position: relative;
	overflow: hidden;
}

.container::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: radial-gradient(circle at 50% 50%, rgba(45, 192, 206, 0.1) 0%, transparent 70%);
	pointer-events: none;
	z-index: 0;
}

.container-front {
	width: 100%;
	max-width: 1200px;
	position: relative;
	z-index: 1;
}

.back-btn {
	position: fixed;
	top: 20px;
	left: 20px;
	padding: 12px 20px;
	font-size: 1rem;
	background: rgba(45, 192, 206, 0.8);
	color: white;
	border-radius: 50px;
	cursor: pointer;
	transition: all 0.3s ease;
	font-weight: bold;
	border: none;
	z-index: 1000;
	display: flex;
	align-items: center;
	gap: 8px;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.back-btn:hover {
	background: rgba(60, 210, 230, 0.9);
	transform: translateY(-2px);
	box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.back-btn img {
	width: 20px;
	height: 20px;
}

.front-container {
	background: rgba(25, 40, 55, 0.85);
	backdrop-filter: blur(12px);
	border-radius: 16px;
	padding: 30px;
	margin-top: 30px;
	border: 1px solid rgba(45, 192, 206, 0.3);
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.front-container:hover {
	transform: translateY(-5px);
	box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

.big-title {
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 20px;
	margin-bottom: 20px;
}

.big-title h1 {
	font-weight: 700;
	font-size: clamp(2rem, 5vw, 3.5rem);
	background: linear-gradient(135deg, #2dc0ce, #4deeea);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
	text-shadow: 0 2px 10px rgba(45, 192, 206, 0.2);
}

.title-img {
	width: 120px;
	height: auto;
	filter: drop-shadow(0 5px 15px rgba(45, 192, 206, 0.5));
	animation: float 6s ease-in-out infinite;
}

@keyframes float {
	0%, 100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-15px);
	}
}

.abstract {
	margin: 20px auto 30px;
	text-align: center;
	font-size: 1.4rem;
	line-height: 1.6;
	max-width: 800px;
	padding: 0 20px;
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.links {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 15px;
	margin: 30px auto;
}

.links a {
	display: flex;
	align-items: center;
	gap: 10px;
	text-decoration: none;
	font-size: 1.2rem;
	color: white;
	padding: 12px 25px;
	border-radius: 50px;
	background: rgba(45, 192, 206, 0.2);
	border: 1px solid rgba(45, 192, 206, 0.4);
	transition: all 0.3s ease;
	font-weight: 600;
}

.links a:hover {
	background: rgba(45, 192, 206, 0.4);
	transform: translateY(-3px);
	box-shadow: 0 5px 15px rgba(45, 192, 206, 0.3);
}

.links a img {
	width: 24px;
	height: 24px;
}

.content {
	display: flex;
	flex-direction: column;
	gap: 40px;
	margin: 40px auto;
	max-width: 1000px;
}

.sector {
	font-size: 1.8rem;
	font-weight: 800;
	margin-bottom: 20px;
	position: relative;
	padding-bottom: 10px;
	color: #4deeea;
}

.sector::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 80px;
	height: 3px;
	background: linear-gradient(90deg, #2dc0ce, transparent);
	border-radius: 3px;
}

.text {
	font-size: 1.2rem;
	line-height: 1.8;
	color: #e1e8ea;
}

important {
	color: #2dc0ce;
	font-weight: 700;
	position: relative;
}

important::after {
	content: '';
	position: absolute;
	bottom: -2px;
	left: 0;
	width: 100%;
	height: 2px;
	background: linear-gradient(90deg, #2dc0ce, transparent);
}

.sponsors {
	display: flex;
	flex-direction: column;
	gap: 30px;
	margin-top: 50px;
}

.sponsors-header {
	text-align: center;
	font-size: 2rem;
	font-weight: 700;
	color: #4deeea;
	margin-bottom: 20px;
}

.sponsors-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	gap: 30px;
}

.sponsor-card {
	background: rgba(77, 125, 175, 0.9);
	border-radius: 16px;
	padding: 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	border: 1px solid rgba(45, 192, 206, 0.3);
	box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
	transition: all 0.3s ease;
}

.sponsor-card:hover {
	transform: translateY(-8px);
	box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
	border-color: rgba(45, 192, 206, 0.6);
}

.sponsor-logo {
	width: 150px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
}

.sponsor-logo img {
	max-width: 100%;
	max-height: 100%;
	object-fit: contain;
}

.sponsor-info {
	text-align: center;
}

.sponsor-name {
	font-size: 1.4rem;
	font-weight: 700;
	margin-bottom: 10px;
	color: #4deeea;
}

.sponsor-desc {
	font-size: 1rem;
	line-height: 1.5;
	color: #c1d8da;
}

.sponsor-link {
	margin-top: 15px;
	display: inline-block;
	padding: 8px 20px;
	background: rgba(45, 192, 206, 0.2);
	border-radius: 50px;
	color: white;
	text-decoration: none;
	font-weight: 600;
	transition: all 0.3s ease;
	border: 1px solid rgba(45, 192, 206, 0.4);
}

.sponsor-link:hover {
	background: rgba(45, 192, 206, 0.4);
	transform: translateY(-2px);
}

.animate-in {
	animation: fadeUp 0.8s ease-out forwards;
}

@keyframes fadeUp {
	from {
		opacity: 0;
		transform: translateY(30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.delay-1 {
	animation-delay: 0.1s;
}

.delay-2 {
	animation-delay: 0.2s;
}

.delay-3 {
	animation-delay: 0.3s;
}

.delay-4 {
	animation-delay: 0.4s;
}

.delay-5 {
	animation-delay: 0.5s;
}

.delay-6 {
	animation-delay: 0.6s;
}

@media (max-width: 768px) {
	.container {
		padding: 2rem 1rem;
	}

	.front-container {
		padding: 20px;
	}

	.big-title {
		flex-direction: column;
		text-align: center;
	}

	.abstract {
		font-size: 1.2rem;
	}

	.links {
		flex-direction: column;
		align-items: center;
	}

	.links a {
		width: 100%;
		max-width: 300px;
		justify-content: center;
	}

	.sponsors-grid {
		grid-template-columns: 1fr;
	}
}

.particles {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	z-index: -1;
}

@keyframes particleMove {
	to {
		transform: translateY(100vh);
	}
}

.footer {
	margin-top: 60px;
	text-align: center;
	padding: 20px;
	font-size: 0.9rem;
	color: rgba(255, 255, 255, 0.6);
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	width: 100%;
	max-width: 1200px;
}
</style>
<template>
	<div class="container">
		<div class="particles" id="particles"></div>

		<button class="back-btn animate-in delay-1" @click="goBack()">
			<font-awesome-icon icon="fa-arrow-left" /> 返回首页
		</button>

		<div class="container-front">
			<div class="front-container animate-in delay-1">
				<div class="big-title">
					<img src="/qo_transparent_icon.png" class="title-img">
					<h1>Quantum Original 2</h1>
				</div>
				<h2 class="abstract">颠覆原版游戏体验，<br>更由QOSP组件强势驱动。</h2>
				<div class="links">
					<a href="https://github.com/glowingstone124" class="animate-in delay-2">
						<font-awesome-icon icon="fa-github" /> Github
					</a>
					<a href="https://qm.qq.com/q/7rjlo2MSxa" class="animate-in delay-3">
						<font-awesome-icon icon="fa-qq" /> QQ群
					</a>
					<a href="mailto:hanseroffical@outlook.com" class="animate-in delay-4">
						<font-awesome-icon icon="fa-envelope"/> 电子邮件
					</a>
				</div>
			</div>

			<div class="content">
				<div class="front-container animate-in delay-2">
					<p class="sector">开放包容，海纳百川</p>
					<p class="text">
						在这里，每个方块都是新的起点。<br>
						<important>QO不设准入门槛</important>
						，无论您是小白 / 建筑师 / 红石大佬 / 摸鱼之神 — 加入我们总没错。<br>
						截止2025年，QuantumOriginal已经累计吸纳了超过
						<important>200名玩家</important>
						，其中不乏来自
						<important>外国</important>
						的朋友。
					</p>
				</div>

				<div class="front-container animate-in delay-3">
					<p class="sector">随时畅连，稳定游玩</p>
					<p class="text">
						Quantum Original拥有
						<important>稳定的组件和高性能服务器</important>
						，并且不限制任何生电/跑图。
						自从2023年换用
						<important>Intel Core i9 13900K物理机</important>
						，
						2025年换用
						<important>AMD Ryzen 9900X物理机</important>
						以来，多个
						<important>大型工程</important>
						在本服务器均得以顺畅开展。<br>
						同时，QO还拥有
						<important>多条线路</important>
						，无论您在海外或是偏远地区，我们的中转服务器均能够保证稳定的体验。(Powered by Simpcloud /
						简幻云)<br>
						服务器引入了
						<important>定期备份，CoreProtect，登录系统</important>
						等先进机制，杜绝熊孩子。
					</p>
				</div>

				<div class="front-container animate-in delay-4">
					<p class="sector">始于原版，不止原版</p>
					<p class="text">
						得益于
						<important>Purpur</important>
						服务端的高可拓展性，我们自研了
						<important>QPlugin插件并且在Github开源</important>
						。其中包括
						<important>聚合登录系统，更好的不死图腾堆叠，特殊彩蛋物品，游戏内外聊天同步</important>
						等优化原版体验的功能，游玩更加轻松便捷，又不失去原版生存的乐趣。
					</p>
				</div>

				<div class="front-container animate-in delay-5">
					<p class="sector">我的意思是，为什么不加入我们呢？</p>
					<p class="text">
						现在加入QQ群
						<important>946085440</important>
						，开始游玩面向所有人的"骗赞服"。
					</p>
				</div>
			</div>

			<div class="sponsors">
				<h2 class="sponsors-header animate-in delay-5">Quantum Original由以下厂商支持</h2>
				<div class="sponsors-grid">
					<div class="sponsor-card animate-in delay-6">
						<div class="sponsor-logo">
							<img src="https://v2.simpcloud.cn/icons/favicon-128x128.png" alt="简幻云">
						</div>
						<div class="sponsor-info">
							<h3 class="sponsor-name">简幻云</h3>
							<p class="sponsor-desc">提供计算服务</p>
						</div>
					</div>

					<div class="sponsor-card animate-in delay-6">
						<div class="sponsor-logo">
							<img src="https://cf-assets.www.cloudflare.com/dzlvafdwdttg/69wNwfiY5mFmgpd9eQFW6j/d5131c08085a977aa70f19e7aada3fa9/1pixel-down__1_.svg" alt="Cloudflare">
						</div>
						<div class="sponsor-info">
							<h3 class="sponsor-name">Cloudflare</h3>
							<p class="sponsor-desc">提供高性能网络服务和边缘计算支持</p>
						</div>
					</div>

					<div class="sponsor-card animate-in delay-6">
						<div class="sponsor-logo">
							<img src="@/assets/Holographic%20Lab.png" alt="Holographic Lab">
						</div>
						<div class="sponsor-info">
							<h3 class="sponsor-name">Holographic Lab</h3>
							<p class="sponsor-desc">运营和全场景支持</p>
						</div>
					</div>
				</div>
			</div>

			<div class="footer animate-in delay-6">
				<p>© 2025 Quantum Original 服务器 | 由QOSP组件驱动</p>
				<p>联系邮箱: hanseroffical@outlook.com</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const router = useRouter()
function goBack() {
	router.push('/')
}
</script>

