(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chujiezhe/add-or-update"],{"13fb":function(e,t,i){"use strict";i.r(t);var n=i("a94e"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"2b1d":function(e,t,i){"use strict";var n,r=function(){var e=this,t=e.$createElement,i=(e._self._c,e.ruleForm.touxiang.split(","));e.$mp.data=Object.assign({},{$root:{g0:i}})},a=[];i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}))},"748f":function(e,t,i){},8914:function(e,t,i){"use strict";i.r(t);var n=i("2b1d"),r=i("13fb");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("f13c");var u,s=i("f0c5"),o=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"4728569a",null,!1,n["a"],u);t["default"]=o.exports},a60b:function(e,t,i){"use strict";(function(e){i("6cdc"),i("921b");n(i("66fd"));var t=n(i("8914"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("543d")["createPage"])},a94e:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,i,n,r,a,u){try{var s=e[a](u),o=s.value}catch(c){return void i(c)}s.done?t(o):Promise.resolve(o).then(n,r)}function u(e){return function(){var t=this,i=arguments;return new Promise((function(n,r){var u=e.apply(t,i);function s(e){a(u,n,r,s,o,"next",e)}function o(e){a(u,n,r,s,o,"throw",e)}s(void 0)}))}}var s=function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"e2b1"))},o=function(){return i.e("components/xia-editor/xia-editor").then(i.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{chujiezhanghao:"",mima:"",chujiexingming:"",touxiang:"",xingbie:"",shoujihaoma:"",shidejine:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{chujiezhanghao:!1,mima:!1,chujiexingming:!1,touxiang:!1,xingbie:!1,shoujihaoma:!1,shidejine:!1}}},components:{wPicker:s,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=u(n.default.mark((function t(i){var r,a,u,s;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(a=t.sent,this.user=a.data,this.ro.shidejine=!0,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=e.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!i.id){t.next=15;break}return this.ruleForm.id=i.id,t.next=13,this.$api.info("chujiezhe",this.ruleForm.id);case 13:a=t.sent,this.ruleForm=a.data;case 15:if(this.cross=i.cross,!i.cross){t.next=51;break}u=e.getStorageSync("crossObj"),t.t0=n.default.keys(u);case 19:if((t.t1=t.t0()).done){t.next=51;break}if(s=t.t1.value,"chujiezhanghao"!=s){t.next=25;break}return this.ruleForm.chujiezhanghao=u[s],this.ro.chujiezhanghao=!0,t.abrupt("continue",19);case 25:if("mima"!=s){t.next=29;break}return this.ruleForm.mima=u[s],this.ro.mima=!0,t.abrupt("continue",19);case 29:if("chujiexingming"!=s){t.next=33;break}return this.ruleForm.chujiexingming=u[s],this.ro.chujiexingming=!0,t.abrupt("continue",19);case 33:if("touxiang"!=s){t.next=37;break}return this.ruleForm.touxiang=u[s].split(",")[0],this.ro.touxiang=!0,t.abrupt("continue",19);case 37:if("xingbie"!=s){t.next=41;break}return this.ruleForm.xingbie=u[s],this.ro.xingbie=!0,t.abrupt("continue",19);case 41:if("shoujihaoma"!=s){t.next=45;break}return this.ruleForm.shoujihaoma=u[s],this.ro.shoujihaoma=!0,t.abrupt("continue",19);case 45:if("shidejine"!=s){t.next=49;break}return this.ruleForm.shidejine=u[s],this.ro.shidejine=!0,t.abrupt("continue",19);case 49:t.next=19;break;case 51:this.styleChange();case 52:case"end":return t.stop()}}),t,this)})));function i(e){return t.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.touxiang="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=u(n.default.mark((function t(){var i,r,a,u,s,o,c,h,l,f;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.ruleForm.shoujihaoma||this.$validate.isMobile(this.ruleForm.shoujihaoma)){t.next=3;break}return this.$utils.msg("手机号码应输入手机格式"),t.abrupt("return");case 3:if(!this.ruleForm.shidejine||this.$validate.isIntNumer(this.ruleForm.shidejine)){t.next=6;break}return this.$utils.msg("实得金额应输入整数"),t.abrupt("return");case 6:if(!this.cross){t.next=22;break}if(s=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==s){t.next=22;break}if(i||(i=e.getStorageSync("crossObj")),s.startsWith("[")){t.next=18;break}for(c in i)c==s&&(i[c]=o);return h=e.getStorageSync("crossTable"),t.next=16,this.$api.update("".concat(h),i);case 16:t.next=22;break;case 18:r=Number(e.getStorageSync("userid")),a=i["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 22:if(!a||!r){t.next=44;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=a,l={page:1,limit:10,crossuserid:r,crossrefid:a},t.next=28,this.$api.list("chujiezhe",l);case 28:if(f=t.sent,!(f.data.total>=u)){t.next=34;break}return this.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 34:if(!this.ruleForm.id){t.next=39;break}return t.next=37,this.$api.update("chujiezhe",this.ruleForm);case 37:t.next=41;break;case 39:return t.next=41,this.$api.add("chujiezhe",this.ruleForm);case 41:this.$utils.msgBack("提交成功");case 42:t.next=52;break;case 44:if(!this.ruleForm.id){t.next=49;break}return t.next=47,this.$api.update("chujiezhe",this.ruleForm);case 47:t.next=51;break;case 49:return t.next=51,this.$api.add("chujiezhe",this.ruleForm);case 51:this.$utils.msgBack("提交成功");case 52:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,i=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),n=n>9?n:"0"+n,r=r>9?r:"0"+r,"".concat(i,"-").concat(n,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,i("543d")["default"])},f13c:function(e,t,i){"use strict";var n=i("748f"),r=i.n(n);r.a}},[["a60b","common/runtime","common/vendor"]]]);