<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
	label: {
		type: String,
		default: '返回首页',
	},
	to: {
		type: String,
		default: '/',
	},
})

const router = useRouter()
</script>

<template>
	<button class="back-button" type="button" @click="router.push(props.to)">
		<font-awesome-icon icon="fa-arrow-left" />
		<span>{{ props.label }}</span>
	</button>
</template>

<style scoped>
.back-button {
	display: inline-flex;
	align-items: center;
	gap: 0.65rem;
	padding: 0.9rem 1.1rem;
	border-radius: 999px;
	border: 1px solid var(--border-strong);
	background: rgba(5, 14, 22, 0.75);
	color: var(--text-primary);
	box-shadow: var(--shadow-md);
	backdrop-filter: blur(20px);
	cursor: pointer;
	transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.back-button:hover {
	transform: translateY(-1px);
	border-color: rgba(122, 219, 213, 0.5);
	background: rgba(9, 22, 33, 0.9);
}
</style>
