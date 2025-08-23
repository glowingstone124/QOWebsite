<script setup>
import {ref, onMounted} from "vue";
import LandScapeNewsComponents from "../components/LandscapeNewsComponents.vue";
import NavigationBar from "../components/NavigationBar.vue";

const isVisible = ref(!sessionStorage.getItem("loaded"));
const currentBgIndex = ref(0);
</script>

<template>
	<!--video class="bg-video" autoplay muted loop playsinline>
		<source src="https://bucket.glowingstone.cn/output_compressed.mp4" type="video/mp4" />
		您的浏览器不支持 video 标签。
	<video/>
	-->
	<!-- img src="https://bucket.glowingstone.cn/comp_patchouli.jpg" class="bg-video" -->
	<div class="main-content">
		<NavigationBar/>
		<div class="favorite">
			<div class="overlay"></div>
			<div class="content">
				<div class="image">
					<img src="https://bucket.glowingstone.cn/comp_patchouli.jpg" alt="">
				</div>
				<div class="desc">
					<h1>Pixel Fantasia-像素幻想</h1>
					<p>现已作为卡面上线Quantum Original APP。</p>
				</div>
			</div>
		</div>
		<div class="categories">
			<div class="categories_inner">
				<h1>最新新闻</h1>
				<LandScapeNewsComponents
					title="热区协议-情报1"
					image="https://bucket.glowingstone.cn/coverhz1.png"
					description="ERROR_CONTENT_NOT_AVAILABLE"
					time="2025-08-24"
					link="/docs#/hotzone_1.md"
				/>
				<LandScapeNewsComponents
					title="秋季开发更新"
					image="https://bucket.glowingstone.cn/visualupdate.png"
					description="我们重构了整个官网落地页的视觉体验，并且兼顾了响应式效果。"
					time="2025-08-24"
					link="/docs#/visual_effects.md"
				/>
				<h1>社区运营</h1>
				<LandScapeNewsComponents
					title="玩家处理公告"
					image="none"
					description="关于hehenoob的最终处理报告"
					time="2025-08-25"
					link="/docs#/judgement_hehenoob.md"
				/>
			</div>
			<div class="status"></div>
		</div>
	</div>
</template>


<style scoped>
.categories {
	display: flex;
}

.categories_inner {
	h1{
		font-size: 4rem;
		font-weight: 400;
	}
	flex: 7;
	align-content: center;
	margin: 2rem;
}

.status {
	flex: 3;
	align-content: center;
}

.favorite {
	background: url("https://bucket.glowingstone.cn/comp_patchouli.jpg");
	background-size: cover;
	display: flex;
	height: 100vh;
}

.favorite .overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	backdrop-filter: blur(8px) brightness(60%);
	background-color: rgba(0, 0, 0, 0.4);
	pointer-events: none;
	z-index: 1;
}

.favorite .content {
	display: flex;
	position: relative;
	z-index: 2;
}

.desc {
	flex: 4;
	align-content: center;

	h1 {
		font-size: 3rem;
	}

	p {
		font-size: 1.3rem;
	}
}

.image {
	align-content: center;
	flex: 6;
	padding: 4rem;

	img {
		border-radius: 15px;
		width: 100%;
		height: auto;
		object-fit: contain;
	}

	img:hover {
		-webkit-box-shadow: 0px 0px 37px 0px rgba(255, 255, 255, 0.9);
		-moz-box-shadow: 0px 0px 37px 0px rgba(255, 255, 255, 0.9);
		box-shadow: 0px 0px 37px 0px rgba(255, 255, 255, 0.9);
	}
}


.main-content {
	overflow-y: auto;
	scroll-behavior: smooth;
	min-width: 100vw;
	max-height: 100vh;
	min-height: 100vh;
	position: relative;
	z-index: 1;
}

@media (max-width: 768px) {
	.content {
		flex-direction: column;
		align-items: center;
		padding: 1rem;

		.image {
			padding: 0;
			margin: 1rem 0;
			max-height: 40vh;
			flex: 8;
			width: 100%;
		}

		.desc {
			text-align: center;
			padding: 0 1rem;
			flex: 2;

			h1 {
				font-size: 1.8rem;
				margin-bottom: 0.5rem;
			}

			p {
				font-size: 1rem;
				line-height: 1.4;
			}
		}
	}

	.favorite {
		display: grid;
		place-items: center;
		align-items: center;
		min-height: 100vh;
		height: auto;
		background-position: center;
		background-size: cover;
	}

	.image img {
		box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5);
	}

}

</style>
