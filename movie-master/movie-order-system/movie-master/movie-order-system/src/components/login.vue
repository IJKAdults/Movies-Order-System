<template>
	<div id="con1">
		<header class="mui-bar mui-bar-nav">
			<router-link to="/my" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
			<h1 class="mui-title">登录</h1>
		</header>
		<div id="login_con">
			<div class="logo">
				<img src="../../static/img/logo.png" />
			</div>
			<div class="login_form">
				<form id='login-form'>
					<div class="login">
						<input id='username' type="text" placeholder="请输入账号">
					</div>
					<div class="login">
						<input id='password' type="password" placeholder="请输入密码">
					</div>
				</form>

				<div class="mui-content-padded">
					<button id='login_btn' class="mui-btn" @click="requirelogin">登录</button>
					<div class="link-area">
						<router-link to="/register" id='reg'>注册账号</router-link> <span class="spliter">|</span>
						<a href="#" id='forgetPassword'>忘记密码</a>
					</div>
				</div>
			</div>
			<div class="hezuo">
				<b></b>
				<span>使用社交账号登录</span>
				<b></b>
			</div>
			<div class="shejiao">
				<a href="#" class="mui-icon mui-icon-qq"></a>
				<a href="#" class="mui-icon mui-icon-weibo"></a>
				<a href="#" class="mui-icon mui-icon-weixin"></a>
			</div>
		</div>
	</div>
</template>

<script>
	import { MessageBox } from 'element-ui';
	import mui from "../../static/js/mui.min.js"
	import jQuery from "../../static/js/jquery.min.js"
	window.jQuery = window.$ = jQuery
	var arr = []
	export default {
		name: 'login',
		methods:{
			requirelogin(){
				var user = $("#username").val();
				var pwd = $("#password").val();
				$.ajax({
					type: "post",
					url: " http://datainfo.duapp.com/shopdata/userinfo.php",
					async: true,
					data: { status: "login", userID: user, password: pwd },
					success: (function(data) {
							if(user == "" || pwd == ""){
								mui.alert("不能为空！");
								return;
							}
							if(data == 0) {
								mui.alert("用户名不存在！");
								return;
							} else if(data == 2) {
								alert("用户名密码不符！");
								return;
							} else {
								mui.alert("登录成功！")
								localStorage.user = user;
								location.href = "#/my";
							}
						}

					)

				})
			}
		}
	}
</script>

<style>
	@import url("../../static/css/login.css");
</style>