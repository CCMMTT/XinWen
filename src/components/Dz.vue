<template>
	<div class="man">
		
	<div class="top" ref="search">
<div class="topxw"><h4>新闻</h4></div>
<div class="topinp">
	<p>热门段子</p>
</div>
<div class="topm">
	<van-icon class="topi" size="0.65rem" name="youzan-shield" />
	<span class="topzi">名站</span>
</div>
</div>

<van-notice-bar mode="closeable" class="bar"
  text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
  left-icon="volume-o"
/>
<van-notice-bar mode="closeable" class="bar"
  text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
  left-icon="volume-o"
/>


     <van-row class="h" @click.native="goSta(one,item,{name:'Xianqin2',params:{psz:one,pi:item,active:1}})"
     	 v-for="(item,index) in one">
     	<van-col span="5" offset="1" >
     		<img class="img-auto" :src="item.profile_image == ' '||undefined?src:item.profile_image">
     	</van-col>
     	<van-col class="hz" span="17">
     		<div><span class="hna">{{item.name}}</span><span class="ht">完整</span></div>
     		<div class="hzi">{{item.text}}</div>
     		<div class="ho">
     			<div class="hl">{{item.theme_name==' '||undefined?dd:item.theme_name}}</div>
     			<div class="hr">段子</div>
     		</div>
     	</van-col>
     </van-row>
     
     <nav>
     	<div class="im"  @click="goSta(two,item,{name:'Xianqin2',params:{psz:two,pi:item,active:1}})" v-for="(item,index) in two" :key="index">
     		<img class="img-auto1" :src="item.profile_image==' '||undefined?src:item.profile_image">
     		<p class="imzi">{{item.name}}</p>
     	</div>
     </nav>

     
 <van-row class="h"  @click.native="goSta(three,item,{name:'Xianqin2',params:{psz:three,pi:item,active:1}})" v-for="(item,index) in three" >
     	<van-col span="5" offset="1" >
     		<img class="img-auto" :src="item.profile_image ==' '||undefined?src:item.profile_image">
     	</van-col>
     	<van-col class="hz" span="17">
     		<div><span class="hna">{{item.name}}</span><span class="ht">完整</span></div>
     		<div class="hzi">{{item.text}}</div>
     		<div class="ho">
     			<div class="hl">{{item.theme_name==' '||undefined?dd:item.theme_name}}</div>
     			<div class="hr">段子</div>
     		</div>
     	</van-col>
     </van-row>
     
          <nav>
     	<div class="im"  @click="goSta(four,item,{name:'Xianqin2',params:{psz:four,pi:item,active:1}})" v-for="(item,index) in four" :key="index">
     		<img class="img-auto1" :src="item.profile_image==' '||undefined?src:item.profile_image">
     		<p class="imzi">{{item.name}}</p>
     	</div>
     </nav>
		
	 <van-row class="h"  @click.native="goSta(five,item,{name:'Xianqin2',params:{psz:five,pi:item,active:1}})" v-for="(item,index) in five" >
     	<van-col span="5" offset="1" >
     		<img class="img-auto" :src="item.profile_image ==' '||undefined?src:item.profile_image">
     	</van-col>
     	<van-col class="hz" span="17">
     		<div><span class="hna">{{item.name}}</span><span class="ht">完整</span></div>
     		<div class="hzi">{{item.text}}</div>
     		<div class="ho">
     			<div class="hl">{{item.theme_name==' '||undefined?dd:item.theme_name}}</div>
     			<div class="hr">段子</div>
     		</div>
     	</van-col>
     </van-row>
		
	</div>
</template>

