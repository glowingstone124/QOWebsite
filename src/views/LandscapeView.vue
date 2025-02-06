<script setup>
import { ref, onMounted } from "vue";
import Landscape from "../components/Landscape.vue";
import NavigationBar from "../components/NavigationBar.vue";
const hint = ref("")
const isVisible = ref(true);
onMounted(() => {
	const viewportWidth = ref(window.innerWidth);
	const viewportHeight = ref(window.innerHeight);
	if (viewportHeight.value < 800 || viewportWidth.value < 1250) {
		hint.value = "您正在使用一个显示大小小于 1250x800的设备，该网页可能在您的设备上显示不正常。"
	} else if (viewportHeight.value < 800 || viewportWidth.value > 1250) {
		hint.value = "您正在使用一个显示高度小于800的设备，该网页可能在您的设备上显示不正常。"
	} else if (viewportHeight.value > 800 || viewportWidth.value < 1250) {
		hint.value = "您正在使用一个显示宽度小于1250的设备，该网页可能在您的设备上显示不正常。"
	}
	setTimeout(() => {
		isVisible.value = false;
	}, 1500);
});
</script>

<template>
	<transition name="fade">
		<div v-if="isVisible" class="mask">
			<h1>Quantum Original 2</h1>
			<p>We are optimizing your view experience...</p>
			<p>{{ hint }}</p>
		</div>
	</transition>
	<div style="  overflow: hidden;
  max-width: 100vw;
  max-height: 100vh;">
	<NavigationBar />
	<div class="Categories">
		<Landscape :title="'关于'" :description="'了解QO2'" :link="'/about'"></Landscape>
		<Landscape :title="'加入我们'" :description="'前往QQ群'" :link="'https://qm.qq.com/q/7rjlo2MSxa'"></Landscape>
		<Landscape :title="'指南'" :description="'快速上手或是查找指令'"></Landscape>
		<Landscape :title="'捐赠'" :description="'捐赠我们来支持Quantum Original2的开发'" :link="'https://afdian.com/a/glowingstone124'"></Landscape>
		<Landscape :title="'前往App'" :description="'使用QCommunity来注册账号，了解服务器详情'" :link="'https://app.qoriginal.vip'"></Landscape>
	</div>
	</div>
</template>

<style scoped>
.Categories {
	background-size: cover;
	background-position: center;
	display: flex;
	height: calc(100vh - 80px);
	flex-direction: row;
	background: url("https://storage.glowingstone.cn/download/background.png");
	background-size: cover;
	background-position: center;
}

.mask {
	h1, p {
		font-family: "3270";
	}
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 100vw;
	background: #5a948d;
	position: absolute;
	z-index: 999999;
	height: 100vh;
	opacity: 1;
	transition: opacity 1s ease-out;
}

.mask.fade-leave-active {
	opacity: 0;
}

@media (max-width: 800px) {
	.Categories {
		flex-direction: column;
	}
}
</style>
