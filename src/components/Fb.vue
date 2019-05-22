<template>
	<div class="man">
	<van-row class="fb">
	<van-col span="3" offset="1">
		<van-icon name="comment" size="1rem"></van-icon>
	</van-col>
	<van-col span="19">
		<textarea class="tex" value="我来说俩句"></textarea>
	</van-col>
	</van-row>
	
	<van-row>
		<van-col span="8" offset="16">
			<div @click="goStat()" class="s">取消</div>
			<div class="s" @click="fb()">发布</div>
		</van-col>
	</van-row>
	</div>
</template>

<script>
	import {Icon,Dialog} from 'vant'
	
	export default{
		name:'Fb',
		data(){
			return{
				psz:[],
				pi:{},
				active:0,
				active1:0,
				pf:0
			}
		},
		methods:{
			goStat(){
			this.pf==1?this.$router.push({name:'Xianqin2',params:{pi:this.pi,psz:this.psz,active:this.active,active1:this.active1}}):this.$router.push({name:'Xianqin',params:{pi:this.pi,psz:this.psz,active:this.active,active1:this.active1}})
			},
			fb(){
				Dialog.alert({
					title: '缺少数据',
					})
			}
		},
		created(){
			this.psz = this.$route.params.psz;
			this.active1 = this.$route.params.active1;
			this.pf = this.$route.params.pf;
			this.pi = this.$route.params.pi;
		    this.active = this.$route.params.active;
		},
		
		components:{
			[Icon.name]:Icon,
			[Dialog.name]:Dialog
		}
		
	}
</script>

<style lang="less" scoped>
.fb{
	margin-top:0.3rem;
}
.man{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
	background-color: #F2F2F2;
}
.tex{
	width: 100%;
	height:3.6rem;
	resize:none;
	overflow:scroll;
	overflow-y:hidden;
}
.s{
	width:1rem;
	height:0.7rem;
	text-align: center;
	line-height: 0.7rem;
	margin-left:0.3rem;
	display: inline-block;
	border: 1Px solid #aaa;
	background-color: #F9F2E3;
	color:#bbb;
}
</style>