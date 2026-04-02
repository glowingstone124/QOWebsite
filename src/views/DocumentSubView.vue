<template>
	<div class="page-shell">
		<NavigationBar />
		<div class="page-container docs-layout">
			<aside class="sidebar page-surface" v-html="sidebarHtml" @click="handleNavClick"></aside>
			<main class="main page-surface">
				<div class="doc-header">
					<PageBackButton />
					<div class="breadcrumb">Wiki / {{ displayName }}</div>
				</div>
				<article class="doc-body" v-html="contentHtml" @click="handleContentClick"></article>
			</main>
		</div>
	</div>
</template>

<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'
import PageBackButton from '@/components/common/PageBackButton.vue'
import { parseDocHash, renderMarkdown } from '@/utils/markdown'

const router = useRouter()
const route = useRoute()
const currentFile = ref('README.md')
const contentHtml = ref('<p>正在加载...</p>')
const sidebarHtml = ref('')

const loadDoc = async (fileName, anchor = null) => {
	try {
		contentHtml.value = '<p>正在加载...</p>'
		const res = await fetch(`/docs/${fileName}`)
		if (!res.ok) throw new Error('not found')
		const text = await res.text()
		contentHtml.value = renderMarkdown(text)
		await nextTick()
		if (anchor) {
			const el = document.getElementById(anchor)
			if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
		} else {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	} catch (e) {
		contentHtml.value = '<p class="error">未能加载该文档。</p>'
	}
}

const loadSidebar = async () => {
	try {
		const res = await fetch('/docs/_sidebar.md')
		if (!res.ok) return
		const text = await res.text()
		sidebarHtml.value = renderMarkdown(text)
	} catch (e) {
		sidebarHtml.value = '<p class="muted">侧边栏加载失败</p>'
	}
}

const handleNavClick = (event) => {
	const anchor = event.target.closest('a')
	if (!anchor) return
	const href = anchor.getAttribute('href') || ''
	if (/^https?:\/\//.test(href)) return
	event.preventDefault()
	const [filePart, hashPart] = href.split('#')
	const targetFile = (filePart || '').replace(/^\//, '') || 'README.md'
	currentFile.value = targetFile
	router.replace({ path: '/docs', hash: `/${targetFile}${hashPart ? `#${hashPart}` : ''}` })
	loadDoc(targetFile, hashPart || null)
}

const handleContentClick = (event) => {
	const anchor = event.target.closest('a')
	if (!anchor) return
	const href = anchor.getAttribute('href') || ''
	if (/^https?:\/\//.test(href)) return
	event.preventDefault()
	const [filePart, hashPart] = href.split('#')
	const targetFile = (filePart || currentFile.value).replace(/^\//, '') || 'README.md'
	currentFile.value = targetFile
	router.replace({ path: '/docs', hash: `/${targetFile}${hashPart ? `#${hashPart}` : ''}` })
	loadDoc(targetFile, hashPart || null)
}

watch(
	() => route.hash,
	(hash) => {
		const { file, anchor } = parseDocHash(hash)
		if (file !== currentFile.value) {
			currentFile.value = file
			loadDoc(file, anchor)
		} else if (anchor) {
			loadDoc(file, anchor)
		}
	},
	{ immediate: true }
)

onMounted(() => {
	loadSidebar()
})

const displayName = computed(() => currentFile.value.replace('.md', ''))
</script>

<style scoped>
.docs-layout {
	display: grid;
	grid-template-columns: minmax(220px, 260px) minmax(0, 1fr);
	gap: 1.25rem;
	align-items: start;
}

.sidebar {
	padding: 1.1rem;
	position: sticky;
	top: calc(var(--nav-height) + 1.4rem);
	height: fit-content;
	background: rgba(8, 18, 27, 0.82);
}

.sidebar ul {
	list-style: none;
	padding-left: 0;
	display: grid;
	gap: 0.3rem;
}

.sidebar li {
	line-height: 1.4;
}

.sidebar a {
	width: 100%;
	color: #d9e7eb;
	text-decoration: none;
	padding: 0.72rem 0.82rem;
	display: inline-block;
	border-radius: 14px;
	transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.sidebar a:hover {
	background: rgba(122, 219, 213, 0.08);
	color: #c0e4f0;
	transform: translateX(2px);
}

.sidebar :deep(ul ul) {
	margin-top: 0.15rem;
	padding-left: 0.7rem;
	border-left: 1px solid rgba(255, 255, 255, 0.08);
}

.main {
	padding: clamp(1.15rem, 2vw, 1.7rem);
	background: rgba(8, 18, 27, 0.82);
}

.doc-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1.25rem;
	gap: 12px;
	padding-bottom: 1rem;
	border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.breadcrumb {
	color: var(--text-secondary);
	font-size: 0.95rem;
}

.doc-body {
	color: var(--text-primary);
	line-height: 1.7;
	font-size: 1rem;
}

.doc-body h1,
.doc-body h2,
.doc-body h3,
.doc-body h4,
.doc-body h5,
.doc-body h6 {
	margin: 1.7rem 0 0.85rem;
	font-weight: 700;
	line-height: 1.2;
	color: var(--text-primary);
	scroll-margin-top: calc(var(--nav-height) + 1.6rem);
}

.doc-body > :first-child {
	margin-top: 0;
}

.doc-body h1 {
	font-size: clamp(2rem, 4vw, 2.6rem);
	letter-spacing: -0.03em;
	font-family: var(--font-display);
}

.doc-body h2 {
	font-size: clamp(1.55rem, 3vw, 2rem);
	padding-bottom: 0.55rem;
	border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.doc-body h3 {
	font-size: clamp(1.25rem, 2.2vw, 1.55rem);
}

.doc-body h4,
.doc-body h5,
.doc-body h6 {
	font-size: 1.05rem;
}

.doc-body p {
	margin: 0 0 1rem;
	color: #d9e7eb;
}

.doc-body ul,
.doc-body ol {
	padding-left: 1.35rem;
	margin: 0 0 1rem;
}

.doc-body li {
	margin: 0.4rem 0;
	color: #d9e7eb;
}

.doc-body a {
	color: #9fdaf0;
	text-decoration: none;
	border-bottom: 1px dashed rgba(159, 218, 240, 0.6);
}

.doc-body a:hover {
	color: #c0e4f0;
	border-bottom-style: solid;
}

.doc-body strong {
	color: #f4fcfb;
}

.doc-body code {
	background: rgba(122, 219, 213, 0.08);
	padding: 0.15rem 0.45rem;
	border-radius: 6px;
	font-family: 'JetBrains Mono', 'SFMono-Regular', Menlo, Monaco, Consolas, monospace;
	font-size: 0.9rem;
	color: #c5f0ee;
}

.doc-body pre {
	background: linear-gradient(180deg, rgba(5, 12, 20, 0.98), rgba(8, 18, 27, 0.96));
	border: 1px solid rgba(122, 219, 213, 0.12);
	border-radius: 16px;
	padding: 1rem 1.1rem;
	overflow-x: auto;
	margin: 1rem 0 1.35rem;
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
}

.doc-body pre code {
	background: transparent;
	border: none;
	padding: 0;
	display: block;
	color: #d7e7eb;
}

.doc-body blockquote {
	border-left: 4px solid rgba(122, 219, 213, 0.28);
	margin: 1rem 0;
	padding: 0.9rem 1rem;
	background: rgba(122, 219, 213, 0.05);
	color: #c7d6de;
	border-radius: 0 14px 14px 0;
}

.doc-body hr {
	border: none;
	border-top: 1px solid rgba(255, 255, 255, 0.08);
	margin: 1.4rem 0;
}

.doc-body img {
	max-width: 100%;
	border-radius: 16px;
	margin: 1rem 0 1.25rem;
	border: 1px solid rgba(255, 255, 255, 0.08);
	box-shadow: 0 18px 34px rgba(0, 0, 0, 0.25);
}

.doc-body :deep(.table-wrap) {
	overflow-x: auto;
	margin: 1rem 0 1.35rem;
	border: 1px solid rgba(255, 255, 255, 0.08);
	border-radius: 16px;
	background: rgba(255, 255, 255, 0.02);
}

.doc-body :deep(table) {
	width: 100%;
	border-collapse: collapse;
	min-width: 540px;
}

.doc-body :deep(th),
.doc-body :deep(td) {
	padding: 0.85rem 1rem;
	text-align: left;
	border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.doc-body :deep(th) {
	color: #f4fcfb;
	background: rgba(122, 219, 213, 0.08);
	font-weight: 700;
}

.doc-body :deep(td) {
	color: #d9e7eb;
}

.error {
	color: #ffb4b4;
}

.muted {
	color: var(--text-secondary);
}

@media (max-width: 960px) {
	.docs-layout {
		grid-template-columns: 1fr;
	}

	.sidebar {
		position: relative;
		top: 0;
	}

	.doc-header {
		flex-direction: column;
		align-items: flex-start;
	}
}

@media (max-width: 720px) {
	.main {
		padding: 1rem;
	}

	.sidebar {
		padding: 0.9rem;
	}
}
</style>
