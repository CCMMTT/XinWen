<template>
    <div class="man">
    	<van-row class="top" id="top">
		<van-col span="4">
		<van-icon @click="goState1()" class="topi" name="arrow-left" color="white" size="0.6rem"/>
		</van-col>
		<van-col span="20" class="topzi">
		{{pi.source==undefined?'丢失':pi.source}}
	</van-col>
	</van-row>
	
	<van-row>
		<van-col class="zi" span="22" offset="1">{{pi.title}}:</van-col>
	</van-row>
	<van-row>
		<van-col span="4" class="zzi" offset="1">
			<van-icon class="zzii" color="#e4393c" name="description" size="1rem"></van-icon>
		</van-col>
		<van-col span="19" class="x">
			 <p class="xzi">新闻网</p>
			<p>{{pi.ptime}}...</p>
		</van-col>
	</van-row>
	
	<van-row>
		<van-col span="22" offset="1">
			<img class="img-auto" :src="pi.picInfo[0]==undefined?src:pi.picInfo[0].url">
		</van-col>
	</van-row>
	
	<van-row>
		<van-col span="22" offset="1" class="mzi">
			<p >{{pi.digest}}....</p>
			 <div>
			 	<span>由于该内容缺少可点击链接离开前往网易新闻:</span>
			 	<a target="_blank" >点击跳转到该内容</a>
			 </div>
		</van-col>
	</van-row>
	
	<van-row class="gbox">
		<van-col span="22" offset="1" class="g" >
			<div @click="aa()" class="l">推荐</div>
			<div @click="aa()" class="l">财经</div>
			<div @click="aa()" class="l">科技</div>
			<div @click="aa()" class="l">体育</div>
			<div @click="aa()" class="l">娱乐</div>
			<div @click="aa()" class="l">新闻</div>
			<div @click="aa()" class="l">社会</div>
			
			<div  class="c w">段子</div>
		</van-col>
	</van-row>
	
	<van-row class="tj">
		<van-col span="3" offset="1">
			<div class="tjzi">推荐</div>
			</van-col>
			<van-col span="10">
				<van-icon class="tji" name="arrow" size="0.4rem"></van-icon>
			</van-col>
	</van-row>
	
	<van-row @click.native="goSta(item)" class="tjm" v-for="(item,index) in psz" :key="index">
		<a class="tjmm" href="#top">
		<van-col  span="15" offset="1">
			<div class="tjmzi">{{item.digest}}{{item.title}}</div>
			<div class="tjmtime">新闻报{{item.ptime}}</div>
		</van-col>
		<van-col span="7">
			<img class="img-auto1 tjmtu" :src="item.picInfo[0]==undefined?src:item.picInfo[0].url">
		</van-col>
		</a>
	</van-row>

	
	<van-row>
		<div class="buttom">
		<div><span>用户反馈  合作</span></div>
		<p>Copyright © 2019 Sohu All Rights Reserved</p>
		<p>有限新闻 版权所有</p>
	</div>
	</van-row>
	
	<van-row class="fool">
		<van-col span="5">
			<van-icon class="fooli" @click="goState({name:'Pinlun',params:{pi:pi,psz:psz,active:active}})" name="chat-o" size="1rem"></van-icon>
		</van-col>
		<van-col span="14">
			<input class="foolipt" @click="goState({name:'Fb',params:{pi:pi,psz:psz,active:active}})" placeholder="我来说俩句..."/>
		</van-col>
		<van-col span="5">
			<van-icon @click.native="goState2(pi,psz)" class="fooli" :name="xx" size="1rem"></van-icon>
		</van-col>
	</van-row>
	
    </div>
	
	
</template>

