<template>
	<div class="container">
		<div class="content">
			<h1>重定向提示</h1>
			<p class="description">
				您即将离开Quantum Original官网，前往：<span class="url">{{ url || "未知网址" }}</span>
				<br>
				<span class="tip">如果您不希望离开，请点击“返回”</span>
				<br>
				<span class="tip">点击“继续”来跳转</span>
			</p>

			<div class="button-group">
				<button class="btn back" @click="goBack">返 回</button>
				<button class="btn confirm" @click="confirmRedirect">继 续</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const url = route.query.url;

const goBack = () => {
	router.go(-1);
};

const confirmRedirect = () => {
	if (url) {
		window.location.href = url
	}
};
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	padding: 2rem;
	min-height: 100vh;
	box-sizing: border-box;
}

.content {
	background: #525050;
	padding: 5rem 9rem;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	margin: auto;
	width: 100%;
	max-width: 600px;
	position: relative;
}

h1 {
	color: #eeebeb;
	font-size: clamp(1.5rem, 4vw, 2rem);
	margin-bottom: 1.5rem;
}

.description {
	color: #d5d4d4;
	line-height: 1.6;
	font-size: clamp(1rem, 3vw, 1.1rem);
	margin-bottom: 2rem;
}

.url {
	color: #13c40d;
	word-break: break-all;
	display: inline-block;
	margin: 0.5rem 0;
	font-weight: 500;
}

.tip {
	display: inline-block;
	margin-top: 0.8rem;
	color: #d3d3d3;
}

.button-group {
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
	justify-content: flex-end;
	margin-top: 2rem;
}

.btn {
	padding: 1rem 2rem;
	border: none;
	cursor: pointer;
	font-weight: bold;
	transition: all 0.3s;
	font-size: clamp(0.9rem, 3vw, 1rem);
	min-width: 120px;
	text-align: center;
}

.back {
	background: #f0f0f0;
	color: #666;
}

.back:hover {
	background: #e0e0e0;
}

.confirm {
	background: #13c40d;
	color: white;
	box-shadow: 0 4px 12px rgba(19, 196, 13, 0.3);
}

.confirm:hover {
	background: #10ad0b;
	transform: translateY(-1px);
}

@media (max-width: 768px) {
	.container {
		padding: 1rem;
	}

	.content {
		padding: 1.5rem;
	}

	.button-group {
		flex-direction: column;
		gap: 0.8rem;
		margin-top: 1.5rem;
	}

	.btn {
		width: 100%;
		padding: 1rem;
	}

	.url {
		font-size: 0.95rem;
	}
}

@media (max-width: 480px) {
	h1 {
		font-size: 1.3rem;
	}

	.description {
		font-size: 0.9rem;
	}

	.btn {
		min-width: auto;
	}
}
</style>
