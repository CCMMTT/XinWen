<template>
	
	<div class="register">
		<div class="nav">
			<router-link class="a" :to="{name:'Login'}">登录</router-link>
		</div>
		
		<van-row>
			<van-col offset="2" span="20">
				
				<van-cell-group>
					<van-field label="手机号" v-model="userInfo.phone" placeholder="输入手机号" />
					<van-field type="password" label="密码" v-model="userInfo.pwd" placeholder="密码(8-16位)" />

					<van-field type="password" label="确认密码" v-model="userInfo.repwd" placeholder="确认密码" />

					<van-field label="短信验证码" v-model="userInfo.code">
						<van-button slot="button" size="small" type="primary" :disabled="isDisabled" @click="yz()">{{CodeText}}</van-button>
					</van-field>
					
				</van-cell-group>

				<van-button class="reset-btn" size="large" type="warning" @click="reset()">注册</van-button>

			</van-col>
		</van-row>

	</div>
	
</template>

<script>
	import {CellGroup,Field,Button,Dialog} from 'vant'
	import ges from '../gg/ges.js'
	
	export default {
		name:'Reset',
		data(){
			return {
				Code:'',
				CodeText:'发送验证码',
				isDisabled:false, //禁用
				users:[],         //数据data
				yzcode:'',
				uname:0,
				userInfo:{
					phone:'',
					pwd:'',
					repwd:'',
					code:''
				}
			}
		},
		components:{
			[CellGroup.name]:CellGroup,
			[Field.name]:Field,
			[Button.name]:Button,
			[Dialog.name]:Dialog
		},
		
		methods:{
			reset(){
				if(!ges.gesPhone(this.userInfo.phone)){
					
  				Dialog.alert({
				  title: '手机号码不正确',
				}).then(() => {
				  this.userInfo.phone = '';
				});

				}else if(!ges.gesPwd(this.userInfo.pwd,8,16)){
					
					Dialog.alert({
				  title: '手机号或者密码不正确',
				}).then(() => {
				  this.userInfo.pwd = '';
				});
				
				}else if(!ges.gesis(this.userInfo.pwd,this.userInfo.repwd)){
					
				Dialog.alert({
				  title: '俩次密码不一致',
				}).then(() => {
				  this.userInfo.repwd = '';
				});
					
				}else if(this.yzcode==''){
					
					Dialog.alert({
				  title: '请获取验证码',
				});
					
				}else if(this.yzcode != this.userInfo.code){
					
					Dialog.alert({
				  title: '不一致',
				}).then(() => {
				   this.userInfo.code = '';
				});
					
				}else{
		
					for(var i = 0 ; i < this.users.length;i++){
						if(this.users[i].phone == this.userInfo.phone){
							
							Dialog.alert({
				 			title: '已有该账号',
				       });
				   
				       
						}
					}
						var time = new Date();
						var uid = 'v'+time.getTime();
						var phone = this.userInfo.phone;
						var pwd = this.userInfo.pwd;
						var y = time.getFullYear();
						var m = time.getMonth()+1>10?time.getMonth()+1:'0'+time.getMonth()+1;
						var d = time.getDate()>10?time.getDate():'0'+time.getDay();
						var h = time.getHours()>10?time.getHours():'0'+time.getHours();
						var mi = time.getMinutes()>10?time.getMinutes():'0'+time.getMinutes();
						var s = time.getSeconds()>10?time.getSeconds():'0'+time.getSeconds();
						var retime = y+'-'+ m + '-' + d + ' ' + h + ':'+ mi +':'+s;
						
						var user = {
							uid:uid,
							phone:phone,
							pwd:pwd,
							retime:retime	
						};
					
						this.users.push(user);
						var data = JSON.stringify(this.users);
						localStorage.setItem('users',data);
						this.$router.push({name:'Login',params:{uname:this.uname}});
				}
				
			},
			yz(){
                if(!ges.gesPhone(this.userInfo.phone)){
                	
                	Dialog.alert({
				  title: '手机号码格式错误',
				}).then(() => {
				   this.userInfo.phone = '';
				});
				
                }else{
                	
                    this.isDisabled = true;
                    var time = 60;
                   this.CodeText = time+"s重新发送";
                    var timer = setInterval(() => {
						if (time <= 0) {
							this.isDisabled = false;
							this.CodeText = '发送验证码';
							//清除定时器
							clearInterval(timer);
							time = null;

						} else {
							this.CodeText = --time + 's后重新发送';
						}

					}, 1000)
                    this.yzcode = ges.gestime();
                    console.log("aa",this.yzcode);
                    Dialog.alert({
				      title: this.yzcode,
				    })
                    
                    
                }
			}
		},
		
		created() {
			var userData = localStorage.getItem('users');
			this.users = userData == undefined ? [] : JSON.parse(userData);
		}
		
	}
	
</script>

<style lang="less" scoped>

.reset-btn{
		margin-top: 1.3333rem;
	}
	.nav{
		height: 1.3333rem;
		background-color: #FFDD00;
		margin-bottom:  1.3333rem;
	.a{
			float: right;
			font-size: 14PX;
			color: #fff;
			line-height: 1.3333rem;
			margin-right: 0.5333rem;
		}
	}

</style>