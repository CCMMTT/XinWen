<template>
<div class="man">
	
	<div class="top" ref="search">
<div class="topxw"><h4>新闻</h4></div>
<div class="topinp">
	<input class="inp" @click="ss()" placeholder="  搜索内容"/>
</div>
<div class="topm">
	<van-icon class="topi" size="0.65rem" name="youzan-shield" />
	<span class="topzi">名站</span>
</div>
</div>

<div class="ban">
	<van-swipe :autoplay="3000" >
    <van-swipe-item @click.native="goSta(shuzutu,shuzutu[0],{name: 'Xianqin', params: {psz: shuzutu,pi:shuzutu[0],active1:1}})">
    	<img class="auto-img" :src="shuzutu[0].picInfo[0]==undefined ? src :shuzutu[0].picInfo[0].url">
    </van-swipe-item>
    
    <van-swipe-item @click.native="goSta(sztiyu,sztiyu[1],{name: 'Xianqin', params: {psz: sztiyu,pi:sztiyu[1],active1:3}})">
    	<img class="auto-img" :src="sztiyu[1].picInfo[0]==undefined ? src : sztiyu[1].picInfo[0].url ">
    	
    </van-swipe-item>
     
    <van-swipe-item @click.native="goSta(szkeji,szkeji[0],{name: 'Xianqin', params: {psz: szkeji,pi:szkeji[0],active1:2}})">
    	<img class="auto-img" :src="szkeji[0].picInfo[0]==undefined ? src : szkeji[0].picInfo[0].url">
    	
    </van-swipe-item>
</van-swipe>
</div>