<script>
	
    import { Icon ,Swipe, SwipeItem,NoticeBar } from 'vant'

	export default{
		name:'Dz',
		data(){
			return{
				active:0,
				one:[],
				two:[],
				three:[],
				four:[],
				five:[],
				pi:{},
				psz:[],
				pzz:[],
				src:"http://qzapp.qlogo.cn/qzapp/100336987/7B29BFCD734484C7DDC573E7D67BDCF4/100",
				dd:'主版块'
	
			}
		},
		methods:{
			
		goSta(psz,item,path){
		this.$router.push(path);

         this.pi = item;
         this.psz = psz;
         for(var i = 0;i<this.psz.length;i++){
         	var d = {
         		title:this.psz[i].name,
    		    digest:this.psz[i].text,
    		    picInfo:[{url:this.psz[i].image0==undefined?'http://wimg.spriteapp.cn/picture/2018/0214/1a06bb2e-116e-11e8-b7ef-1866daeb0df1_wpd.jpg':this.psz[i].image0}],
    		    ptime:this.psz[i].passtime,
    		    source:this.psz[i].name,
    		    docid:this.psz[i].user_id
         	}
         	this.pzz.unshift(d)
         }
         
          if (!this.userLoginStatus) {

    		} else if (this.userLoginStatus.loginStatus) {
    		       var a = JSON.parse(localStorage.getItem('userLogin')).userId;
    		       var t = new Date().getTime();
    		      var c = {
    		       	title:this.pi.name,
    		       	digest:this.pi.text,
    		        picInfo:[{url:this.pi.image0==undefined?'http://wimg.spriteapp.cn/picture/2018/0214/1a06bb2e-116e-11e8-b7ef-1866daeb0df1_wpd.jpg':this.pi.image0}],
    		       	ptime:this.pi.passtime,
    		       	source:this.pi.name,
    		       	psz:this.pzz,
    		       	id:'zj'+a+t
    		      }
    		      localStorage.setItem('zj'+a+t,JSON.stringify(c))
    		  
    		}
	},
			
		},
		
		created(){
//			this.axios({
//			methods:'GET',	
//			url:'https://www.apiopen.top/journalismApi',	
//			}).then(result=>{
//			console.log('adf',result)
////			localStorage.setItem('shuju',JSON.stringify(result.data.data));
//			})
//			console.log("a")
			
			this.active = this.$route.params.active;

			 //登录状态
			var userLogin = localStorage.getItem('userLogin');
			this.userLoginStatus = userLogin == undefined ? null : JSON.parse(userLogin);
			
			var a = JSON.parse(localStorage.getItem('DZ')).splice(0,3);
			this.one = a;
			var b = JSON.parse(localStorage.getItem('DZ')).splice(3,5);
			this.two=b;
			var c = JSON.parse(localStorage.getItem('DZ')).splice(8,4);
			this.three = c;
			var d = JSON.parse(localStorage.getItem('DZ')).splice(12,5);
			this.four = d;
			var f = JSON.parse(localStorage.getItem('DZ')).splice(17,3);
			this.five = f;	
		},
		components:{
			[Icon.name]:Icon,
			[Swipe.name]:Swipe,
			[SwipeItem.name]:SwipeItem,
			[NoticeBar.name]:NoticeBar 
		}
		
	}
	
</script>

<style lang="less" scoped>
.bar{
	position: sticky;
	top:1.4rem;
	left: 0;
}
.img-auto{
	width:100%;
	display: block;
	height:2rem;
	
}
.img-auto1{
	width:100%;
	display: block;
	height:2.5rem;
}
input{
	padding:0;
	margin:0;
	outline: none;
	border:none;
}
h4,p{
	margin:0;
	padding:0;
}
.man{
	margin-bottom: 1.3333rem;
}


.top{
	width:100%;
	background-color:#FFDD00;
	overflow: hidden;
	position: sticky;
	top:0;
	left: 0;
	z-index: 99999;
}
.topxw{
	float:left;
	width:18%;
	height:1.4rem;
	color:#fff;
	text-align: center;
	font-size: 0.5333rem;
	line-height: 1.4rem;
}
.topinp{
	float:left;
	width:60%;
	height:1.4rem;
	text-align: center;
	line-height: 1.4rem;
	font-size: 0.54rem;
}
.topm{
	position: relative;
	float:left;
	width:22%;
	height:1.4rem;
	text-align: center;
	line-height: 1.4rem;
}
.topzi{
	display: inline-block;
	color:#fff;
	font-weight: bold;
	font-size: 0.4rem;
	margin-left:0.5rem;
}
.topi{
	position: absolute;
	display: inline-block;
	top:50%;
	left: 10%;
	transform: translateY(-50%);
}
.h{
	background-color: #fff;
	padding:0.3rem 0;
	border-bottom:0.015rem solid #ccc;
}
.ht{
	display: inline-block;
	margin-left:1rem;
	font-size:0.3733rem;
	background-color: #00FFFF;
	border-radius:18%;
}
.hna{
	font-size:0.4rem;
	font-weight: bold;
	color:#5A6268;
}
.hzi{
	margin-top:0.1rem;
	color:#aaa;
	overflow:hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}
.hz{
	margin-left:0.2rem;
}
.ho{
	overflow: hidden;
	width: 100%;
	margin-top:0.18rem;
	color:#5A6268;
}
.hl{
	float:left;
}
.hr{
	float:right;
	border:1Px solid #e4393c;
	padding:0.01rem 0.1rem;
	border-radius: 20%;
}
nav{
	  display: -webkit-box;
      overflow-x: auto;
      margin:0.6rem 0;
}
.im{
	width:2.5rem;
	height:3.5rem;
	padding-left:0.4rem;
}
.imzi{
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
</style>