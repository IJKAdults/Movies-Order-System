<template>
	<div class="mui-content">
		<header class="mui-bar mui-bar-nav">
			<router-link to="/" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
			<h1 class="mui-title">影院</h1>
			<router-link to="/map" class="mui-icon mui-icon-right-nav mui-pull-right iconfont icon-dingwei"></router-link>
		</header>
		<div id="cont">
			<el-carousel :interval="4000" type="card" height="200px">
				<el-carousel-item v-for="item in images" :key="item">
					<img :src="item" />
				</el-carousel-item>
			</el-carousel>
			<ul class="mui-table-view">

			</ul>

		</div>
	</div>
</template>

<script>
	import mui from "../../static/js/mui.min.js"
	import jQuery from "../../static/js/jquery.min.js"
	window.jQuery = window.$ = jQuery
	var arr = []
	export default {
		name: 'movie',
		created() {
			this.getpic()
			this.getmovie()
			this.getmoviedata()
		},
		data() {
			return {
				images: ''
			}
		},
		methods: {
			getpic() {
				var self = this
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
			getmovie() {
				var str = ""
				setTimeout(function() {
					for(var i = 0; i < 15; i++) {
						str += `
					<li class="mui-table-view-cell list">
					<ul>
						<li><b>东门百誉(东门店)</b><span class="meter">&lt;1km</span></li>
						<li>罗湖区人民南路2028号金华广场三楼</li>
						<ul id="list-icon">
							<li>
								<a href="#">改签</a>
							</li>
							<li>
								<a href="#">取票机</a>
							</li>
							<li>
								<a href="#">儿童优惠</a>
							</li>
							<li>
								<a href="#">可停车</a>
							</li>
							<li>
								<a href="#">WiFi</a>
							</li>
						</ul>
					</ul>
					<a class="mui-btn mui-btn-danger">
						购票
					</a>
				</li>`
					}
					$(".mui-table-view").html(str)
				}, 0)

			},
			getmoviedata() {
				mui.ajax({
					url: "static/movie.json",
					dataType: "json",
					success: function(data) {
						var moviearea = data.data.昌平区
						var str = ""
						setTimeout(function() {
							for(var i = 0; i < moviearea.length; i++) {
								str += `
								<li class="mui-table-view-cell list">
								<ul>
									<li><b>${moviearea[i].nm}</b><span class="meter">${moviearea[i].id}</span></li>
									<li id="addr">${moviearea[i].addr}</li>
									<ul id="list-icon">
										<li>
											<a href="#">改签</a>
										</li>
										<li>
											<a href="#">取票机</a>
										</li>
										<li>
											<a href="#">儿童优惠</a>
										</li>
										<li>
											<a href="#">可停车</a>
										</li>
										<li>
											<a href="#">WiFi</a>
										</li>
									</ul>
								</ul>
								<a href="#/" class="mui-btn mui-btn-danger">
									购票
								</a>
							</li>`
							}
							$(".mui-table-view").html(str)
						}, 0)

					}
				})
			}
		}
	}
</script>

<style>
	@import url("../../static/css/movie.css");
</style>