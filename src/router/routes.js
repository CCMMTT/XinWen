import comroutes from './comroutes.js'

export default [
	
	{
		path:'/shuju',
		name:'Shuju',
		component:comroutes.Shuju
	},
	{
		path:'/',
		name:'Man',
		component:comroutes.Man,
		
		children:[
		{
		path:'/',
		name:'Index',
		component:comroutes.Index
		
		},
		{
		path:'/dz',
		name:'Dz',
		component:comroutes.Dz
		},
		{
		path:'/my',
		name:'My',
		component:comroutes.My
		}
		]
	},
	{
		path:'/xianqin',
		name:'Xianqin',
		component:comroutes.Xianqin
	},
	{
		path:'/fb',
		name:'Fb',
		component:comroutes.Fb
	},
	{
		path:'/pinlun',
		name:'Pinlun',
		component:comroutes.Pinlun
	},
	{
		path:'/login',
		name:'Login',
		component:comroutes.Login
	},
	{
		path:'/reset',
		name:'Reset',
		component:comroutes.Reset
	},
	{
		path:'/zj',
		name:'Zj',
		component:comroutes.Zj
	},
	{
		path:'/sc',
		name:'Sc',
		component:comroutes.Sc
	},
	{
		path:'/xgmi',
		name:'Xgmi',
		component:comroutes.Xgmi
	},
	{
		path:'/xianqin1',
		name:'Xianqin1',
		component:comroutes.Xianqin1
	},
	{
		path:'/xianqin2',
		name:'Xianqin2',
		component:comroutes.Xianqin2
	},
	{
		path:'/ss',
		name:'Ss',
		component:comroutes.Ss
	}
]
