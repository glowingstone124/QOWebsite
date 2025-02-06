<script setup>
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";

const router = useRouter();
const hasAnimated = ref(true)
function goBack() {
	router.push("/")
}
</script>

<template>
	<div class="container">
		<div class="container-front" :class="{ animate: hasAnimated }">
			<button class="back-btn" @click="goBack"><img src="@/assets/arrow_back.svg"></button>
			<span>
		<div class="big-title">
			<img src="/src/assets/svg.svg" class="title-img">
			<h1>Quantum Original 2</h1>
		</div>
		<h2 class="abstract">颠覆原版游戏体验，<br>更由QOSP组件强势驱动。</h2>
		<div class="links">
			<a href="https://github.com/glowingstone124"><img src="@/assets/code.svg">Github</a>
			<a href="https://qm.qq.com/q/7rjlo2MSxa"><img src="@/assets/qq.svg">QQ群</a>
			<a href="mailto:hanseroffical@outlook.com"><img src="@/assets/mail.svg">电子邮件</a>
		</div>
		</span>
			<div class="content">
				<p class="sector">开放包容，海纳百川</p>
				<p class="text">在这里，每个方块都是新的起点。<br>
					<important>QO不设准入门槛</important>
					，无论您是小白 / 建筑师 / 红石大佬 / 摸鱼之神 — 加入我们总没错。<br>
					截止2025年，QuantumOriginal已经累计吸纳了超过
					<important>200名玩家</important>
					，其中不乏来自
					<important>外国</important>
					的朋友。
				</p>
				<p class="sector">随时畅连，稳定游玩</p>
				<p class="text">Quantum Original拥有
					<important>稳定的组件和高性能服务器</important>
					，并且不限制任何生电/跑图。
					。自从2023年换用
					<important>Intel Core i9 13900K物理机</important>
					以来，多个
					<important>大型工程</important>
					在本服务器均得以顺畅开展。<br>
					同时，QO还拥有
					<important>多条线路</important>
					，无论您在海外或是偏远地区，我们的中转服务器均能够保证稳定的体验。(Powered by Simpcloud / 简幻云)<br>
					服务器引入了
					<important>定期备份，CoreProtect，登录系统</important>
					等先进机制，杜绝熊孩子。
				</p>
				<p class="sector">始于原版，不止原版</p>
				<p class="text">得益于
					<important>Purpur</important>
					服务端的高可拓展性，我们自研了
					<important>QPlugin插件并且在Github开源</important>
					。其中包括
					<important>聚合登录系统，更好的不死图腾堆叠，特殊彩蛋物品，游戏内外聊天同步</important>
					等优化原版体验的功能，游玩更加轻松便捷，又不失去原版生存的乐趣。
				</p>
				<p class="sector">我的意思是，为什么不加入我们呢？</p>
				<p class="text">现在加入QQ群
					<important>946085440</important>
					，开始游玩面向所有人的“骗赞服”。
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.content {
	text-align: left;
	margin: auto;
	max-width: 60%;
}

.sector {
	font-size: 1.8rem;
	font-weight: 1000;
	text-align: left;
}

.links {
	margin: auto;
	align-content: center;
	display: flex;
	justify-content: center;
	background: #a29e9e40;
	border-radius: 30px;
	max-width: 30%;
	padding: 10px;
	a{
		text-decoration: none;
		align-content: center;
		justify-content: center;
		display: flex;
		font-size: 1.2rem;
		color: #fff;
		margin: 0 10px;
		padding: 10px;
		border-radius: 18px;
	}
	a:hover{
		background: rgba(222, 219, 219, 0.38);
	}
}

.text {
	font-weight: 500;
	font-size: 1.2rem;
	color: #e1e8ea;
}

important {
	color: #2dc0ce;
}

.back-btn {
	position: fixed;
	top: 20px;
	left: 20px;
	padding: 20px 30px;
	font-size: 1.2rem;
	background-color: rgb(71, 119, 91);
	color: white;
	border-radius: 20px;
	cursor: pointer;
	transition: background-color 0.3s;
	font-weight: bold;
	border: 1px solid rgb(71, 119, 91);
	z-index: 999;
}

.back-btn:hover {
	border: 1px solid rgb(60, 179, 210);
}

.big-title {
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;

	h1 {
		font-weight: 600;
		font-size: 6rem;
		font-family: Bahnschrift, serif;
		margin-left: -80px;
	}
}

.title-img {
	max-width: 400px;
}

.container {
	height: 100%;
	overflow-y: scroll;
	padding: 3rem;
	flex-direction: column;
	align-items: center;
	background: url("https://storage.glowingstone.cn/download/huge_2024-11-24_15.17.13.png");
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
}
.container-front {
	backdrop-filter: blur(10px) brightness(50%);
	background: rgba(64, 168, 137, 0.4);
	border-radius: 20px;
	padding-bottom: 30px;
}
.abstract {
	margin: auto;
	text-align: center;
	font-size: 1.5rem;
	color: #ffffff;
	line-height: 1.6;
}
.container-front {
	opacity: 0;
	transform: translateY(20px);
	transition: all 1s ease-out;
}

.container-front.animate {
	opacity: 1;
	transform: translateY(0);
}

.container-front.animate .big-title,
.container-front.animate .abstract,
.container-front.animate .links,
.container-front.animate .content {
	animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.big-title {
	animation-delay: 0.2s;
}

.abstract {
	animation-delay: 0.4s;
}

.links {
	animation-delay: 0.6s;
}

.content {
	animation-delay: 0.8s;
}
</style>
