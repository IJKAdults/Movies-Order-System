<template>
	<div id="map">
		<header class="mui-bar mui-bar-nav">
			<router-link to="/movie" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
			<h1 class="mui-title">地图</h1>
		</header>
		<div id="mapcon">
			<p>
				<el-input v-model="keyword" placeholder="请输入关键词"></el-input>
			</p>
			<p>
				<el-input v-model="location" placeholder="请输入地区"></el-input>
			</p>
			<baidu-map class="map-container">
				<bm-view class="bm-view">
				</bm-view>
				<bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search>
			</baidu-map>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'map',
		data() {
			return {
				location: '北京',
				keyword: '电影院'
			}
		}
	}
</script>

<style>
	#map {
		width: 100vw;
		height: 100vh;
	}
	
	.bm-view {
		width: 100%;
		height: 400px;
	}
	#mapcon{
		position: absolute;
		top: 50px;
		width: 100%;
		height: 100%;
	}
</style>