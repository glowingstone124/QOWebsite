<script setup>
import {useRouter} from "vue-router";
import {ref} from "vue";
import NavItem from "@/components/NavItem.vue";

const router = useRouter();

function push(link) {
	if (link.startsWith("/")) {
		router.push({path: link});
	} else {
		router.push({
			path: '/redirect',
			query: {url: link}
		});
	}
}


const opened = ref(true);
const currentMenu = ref(1);
function toggle() {
	opened.value = !opened.value;
}

function activate(page) {
	currentMenu.value = page;
}
</script>

<template>
	<div class="nav left">
		<div class="logo sub">
			<img src="/qo_transparent_icon.png">
			<p>Quantum Original 2 | 官方网站</p>
		</div>
		<!--div class="menu" @click="push('https://app.qoriginal.vip')"><h2>去App看看！</h2></div-->
		<div class="sub menu-btn">
			<div class="animation" :class="{ opened }"
				 @click="toggle">
				<div class="rectangle up"></div>
				<div class="rectangle down"></div>
			</div>
		</div>
	</div>
	<div class="fullscreen-menu-father" :class="{opened}">
		<div class="fullscreen-left"></div>
		<div class="fullscreen-menu">
			<div class="category">
				<div class="category-item" @click=activate(1) :class="{ active: currentMenu === 1 }">
					<p>常用功能</p>
				</div>
				<div class="category-item" @click=activate(2) :class="{ active: currentMenu === 2 }">
					<p>指向子页</p>
				</div>
				<div class="category-item" @click=activate(3) :class="{ active: currentMenu === 3 }">
					<p>更多</p>
				</div>
			</div>
			<div class="menu-section" v-if="currentMenu === 1">
				<NavItem :title="'加入我们'" :link="'https://qm.qq.com/q/7rjlo2MSxa'"></NavItem>
				<NavItem :title="'指南'" :link="'/docs'"></NavItem>
			</div>
			<div class="menu-section" v-if="currentMenu === 2">
				<NavItem :title="'QCommunity'" :link="'https://app.qoriginal.vip'"></NavItem>
				<NavItem :title="'Web Map'" :link="'https://map.qoriginal.vip'"></NavItem>
				<NavItem :title="'捐赠'" :link="'https://afdian.com/a/glowingstone124'"></NavItem>
			</div>
			<div class="menu-section" v-if="currentMenu === 3">
				<NavItem :title="'关于'" :link="'/about'"></NavItem>
			</div>
		</div>
	</div>
</template>

<style scoped>

.menu-btn {
	z-index: 999;
}

.fullscreen-left {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #00000080;
	backdrop-filter: blur(40px);
	transition: transform 0.35s ease, opacity 0.35s ease;
	opacity: 0;
}

.fullscreen-menu-father.opened .fullscreen-left {
	opacity: 1;
}

.fullscreen-menu-father {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 998;
}

.category {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
}

.category-item {
	p {
		font-size: 1rem;
		font-weight: bold;
	}
	margin: 20px 26px;
	padding: 0px 30px;
	cursor: pointer;
	transition: background-color 0.25s ease;
	background-color: #ffffff00;
	border-radius: 50px;
}
.active{
	background-color: rgba(255, 255, 255);
	color: black;
}
.menu-section {
	padding-left: 2rem;
	display: flex;
	flex-direction: column;
}
.fullscreen-menu {
	padding-top: 5rem;
	width: 50%;
	transform: translateX(100%);
	height: 100%;
	right: 0;
	position: fixed;
	background: linear-gradient(43deg, #10203d 0%, #1b3462 59%);
	backdrop-filter: blur(20px);
}
.fullscreen-menu-father.opened .fullscreen-menu {
	transform: translateX(0);
}
.animation {
	width: 60px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
}

.rectangle {
	width: 25px;
	height: 3px;
	background-color: #fff;
	position: absolute;
}

.up {
	transform: translateY(-6px) rotate(0deg);
}

.down {
	transform: translateY(6px) rotate(0deg);
}

.animation.opened .up {
	transform: translateY(0) rotate(45deg);
}

.animation.opened .down {
	transform: translateY(0) rotate(-45deg);
}


.nav {
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	align-items: baseline;
	height: 60px;
	margin: 8px;
	justify-content: space-between;
}

.sub {
	backdrop-filter: blur(30px);
	border-radius: 10px;
	height: 100%;
	background-color: rgba(155, 152, 152, 0.3);
}

.logo {
	width: auto;
	height: 100%;
	display: flex;
	border-radius: 10px;
	align-items: center;

	padding-right: 15px;

	p {
		font-weight: 800;
		font-size: 1.2rem;
	}
}

.nav .sub:hover {
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
	.fullscreen-menu {
		width: 100%;
	}
	.logo {
		p {
			display: none;
		}
	}
}

</style>
