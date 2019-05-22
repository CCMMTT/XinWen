<template>
  <div class="login">
  	<div class="nav">
  	<van-icon name="arrow-left" class="ii" size="0.5rem" @click="goState(uu==1?{name:'My'}:{name:'Index'})"></van-icon>
  	<router-link class="a" :to="{name:'Reset'}">注册</router-link>
  	</div>
  	
  	
  	<van-row>
  		<van-col offset="2" span="20">
  			<van-cell-group>
  				<van-field label="手机号" placeholder="输入手机号" v-model="userInfo.phone"/>
  				<van-field label="密码" type="password" placeholder="密码(8-16位)" v-model="userInfo.pwd" />
  			</van-cell-group>
  		<van-button class="login-btn" size="large" type="warning" @click="login">登录</van-button>
  		</van-col>
  	</van-row>
  	
  </div>
  
 
 
</template>

<script>
	import {Field, CellGroup,Button,Dialog,Icon} from 'vant'
	import ges from '../gg/ges.js'
	

	
export default {
  name: 'Login',
  
  data(){
     return{
     	users:[],
     	active1:0,
     	userInfo:{
     		phone:'',
     		pwd:'',
     		uname:0,
     		psz:[],
     		pi:{},
     		uu:0
     	}
     }
  },
  
  components:{
  	[Field.name]:Field,
  	[CellGroup.name]:CellGroup,
  	[Button.name]:Button,
  	[Dialog.name]:Dialog,
  	[Icon.name]:Icon
  },
  created(){
  	this.uname = this.$route.params.uname;
  	this.active1 = this.$route.params.active1;
  	this.uu = this.$route.params.uu;
  	console.log(this.uname)
  	this.psz = this.$route.params.psz;
		this.pi = this.$route.params.pi;

  },
  
  methods:{
  	goState(path){
  		this.$router.push(path)
  	},
  	
  	login(){
  		if(!ges.gesPhone(this.userInfo.phone)){
  			Dialog.alert({
				  title: '手机号码不正确',
				}).then(() => {
				  this.userInfo.phone = '';
				});
  			
  		}else if(!ges.gesPwd(this.userInfo.pwd,8,16)){
  			
  			Dialog.alert({
				  title: '密码不正确',
				}).then(() => {
				  this.userInfo.pwd = '';
				});
  			
  		}else{
  			   
					var userData = localStorage.getItem('users');
					if(userData==undefined){
						Dialog.alert({
				 								 title: '用户不存在'
											});
					}
					if (userData) {
						//如果存在用户
						this.users = JSON.parse(userData);

						for (var i = 0; i < this.users.length; i++) {

							if (this.users[i].phone == this.userInfo.phone) {
								//如果手机号匹配, 验证密码

								if (this.users[i].pwd == this.userInfo.pwd) {
									
									localStorage.setItem('userLogin', JSON.stringify({userId: this.userInfo.phone, loginStatus: true}));
									
                  if(this.uname==1){
                  	
                  	var a = JSON.parse(localStorage.getItem('userLogin')).userId;
    		             var t = new Date().getTime();
    		     				 var c = {
    		     			   title:this.pi.title,
    		       			 digest:this.pi.digest,
    		       			 picInfo:[{url:this.pi.picInfo[0]==undefined?'http://cms-bucket.ws.126.net/2019/04/21/3ba0abd74a6a4ecdb37d14ee6f8d3825.png':this.pi.picInfo[0].url}],
    		       			 ptime:this.pi.ptime,
    		       			 source:this.pi.source,
    		       			 psz:this.psz,
    		       			 id:'zj'+a+t
    		      }
    		      localStorage.setItem('zj'+a+t,JSON.stringify(c))
                  	
                  }
									return  this.uname==0?this.$router.push({name: 'Index'}):this.$router.push({name: 'Xianqin',params:{psz:this.psz,pi:this.pi,active1:this.active1}});
									
				

								} else {

									return 	Dialog.alert({
				 								 title: '密码不正确'
											});
								}

							}

						}
						//不存该用户
							Dialog.alert({
				 								 title: '用户不存在'
											});
					}

				}

			}

		}

	}
  

</script>

<style lang="less" scoped>
	.login-btn{
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
	.ii{
		color:#fff;
		margin-top:0.3rem;
		margin-left:0.2rem;
	}
</style>
