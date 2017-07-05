<template>
	<div class="mui-content">
		<header class="mui-bar mui-bar-nav">
			<router-link to="/" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
			<h1 class="mui-title">电影详情</h1>
			<a class="mui-icon mui-icon-right-nav mui-pull-right iconfont icon-fenxiang"></a>
		</header>
		<div id="cont">
			<dl id="info">

			</dl>
			<div class="read">
				<a href="#" class="sc">收藏</a>
				<a href="#" class="start">开始观看</a>
			</div>
			<ul class="uu">
				<li class="active">详情</li>
				<li>目录</li>
				<li>评论</li>
			</ul>
			<div class="content">

			</div>
			<template>
				<el-carousel :interval="4000" type="card" height="200px">
					<el-carousel-item v-for="item in images" :key="item">
						<img :src="item" />
					</el-carousel-item>
				</el-carousel>
			</template>
		</div>
	</div>

</template>

<script>
	import { Loading } from 'element-ui';
	import mui from "../../static/js/mui.min.js"
	import jQuery from "../../static/js/jquery.min.js"
	window.jQuery = window.$ = jQuery
	var arr = []
	export default {
		name: 'find',
		created() {
			this.loading()
			var self = this
			this.getinfo()
			mui.ajax({
				url: "static/json.txt",
				dataType: "json",
				success: function(data) {
					var data = data.subjects;
					var len = data.length;
					var arr = [];
					for(var i = 0; i < 4; i++) {
						arr.push(data[i].images.large)
					}
					self.images = arr
				}

			})
		},
		data() {
			return {
				images: ''
			}
		},
		methods: {
			getinfo() {
				var id = window.location.href.replace(/\?/g, "").split("=")[1];
				var hostname = "http://api.douban.com/";
				var Douban_api = "v2/movie/subject/"
				var address = hostname + Douban_api + id;
				$.ajax({
					url: address,
					method: "GET",
					dataType: "jsonp",
					jsonp: "callback",
					data: {
						data: address
					},
				}).done(function(data) {
					var str = "";
					var str1 = "";
					str += `<dt>
								<h1>${data.title}</h1>
								<p>${data.casts[0].name}</p>
								<p>人气：<span>${data.reviews_count}</span>亿</p>
								<p>月票：<span>${data.collect_count}</span></p>
							</dt>
							<dd><img id="pic" src="${data.images.large}" alt="" /></dd>`
					$("#info").html(str);
					str1 += `<i class="iconfont icon-jieshao"></i><span id="tit">作品介绍:</span>
							<p>
								${data.summary}
							</p>
							<a href="#" style="background: #67fe88;">校园</a>
							<a href="#" style="background: #fcd366;">美食</a>
							<a href="#" style="background: #ff6666;">搞笑</a>
							<span>9.5分</span>`
					$(".content").html(str1);
				})
			},
			loading() {
				let loadingInstance = Loading.service({
					fullscreen: true,
					text: "拼命加载中...",
					body: true
				})
				setTimeout(function() {
					loadingInstance.close();
				}, 3000)
			}
		},

	}
</script>

<style>
	@import url("../../static/css/detail.css");
</style>