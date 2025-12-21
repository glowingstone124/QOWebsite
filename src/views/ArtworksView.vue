<template>
	<NavigationBar/>
	<div class="body">
		<div class="header">
			<h1>艺术作品</h1>
			<p>这里存放了所有与QO有关的艺术作品。如果您也想提交自己的艺术作品，请联系服务器管理组。</p>
		</div>

		<div class="images">
			<div class="image" v-for="image in Images" :key="image.src" @click="openModal(image)">
				<img :src="image.src" :alt="image.title"/>
				<div class="info">
					<p class="title">{{ image.title }}</p>
					<p class="loc">{{ image.location.locName }}</p>
				</div>
			</div>
		</div>

		<div class="modal" v-if="selectedImage" @click.self="closeModal">
			<div class="modal-content">
				<img :src="selectedImage.src" :alt="selectedImage.title"/>
				<div class="info">
					<h2>{{ selectedImage.title }}</h2>
					<p class="loc">地点：{{ selectedImage.location.locName }} <br>
						维度：{{
							selectedImage.location.dimension
						}}</p>

					<p class="subtitle">创作者说:</p>
					<p>{{ selectedImage.description }}</p>
					<button class="close-btn" @click="closeModal">关闭</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
@import url("/src/style.css");

.subtitle {
	font-weight: 200;
	font-size: 1.2rem !important;
}

* {
	box-sizing: border-box;
}

.body {
	padding: 40px;
	font-family: "Inter", Arial, sans-serif;
	color: #333;
}

.header {
	text-align: left;
	margin-bottom: 30px;
}

.header h1 {
	font-weight: 800;
	font-size: 4rem;
	margin-bottom: 10px;
	color: #eee0e0;
}

.header p {
	font-size: 1rem;
	color: #666;
}

.images {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 40px;
}

.image {
	background: #191d21;
	border-radius: 12px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	cursor: pointer;
	display: flex;
	flex-direction: column;

}
.info {
	margin-left: 20px;
}

.image img {
	width: 100%;
	object-fit: cover;
	transition: transform 0.3s ease;
}

.image .info {
	padding: 15px;
}

.image .title {
	font-weight: 600;
	font-size: 1.5rem;
	margin-bottom: 5px;
	color: #ffffff;
}

.image .loc {
	font-size: 0.8rem;
	color: #ece7e7;
}

.image:hover {
	transform: translateY(-5px);
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.image:hover img {
	transform: scale(1.05);
}

.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
	padding: 20px;
}

.modal-content {
	display: flex;
	flex-direction: row;
	background: #1a1e22;
	border-radius: 12px;
	max-width: 100vw;
	width: 100%;
	padding: 10px;
	position: relative;
	overflow-y: auto;
	max-height: 100vh;
}

.modal-content img {
	width: 75%;
	height: auto;
	object-fit: cover;
	border-radius: 10px;
}

.modal-content h2 {
	font-size: 1.5rem;
	margin-bottom: 10px;
	color:white;
}

.modal-content p {
	font-size: 1rem;
	margin-bottom: 10px;
	color:white;
}

.modal-content .loc {
	font-size: 0.9rem;
	color: #999;
}

.close-btn {
	position: absolute;
	top: 10px;
	right: 10px;
	background: none;
	color: #fff;
	border: 1px white solid;
	border-radius: 6px;
	padding: 5px 10px;
	cursor: pointer;
}

@media (max-width: 600px) {

	.modal-content {
		flex-direction: column;
	}
	.header h1 {
		font-size: 1.8rem;
	}

	.image img {
		height: 150px;
	}

	.images {
		grid-template-columns: 1fr;
	}
}
</style>
<script setup lang="ts">
import {ref} from 'vue';
import NavigationBar from "../components/NavigationBar.vue"

type Coordinate = [number, number, number];
type Dimension = "Overworld" | "Nether" | "End"

interface Location {
	coordinate: Coordinate;
	locName: string;
	dimension: Dimension;
}

