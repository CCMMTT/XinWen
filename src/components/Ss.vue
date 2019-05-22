<template>
	<div class="man">
	
<div class="top">
<div class="topxw">
	<van-icon @click.native="fh()" name="arrow-left" size="0.6rem"></van-icon>
</div>
<div class="topinp">
	<input class="inp" v-model="va"  placeholder="  搜索内容"/>
</div>
<div class="topm">
	<span  @click="ss()" class="topzi">搜索</span>
</div>
</div>

<van-row class="bb" v-if="!tr">
	<van-col span="24">没有搜索到您想要的内容</van-col>
</van-row>


<van-row v-if="tr" class="aa"  v-for="(item,index) in data">
	<van-col span="5" offset="1">
		<img class="img-auto" :src='item.picInfo == undefined ?item.image0==undefined?src:item.image0:item.picInfo[0]==undefined?src:item.picInfo[0].url'>
	</van-col>
	
	<van-col span="18">
		<div>{{item.digest==undefined?item.text:item.digest}}</div>
	</van-col>
	
</van-row>

</div>
</template>

<script>
	
	import {Icon,Dialog} from 'vant'
	
	export default {
		name:'Ss',
		data(){
			return{
				va:'',
				a:[],
				da:[],
				data:[],
				tr:true

			}
		},
		components:{
			[Icon.name]:Icon,
			[Dialog.name]:Dialog
		},
		
		created(){
			var a =JSON.parse(localStorage.getItem('shuju'));
			var b =JSON.parse(localStorage.getItem('DZ'));
			for(var j=0;j<b.length;j++){
            	this.a.unshift(b[j])
           }
			
			for(var key in a){
			var a =JSON.parse(localStorage.getItem('shuju'));
			for(var i=0;i<a[key].length;i++){
				this.a.unshift(a[key][i])
			}
			}
			
			
		},

		
		methods:{
			
			fh(){
				this.$router.push('/')
			},
			ss(){

			if(this.va == ''){
				
				Dialog.alert({
					title: '内容为空',
				})
				
			}else{
				for(var i =0;i<this.a.length;i++){		
				var r =  new RegExp(this.va,'ig')
				if(r.test(this.a[i].digest||this.a[i].name)){
					this.da.unshift(this.a[i]);
					}
				}
				this.va = '';
				var data = JSON.stringify(this.da);
				 if(this.da.length==0){
				 	this.tr = false
				 }else{
				 	this.tr = true;
				 localStorage.setItem('da',data);
				this.da = [];
				this.data = JSON.parse(localStorage.getItem('da'));
				 	
				 }
				
			}
				
             
				
			}
		}
	}
	
	
</script>

<style lang="less" scoped>
.man{
	position: absolute;
	bottom: 0;
	top: 0;
	left: 0;
	right: 0;
	background-color: #ccc;
}
.img-auto{
	width:100%;
	display: block;
	height:1.5rem;
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

.inp{
	width:100%;
	height:1rem;
	margin-top:0.2rem;
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
	line-height: 1.4rem;
	margin-top:0.2rem
}
.topinp{
	float:left;
	width:60%;
	height:1.4rem;
	
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
	font-weight: bold;
	font-size: 0.5rem;
	margin-left:0;
}
.aa{
	background-color: #fff;
	padding:0.3rem 0;
	border-bottom: 1Px solid #bbb;
} 
.bb{
	margin-top:0.5rem;
	font-size:0.5333rem;
	color:#fff;
	text-align: center;
}
</style>