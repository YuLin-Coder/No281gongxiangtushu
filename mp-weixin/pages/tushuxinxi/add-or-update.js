(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tushuxinxi/add-or-update"],{"1eee":function(e,t,i){"use strict";var n={"xia-editor":()=>i.e("components/xia-editor/xia-editor").then(i.bind(null,"064f")),"w-picker":()=>Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"e2b1"))},r=function(){var e=this,t=e.$createElement,i=(e._self._c,e.ruleForm.fengmian.split(","));e.$mp.data=Object.assign({},{$root:{g0:i}})},u=[];i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return u})),i.d(t,"a",(function(){return n}))},2734:function(e,t,i){"use strict";var n=i("bb26"),r=i.n(n);r.a},4488:function(e,t,i){"use strict";i.r(t);var n=i("b791"),r=i.n(n);for(var u in n)"default"!==u&&function(e){i.d(t,e,(function(){return n[e]}))}(u);t["default"]=r.a},7110:function(e,t,i){"use strict";i.r(t);var n=i("1eee"),r=i("4488");for(var u in r)"default"!==u&&function(e){i.d(t,e,(function(){return r[e]}))}(u);i("2734");var a,s=i("f0c5"),o=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"7a4507ec",null,!1,n["a"],a);t["default"]=o.exports},ade6:function(e,t,i){"use strict";(function(e){i("6cdc"),i("921b");n(i("66fd"));var t=n(i("7110"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("543d")["createPage"])},b791:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,i,n,r,u,a){try{var s=e[u](a),o=s.value}catch(c){return void i(c)}s.done?t(o):Promise.resolve(o).then(n,r)}function a(e){return function(){var t=this,i=arguments;return new Promise((function(n,r){var a=e.apply(t,i);function s(e){u(a,n,r,s,o,"next",e)}function o(e){u(a,n,r,s,o,"throw",e)}s(void 0)}))}}var s=function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"e2b1"))},o=function(){return i.e("components/xia-editor/xia-editor").then(i.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{tushubianhao:"",tushumingcheng:"",fengmian:"",tushufenlei:"",shuliang:"",meirifeiyong:"",yajin:"",zuozhe:"",chubanshe:"",jianjie:"",xiangxijieshao:"",chujiezhanghao:"",chujiexingming:""},tushufenleiOptions:[],tushufenleiIndex:0,user:{},ro:{tushubianhao:!1,tushumingcheng:!1,fengmian:!1,tushufenlei:!1,shuliang:!1,meirifeiyong:!1,yajin:!1,zuozhe:!1,chubanshe:!1,jianjie:!1,xiangxijieshao:!1,chujiezhanghao:!1,chujiexingming:!1,thumbsupnum:!1,crazilynum:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:s,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=a(n.default.mark((function t(i){var r,u,a,s;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:return u=t.sent,this.user=u.data,this.ruleForm.chujiezhanghao=this.user.chujiezhanghao,this.ro.chujiezhanghao=!0,this.ruleForm.chujiexingming=this.user.chujiexingming,this.ro.chujiexingming=!0,t.next=11,this.$api.option("tushufenlei","tushufenlei",{});case 11:if(u=t.sent,this.tushufenleiOptions=u.data,this.tushufenleiOptions.unshift("请选择图书分类"),this.ruleForm.userid=e.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!i.id){t.next=22;break}return this.ruleForm.id=i.id,t.next=20,this.$api.info("tushuxinxi",this.ruleForm.id);case 20:u=t.sent,this.ruleForm=u.data;case 22:if(this.cross=i.cross,!i.cross){t.next=98;break}a=e.getStorageSync("crossObj"),t.t0=n.default.keys(a);case 26:if((t.t1=t.t0()).done){t.next=98;break}if(s=t.t1.value,"tushubianhao"!=s){t.next=32;break}return this.ruleForm.tushubianhao=a[s],this.ro.tushubianhao=!0,t.abrupt("continue",26);case 32:if("tushumingcheng"!=s){t.next=36;break}return this.ruleForm.tushumingcheng=a[s],this.ro.tushumingcheng=!0,t.abrupt("continue",26);case 36:if("fengmian"!=s){t.next=40;break}return this.ruleForm.fengmian=a[s].split(",")[0],this.ro.fengmian=!0,t.abrupt("continue",26);case 40:if("tushufenlei"!=s){t.next=44;break}return this.ruleForm.tushufenlei=a[s],this.ro.tushufenlei=!0,t.abrupt("continue",26);case 44:if("shuliang"!=s){t.next=48;break}return this.ruleForm.shuliang=a[s],this.ro.shuliang=!0,t.abrupt("continue",26);case 48:if("meirifeiyong"!=s){t.next=52;break}return this.ruleForm.meirifeiyong=a[s],this.ro.meirifeiyong=!0,t.abrupt("continue",26);case 52:if("yajin"!=s){t.next=56;break}return this.ruleForm.yajin=a[s],this.ro.yajin=!0,t.abrupt("continue",26);case 56:if("zuozhe"!=s){t.next=60;break}return this.ruleForm.zuozhe=a[s],this.ro.zuozhe=!0,t.abrupt("continue",26);case 60:if("chubanshe"!=s){t.next=64;break}return this.ruleForm.chubanshe=a[s],this.ro.chubanshe=!0,t.abrupt("continue",26);case 64:if("jianjie"!=s){t.next=68;break}return this.ruleForm.jianjie=a[s],this.ro.jianjie=!0,t.abrupt("continue",26);case 68:if("xiangxijieshao"!=s){t.next=72;break}return this.ruleForm.xiangxijieshao=a[s],this.ro.xiangxijieshao=!0,t.abrupt("continue",26);case 72:if("chujiezhanghao"!=s){t.next=76;break}return this.ruleForm.chujiezhanghao=a[s],this.ro.chujiezhanghao=!0,t.abrupt("continue",26);case 76:if("chujiexingming"!=s){t.next=80;break}return this.ruleForm.chujiexingming=a[s],this.ro.chujiexingming=!0,t.abrupt("continue",26);case 80:if("thumbsupnum"!=s){t.next=84;break}return this.ruleForm.thumbsupnum=a[s],this.ro.thumbsupnum=!0,t.abrupt("continue",26);case 84:if("crazilynum"!=s){t.next=88;break}return this.ruleForm.crazilynum=a[s],this.ro.crazilynum=!0,t.abrupt("continue",26);case 88:if("clicktime"!=s){t.next=92;break}return this.ruleForm.clicktime=a[s],this.ro.clicktime=!0,t.abrupt("continue",26);case 92:if("clicknum"!=s){t.next=96;break}return this.ruleForm.clicknum=a[s],this.ro.clicknum=!0,t.abrupt("continue",26);case 96:t.next=26;break;case 98:this.styleChange();case 99:case"end":return t.stop()}}),t,this)})));function i(e){return t.apply(this,arguments)}return i}(),methods:{xiangxijieshaoChange:function(e){this.ruleForm.xiangxijieshao=e},styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},tushufenleiChange:function(e){this.tushufenleiIndex=e.target.value,this.ruleForm.tushufenlei=this.tushufenleiOptions[this.tushufenleiIndex]},fengmianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.fengmian="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=a(n.default.mark((function t(){var i,r,u,a,s,o,c,h,l,m;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.tushumingcheng){t.next=3;break}return this.$utils.msg("图书名称不能为空"),t.abrupt("return");case 3:if(this.ruleForm.fengmian){t.next=6;break}return this.$utils.msg("封面不能为空"),t.abrupt("return");case 6:if(!this.ruleForm.shuliang||this.$validate.isIntNumer(this.ruleForm.shuliang)){t.next=9;break}return this.$utils.msg("数量应输入整数"),t.abrupt("return");case 9:if(!this.ruleForm.meirifeiyong||this.$validate.isIntNumer(this.ruleForm.meirifeiyong)){t.next=12;break}return this.$utils.msg("每日费用应输入整数"),t.abrupt("return");case 12:if(!this.ruleForm.yajin||this.$validate.isIntNumer(this.ruleForm.yajin)){t.next=15;break}return this.$utils.msg("押金应输入整数"),t.abrupt("return");case 15:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){t.next=18;break}return this.$utils.msg("赞应输入整数"),t.abrupt("return");case 18:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){t.next=21;break}return this.$utils.msg("踩应输入整数"),t.abrupt("return");case 21:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){t.next=24;break}return this.$utils.msg("点击次数应输入整数"),t.abrupt("return");case 24:if(!this.cross){t.next=40;break}if(s=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==s){t.next=40;break}if(i||(i=e.getStorageSync("crossObj")),s.startsWith("[")){t.next=36;break}for(c in i)c==s&&(i[c]=o);return h=e.getStorageSync("crossTable"),t.next=34,this.$api.update("".concat(h),i);case 34:t.next=40;break;case 36:r=Number(e.getStorageSync("userid")),u=i["id"],a=e.getStorageSync("statusColumnName"),a=a.replace(/\[/,"").replace(/\]/,"");case 40:if(!u||!r){t.next=62;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=u,l={page:1,limit:10,crossuserid:r,crossrefid:u},t.next=46,this.$api.list("tushuxinxi",l);case 46:if(m=t.sent,!(m.data.total>=a)){t.next=52;break}return this.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 52:if(!this.ruleForm.id){t.next=57;break}return t.next=55,this.$api.update("tushuxinxi",this.ruleForm);case 55:t.next=59;break;case 57:return t.next=59,this.$api.add("tushuxinxi",this.ruleForm);case 59:this.$utils.msgBack("提交成功");case 60:t.next=70;break;case 62:if(!this.ruleForm.id){t.next=67;break}return t.next=65,this.$api.update("tushuxinxi",this.ruleForm);case 65:t.next=69;break;case 67:return t.next=69,this.$api.add("tushuxinxi",this.ruleForm);case 69:this.$utils.msgBack("提交成功");case 70:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,i=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),n=n>9?n:"0"+n,r=r>9?r:"0"+r,"".concat(i,"-").concat(n,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,i("543d")["default"])},bb26:function(e,t,i){}},[["ade6","common/runtime","common/vendor"]]]);