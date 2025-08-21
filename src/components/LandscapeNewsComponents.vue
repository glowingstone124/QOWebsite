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
		<div class="img_container">
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
.img_container {
	overflow: hidden;
	padding-right: 3rem;
	margin: 0;
	border-radius: 8px;
}

.news_desc {
	flex-direction: row;
}

.news:hover {
	cursor: pointer;
}

.news {
	margin: 3rem 1rem;
	display: flex;
	flex-direction: row;
}

.news img {
	width: 37rem;
	height: 100%;
	border-radius: 8px;
	object-fit: cover;
}

.news:hover img {
	scale: 1.01;
}

.news h1 {
	font-weight: 500;
	overflow: hidden;
	font-size: 2rem;
}

.news_desc .time {
	color: #bdbcbc;
}

@media (max-width: 768px) {
	.news {
		img {
			width: 100%;
		}

		h1 {
			font-size: 1.2rem;
		}

		flex-direction: column;
	}
}
</style>