<van-tabs ref="vtabs" class="vtabs" v-model="active1" title-active-color="#1989FA" color="#1989FA" :line-height="2" :swipeable="true" :animated="true">
  <van-tab title="推荐">
  	
  
	
	<div class="bo" @click="goSta(shuzu,item,{name: 'Xianqin', params: {psz: shuzu,pi:item,active1:0}})"  v-for="(item,index) in shuzu.slice(0,3)" >
		<div class="bol">
			<div class="bolz">{{item.digest}}</div>
			<div class="z">
				<div class="zl">{{item.ptime}}</div>
				<div class="zr">{{item.category}}</div>
			</div>
		</div>
		<div class="bor">
			<img class="boaut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>
	
		<van-row>
		<van-col span="12" @click.native="goSta(shuzu,item,{name: 'Xianqin', params: {psz: shuzu,pi:item,active1:0}})"  v-for="(item,index) in shuzu.slice(6)" >
			<van-row class="tu" >
				<van-col span="22"  offset="1">
					<img class="auto-img1" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
				</van-col>
				<van-col class="zi" span="22"  offset="1">
					{{item.title}}.....................
				</van-col>
			</van-row>
		</van-col>
	</van-row>
	
	<div @click="goSta(shuzu,item,{name: 'Xianqin', params: {psz: shuzu,pi:item,active1:0}})"  v-for="(item,index) in shuzu.slice(3,6)" >
		<div class="autz">{{item.title}}................</div>
		<div>
			<img class="aut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>
	
	<div class="bo" @click="goSta(shuzu,item,{name: 'Xianqin', params: {psz: shuzu,pi:item,active1:0}})"  v-for="(item,index) in shuzu.slice(0,3)" >
		<div class="bol">
			<div class="bolz">{{item.digest}}</div>
			<div class="z">
				<div class="zl">{{item.ptime}}</div>
				<div class="zr">{{item.category}}</div>
			</div>
		</div>
		<div class="bor">
			<img class="boaut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>
	
		<van-row>
		<van-col span="12" @click.native="goSta(shuzu,item,{name: 'Xianqin', params: {psz: shuzu,pi:item,active1:0}})"  v-for="(item,index) in shuzu.slice(6)" >
			<van-row class="tu" >
				<van-col span="22"  offset="1">
					<img class="auto-img1" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
				</van-col>
				<van-col class="zi" span="22"  offset="1">
					{{item.title}}.....................
				</van-col>
			</van-row>
		</van-col>
	</van-row>
	
	<div @click="goSta(shuzu,item,{name: 'Xianqin', params: {psz: shuzu,pi:item,active1:0}})"  v-for="(item,index) in shuzu.slice(3,6)" >
		<div class="autz">{{item.title}}................</div>
		<div>
			<img class="aut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>

	
	<div class="buttom">
		<div><span>用户反馈  合作</span></div>
		<p>Copyright © 2019 Sohu All Rights Reserved</p>
		<p>有限新闻 版权所有</p>
	</div>
      
  </van-tab>
  <van-tab title="财经">
  		<van-row>
		<van-col span="12" @click.native="goSta(shuzutu,item,{name: 'Xianqin', params: {psz: shuzutu,pi:item,active1:1}})" v-for="(item,index) in shuzutu" :key="index">
			<van-row class="tu">
				<van-col span="22"  offset="1">
					<img class="auto-img1" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
				</van-col>
				<van-col class="zi" span="22"  offset="1">
					{{item.title}}.............................
				</van-col>
			</van-row>
		</van-col>
	</van-row>
	<van-row class="zi22">
		<van-col class="zi2" @click.native="goSta(shuzutu,item,{name: 'Xianqin', params: {psz: shuzutu,pi:item,active1:1}})" span="22" offset="1" v-for="(item,index) in shuzuzi" :key="index">
			{{item.title}}
		</van-col>
	</van-row>
	
	<div class="bo" @click="goSta(shuzutu,item,{name: 'Xianqin', params: {psz: shuzutu,pi:item,active1:1}})"  v-for="(item,index) in shuzutu" >
		<div class="bol">
			<div class="bolz">{{item.digest}}</div>
			<div class="z">
				<div class="zl">{{item.ptime}}</div>
				<div class="zr">{{item.category}}</div>
			</div>
		</div>
		<div class="bor">
			<img class="boaut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>
	
	
	
	<div @click="goSta(shuzutu,item,{name: 'Xianqin', params: {psz: shuzutu,pi:item,active1:1}})"  v-for="(item,index) in shuzutu" >
		<div class="autz">{{item.title}}................</div>
		<div>
			<img class="aut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>
	
	<van-row class="zi22">
		<van-col class="zi2" @click.native="goSta(shuzutu,item,{name: 'Xianqin', params: {psz: shuzutu,pi:item,active1:1}})" span="22" offset="1" v-for="(item,index) in shuzuzi" :key="index">
			{{item.title}}
		</van-col>
	</van-row>

	
	<div class="buttom2">
		<div><span>用户反馈  合作</span></div>
		<p>Copyright © 2019 Sohu All Rights Reserved</p>
		<p>有限新闻 版权所有</p>
	</div>
  </van-tab>
  <van-tab title="科技">
  	
  <div class="bo" @click="goSta(szkeji,item,{name: 'Xianqin', params: {psz: szkeji,pi:item,active1:2}})"  v-for="(item,index) in szkeji.slice(0,3)" >
		<div class="bol">
			<div class="bolz">{{item.digest}}</div>
			<div class="z">
				<div class="zl">{{item.ptime}}</div>
				<div class="zr">{{item.category}}</div>
			</div>
		</div>
		<div class="bor">
			<img class="boaut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>
	
		<van-row>
		<van-col span="12" @click.native="goSta(szkeji,item,{name: 'Xianqin', params: {psz: szkeji,pi:item,active1:2}})"  v-for="(item,index) in szkeji.slice(6)" >
			<van-row class="tu" >
				<van-col span="22"  offset="1">
					<img class="auto-img1" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
				</van-col>
				<van-col class="zi" span="22"  offset="1">
					{{item.title}}.....................
				</van-col>
			</van-row>
		</van-col>
	</van-row>
	
	<div @click="goSta(szkeji,item,{name: 'Xianqin', params: {psz: szkeji,pi:item,active1:2}})"  v-for="(item,index) in szkeji.slice(3,6)" >
		<div class="autz">{{item.title}}</div>
		<div>
			<img class="aut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>
	<div class="bo" @click="goSta(szkeji,item,{name: 'Xianqin', params: {psz: szkeji,pi:item,active1:2}})"  v-for="(item,index) in szkeji.slice(0,3)" >
		<div class="bol">
			<div class="bolz">{{item.digest}}</div>
			<div class="z">
				<div class="zl">{{item.ptime}}</div>
				<div class="zr">{{item.category}}</div>
			</div>
		</div>
		<div class="bor">
			<img class="boaut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>
	
		<van-row>
		<van-col span="12" @click.native="goSta(szkeji,item,{name: 'Xianqin', params: {psz: szkeji,pi:item,active1:2}})"  v-for="(item,index) in szkeji.slice(6)" >
			<van-row class="tu" >
				<van-col span="22"  offset="1">
					<img class="auto-img1" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
				</van-col>
				<van-col class="zi" span="22"  offset="1">
					{{item.title}}.....................
				</van-col>
			</van-row>
		</van-col>
	</van-row>
	
	<div @click="goSta(szkeji,item,{name: 'Xianqin', params: {psz: szkeji,pi:item,active1:2}})"  v-for="(item,index) in szkeji.slice(3,6)" >
		<div class="autz">{{item.title}}</div>
		<div>
			<img class="aut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>
	
	<div class="buttom">
		<div><span>用户反馈  合作</span></div>
		<p>Copyright © 2019 Sohu All Rights Reserved</p>
		<p>有限新闻 版权所有</p>
	</div>
  	
  </van-tab>
  <van-tab title="体育">
  	
  	<van-row >
		<van-col span="12" @click.native="goSta(sztiyu,item,{name: 'Xianqin', params: {psz: sztiyu,pi:item,active1:3}})"  v-for="(item,index) in sztiyu" :key="index">
			<van-row class="tu">
				<van-col span="22"  offset="1">
					<img class="auto-img1" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
				</van-col>
				<van-col class="zi" span="22"  offset="1">
					{{item.title}}........................
				</van-col>
			</van-row>
		</van-col>
	</van-row>
	
		<div @click="goSta(sztiyu,item,{name: 'Xianqin', params: {psz: sztiyu,pi:item,active1:3}})"  v-for="(item,index) in sztiyu.slice(2,6)" >
		<div class="autz">{{item.title}}</div>
		<div>
			<img class="aut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>
	
	<div class="bo" @click="goSta(sztiyu,item,{name: 'Xianqin', params: {psz: sztiyu,pi:item,active1:3}})"  v-for="(item,index) in sztiyu.slice(0,7)" >
		<div class="bol">
			<div class="bolz">{{item.digest}}...{{item.title}}</div>
			<div class="z">
				<div class="zl">{{item.ptime}}</div>
				<div class="zr">{{item.category}}</div>
			</div>
		</div>
		<div class="bor">
			<img class="boaut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>
	
	<div class="buttom1">
		<div><span>用户反馈  合作</span></div>
		<p>Copyright © 2019 Sohu All Rights Reserved</p>
		<p>有限新闻 版权所有</p>
	</div>
  	
  </van-tab>
  <van-tab title="娱乐">
	
	 <div class="bo" @click="goSta(szyule,item,{name: 'Xianqin', params: {psz: szyule,pi:item,active1:4}})"  v-for="(item,index) in szyule.slice(0,3)" >
		<div class="bol">
			<div class="bolz">{{item.digest}}</div>
			<div class="z">
				<div class="zl">{{item.ptime}}</div>
				<div class="zr">{{item.category}}</div>
			</div>
		</div>
		<div class="bor">
			<img class="boaut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>
	
		<van-row>
		<van-col span="12" @click.native="goSta(szyule,item,{name: 'Xianqin', params: {psz: szyule,pi:item,active1:4}})"  v-for="(item,index) in szyule.slice(6)" >
			<van-row class="tu" >
				<van-col span="22"  offset="1">
					<img class="auto-img1" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
				</van-col>
				<van-col class="zi" span="22"  offset="1">
					{{item.title}}.....................
				</van-col>
			</van-row>
		</van-col>
	</van-row>
	
	<div @click="goSta(szyule,item,{name: 'Xianqin', params: {psz: szyule,pi:item,active1:4}})"  v-for="(item,index) in szyule.slice(3,6)" >
	<div class="autz">{{item.title}}................</div>
		<div>
			<img class="aut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>
	
	<div class="bo" @click="goSta(szyule,item,{name: 'Xianqin', params: {psz: szyule,pi:item,active1:4}})"  v-for="(item,index) in szyule.slice(0,3)" >
		<div class="bol">
			<div class="bolz">{{item.digest}}</div>
			<div class="z">
				<div class="zl">{{item.ptime}}</div>
				<div class="zr">{{item.category}}</div>
			</div>
		</div>
		<div class="bor">
			<img class="boaut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>
	
		<van-row>
		<van-col span="12" @click.native="goSta(szyule,item,{name: 'Xianqin', params: {psz: szyule,pi:item,active1:4}})"  v-for="(item,index) in szyule.slice(6)" >
			<van-row class="tu" >
				<van-col span="22"  offset="1">
					<img class="auto-img1" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
				</van-col>
				<van-col class="zi" span="22"  offset="1">
					{{item.title}}.....................
				</van-col>
			</van-row>
		</van-col>
	</van-row>
	
	<div @click="goSta(szyule,item,{name: 'Xianqin', params: {psz: szyule,pi:item,active1:4}})"  v-for="(item,index) in szyule.slice(3,6)" >
		<div class="autz">{{item.title}}................</div>
		<div>
			<img class="aut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>
	
	<div class="buttom">
		<div><span>用户反馈  合作</span></div>
		<p>Copyright © 2019 Sohu All Rights Reserved</p>
		<p>有限新闻 版权所有</p>
	</div>
  	
  </van-tab>
  <van-tab title="新闻">
  
  <van-row >
		<van-col span="12" @click.native="goSta(szxinwen,item,{name: 'Xianqin', params: {psz: szxinwen,pi:item,active1:5}})"  v-for="(item,index) in szxinwen.slice(0,7)" >
			<van-row class="tu">
				<van-col span="22"  offset="1">
					<img class="auto-img1" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
				</van-col>
				<van-col class="zi" span="22"  offset="1">
					{{item.title}}...................................
				</van-col>
			</van-row>
		</van-col>
		
				<van-col span="12" @click.native="goSta(szxinwen,item,{name: 'Xianqin', params: {psz: szxinwen,pi:item,active1:5}})"  v-for="(item,index) in szxinwen.slice(0,7)" >
			<van-row class="tu">
				<van-col span="22"  offset="1">
					<img class="auto-img1" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
				</van-col>
				<van-col class="zi" span="22"  offset="1">
					{{item.title}}...................................
				</van-col>
			</van-row>
		</van-col>
		
	</van-row>
	
	<div class="bo" @click="goSta(szxinwen,item,{name: 'Xianqin', params: {psz: szxinwen,pi:item,active1:5}})"  v-for="(item,index) in szxinwen.slice(0,7)" >
		<div class="bol">
			<div class="bolz">{{item.digest}}...{{item.title}}</div>
			<div class="z">
				<div class="zl">{{item.ptime}}</div>
				<div class="zr">{{item.category}}</div>
			</div>
		</div>
		<div class="bor">
			<img class="boaut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>
	
	<div @click="goSta(szxinwen,item,{name: 'Xianqin', params: {psz: szxinwen,pi:item,active1:5}})"  v-for="(item,index) in szxinwen.slice(0,4)" >
		<div class="autz">{{item.title}}................</div>
		<div>
			<img class="aut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>


	
	<div class="buttom3">
		<div><span>用户反馈  合作</span></div>
		<p>Copyright © 2019 Sohu All Rights Reserved</p>
		<p>有限新闻 版权所有</p>
	</div>
  
  </van-tab>
  <van-tab title="社会">
	
	 <div class="bo" @click="goSta(szshehui,item,{name: 'Xianqin', params: {psz: szshehui,pi:item,active1:6}})"  v-for="(item,index) in szshehui.slice(0,3)" >
		<div class="bol">
			<div class="bolz">{{item.digest}}</div>
			<div class="z">
				<div class="zl">{{item.ptime}}</div>
				<div class="zr">{{item.category}}</div>
			</div>
		</div>
		<div class="bor">
			<img class="boaut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>
	
		<van-row>
		<van-col span="12" @click.native="goSta(szshehui,item,{name: 'Xianqin', params: {psz: szshehui,pi:item,active1:6}})"  v-for="(item,index) in szshehui.slice(6)" >
			<van-row class="tu" >
				<van-col span="22"  offset="1">
					<img class="auto-img1" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
				</van-col>
				<van-col class="zi" span="22"  offset="1">
					{{item.title}}.....................
				</van-col>
			</van-row>
		</van-col>
	</van-row>
	
	<div @click="goSta(szshehui,item,{name: 'Xianqin', params: {psz: szshehui,pi:item,active1:6}})"  v-for="(item,index) in szshehui.slice(3,6)" >
		<div class="autz">{{item.title}}................</div>
		<div>
			<img class="aut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>
	
	 <div class="bo" @click="goSta(szshehui,item,{name: 'Xianqin', params: {psz: szshehui,pi:item,active1:6}})"  v-for="(item,index) in szshehui.slice(0,3)" >
		<div class="bol">
			<div class="bolz">{{item.digest}}</div>
			<div class="z">
				<div class="zl">{{item.ptime}}</div>
				<div class="zr">{{item.category}}</div>
			</div>
		</div>
		<div class="bor">
			<img class="boaut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>
	
		<van-row>
		<van-col span="12" @click.native="goSta(szshehui,item,{name: 'Xianqin', params: {psz: szshehui,pi:item,active1:6}})"  v-for="(item,index) in szshehui.slice(6)" >
			<van-row class="tu" >
				<van-col span="22"  offset="1">
					<img class="auto-img1" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
				</van-col>
				<van-col class="zi" span="22"  offset="1">
					{{item.title}}.....................
				</van-col>
			</van-row>
		</van-col>
	</van-row>
	
	<div @click="goSta(szshehui,item,{name: 'Xianqin', params: {psz: szshehui,pi:item,active1:6}})"  v-for="(item,index) in szshehui.slice(3,6)" >
		<div class="autz">{{item.title}}................</div>
		<div>
			<img class="aut" :src="item.picInfo[0] == undefined ? src : item.picInfo[0].url">
		</div>
	</div>
	
	
	
	<div class="buttom">
		<div><span>用户反馈  合作</span></div>
		<p>Copyright © 2019 Sohu All Rights Reserved</p>
		<p>有限新闻 版权所有</p>
	</div>
  	
  </van-tab>
  
