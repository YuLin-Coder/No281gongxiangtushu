(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"11df":function(n,t,e){"use strict";var i,u=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.menuList,(function(t,e){var i=n.__map(t.frontMenu,(function(t,e){var i=n.__map(t.child,(function(t,e){var i=t.menu.split("列表");return{$orig:n.__get_orig(t),g0:i}}));return{$orig:n.__get_orig(t),l0:i}}));return{$orig:n.__get_orig(t),l1:i}}))),i=n.__map(n.tushuxinxilist,(function(t,e){var i=t.fengmian.substring(0,4),u=t.fengmian.split(",");return{$orig:n.__get_orig(t),g1:i,g2:u}})),u=n.__map(n.hometushuxinxilist,(function(t,e){var i=t.fengmian.substring(0,4),u=t.fengmian.split(",");return{$orig:n.__get_orig(t),g3:i,g4:u}}));n.$mp.data=Object.assign({},{$root:{l2:e,l3:i,l4:u}})},c=[];e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return i}))},"2f7f":function(n,t,e){"use strict";var i=e("6357"),u=e.n(i);u.a},6357:function(n,t,e){},8069:function(n,t,e){"use strict";e.r(t);var i=e("da67"),u=e.n(i);for(var c in i)"default"!==c&&function(n){e.d(t,n,(function(){return i[n]}))}(c);t["default"]=u.a},d537:function(n,t,e){"use strict";(function(n){e("6cdc"),e("921b");i(e("66fd"));var t=i(e("f75a"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},da67:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(e("a34a")),u=c(e("2971"));function c(n){return n&&n.__esModule?n:{default:n}}function o(n,t,e,i,u,c,o){try{var r=n[c](o),a=r.value}catch(s){return void e(s)}r.done?t(a):Promise.resolve(a).then(i,u)}function r(n){return function(){var t=this,e=arguments;return new Promise((function(i,u){var c=n.apply(t,e);function r(n){o(c,i,u,r,a,"next",n)}function a(n){o(c,i,u,r,a,"throw",n)}r(void 0)}))}}e("651d");var a=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(e.bind(null,"b704"))},s={components:{uniIcons:a},data:function(){return{options2:{effect:"flip",loop:!0},options3:{effect:"cube",loop:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94}},rows:2,column:4,iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"],role:"",menuList:[],swiperMenuList:[],user:{},tableName:"",btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"图书名称"}],queryIndex:0,searchForm:{tushuxinxitushumingcheng:""},CustomBar:"0",swiperList:[],tushuxinxilist:[],hometushuxinxilist:[],news:[]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=r(i.default.mark((function t(){var e,c,o,r=this;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.role=n.getStorageSync("role"),e=n.getStorageSync("nowTable"),t.next=4,this.$api.session(e);case 4:c=t.sent,this.user=c.data,this.tableName=e,o=u.default.list(),this.menuList=o,this.menuList.forEach((function(n,t){r.role==n.roleName&&n.frontMenu.forEach((function(n,t){n.child[0].buttons.indexOf("查看")>-1&&r.swiperMenuList.push(n)}))}));case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onShow:function(){var t=r(i.default.mark((function t(){var e,u,c,o,r,a,s,l;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),e=[],t.next=4,this.$api.page("config",{page:1,limit:5});case 4:for(u=t.sent,c=!0,o=!1,r=void 0,t.prev=8,a=u.data.list[Symbol.iterator]();!(c=(s=a.next()).done);c=!0)l=s.value,l.name.indexOf("picture")>=0&&l.value&&""!=l.value&&null!=l.value&&e.push({img:l.value,title:l.name});t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](8),o=!0,r=t.t0;case 16:t.prev=16,t.prev=17,c||null==a.return||a.return();case 19:if(t.prev=19,!o){t.next=22;break}throw r;case 22:return t.finish(19);case 23:return t.finish(16);case 24:return e&&(this.swiperList=e),t.next=27,this.$api.list("news",{page:1,limit:6});case 27:if(u=t.sent,this.news=u.data.list,null===n.getStorageSync("userid")){t.next=35;break}return t.next=32,this.$api.recommend2("tushuxinxi",{page:1,limit:4});case 32:u=t.sent,t.next=38;break;case 35:return t.next=37,this.$api.recommend("tushuxinxi",{page:1,limit:4});case 37:u=t.sent;case 38:return this.tushuxinxilist=u.data.list,t.next=41,this.$api.list("tushuxinxi",{page:1,limit:6});case 41:u=t.sent,this.hometushuxinxilist=u.data.list;case 43:case"end":return t.stop()}}),t,this,[[8,12,16,24],[17,,19,23]])})));function e(){return t.apply(this,arguments)}return e}(),methods:{queryChange:function(n){this.queryIndex=n.detail.value,this.searchForm.tushuxinxitushumingcheng=""},onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){0==this.queryIndex&&(n.setStorageSync("indexQueryCondition",this.searchForm.tushuxinxitushumingcheng),this.searchForm.tushuxinxitushumingcheng=""),n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})},onPageTap2:function(t){n.setStorageSync("useridTag",0),n.navigateTo({url:t,fail:function(){n.switchTab({url:t})}})}}};t.default=s}).call(this,e("543d")["default"])},f75a:function(n,t,e){"use strict";e.r(t);var i=e("11df"),u=e("8069");for(var c in u)"default"!==c&&function(n){e.d(t,n,(function(){return u[n]}))}(c);e("2f7f");var o,r=e("f0c5"),a=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,"62ab3e24",null,!1,i["a"],o);t["default"]=a.exports}},[["d537","common/runtime","common/vendor"]]]);