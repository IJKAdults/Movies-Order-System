<template>
	<div id="con1">
		<header class="mui-bar mui-bar-nav">
			<router-link to="/login" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
			<h1 class="mui-title">注册</h1>
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
					<div class="login">
						<input id='password' type="password" placeholder="确认密码">
					</div>
				</form>

				<div class="mui-content-padded">
					<button id='login_btn' class="mui-btn" @click="requireregister">注册</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import mui from "../../static/js/mui.min.js"
	import jQuery from "../../static/js/jquery.min.js"
	window.jQuery = window.$ = jQuery
	var arr = []
	export default {
		name: 'register',
		methods:{
			requireregister(){
				var user = $("#username").val();
				var pwd = $("#password").val();
				$.ajax({
					type: "post",
					url: " http://datainfo.duapp.com/shopdata/userinfo.php",
					async: true,
					data: { status: "register", userID: user, password: pwd },
					success: (function(data) {
							if(data == 0) {
								mui.alert("用户名已存在！");
							} else if(data == 2) {
								mui.alert("用户名密码不符！");
							} else {
								mui.alert("注册成功！")
								localStorage.user = user;
								localStorage.pwd = pwd;
								location.href = "#/login";
							}
							console.log(data);
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