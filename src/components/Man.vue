<template>
	<div class="man">
		<div>
			<!-- 二级路由 -->
			<router-view></router-view>
		</div>

<van-tabbar v-model="active">
  <van-tabbar-item fixed="true" v-for="(item,index) in tabs" :icon="item.icon" @click="goSta(item.path)" :key="index">{{item.title}}</van-tabbar-item >

</van-tabbar>
</div>
</template>

<script>
	
	import { Tabbar, TabbarItem } from 'vant'

	export default {
		name:'Man',
		 data() {
    		return {
      			active: 0,
      			tabs: [
					{title: '首页', icon: 'home-o', path: {name: 'Index',params:{active:0}}},
					{title: '热门段子', icon: 'fire-o', path:{name: 'Dz',params:{active:1}}},
					{title: '我的', icon: 'manager-o', path: {name: 'My',params:{active:2}}}
				]
    		}
  		},
  		methods:{
  			goSta(path){
  				this.$router.push(path)
  			}
  		},
		components:{
			[Tabbar.name]:Tabbar,
			[TabbarItem.name]:TabbarItem
		},
		created(){
			this.active = this.$route.params.active;
		}
	}
	
</script>

<style lang="less" scoped>
   .man{
   	padding-margin:1.3333rem;
   }
	
</style>