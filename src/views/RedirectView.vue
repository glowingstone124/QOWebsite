<template>
	<div class="page-shell redirect-shell">
		<div class="page-container">
			<div class="content page-surface">
				<h1>重定向提示</h1>
				<p class="description">
					您即将离开 Quantum Original 官网，前往：<span class="url">{{ url || '未知网址' }}</span>
					<br />
					<span class="tip">如果您不希望离开，请点击“返回”</span>
					<br />
					<span class="tip">点击“继续”来跳转</span>
				</p>

				<div class="button-group">
					<button class="btn back" @click="goBack">返 回</button>
					<button class="btn confirm" @click="confirmRedirect">继 续</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const url = route.query.url

const whitelist = ['https://app.qoriginal.vip', 'https://docs.qoriginal.vip']

const goBack = () => {
	router.go(-1)
}

const confirmRedirect = () => {
	if (url) {
		window.location.href = url
	}
}

onMounted(() => {
	if (url && whitelist.includes(url)) {
		window.location.href = url
	}
})
</script>

<style scoped>
.content {
	padding: clamp(1.6rem, 4vw, 3rem);
	margin: min(12vh, 6rem) auto 0;
	width: 100%;
	max-width: 600px;
}

h1 {
	color: var(--text-primary);
	font-size: clamp(1.5rem, 4vw, 2rem);
	margin-bottom: 1.5rem;
}

.description {
	color: var(--text-secondary);
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
	color: var(--text-secondary);
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
	border: 1px solid transparent;
	cursor: pointer;
	font-weight: bold;
	transition: all 0.3s;
	font-size: clamp(0.9rem, 3vw, 1rem);
	min-width: 120px;
	text-align: center;
}

.back {
	background: rgba(255, 255, 255, 0.08);
	color: var(--text-primary);
	border-color: var(--border);
}

.back:hover {
	background: rgba(255, 255, 255, 0.12);
}

.confirm {
	background: rgba(122, 219, 213, 0.18);
	color: var(--text-primary);
	border-color: rgba(122, 219, 213, 0.34);
	box-shadow: 0 4px 12px rgba(122, 219, 213, 0.2);
}

.confirm:hover {
	background: rgba(122, 219, 213, 0.28);
	transform: translateY(-1px);
}

@media (max-width: 768px) {
	.content {
		margin-top: 1rem;
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
