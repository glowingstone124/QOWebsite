<script setup>
import Landscape from "../components/Landscape.vue";
</script>

<template>
	<div class="Categories">
		<Landscape :title="'关于'" :description="'了解QO2'" :link="'/about'"></Landscape>
		<Landscape :title="'加入我们'" :description="'前往QQ群'" :link="'https://qm.qq.com/q/7rjlo2MSxa'"></Landscape>
		<Landscape :title="'指南'" :description="'快速上手或是查找指令'"></Landscape>
		<Landscape :title="'捐赠'" :description="'捐赠我们来支持Quantum Original2的开发'" :link="'https://afdian.com/a/glowingstone124'"></Landscape>
		<Landscape :title="'前往App'" :description="'使用QCommunity来注册账号，了解服务器详情'" :link="'https://app.qoriginal.vip'"></Landscape>
	</div>
</template>

<style scoped>
.Categories {
	background: url('https://storage.glowingstone.cn/download/background.png');
	background-size: cover;
	display: flex;
	height: 100vh;
	flex-direction: row;
}
@media (max-width: 800px) {
	.Categories {
		flex-direction: column;
	}
}
</style>
