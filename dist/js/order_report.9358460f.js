(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order_report"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7"),r("e6cf");function n(t,e,r,n,a,o,i){try{var s=t[o](i),l=s.value}catch(u){return void r(u)}s.done?e(l):Promise.resolve(l).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function s(t){n(i,a,o,s,l,"next",t)}function l(t){n(i,a,o,s,l,"throw",t)}s(void 0)}))}}},4554:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("Home")]),r("el-breadcrumb-item",[r("a",{attrs:{href:"/"}},[t._v("Statistical Analysis")])]),r("el-breadcrumb-item",[t._v("Report")])],1),r("el-card",[r("div",{staticStyle:{width:"750px",height:"400px"},attrs:{id:"main"}})])],1)},a=[],o=(r("96cf"),r("1da1")),i=r("164e"),s=r.n(i),l=r("60bb"),u=r.n(l),c={data:function(){return{options:{title:{text:"Users Origin"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#E9EEF3"}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{boundaryGap:!1}],yAxis:[{type:"value"}]}}},created:function(){},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=s.a.init(document.getElementById("main")),e.next=3,t.$http.get("reports/type/1");case 3:if(n=e.sent,a=n.data,200===a.meta.status){e.next=7;break}return e.abrupt("return",t.$message.error("获取折线图数据失败！"));case 7:o=u.a.merge(a.data,t.options),r.setOption(o);case 9:case"end":return e.stop()}}),e)})))()},methods:{}},d=c,f=r("2877"),h=Object(f["a"])(d,n,a,!1,null,"350ffd21",null);e["default"]=h.exports},"4edf":function(t,e,r){"use strict";var n=r("53d4"),a=r.n(n);a.a},"53d4":function(t,e,r){},6443:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("Home")]),r("el-breadcrumb-item",[r("a",{attrs:{href:"/"}},[t._v("Order Management")])]),r("el-breadcrumb-item",[t._v("Order List")])],1),r("el-card",[r("el-row",[r("el-col",{attrs:{span:8}},[r("el-input",{attrs:{placeholder:"Please enter"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1)],1),r("el-table",{attrs:{data:t.orderlist,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{label:"Order Number",prop:"order_number"}}),r("el-table-column",{attrs:{label:"Total Price",prop:"order_price"}}),r("el-table-column",{attrs:{label:"Paid",prop:"pay_status"},scopedSlots:t._u([{key:"default",fn:function(e){return["1"===e.row.pay_status?r("el-tag",{attrs:{type:"success"}},[t._v("Paid")]):r("el-tag",{attrs:{type:"danger"}},[t._v("Not Paid")])]}}])}),r("el-table-column",{attrs:{label:"Shipped",prop:"is_send"},scopedSlots:t._u([{key:"default",fn:function(t){return[void 0]}}])}),r("el-table-column",{attrs:{label:"Created Time",prop:"create_time"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("dateFormat")(e.row.create_time)))]}}])}),r("el-table-column",{attrs:{label:"Action"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:t.showBox}}),r("el-button",{attrs:{size:"mini",type:"success",icon:"el-icon-location"},on:{click:t.showProgressBox}})]}}])})],1),r("el-pagination",{attrs:{"current-page":t.queryInfo.pagenum,"page-sizes":[5,10,15],"page-size":t.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"Edit Address",visible:t.addressVisible,width:"50%"},on:{"update:visible":function(e){t.addressVisible=e},close:t.addressDialogClosed}},[r("el-form",{ref:"addressFormRef",attrs:{model:t.addressForm,rules:t.addressFormRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"State",prop:"address1"}},[r("el-cascader",{attrs:{options:t.cityData},model:{value:t.addressForm.address1,callback:function(e){t.$set(t.addressForm,"address1",e)},expression:"addressForm.address1"}})],1),r("el-form-item",{attrs:{label:"Address",prop:"address2"}},[r("el-input",{model:{value:t.addressForm.address2,callback:function(e){t.$set(t.addressForm,"address2",e)},expression:"addressForm.address2"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.addressVisible=!1}}},[t._v("Cancel")]),r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addressVisible=!1}}},[t._v("Confirm")])],1)],1),r("el-dialog",{attrs:{title:"Shipping Status",visible:t.progressVisible,width:"50%"},on:{"update:visible":function(e){t.progressVisible=e}}},[r("el-timeline",t._l(t.progressInfo,(function(e,n){return r("el-timeline-item",{key:n,attrs:{timestamp:e.time}},[t._v(t._s(e.context))])})),1)],1)],1)},a=[],o=(r("96cf"),r("1da1")),i=[{children:[{value:"Toronto",label:"Toronto"},{value:"Markham",label:"Markham"}],value:"Ontario",label:"ON"},{children:[{value:"Victoria",label:"Victoria"},{value:"Vancouver",label:"Vancouver"}],value:"British Columnbia",label:"BC"},{children:[{value:"Montreal",label:"Montreal"}],value:"Quebec",label:"QC"}],s={data:function(){return{queryInfo:{query:"",pagenum:1,pagesize:10},total:0,orderlist:[],addressVisible:!1,addressForm:{address1:[],address2:""},addressFormRules:{address1:[{required:!0,message:"Please select state",trigger:"blur"}],address2:[{required:!0,message:"Please select address",trigger:"blur"}]},cityData:i,progressVisible:!1,progressInfo:[]}},created:function(){this.getOrderList()},methods:{getOrderList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("orders",{params:t.queryInfo});case 2:if(r=e.sent,n=r.data,200===n.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error("Failed to get order list !"));case 6:t.total=n.data.total,t.orderlist=n.data.goods;case 8:case"end":return e.stop()}}),e)})))()},handleSizeChange:function(t){this.queryInfo.pagesize=t,this.getOrderList()},handleCurrentChange:function(t){this.queryInfo.pagenum=t,this.getOrderList()},showBox:function(){this.addressVisible=!0},addressDialogClosed:function(){this.$refs.addressFormRef.resetFields()},showProgressBox:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/kuaidi/1106975712662");case 2:if(r=e.sent,n=r.data,200===n.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error("Failed to get shipping status !"));case 6:t.progressInfo=n.data,t.progressVisible=!0;case 8:case"end":return e.stop()}}),e)})))()}}},l=s,u=(r("4edf"),r("2877")),c=Object(u["a"])(l,n,a,!1,null,"fedc6536",null);e["default"]=c.exports},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,a=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",u="object"===typeof t,c=e.regeneratorRuntime;if(c)u&&(t.exports=c);else{c=e.regeneratorRuntime=u?t.exports:{},c.wrap=w;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",m={},g={};g[i]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(V([])));y&&y!==n&&a.call(y,i)&&(g=y);var b=k.prototype=_.prototype=Object.create(g);L.prototype=b.constructor=k,k.constructor=L,k[l]=L.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(b),t},c.awrap=function(t){return{__await:t}},E(O.prototype),O.prototype[s]=function(){return this},c.AsyncIterator=O,c.async=function(t,e,r,n){var a=new O(w(t,e,r,n));return c.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(b),b[l]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},c.values=V,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return s.type="throw",s.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:V(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}}}function w(t,e,r,n){var a=e&&e.prototype instanceof _?e:_,o=Object.create(a.prototype),i=new C(n||[]);return o._invoke=F(t,r,i),o}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function _(){}function L(){}function k(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t){function e(r,n,o,i){var s=x(t[r],t,n);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"===typeof u&&a.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,o,i)}),(function(t){e("throw",t,o,i)})):Promise.resolve(u).then((function(t){l.value=t,o(l)}),i)}i(s.arg)}var r;function n(t,n){function a(){return new Promise((function(r,a){e(t,n,r,a)}))}return r=r?r.then(a,a):a()}this._invoke=n}function F(t,e,r){var n=d;return function(a,o){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return I()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var s=P(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var l=x(t,e,r);if("normal"===l.type){if(n=r.done?p:f,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=p,r.method="throw",r.arg=l.arg)}}}function P(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,P(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=x(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,m;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function V(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){while(++n<t.length)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:I}}function I(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())}}]);
//# sourceMappingURL=order_report.9358460f.js.map