interface Image {
	src: string;
	title: string;
	description: string;
	location: Location;
}

const Images: Image[] = [
	{
		src: "https://bucket.glowingstone.cn/artworks/pf_koishi.jpg",
		title: "黄昏小镇的心语",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus, enim non tincidunt vulputate, nisl justo sodales urna, non rhoncus leo risus finibus ex. Vestibulum quis posuere dolor. Mauris vel felis tellus. Cras in laoreet lacus. Mauris ultricies aliquam neque ut tincidunt. Ut sapien justo, malesuada at augue id, mattis lacinia mauris. Maecenas sit amet egestas dui. Quisque ullamcorper nunc et nulla ultrices blandit id eu dolor.",
		location: {
			coordinate: [-2032, 64, 793],
			locName: "诺泽帕斯海姆",
			dimension: "Overworld"
		}
	},
	{
		src: "https://bucket.glowingstone.cn/artworks/pf_reimu_and_marisa.png",
		title: "夜游普罗米斯",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus, enim non tincidunt vulputate, nisl justo sodales urna, non rhoncus leo risus finibus ex. Vestibulum quis posuere dolor. Mauris vel felis tellus. Cras in laoreet lacus. Mauris ultricies aliquam neque ut tincidunt. Ut sapien justo, malesuada at augue id, mattis lacinia mauris. Maecenas sit amet egestas dui. Quisque ullamcorper nunc et nulla ultrices blandit id eu dolor.",
		location: {
			coordinate: [-1535, 64, 704],
			locName: "普罗米斯",
			dimension: "Overworld"
		}
	},
	{
		src: "https://bucket.glowingstone.cn/artworks/pixel_patchouli.png",
		title: "广藿香图书馆",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus, enim non tincidunt vulputate, nisl justo sodales urna, non rhoncus leo risus finibus ex. Vestibulum quis posuere dolor. Mauris vel felis tellus. Cras in laoreet lacus. Mauris ultricies aliquam neque ut tincidunt. Ut sapien justo, malesuada at augue id, mattis lacinia mauris. Maecenas sit amet egestas dui. Quisque ullamcorper nunc et nulla ultrices blandit id eu dolor.",
		location: {
			coordinate: [-1009, 64, 597],
			locName: "大图书馆",
			dimension: "Overworld"
		}
	},
	{
		src: "https://bucket.glowingstone.cn/artworks/pf_orin.png",
		title: "黑石殿里的魂火",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus, enim non tincidunt vulputate, nisl justo sodales urna, non rhoncus leo risus finibus ex. Vestibulum quis posuere dolor. Mauris vel felis tellus. Cras in laoreet lacus. Mauris ultricies aliquam neque ut tincidunt. Ut sapien justo, malesuada at augue id, mattis lacinia mauris. Maecenas sit amet egestas dui. Quisque ullamcorper nunc et nulla ultrices blandit id eu dolor.",
		location: {
			coordinate: [-11820, 64, 865],
			locName: "芙岛",
			dimension: "Overworld"
		}
	},
	{
		src: "https://bucket.glowingstone.cn/artworks/pf_cristmas.png",
		title: "圣诞节",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus, enim non tincidunt vulputate, nisl justo sodales urna, non rhoncus leo risus finibus ex. Vestibulum quis posuere dolor. Mauris vel felis tellus. Cras in laoreet lacus. Mauris ultricies aliquam neque ut tincidunt. Ut sapien justo, malesuada at augue id, mattis lacinia mauris. Maecenas sit amet egestas dui. Quisque ullamcorper nunc et nulla ultrices blandit id eu dolor.",
		location: {
			coordinate: [-2365, 64, 529],
			locName: "圣诞小镇",
			dimension: "Overworld"
		}
	}
];

const selectedImage = ref<Image | null>(null);

function openModal(image: Image) {
	selectedImage.value = image;
}

function closeModal() {
	selectedImage.value = null;
}
</script>