<script>
	import { Icon ,Dialog} from 'vant';
	
	export default {
		name:'Xianqin',
		data(){
			return {
				userLoginStatus: null,
				psz:[],
				xx:'star-o',
				pi:{},
				data:[],
				number:0,
				active:0,
				tr:false,
				src:'http://cms-bucket.ws.126.net/2019/04/21/3ba0abd74a6a4ecdb37d14ee6f8d3825.png',
			    zuji:[]
				
			}
		},


		created(){
            this.num = this.$route.params.num;
			this.psz = this.$route.params.psz;
			this.pi = this.$route.params.pi;
           console.log(this.pi)
			this.active = this.$route.params.active;
			//登录状态
			var userLogin = localStorage.getItem('userLogin');
			this.userLoginStatus = userLogin == undefined ? null : JSON.parse(userLogin);
			
			//初始化星星
			 for(var key in window.localStorage){
    		    var a = JSON.parse(localStorage.getItem('userLogin')).userId;
 				var r =  new RegExp('sc'+a,'ig')
    		    if(r.test(key)){               
                var a = JSON.parse(window.localStorage.getItem(key));
                    this.data.unshift(a); 		    			
    		    }
    		   } 
    		   for(var i =0;i<this.data.length;i++){
    		   if(this.data[i].docid==this.pi.docid){
    		   
    		   this.xx = 'star';
    		   this.tr = true;
    		   }
    		   }
			
		},
		components:{
			[Icon.name]:Icon,
			[Dialog.name]:Dialog
		},
		methods:{
			aa(){
				Dialog.alert({
				  message: '收藏/足迹页面无法跳转'
				}).then(() => {
				  // on close
				});
			},
			
			//推荐点击
			goSta(path){
				this.pi = path;
            console.log(this.pi)
			 if (!this.userLoginStatus) {
    			
    		} else if (this.userLoginStatus.loginStatus) {
    			this.pi = path;
    			console.log(this.pi)
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
    		  
    		  //初始化星星
    		  for(var key in window.localStorage){
    		    var a = JSON.parse(localStorage.getItem('userLogin')).userId;
 				var r =  new RegExp('sc'+a,'ig')
    		    if(r.test(key)){               
                var a = JSON.parse(window.localStorage.getItem(key));
                    this.data.unshift(a); 		    			
    		    }
    		   } 
    		   for(var i =0;i<this.data.length;i++){
    		   if(this.data[i].docid==this.pi.docid){
    		   
    		   this.xx = 'star';
    		   this.tr = true;
    		   
    		   }else{
    		   	this.xx = 'star-o';
    		   	this.tr = false;
    		   }
    		   }
    		  
    		}   
			},
				//评论发布点击
			goState(path){
				
				if (!this.userLoginStatus) {
    			//如果未登录, 提示用户登录
    			this.$router.push({name:'Login',params:{pi:this.pi,psz:this.psz}})
    			
    		} else if (this.userLoginStatus.loginStatus) {

    		this.$router.push(path)

    		}
			},
			
			//收藏点击
			goState2(pi,psz){
				
				if (!this.userLoginStatus) {
    			//如果未登录, 提示用户登录
    			this.$router.push({name:'Login',params:{pi:this.pi,psz:this.psz}})
    			
    		} else if (this.userLoginStatus.loginStatus) {
    			 var a = JSON.parse(localStorage.getItem('userLogin')).userId;
    			console.log(pi);
    			
            if(!this.tr){
            	this.xx = 'star';
            	this.tr = !this.tr;
            	 var c = {
    		       	title:this.pi.title,
    		       	digest:this.pi.digest,
    		       	picInfo:[{url:this.pi.picInfo[0]==undefined?'http://cms-bucket.ws.126.net/2019/04/21/3ba0abd74a6a4ecdb37d14ee6f8d3825.png':this.pi.picInfo[0].url}],
    		       	ptime:this.pi.ptime,
    		       	source:this.pi.source,
    		       	psz:this.psz,
    		       	id:'sc'+a+this.pi.docid,
    		       	docid:this.pi.docid
    		       }
            	localStorage.setItem('sc'+a+this.pi.docid,JSON.stringify(c))
            	
            }else{
            	this.xx = 'star-o';
            	this.tr = !this.tr;
            	 localStorage.removeItem('sc'+a+this.pi.docid)
            }
    	     

    		}
				
			},
			
			
			//返回点击
			goState1(){
			this.num==0?this.$router.push({name:'Sc',params:{active:this.active}}):this.$router.push({name:'Zj',params:{active:this.active}})
			},
			
		}
		
	}
	
</script>
   
<style lang="less" scoped>
.gbox{
	margin-top:1rem;
}

.l{
	margin-right: 0.8rem;
	display: inline-block;
	border:1Px solid #5fc770;
	color:#5fc770;
	padding:0.2rem 0.5rem;
	margin-top:0.3rem;
	border-radius:40%;
	background-color: #effaf0;
}

p{
	padding:0;
	margin:0;
}
.man{
	background-color: #F8F8F8;
}
.img-auto{
	width:100%;
	display: block;
}
.img-auto1{
	width:100%;
	height:2rem;
	display: block;
}
.top{
	width:100%;
	height:1.4rem;
	background-color:#FFDD00;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 99999;
}
.topi{
	margin-left:0.2rem;
	margin-top:0.3rem;
}
.topzi{
    line-height: 1.4rem;	
	color:#fff;
	font-weight: bold;
	font-size: 0.5rem;
	text-align: center;
	padding-right:1.2rem;
}
.tu{
	width: 100%;
}
.zi{
	padding:0.4rem 0;
	font-size:0.65rem;
	
}
.zzi{
	text-align: center;
}
.zzii{
	padding-top:0.3rem;
	transform: rotate(15deg);
}
.x{
	padding:0.2rem 0;
}
.xzi{
	font-size:0.5rem;
	font-weight: bold;
}
.mzi{
	font-size:0.48rem;
	margin-top:0.3rem;
}
.mzi p{
	padding:0.2rem 0;
}
.tj{
	margin-top:1rem;
}
.tjzi{
	font-size:0.5rem;
	font-weight: bold;
}
.tji{
	margin-top:0.2rem;
}
.tjm{
	padding:0.3rem;
	border-bottom:1Px solid #ddd;
}
.tjmzi{
   font-size: 0.4733rem;	
   overflow:hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	padding-top:0.1rem;
}
.tjmtime{
	font-size: 0.32rem;
}
.tjmm{
	color:#000;
}
.tjmtu{
	margin-top:0.2rem;
}
.buttom{
	margin-top:0.8rem;
	width:100%;
	padding:0.8rem;
	text-align: center;
	background-color: #ddd;
	box-sizing: border-box;
	font-size:0.4266rem;
	margin-bottom: 1.4rem;
}
.fool{
	position: fixed;
	bottom:0;
	left: 0;
	height:1.4rem;
	width: 100%;
	background-color: #F2F2F2;
	text-align: center;
}
.foolipt{
	width:100%;
	height:1rem;
	margin-top:0.1rem;
}
.fooli{
	line-height: 1.4rem;
}
</style>