</van-tabs>


	
</div>


</template>

<script>
import { Icon } from 'vant'
import { Search, Swipe, SwipeItem, Tab, Tabs } from 'vant'

export default {
  name: 'Index',
  data(){
  	return{
		active: 0,
		active1:0,
  		shuzu:[],
		szkeji:[],
		shuzutu:[],
		shuzuzi:[],
		sztityu:[],
		szyule:[],
		szxinwen:[],
		szshehui:[],
		pi:{},
		psz:[],
        src:'http://cms-bucket.ws.126.net/2019/04/21/3ba0abd74a6a4ecdb37d14ee6f8d3825.png'
    
 
  	}
  },
  mounted() {
			var search = this.$refs.search;
			var searchHeight = getComputedStyle(search).height;
			this.offsetTop = parseFloat(searchHeight)
			var vtabs = this.$refs.vtabs.$el.firstChild;
			vtabs.style.position = 'sticky';
			vtabs.style.top = searchHeight;
		},
  
  created(){
	    this.axios({
			methods:'GET',	
			url:'https://www.apiopen.top/journalismApi',	
			}).then(result=>{
			console.log('adf',result)
			localStorage.setItem('shuju',JSON.stringify(result.data.data));
			})
			
			this.axios({
			methods:'GET',	
			url:'https://www.apiopen.top/satinApi?type=1&page=1',	
			}).then(result=>{	
			if(localStorage.getItem('DZ')){
			}else{
				console.log('df',result)
				localStorage.setItem('DZ',JSON.stringify(result.data.data));
			}
			})

				this.axios({
			methods:'GET',	
			url:'https://novel.juhe.im/recommend/599256eac63ef77f013b6b57',	
			}).then(result=>{	
		console.log('asdf',result)
			})
  	     
  	    //  console.log(localStorage.getItem('shuju'));
  	    //  console.log(localStorage.getItem('DZ'))
  	     
  	    this.active = this.$route.params.active;
  	     this.active1 = this.$route.params.active1;
  	    //登录状态
			var userLogin = localStorage.getItem('userLogin');
			this.userLoginStatus = userLogin == undefined ? null : JSON.parse(userLogin);
      
		var a=JSON.parse(localStorage.getItem('shuju')).dy;
		var b=JSON.parse(localStorage.getItem('shuju')).money;
		var c=JSON.parse(localStorage.getItem('shuju')).tech;
		var d=JSON.parse(localStorage.getItem('shuju')).sports;
		var f=JSON.parse(localStorage.getItem('shuju')).ent;
		var g=JSON.parse(localStorage.getItem('shuju')).war;
		var e=JSON.parse(localStorage.getItem('shuju')).auto;
		this.shuzu = a;
		this.shuzutu = b.slice(0,4);
		this.shuzuzi = b.slice(4);
		this.szkeji=c;
		this.sztiyu=d;
		this.szyule = f;
		this.szxinwen = g;
		this.szshehui=e;	
		},
		
  components:{
  	[Icon.name]:Icon,
  	[Swipe.name]:Swipe,
  	[SwipeItem.name]:SwipeItem,
  	[Tab.name]:Tab,
  	[Tabs.name]:Tabs,
  	[Search.name]:Search
  	
  },

  
  methods:{
  	goSta(psz,item,path){
  		this.$router.push(path);

         this.pi = item;
         this.psz = psz;
          if (!this.userLoginStatus) {

    		} else if (this.userLoginStatus.loginStatus) {
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
  	},
  	
  	ss(){
  		this.$router.push({name:'Ss'})
  	}
  }

}
</script>


<style lang="less" scoped>
.z{
	overflow: hidden;
	margin-top:0.45rem;
}
.zl{
	float: left;
	font-size: 0.3rem;
}
.zr{
	float: right;
	font-size: 0.3rem;
}
.boaut{
	width:90%;
	height:2.5rem;
	display: block;
	margin:0 auto;
}

.bo{
	overflow: hidden;
	padding:0.3rem 0 0.2rem 0;
	border-top:1Px solid #f4f4f4;
}
.bol{
	float: left;
	width:61%;
	margin:0 2%;
	font-size: 0.5rem;
	
}
.bolz{
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}
.bor{
	float: right;
	width:35%;
	text-align: center;
}
.autz{
	margin:0 5% 0 5%;
	font-size: 0.5rem;
	padding:0.4rem 0 .2rem 0;
	border-top:1Px solid #f4f4f4;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	
}
.aut{
	margin:0 2% 0 2%;
	width:96%;
	display: block;
	height:5rem;
	margin-bottom: 0.2rem;
}
.auto-img{
	width: 100%;
	display: block;
	height:5.0rem;
}
.auto-img1{
	width: 100%;
	display: block;
	height:3rem;
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
	color:#fff;
	text-align: center;
	font-size: 0.5333rem;
	line-height: 1.4rem;
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

.ban{
	width:100%;
	height:5.0rem;
}
.tu{
	margin-top:0.2rem;
}
.zi{
	margin-top:0.1rem;
	font-size: 0.4266rem;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	
	margin-bottom:0.2rem;
}
.zi22{
	margin-top:0.5rem;
}
.zi2{
	font-size:0.45rem;
	padding-top:0.3rem;
	padding-bottom: 0.2rem;
	border-bottom: 1Px solid #ccc;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-bottom:0.3rem;
}
.buttom{
	margin-top:1rem;
	width:100%;
	padding:0.8rem;
	text-align: center;
	background-color: #ddd;
	box-sizing: border-box;
	font-size:0.4266rem;
}
.buttom2{
	width:100%;
	padding:0.8rem;
	text-align: center;
	background-color: #ddd;
	box-sizing: border-box;
	margin-top:7.6rem;
	font-size:0.4266rem;
}
.buttom1{
	width:100%;
	padding:0.8rem;
	text-align: center;
	background-color: #ddd;
	box-sizing: border-box;
	margin-top:1.5rem;
	font-size:0.4266rem;
}
.buttom3{
	width:100%;
	padding:0.8rem;
	text-align: center;
	background-color: #ddd;
	box-sizing: border-box;
	margin-top:3.1rem;
	font-size:0.4266rem;
}
.vtabs{
		padding-top: 0;
	}
</style>
