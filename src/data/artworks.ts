export type Coordinate = [number, number, number]
export type Dimension = 'Overworld' | 'Nether' | 'End'

export interface ArtworkLocation {
	coordinate: Coordinate
	locName: string
	dimension: Dimension
}

export interface ArtworkItem {
	src: string
	title: string
	description: string
	location: ArtworkLocation
}

export const artworks: ArtworkItem[] = [
	{
		src: 'https://bucket.glowingstone.cn/artworks/pf_koishi.jpg',
		title: '黄昏小镇的心语',
		description: '一幅聚焦黄昏光影与小镇氛围的作品，整体情绪克制，强调建筑与环境的静谧关系。',
		location: {
			coordinate: [-2032, 64, 793],
			locName: '诺泽帕斯海姆',
			dimension: 'Overworld',
		},
	},
	{
		src: 'https://bucket.glowingstone.cn/artworks/pf_reimu_and_marisa.png',
		title: '夜游普罗米斯',
		description: '角色与夜景并置，利用高对比度的环境色和城市灯光强化场景记忆点。',
		location: {
			coordinate: [-1535, 64, 704],
			locName: '普罗米斯',
			dimension: 'Overworld',
		},
	},
	{
		src: 'https://bucket.glowingstone.cn/artworks/pixel_patchouli.png',
		title: '广藿香图书馆',
		description: '像素风格与建筑内部空间结合，突出馆藏感和场景叙事的层次。',
		location: {
			coordinate: [-1009, 64, 597],
			locName: '大图书馆',
			dimension: 'Overworld',
		},
	},
	{
		src: 'https://bucket.glowingstone.cn/artworks/pf_orin.png',
		title: '黑石殿里的魂火',
		description: '偏暗色调的作品，强调黑石结构与魂火的发光对比，视觉指向明确。',
		location: {
			coordinate: [-11820, 64, 865],
			locName: '芙岛',
			dimension: 'Overworld',
		},
	},
	{
		src: 'https://bucket.glowingstone.cn/artworks/pf_cristmas.png',
		title: '圣诞节',
		description: '以节庆氛围为主题的作品，整体配色更明亮，场景观感偏轻松。',
		location: {
			coordinate: [-2365, 64, 529],
			locName: '圣诞小镇',
			dimension: 'Overworld',
		},
	},
]
