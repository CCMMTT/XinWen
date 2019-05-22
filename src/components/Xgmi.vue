<template>
	<div class="man">
	  <van-row class="top">
	  	<van-col span="2" offset="1" @click.native="goState({name:'My',params:{active:active}})">
	  		<van-icon class="i" name="arrow-left" color="white" size="0.6rem"></van-icon>
	  	</van-col>
	  <van-col  span="20">
	  	<div class="topzi">修改密码</div>
	  </van-col>
	  </van-row>
	  
	  <van-row>
	  	<van-col span="24" >
	  		<van-cell-group>
  			<van-field :type="pad1" :disabled="dis" label="旧密码" v-model="value1"  @click-right-icon="ii1()" :right-icon="i1" placeholder="请输入旧密码" />
			</van-cell-group>
	  	</van-col>

	  	</van-row>
	  	
	  <van-row>
	  	<van-col span="24" >
	  		<van-cell-group>
  			<van-field :type="pad2" :disabled="dis" label="新密码" v-model="value2" @click-right-icon="ii2()" :right-icon="i2" placeholder="请输入新密码" />
			</van-cell-group>
	  	</van-col>
	    </van-row>
	    <van-row>
	  	<van-col span="24" >
	  		<van-cell-group>
  			<van-field :type="pad3" :disabled="dis" label="确认密码" v-model="value3" @click-right-icon="ii3()" :right-icon="i3" placeholder="确认密码" />
			</van-cell-group>
	  	</van-col>
	  </van-row>
	  
	  <van-row>
	  	<van-col span="24" class="bt"> 
	  	<van-button @click.native="tj()" :disabled="dis" type="primary">提交</van-button>
	  	</van-col>
	  </van-row>
	  
	</div>
</template>

<script>
	import {Icon,Field,Button,CellGroup,Dialog} from 'vant'
	import ges from '../gg/ges.js'
	
	export default{
		name:'Xgmi',
		
		data(){
			return{
				active:0,
				value1:'',
				value2:'',
				value3:'',
				data:[],
				dis:true,
				i1:'eye-o',
				i2:'eye-o',
				i3:'eye-o',
				iis1:true,
				iis2:true,
				iis3:true,
				pad1:'password',
				pad2:'password',
				pad3:'password'
			}
		},
		created(){
			//登录状态
			var userLogin = localStorage.getItem('userLogin');
			this.userLoginStatus = userLogin == undefined ? null : JSON.parse(userLogin);
			
			this.active = this.$route.params.active;
			 if (!this.userLoginStatus) {
			 	Dialog.alert({
						title: '请登录账号',
					})
			 }else if (this.userLoginStatus.loginStatus) {
			 	this.dis = false
			 }
			
		},
		components:{
			[Icon.name]:Icon,
			[Field.name]:Field,
			[Button.name]:Button,
			[CellGroup.name]:CellGroup,
			[Dialog.name]:Dialog
		},
		methods:{
			//文本类型
			ii1(){
				if(this.iis1){
					this.i1='eye'
					this.pad1=''
					this.iis1 = !this.iis1
				}else{
					this.i1="eye-o"
					this.pad1='password'
					this.iis1 = !this.iis1
				}
			},
			ii2(){
				if(this.iis2){
					this.i2='eye'
					this.pad2=''
					this.iis2 = !this.iis2
				}else{
					this.i2="eye-o"
					this.pad2='password'
					this.iis2 = !this.iis2
				}
			},
			ii3(){
				if(this.iis3){
					this.i3='eye'
					this.pad3=''
					this.iis3 = !this.iis3
				}else{
					this.i3="eye-o"
					this.pad3='password'
					this.iis = !this.iis
				}
			},
			
			//返回
			goState(path){
				this.$router.push(path)
			},
			
			//提交
			tj(){
				 this.data=[];
				var a = JSON.parse(localStorage.getItem('users'));
				var b = JSON.parse(localStorage.getItem('userLogin')).userId;

				for(var i = 0 ; i < a.length; i++){    
                if(a[i].phone==b){
                	if(this.value1 != "" && this.value2 != "" && this.value3 != ""){
                	if(a[i].pwd == this.value1){
                		console.log("一样")
                		if(ges.gesPwd(this.value2,8,16) ){
                			console.log('过')
                			if(ges.gesis(this.value2,this.value3)){
                				for(var j = 0;j<a.length;j++){	
                					if(a[j].phone==b){
									console.log('cc',a[j]);
									var c = {
										phone:a[j].phone,
										pwd:this.value3,
										retime:a[j].retime,
										uid:a[j].uid
									}
									this.data.unshift(c)
								}else{
									var c = {
										phone:a[j].phone,
										pwd:a[j].pwd,
										retime:a[j].retime,
										uid:a[j].uid
									}
									this.data.unshift(c)
								}
                				}
                				var data = JSON.stringify(this.data);
				               localStorage.setItem('users',data)
                			   console.log(this.data)
                			
                				
                				Dialog.alert({
								    title: '修改成功',
								})
                				console.log("成功")
                				this.value1='';
                				this.value2='';
                				this.value3='';
                				this.data=[];
                				localStorage.removeItem('userLogin');
                				this.$router.push({name:'Login',params:{uname:0}});
                				
                			}else{
                				console.log("密码不一致")
                				Dialog.alert({
								    title: '俩次密码不一致',
								})
                				
                			}
                			
                		}else{
                			console.log("新密码8-16位")
                			Dialog.alert({
								title: '密码8-16位',
							})
                			
                		}
                		
                		
                	}else{
                		console.log("与原密码不一致")
                		Dialog.alert({
							title: '与原密码不一致',
						})
                		
                	}
                	
                }else{
                	console.log("请填写完毕")
                	Dialog.alert({
						title: '请填写完毕',
					})
                	
                }

			}
    	}
    	},
    		
			
		}
	}
</script>

<style lang="less" scoped="">
.man{
	position: absolute;
	bottom: 0;
	top: 0;
	left: 0;
	right: 0;
	background-color:#ccc ;
}
	.top{
	width:100%;
	text-align: center;
	line-height: 1.4rem;
	height:1.4rem;
	background-color: #FFDD00;
}
.topzi{
	font-size: 0.5333rem;
}
.i{
	margin-top:0.5rem;
}
.bt{
	background-color: #fff;
	text-align: center;
	padding:1rem 0 1rem 0;
}
</style>