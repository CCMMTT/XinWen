<template>
	<div class="man">
		
	<van-row>
	<van-col span="24" class="top">
		<div>我的</div>
	</van-col>
	</van-row>
	
	<van-row class="use" >
		<van-col span="5" offset="1" class="i">
			<van-icon name="user-o" size="1.3rem"></van-icon>
		</van-col>
		<van-col span="17">
			<div class="usezi">账号名：{{use}}</div>
			<div @click="goState({name:'Login',params:{uname:0}})">{{dl}}</div>
		</van-col>
	</van-row>
	
    <van-row class="sc"  @click.native="goState({name:'Sc',params:{active:active}})">
    	<van-col span="3" offset="2">
    		<van-icon name="notes-o" size="1rem"></van-icon>
    	</van-col>
    	<van-col span="17">
    		<div class="sczi">收藏</div>
    	</van-col>
    	<van-col span="2">
    		<van-icon class="si" name="arrow" size="0.5rem"></van-icon>
    	</van-col>
    </van-row>
    
    <van-row class="sc"  @click.native="goState({name:'Zj',params:{active:active}})">
    	<van-col span="3" offset="2">
    		<van-icon name="todo-list-o" size="1rem"></van-icon>
    	</van-col>
    	<van-col span="17">
    		<div class="sczi">足迹</div>
    	</van-col>
    	<van-col span="2">
    		<van-icon class="si" name="arrow" size="0.5rem"></van-icon>
    	</van-col>
    </van-row>
    <van-row class="sc1"  @click.native="goState({name:'Xgmi',params:{active:active}})">
    	<van-col span="3" offset="2">
    		<van-icon name="setting-o" size="0.8rem"></van-icon>
    	</van-col>
    	<van-col span="17">
    		<div class="sczi">修改密码</div>
    	</van-col>
    	<van-col span="2">
    		<van-icon class="si" name="arrow" size="0.5rem"></van-icon>
    	</van-col>
    </van-row>
    <van-row class="sc1" @click.native="qh({name:'Login',params:{uname:uname,uu:uu}})">
    	<van-col span="3" offset="2">
    		<van-icon name="contact" size="0.9rem"></van-icon>
    	</van-col>
    	<van-col span="17">
    		<div class="sczi" >切换账号</div>
    	</van-col>
    	<van-col span="2">
    		<van-icon class="si" name="arrow" size="0.5rem"></van-icon>
    	</van-col>
    </van-row>
     <van-row class="sc" @click.native="tc">
    	<van-col span="3" offset="2">
    		<van-icon name="close" size="0.9rem"></van-icon>
    	</van-col>
    	<van-col span="17">
    		<div class="sczi">退出</div>
    	</van-col>
    	<van-col span="2">
    		<van-icon class="si" name="arrow" size="0.5rem"></van-icon>
    	</van-col>
    </van-row>
		
		
		
	</div>
	
	
</template>

<script>
	import { Icon,Dialog } from 'vant';
	export default{
		name:'My',
		data(){
			return{
				userLoginStatus: null,
				use:'未登录',
				dl:'点击登录',
				active:0,
				uname:0,
				uu:1
				
			}
			
		},
		methods:{
			
			goState(path){
				console.log("a")
				this.$router.push(path)
			},
			tc(){
				if(localStorage.getItem('userLogin')){
					
					Dialog.confirm({
					  message: '确定退出'
					}).then(() => {
					
					  localStorage.removeItem('userLogin');
					  this.use='未登录';
					  this.dl='点击登录';
					}).catch(() => {
					
					});
					
				
				}else{
					
					Dialog.alert({
						title: '无账号',
						})
					
				}
				
			},
			qh(path){
				if(localStorage.getItem('userLogin')){
				this.$router.push(path)
				}else{
					Dialog.alert({
						title: '无账号',
						})
				}
			}
			
			
			
		},
		
		created(){
			this.active = this.$route.params.active;
			
			var userLogin = localStorage.getItem('userLogin');
			this.userLoginStatus = userLogin == undefined ? null : JSON.parse(userLogin);
			
			if (!this.userLoginStatus) {
    			//如果未登录, 提示用户登录
    			return;
    		} else if (this.userLoginStatus.loginStatus) {
                this.use=this.userLoginStatus.userId;
                this.dl="";
            
    		}
			
			
		},
		
		components:{
			[Icon.name]:Icon,
			[Dialog.name]:Dialog
		}
	}
	
</script>

<style lang="less" scoped="">
.man{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
}
.top{
	width:100%;
	height:1.4rem;
	background-color:#FFDD00;
	text-align: center;
	line-height: 1.4rem;
	font-size: 0.5333rem;
	font-weight: bold;
	}
 .use{
 	padding:0.6rem;
 	background-color:#fff;
 }
.usezi{
	margin-top:0.5rem;
	font-size: 0.45rem;
	margin-bottom: 0.2rem;
}
.sc{
	background-color:#fff;
	padding:0.2rem 0;
	margin-top:0.35rem;
}
.si{
	margin-top:0.3rem;
}
.sczi{
	display: inline-block;
	margin-top:.3rem;
	margin-left:0.3rem;
}
.sc1{
	background-color:#fff;
	padding:0.3rem 0;
	border-top:1Px solid #ddd;
}

	
</style>