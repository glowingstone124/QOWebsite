<script setup lang="ts">
import {defineProps, ref} from "vue";

const {title, description, link, image, time} = defineProps({
	title: String,
	description: String,
	link: String,
	image: String,
	time: String
})

function click() {
	if (link.startsWith("/")) {
		window.location.href = link;
	} else {
		window.location.href = "/redirect?url=" + link;
	}
}
</script>

<template>
	<div class="news" @click="click">
		<div class="img_container" v-if="image != 'none'">
			<img :src=image alt="">
		</div>
		<div class="news_desc">
			<h1>{{ title }}</h1>
			<p class="time">
				<font-awesome-icon icon="clock"/>
				{{ time }}
			</p>
			<p class="description">
				{{ description }}
			</p>
		</div>
	</div>
</template>

<style scoped>
.news {
	display: flex;
	flex-direction: row;
	margin: 3rem 5rem;
	padding-bottom: 4rem;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	gap: 2rem;
	transition: transform 0.3s ease;
}

.news:hover {
	cursor: pointer;
	transform: translateY(-2px);
}

.img_container {
	overflow: hidden;
	border-radius: 8px;
	flex-shrink: 0;
}

.img_container img {
	width: 37rem;
	height: 100%;
	border-radius: 8px;
	object-fit: cover;
	transition: transform 0.3s ease;
}

.news:hover img {
	transform: scale(1.05);
}

.news_desc {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 1;
}

.news_desc h1 {
	font-weight: 500;
	font-size: 2rem;
	margin: 0 0 0.5rem 0;
	overflow: hidden;
}

.news_desc .time {
	color: #bdbcbc;
	display: flex;
	align-items: center;
	gap: 0.3rem;
	font-size: 0.9rem;
}

.news_desc .description {
	margin-top: 1rem;
	line-height: 1.6;
	color: #eee;
}

@media (max-width: 768px) {
	.news {
		flex-direction: column;
		margin: 2rem 1rem;
		padding-bottom: 2rem;
	}

	.img_container img {
		width: 100%;
		height: auto;
	}

	.news_desc h1 {
		font-size: 1.2rem;
	}
}

</style>
