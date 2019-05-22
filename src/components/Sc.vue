<template>
	<div class="man">
	  <van-row class="top">
	  	<van-col span="2" offset="1" @click.native="goState({name:'My',params:{active:active}})">
	  		<van-icon class="i" name="arrow-left" color="white" size="0.6rem"></van-icon>
	  	</van-col>
	  <van-col  span="18">
	  	<div class="topzi">收藏</div>
	  </van-col>
	  <van-col class="bj" span="2">
	  	<div @click="bj()">{{text}}</div>
	  </van-col>
	  </van-row>
	  
	  <van-row class="zj" v-if="dl"  v-for="(item,index) in data" :key="index">
	  	<van-col :span="l"  v-if="tr">
	  		<van-icon @click.native="scc(item)" class="ii" name="delete" color="#e4393c" size="0.8rem"></van-icon>
	  	</van-col>
	  	<van-col span="5"  @click.native="goState({name: 'Xianqin1', params:{psz:item.psz,pi:item,active:active,num:num}})">
	  		<img  class="img-auto" :src="item.picInfo[0]==undefined?src:item.picInfo[0].url">
	  	</van-col>
	  	<van-col :span="r"  @click.native="goState({name: 'Xianqin1', params:{psz:item.psz,pi:item,active:active,num:num}})">
	  		<div class="zjzi">{{item.title}}</div>
	  	</van-col>
	  </van-row>
	  
	  <div class="fool" v-if="tr">
	  <div @click="qk()" >清空浏览记录</div>
	  </div>

	</div>
</template>

<script>
	import {Icon,Dialog} from 'vant'
	
	export default{
		name:'Sc',
		data(){
			return{
				active:0,
				text:'编辑',
				userLoginStatus: null,
				data:[],
				l:0,
				r:19,
				tr:false,
				bb:true,
				dl:false,
				num:0,
				src:'http://cms-bucket.ws.126.net/2019/04/21/3ba0abd74a6a4ecdb37d14ee6f8d3825.png'
			}
		},
		created(){
			this.active = this.$route.params.active;
			
			//登录状态
			var userLogin = localStorage.getItem('userLogin');
			this.userLoginStatus = userLogin == undefined ? null : JSON.parse(userLogin);
			
			if (!this.userLoginStatus) {
    			//如果未登录, 提示用户登录
    			this.dl = false
    			Dialog.alert({
				  message: '请登陆'
				}).then(() => {
				  // on close
				});

    		} else if (this.userLoginStatus.loginStatus) {
    			 this.dl = true;
    			
    		    for(var key in window.localStorage){
    		    	 var a = JSON.parse(localStorage.getItem('userLogin')).userId;
 					var r =  new RegExp('sc'+a,'ig')
    		    	if(r.test(key)){               
                     var a = JSON.parse(window.localStorage.getItem(key));
                      this.data.unshift(a);  		    			
    		    	}
    		    }   
    		}
			
		},
		components:{
			[Icon.name]:Icon,
			[Dialog.name]:Dialog
		},
		methods:{
			//跳转
			goState(path){
				this.$router.push(path)
			},
			
			//删除
			scc(item){
				 this.data = [];
     			localStorage.removeItem(item.id)
     			 for(var key in window.localStorage){
    		    	 var a = JSON.parse(localStorage.getItem('userLogin')).userId;
 					var r =  new RegExp('sc'+a,'ig')
    		    	if(r.test(key)){               
                     var a = JSON.parse(window.localStorage.getItem(key));  
                      this.data.unshift(a);  
    		    	}
    		   }	
				
			},
			
			//返回
			goState(path){
				this.$router.push(path)
			},
			
			//清空
			qk(){
				if (!this.userLoginStatus) {

    		} else if (this.userLoginStatus.loginStatus) {
    			
    			Dialog.confirm({
				  title: '标题',
				  message: '清空收藏'
				}).then(() => {
				  
				    for(var key in window.localStorage){
    		    	 var a = JSON.parse(localStorage.getItem('userLogin')).userId;
   					var r =  new RegExp('sc'+a,'ig')
    		    	if(r.test(key)){               
                      localStorage.removeItem(key)  		
                      this.data=[]
    		    	}
    		    }
				  
				}).catch(() => {
				 
				});
    			
    			
    	
   
    		}
				
			},
			
			
			//编辑
			bj(){
				if(this.bb){
				this.text='完成';
				this.tr = true;
				this.l=3;
				this.r=16;
				this.bb = !this.bb
				}else if(!this.bb){
					this.text="编辑";
					this.tr = false;
					this.l=0;
				    this.r=19;
					this.bb = !this.bb
				}
			}
		}
	}
</script>

<style lang="less" scoped="">
.img-auto{
	width:100%;
	display: inline-block;
	height:1.2rem;
}
.man{
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background-color: #CCCCCC;
}
	.top{
	width:100%;
	padding:0.2rem 0;
	text-align: center;
	background-color: #FFDD00;
	margin-bottom: 0.3rem;
}
.topzi{
	font-size: 0.5333rem;
}
.bj{
	margin-top:0.5rem;
}
.i{
	margin-top:0.2rem;
}
.zj{
	background-color: #fff;
	padding:0.2rem 0 0.1rem 0;
    border-bottom: 1Px solid #CCCCCC;
}
.zjzi{
	font-size: 0.45rem;
	overflow:hidden;
	text-overflow: ellipsis;
	white-space:nowrap;
	margin-top:0.3rem;
}
.ii{
	margin-top:0.3rem;
}
.fool{
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: #fff;
	padding:0.2rem 0;
	width:100%;
	text-align: center;
	color:#00BFFF;
}

</style>