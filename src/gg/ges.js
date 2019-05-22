export default{
	//账号
	gesPhone(value){
		return /^1[3456789]\d{9}$/.test(value);
	},
    //密码
	gesPwd(value,min,max) {	
		return new RegExp('^[!@\\.\\w]{'+ min +',' + max + '}$').test(value);
	},
	//确认密码
	gesis(v1,v2){
		return Object.is(v1,v2);
	},
	//验证码
	gestime(){
		var time = new Date().getTime().toString().substr(-3,3);
		var random = Math.random().toString().substr(-3,3);
		return time.concat(random);
	}
	
}