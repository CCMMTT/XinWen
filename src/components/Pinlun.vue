<template>
	<div class="man">
		
	<van-row class="top" id="top">
		<van-col span="4">
		<van-icon @click="goState()" class="topi" name="arrow-left" color="white" size="0.6rem"/>
		</van-col>
		<van-col span="20" class="topzi">
		<p>评论</p>
	</van-col>
	</van-row>
	
	<van-row class="a">
		<van-col span="22" offset="1">
			<div class="zi">{{pi.title==undefined?pi.name:pi.title}}:</div>
		</van-col>
	</van-row>
	
	<van-row class="xw">
		<van-col span="3" class="tu" offset="1">
			<van-icon name="description" size="1rem"></van-icon>
		</van-col>
		<van-col span="8"><div class="xwzi">新闻报</div></van-col>
		<van-col span="11">
		<div @click="goState()" class="xwfh">返回原文</div>
		</van-col>
	</van-row>
	
	<van-row class="b">
		<van-col span="11" offset="1">
			<div class="pzi1">全部评论</div>
		</van-col>
		<van-col class="pzi2" span="11">
			<span >热门</span>
			<span >最新</span>
		</van-col>
	</van-row>
	
	<van-row class="c">
		<van-col span="20" offset="2" class="czi">
			<p>无法获取数据</p>
		</van-col>
	</van-row>
	
	<van-row class="d">
		
		<van-col span="3" offset="1">
			<van-icon name="manager-o" size="1rem"></van-icon>
		</van-col>
		<van-col span="19" class="ff">
			<div class="f">
				<div class="fl">名字</div>
			<div class="fr">
				<van-icon name="like-o" size="0.5rem"></van-icon>
			</div>	
			</div>
			<div class="fzi">爱来不来，安德森看风景</div>
			<div class="ft">4月26日 10:25</div>
		</van-col>
		
	</van-row>
	
	</div>
</template>

<script>
	
	import {Icon} from 'vant'
	
	export default{
		name:'Pinlun',
		data(){
			return{
				psz:[],
				pi:{},
				active:0,
				cative1:0,
				pf:0
			}
		},
		methods:{
			goState(path){
				this.pf==1?this.$router.push({name:'Xianqin2',params:{pi:this.pi,psz:this.psz,active:this.active}}):this.$router.push({name:'Xianqin',params:{pi:this.pi,psz:this.psz,active:this.active,active1:this.active1}})
			}
		},
		created(){
			this.active1 = this.$route.params.active1;
			this.psz = this.$route.params.psz;
			this.pf = this.$route.params.pf;
			this.pi = this.$route.params.pi;
			this.active = this.$route.params.active;
		},
		components:{
			[Icon.name]:Icon
		}
	}
	
</script>

<style lang="less" scoped>
.ff{
	margin-left: 0.2rem;
}
.f{
	overflow: hidden;
}
.fl{
	float:left;
	font-size:0.45rem;
	font-weight: bold;
}
.fr{
	float: right;
}
.fzi{
	margin:0.2rem 0;
	font-size: 0.4rem;
}
.ft{
	font-size: 0.32rem;
	color:#B3B3B3;
}
.man{
	width: 100%;
	position: absolute;
	bottom: 0;
	top: 0;
	left: 0;
	right: 0;
	background-color: #F8F8F8;
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
.zi{
	margin-top:0.2rem;
	font-size:0.7rem;
	color:#485158;
}
.xwfh{
	font-size:0.4rem;
	color:blue;
	text-align: end;
    line-height: 1rem;
}
.xwzi{
	line-height: 1rem;
}
.xw{
	padding-top:1rem;
	background-color: white;
}
.a{
	background-color: white;
}
.b{
	background-color:white;
	margin-top:0.5rem;
}
.c{
	background-color:white;
	width: 100%;
	/*height:60%;*/
	text-align: center;
	padding-top:0.5rem;
}
.czi{
	font-size: 0.64rem;
	font-weight: bold;
    color:#007BFF;
}
.tu{
	text-align: center;
}
.pzi1{
	font-size:0.48rem;
	font-weight: bold;
}
.pzi2{
	text-align: end
}
.pzi2 span{
	margin-left:0.3rem;
	font-size: 0.35rem;
}
p{
	padding:0;
	margin:0;
}
.d{
	padding-top:0.2rem;
	background-color: #fff;
	height:50%;
}
</style>