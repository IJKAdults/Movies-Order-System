<template>
	<div id="my">
		<header class="mui-bar mui-bar-nav">
			<router-link to="/" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
			<h1 class="mui-title">我的</h1>
			<a class="mui-icon mui-icon-right-nav mui-pull-right iconfont icon-shezhi"></a>
		</header>
		<div class="con">
			<div id="header_img">
				<div class="h_pic">
					<img src="../../static/img/list1.png" />
					<span id="userpic">{{user}}</span>
				</div>
			</div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<span class="mui-icon iconfont icon-shoucang " id="icon0"></span>
						我的收藏
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<span class="mui-icon iconfont icon-goumai" id="icon1"></span>
						购买记录
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<span class="mui-icon iconfont icon-qianbao" id="icon2"></span>
						我的钱包
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<span class="mui-icon iconfont icon-guanzhu " id="icon3"></span>
						我的关注
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<span class="mui-icon iconfont icon-fankui" id="icon4"></span>
						反馈
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<span class="mui-icon iconfont icon-dafen " id="icon5"></span>
						给呜咪打分
					</a>
				</li>
			</ul>
			<button type="button" @click="login" class="mui-btn mui-btn-blue mui-btn-outlined" id="btn1">退出登录</button>
		</div>

	</div>
</template>

<script>
	import mui from "../../static/js/mui.min.js"
	import jQuery from "../../static/js/jquery.min.js"
	window.jQuery = window.$ = jQuery
	var arr = []
	export default {
		name: 'my',
		created(){
			this.login()
		},
		data(){
			return{
				user:""
			}
		},
		methods:{
			login(){
				if(localStorage.user){
					this.user = localStorage.user
					$("#btn1").html("退出登录")
				}else{
					$("#btn1").html("点击登录")	
					location.href="#/login"
				}
				if($("#btn1").html() == "退出登录"){
					location.href="#/login"
					localStorage.user = ""
				}
				
			}
		}
	}
</script>

<style>
	@import url("../../static/css/my.css");
</style>