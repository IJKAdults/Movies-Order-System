<template>
	<div class="mui-off-canvas-wrap mui-draggable">
		<!-- 主页面容器 -->
		<div class="mui-inner-wrap">
			<!-- 主页面标题 -->
			<header class="mui-bar mui-bar-nav">
				<a class="mui-pull-left" href="#">
					<i class="iconfont icon-Artboard" id="logo"></i>
					<span id="logo_tit">猫咪电影</span>
				</a>
				<a class="mui-pull-right iconfont icon-fangdajing" href="#" id="icon"></a>
			</header>
			<nav class="mui-bar mui-bar-tab" id="#nav">
				<keep-alive>
					<router-link to="/" class="mui-tab-item mui-active" target="/">
						<span class="mui-icon iconfont icon-dianying mui-active mtt"></span>
						<span class="mui-tab-label mui-active">电影</span>
					</router-link>
				</keep-alive>
				<keep-alive>
					<router-link to="/movie" class="mui-tab-item" target="/movie">
						<span class="mui-icon iconfont icon-yingyuan mtt"></span>
						<span class="mui-tab-label">影院</span>
					</router-link>
				</keep-alive>
				<keep-alive>
					<router-link to="/find" class="mui-tab-item" target="/find">
						<span class="mui-icon iconfont icon-faxian1"></span>
						<span class="mui-tab-label">发现</span>
					</router-link>
				</keep-alive>
				<keep-alive>
					<router-link to="/my" class="mui-tab-item" target="/my">
						<span class="mui-icon iconfont icon-wode1"></span>
						<span class="mui-tab-label">我的</span>
					</router-link>
				</keep-alive>
			</nav>
			<!-- 主页面内容容器 -->
			<div class="mui-content mui-scroll-wrapper" id="pullrefresh">
				<div class="mui-scroll">
					<!--轮播图-->
					<el-carousel trigger="click" height="150px">
						<el-carousel-item v-for="item in images">
							<img :src="item" />
						</el-carousel-item>
					</el-carousel>
					<h1 class="title mt"><i class="iconfont icon-huobao-dian-"></i><span>人气电影</span></h1>
					<!--列表-->
					<div class="mui-content mtt" id="content">
						<div class="mui-row">

						</div>
					</div>
				</div>
				<div class="mui-off-canvas-backdrop"></div>
			</div>
		</div>
	</div>
	</div>
</template>
<script>
	import { Loading } from 'element-ui';
	import mui from "../../static/js/mui.min.js"
	import jQuery from "../../static/js/jquery.min.js"
	window.jQuery = window.$ = jQuery
	var arr = [];
	export default {
		name: 'index',
		created() {
			this.loading()
			this.muiinit()
		},
		data() {
			return {
				images: '',
				imagelist: '',
				flag:''
			}

		},
		methods: {
			getdata() {
				var self = this
				mui.ajax({
					url: "static/json.txt",
					dataType: "json",
					success: function(data) {
						var data = data.subjects;
						var len = data.length;
						for(var i = 0; i < 4; i++) {
							arr.push(data[i].images.large)
						}
						self.images = arr
					}

				})
			},
			pulldowndata() {
				var self = this
				mui.ajax({
					url: "static/json.txt",
					dataType: "json",
					success: function(data) {
						var data = data.subjects;
						var len = data.length;
						for(var i = 0; i < len; i++) {
							var str = `
									<div class="mui-col-sm-6 w50">
										<a href="#/find?id=${data[i].id}">
											<img src="${data[i].images.large}" class="mtt" />
										</a>
										</div>`
							$(".mui-row").append(str)
						}
					}

				})

			},
			muiinit(){
				var self = this;
				mui.init({
					pullRefresh: {
						container: '#pullrefresh',
						up: {
							contentrefresh: '正在加载...',
							contentnomore: '没有更多数据了',
							callback: self.pulldownRefresh
						}
					}
				})
			},
			pulldownRefresh() {
				var self = this
				setTimeout(function() {
					self.pulldowndata()
				}, 1500)
			},
			loading() {
				let loadingInstance = Loading.service({
					fullscreen: true,
					text: "拼命加载中...",
					lock: true
				})
				setTimeout(function() {
					loadingInstance.close();
				}, 1000)
			}
		},
		mounted() {
			var self = this;
			mui('body').on('tap', 'a', function() {
				document.location.href = this.href;
			});
			mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005
			});
			self.pulldowndata()
			self.getdata()
		},
		watch:{
			"flag":'muiinit'
		}

	}
</script>

<style>

</style>