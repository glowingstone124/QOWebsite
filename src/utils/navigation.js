export function isInternalLink(link = '') {
	return link.startsWith('/')
}

function resolveInternalLink(link = '/') {
	const [pathWithQuery, hash = ''] = link.split('#')
	const [path, queryString = ''] = pathWithQuery.split('?')
	const query = Object.fromEntries(new URLSearchParams(queryString))

	return {
		path: path || '/',
		hash: hash ? `#${hash}` : '',
		query,
	}
}

export function navigateToLink(router, link = '/') {
	if (isInternalLink(link)) {
		return router.push(resolveInternalLink(link))
	}

	return router.push({
		path: '/redirect',
		query: { url: link },
	})
}
