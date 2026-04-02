const escapeHtml = (str = '') =>
	str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')

const slugify = (text = '') =>
	text
		.trim()
		.toLowerCase()
		.replace(/[^\w\u4e00-\u9fa5]+/g, '-')
		.replace(/^-+|-+$/g, '')

const renderLink = (label, href) => {
	const safeLabel = escapeHtml(label)
	const safeHref = href.trim()
	const isExternal = /^https?:\/\//.test(safeHref)
	const extraAttrs = isExternal ? ' target="_blank" rel="noopener"' : ''
	return `<a href="${safeHref}"${extraAttrs}>${safeLabel}</a>`
}

export const renderInline = (text = '') => {
	let output = escapeHtml(text)
	output = output.replace(/`([^`]+)`/g, (_, code) => `<code>${escapeHtml(code)}</code>`)
	output = output.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, (_, alt, src) => `<img src="${src}" alt="${escapeHtml(alt)}" />`)
	output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => renderLink(label, href))
	output = output.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
	output = output.replace(/\*([^*]+)\*/g, '<em>$1</em>')
	output = output.replace(/__(.+?)__/g, '<strong>$1</strong>')
	return output
}

export const renderMarkdown = (markdown = '') => {
	const lines = markdown.split(/\r?\n/)
	const html = []
	let inCode = false
	let codeBuffer = []
	let listType = null
	let blockquoteBuffer = []
	let tableBuffer = []

	const closeLists = () => {
		if (listType) {
			html.push(`</${listType}>`)
			listType = null
		}
	}

	const closeBlockquote = () => {
		if (blockquoteBuffer.length) {
			html.push(`<blockquote>${blockquoteBuffer.join(' ')}</blockquote>`)
			blockquoteBuffer = []
		}
	}

	const closeTable = () => {
		if (!tableBuffer.length) return

		const rows = tableBuffer
			.map((line) => line.trim())
			.filter(Boolean)
			.map((line) => line.replace(/^\||\|$/g, '').split('|').map((cell) => cell.trim()))

		if (rows.length >= 2) {
			const [headerRow, separatorRow, ...bodyRows] = rows
			const separatorIsValid = separatorRow.every((cell) => /^:?-{3,}:?$/.test(cell.replace(/\s+/g, '')))

			if (separatorIsValid) {
				const thead = `<thead><tr>${headerRow.map((cell) => `<th>${renderInline(cell)}</th>`).join('')}</tr></thead>`
				const tbody = bodyRows.length
					? `<tbody>${bodyRows
							.map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join('')}</tr>`)
							.join('')}</tbody>`
					: ''
				html.push(`<div class="table-wrap"><table>${thead}${tbody}</table></div>`)
				tableBuffer = []
				return
			}
		}

		html.push(...tableBuffer.map((line) => `<p>${renderInline(line)}</p>`))
		tableBuffer = []
	}

	lines.forEach((line) => {
		if (line.startsWith('```')) {
			closeTable()
			if (!inCode) {
				inCode = true
				codeBuffer = []
			} else {
				inCode = false
				html.push(`<pre><code>${escapeHtml(codeBuffer.join('\n'))}</code></pre>`)
				codeBuffer = []
			}
			return
		}

		if (inCode) {
			codeBuffer.push(line)
			return
		}

		if (/^\|.*\|$/.test(line.trim())) {
			closeLists()
			closeBlockquote()
			tableBuffer.push(line)
			return
		}

		closeTable()

		if (!line.trim()) {
			closeLists()
			closeBlockquote()
			return
		}

		const headingMatch = line.match(/^(#{1,6})\s+(.*)$/)
		if (headingMatch) {
			closeLists()
			closeBlockquote()
			const level = headingMatch[1].length
			const rawText = headingMatch[2].trim()
			html.push(`<h${level} id="${slugify(rawText)}">${renderInline(rawText)}</h${level}>`)
			return
		}

		if (/^---+$/.test(line.trim())) {
			closeLists()
			closeBlockquote()
			html.push('<hr />')
			return
		}

		const blockquoteMatch = line.match(/^>\s?(.*)$/)
		if (blockquoteMatch) {
			closeLists()
			blockquoteBuffer.push(renderInline(blockquoteMatch[1]))
			return
		}

		const unorderedListMatch = line.match(/^\s*[-*]\s+(.*)$/)
		if (unorderedListMatch) {
			if (listType && listType !== 'ul') {
				closeLists()
			}
			if (!listType) {
				listType = 'ul'
				html.push('<ul>')
			}
			html.push(`<li>${renderInline(unorderedListMatch[1])}</li>`)
			return
		}

		const orderedListMatch = line.match(/^\s*\d+\.\s+(.*)$/)
		if (orderedListMatch) {
			if (listType && listType !== 'ol') {
				closeLists()
			}
			if (!listType) {
				listType = 'ol'
				html.push('<ol>')
			}
			html.push(`<li>${renderInline(orderedListMatch[1])}</li>`)
			return
		}

		closeLists()
		closeBlockquote()
		html.push(`<p>${renderInline(line)}</p>`)
	})

	closeLists()
	closeBlockquote()
	closeTable()
	return html.join('\n')
}

export const parseDocHash = (hash = '') => {
	const trimmed = hash.replace(/^#/, '')
	const [pathPart, anchorPart] = trimmed.split('#')
	const file = (pathPart || '').replace(/^\//, '') || 'README.md'
	return { file, anchor: anchorPart || null }
}
