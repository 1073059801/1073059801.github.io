(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views"],{"013a":function(t,e,i){},"05ce":function(t,e,i){},"18b9":function(t,e,i){"use strict";i("013a")},"1d46":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"user-info"},[i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:8}},[i("basic-container",[i("div",{staticClass:"user-info__content"},[i("img",{staticClass:"user-info__img",attrs:{src:t.form.img,alt:""}}),i("p",{staticClass:"user-info__name"},[t._v(t._s(t.form.name))]),i("router-link",{staticClass:"user-info__setting",attrs:{to:{path:"/info/setting"}}},[t._v("个人设置")]),i("p",{staticClass:"user-info__desc"},[t._v(t._s(t.form.ms))]),i("div",{staticClass:"user-info__detail-desc"},[i("p",[i("i",{staticClass:"el-icon-message"}),i("span",[t._v(t._s(t.form.yx))])]),i("p",[i("i",{staticClass:"el-icon-postcard"}),i("span",[t._v(t._s(t.form.gs)+" · "+t._s(t.form.bm)+" · "+t._s(t.form.zw))])]),i("p",[i("i",{staticClass:"el-icon-location-information"}),i("span",[t._v(t._s(t.form.dz))])])]),i("div",{staticClass:"user-info__divider"}),i("h4",[t._v("标签")]),i("div",{staticClass:"user-info__tags"},t._l(t.tags,(function(e,s){return i("el-tag",{key:s,attrs:{effect:"plain"}},[t._v("\n              "+t._s(e)+"\n            ")])})),1)],1)])],1),i("el-col",{attrs:{span:16}},[i("basic-container",[i("avue-tabs",{attrs:{option:t.option},on:{chang:t.handleChange,submit:t.handleSubmit},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1)],1)],1)],1)},a=[],n={column:[{label:"个人信息",prop:"info",option:{submitText:"修改",size:"small",labelWidth:60,column:[{label:"头像",type:"upload",listType:"picture-img",propsHttp:{res:"data.0"},canvasOption:{text:"avue",ratio:.1},action:"https://avueupload.91eic.com/upload/list",tip:"只能上传jpg/png用户头像，且不超过500kb",span:16,prop:"img"},{label:"姓名",span:12,prop:"name"},{label:"邮箱",row:!0,span:12,prop:"yx"},{label:"描述",type:"textarea",span:24,prop:"ms"},{label:"公司",prop:"gs",span:8},{label:"部门",span:8,prop:"bm"},{label:"职位",span:8,prop:"zw"},{label:"地址",span:24,prop:"dz"},{label:"标签",span:24,type:"select",multiple:!0,prop:"bq",dicData:[{label:"善解人意",value:1},{label:"开朗乐观",value:2},{label:"真诚热情",value:3},{label:"心地善良",value:4},{label:"谦恭有礼",value:5},{label:"彬彬有礼",value:6}]}]}},{label:"修改密码",prop:"password",option:{labelWidth:70,size:"small",submitText:"修改",column:[{label:"原密码",span:16,row:!0,type:"password",prop:"oldpassword"},{label:"新密码",span:16,row:!0,type:"password",prop:"newpassword"},{label:"确认密码",span:16,row:!0,type:"password",prop:"newpasswords"}]}}]},l={data:function(){return{type:"info",option:n,tags:[" 善解人意","开朗乐观","真诚热情","心地善良","谦恭有礼","彬彬有礼","虚怀若谷","严于律己","雍容大度","热情洋溢","从容自若","诚挚","温厚","谦让","勤恳","耿直"],form:{img:"https://avatar.gitee.com/uploads/61/632261_smallweigit.jpg!avatar100?1518660401",username:"smallwei",name:"smallwei",ms:"保护头发，人人有责",yx:"1634566606@qq.com",gs:"某某公司",bm:"某某部门",zw:"前端开发工程师",dz:"内蒙古",bq:[1,2,3,4],oldpassword:11111111,newpassword:22222222,newpasswords:22222222}}},created:function(){},methods:{handleSubmit:function(){this.$message({message:this.form,type:"success"})},handleChange:function(t){this.type=t.prop}}},o=l,c=(i("82e0"),i("2877")),r=Object(c["a"])(o,s,a,!1,null,null,null);e["default"]=r.exports},4852:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"user-setting"},[i("basic-container",[i("el-tabs",{staticStyle:{height:"400px"},attrs:{"tab-position":"left",stretch:""}},[i("el-tab-pane",{attrs:{label:"安全设置"}},[i("div",{staticClass:"user-setting__main"},[i("div",{staticClass:"user-setting__title"},[t._v("安全设置")]),i("div",{staticClass:"user-setting__item"},[i("div",{staticClass:"user-setting__meta"},[i("p",{staticClass:"title"},[i("i",{staticClass:"el-icon-user"}),t._v("\n                账号安全\n              ")]),i("p",{staticClass:"subtitle"},[t._v("更改当前账号密码")])]),i("div",{staticClass:"user-setting__menu"},[i("el-button",{attrs:{size:"small"}},[t._v("修改")])],1)]),i("div",{staticClass:"user-setting__item"},[i("div",{staticClass:"user-setting__meta"},[i("p",{staticClass:"title"},[i("i",{staticClass:"el-icon-mobile-phone"}),t._v("\n                绑定手机\n              ")]),i("p",{staticClass:"subtitle"},[t._v("设置您的绑定手机号码")])]),i("div",{staticClass:"user-setting__menu"},[i("el-button",{attrs:{size:"small"}},[t._v("修改")])],1)]),i("div",{staticClass:"user-setting__item"},[i("div",{staticClass:"user-setting__meta"},[i("p",{staticClass:"title"},[i("i",{staticClass:"el-icon-message"}),t._v("\n                绑定邮箱\n              ")]),i("p",{staticClass:"subtitle"},[t._v("设置您的绑定邮箱")])]),i("div",{staticClass:"user-setting__menu"},[i("el-button",{attrs:{size:"small"}},[t._v("修改")])],1)])])]),i("el-tab-pane",{attrs:{label:"通知设置"}},[i("div",{staticClass:"user-setting__main"},[i("div",{staticClass:"user-setting__title"},[t._v("通知设置")]),i("div",{staticClass:"user-setting__item"},[i("div",{staticClass:"user-setting__meta"},[i("p",{staticClass:"title"},[i("i",{staticClass:"el-icon-document"}),t._v("\n                系统消息\n              ")]),i("p",{staticClass:"subtitle"},[t._v("系统性的通知或者更新消息")])]),i("div",{staticClass:"user-setting__menu"},[i("el-switch",{model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]),i("div",{staticClass:"user-setting__item"},[i("div",{staticClass:"user-setting__meta"},[i("p",{staticClass:"title"},[i("i",{staticClass:"el-icon-user"}),t._v("\n                帐号消息\n              ")]),i("p",{staticClass:"subtitle"},[t._v("帐号变更的通知消息")])]),i("div",{staticClass:"user-setting__menu"},[i("el-switch",{model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)])])])],1)],1)],1)},a=[],n={data:function(){return{value:!0}}},l=n,o=(i("18b9"),i("2877")),c=Object(o["a"])(l,s,a,!1,null,null,null);e["default"]=c.exports},"4b9f":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("basic-container",[i("div",{staticClass:"wel"},[i("basic-block",{attrs:{width:t.width,height:t.height,icon:"el-icon-platform-eleme",text:"开始菜单1",time:"1",background:"/img/bg/bg3.jpg",color:"#d56259"}}),i("basic-block",{attrs:{width:t.width,height:t.height,icon:"el-icon-eleme",text:"开始菜单2",time:"2",background:"/img/bg/bg2.jpg",color:"#419ce7"}}),i("basic-block",{attrs:{width:t.width,height:t.height,icon:"el-icon-delete-solid",text:"开始菜单3",time:"3",color:"#56b69b"}}),i("basic-block",{attrs:{width:t.width,height:t.height,icon:"el-icon-delete",text:"开始菜单4",time:"4",color:"#d44858"}}),i("basic-block",{attrs:{width:t.width,height:t.height,icon:"el-icon-s-tools",text:"开始菜单5",time:"5",color:"#3a1f7e"}}),i("basic-block",{attrs:{width:410,height:t.height,icon:"el-icon-setting",text:"开始菜单6",time:"6",background:"/img/bg/bg1.jpg",dept:"这是一段很长的很长很长很长的描述这是一段很长的很长很长很长的描述",color:"#422829"}}),i("basic-block",{attrs:{width:t.width,height:t.height,icon:"el-icon-user-solid",text:"开始菜单7",time:"7",color:"#613cbd"}}),i("basic-block",{attrs:{width:t.width,height:t.height,icon:"el-icon-star-off",text:"开始菜单8",time:"8",color:"#da542e"}}),i("basic-block",{attrs:{width:t.width,height:t.height,icon:"el-icon-goods",text:"开始菜单9",time:"9",color:"#2e8aef"}}),i("basic-block",{attrs:{width:t.width,height:t.height,icon:"el-icon-circle-check",text:"开始菜单10",time:"10",color:"#3d17b8"}}),i("basic-block",{attrs:{width:t.width,height:t.height,icon:"el-icon-s-platform",text:"开始菜单11",time:"11",color:"#e31462"}}),i("basic-block",{attrs:{width:t.width,height:t.height,icon:"el-icon-s-fold",text:"开始菜单12",time:"12",color:"#d9532d"}}),i("basic-block",{attrs:{width:410,height:t.height,icon:"el-icon-s-open",text:"开始菜单13",time:"13",dept:"这是一段很长的很长很长很长的描述这是一段很长的很长很长很长的描述",color:"#b72147"}}),i("basic-block",{attrs:{width:t.width,height:t.height,icon:"el-icon-s-flag",text:"开始菜单14",time:"14",color:"#01a100"}}),i("basic-block",{attrs:{width:t.width,height:t.height,icon:"el-icon-s-data",text:"开始菜单15",time:"15",color:"#0c56bf"}}),i("basic-block",{attrs:{width:t.width,height:t.height,icon:"el-icon-s-grid",text:"开始菜单16",time:"16",color:"#0098a9"}}),i("basic-block",{attrs:{width:t.width,height:t.height,icon:"el-icon-s-release",text:"开始菜单17",time:"17",background:"/img/bg/bg2.jpg",color:"#209bdf"}}),i("basic-block",{attrs:{width:t.width,height:t.height,icon:"el-icon-s-home",text:"开始菜单18",time:"18",background:"/img/bg/bg3.jpg",color:"#603bbc"}}),i("basic-block",{attrs:{width:515,height:t.height,icon:"el-icon-s-promotion",text:"开始菜单19",time:"19",dept:"这是一段很长的很长很长很长的描述这是一段很长的很长很长很长的描述",color:"#009bad"}}),i("basic-block",{attrs:{width:515,height:t.height,icon:"el-icon-s-custom",text:"开始菜单20",time:"20",background:"/img/bg/bg4.jpg",dept:"这是一段很长的很长很长很长的描述这是一段很长的很长很长很长的描述",color:"#d74e2a"}})],1)])},a=[],n={data:function(){return{width:200,height:120}}},l=n,o=(i("e5fd"),i("2877")),c=Object(o["a"])(l,s,a,!1,null,null,null);e["default"]=c.exports},"4e3c":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"wel__header"},[i("div",{staticClass:"wel__info"},[i("img",{staticClass:"wel__info-img",attrs:{src:t.userInfo.avatar,alt:""}}),i("div",{staticClass:"wel__info-content"},[i("div",{staticClass:"wel__info-title"},[t._v("\n          "+t._s(t.$t("wel.info"))+"\n        ")]),i("div",{staticClass:"wel__info-subtitle"},[t._v("\n          "+t._s(t.$t("wel.dept"))+"\n        ")])])]),i("div",{staticClass:"wel__extra"},[i("div",{staticClass:"wel__extra-item"},[i("p",{staticClass:"wel__extra-title"},[t._v("\n          "+t._s(t.$t("wel.count"))+"\n        ")]),i("p",{staticClass:"wel__extra-subtitle"},[t._v("\n          56\n        ")])]),i("div",{staticClass:"wel__extra-item"},[i("p",{staticClass:"wel__extra-title"},[t._v("\n          "+t._s(t.$t("wel.team"))+"\n        ")]),t._m(0)]),i("div",{staticClass:"wel__extra-item"},[i("p",{staticClass:"wel__extra-title"},[t._v("\n\n          "+t._s(t.$t("wel.project"))+"\n        ")]),i("p",{staticClass:"wel__extra-subtitle"},[t._v("\n          2,223\n        ")])])])]),i("basic-container",[i("avue-data-box",{attrs:{option:t.option1}})],1),i("el-row",{attrs:{span:24}},[i("el-col",{attrs:{span:18}},[i("basic-container",[i("avue-data-progress",{staticStyle:{"margin-bottom":"35px"},attrs:{option:t.option3}}),i("avue-data-tabs",{attrs:{option:t.option}})],1)],1),i("el-col",{attrs:{span:6}},[i("basic-container",[i("avue-data-icons",{attrs:{option:t.option2}})],1)],1)],1),i("basic-container",[i("avue-crud",{attrs:{option:t.option4,data:t.data}})],1)],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"wel__extra-subtitle"},[t._v("\n          8 "),i("span",[t._v("/ 24")])])}],n=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),l=i("5880");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){Object(n["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var r={name:"wel",data:function(){return{data:[{rw:"这是一条工作任务",nr:"这是一条很长很长很长很长很长很长很长很长很长的工作内容",sj:"2019-01-01"},{rw:"这是一条工作任务",nr:"这是一条很长很长很长很长很长很长很长很长很长的工作内容",sj:"2019-01-01"},{rw:"这是一条工作任务",nr:"这是一条很长很长很长很长很长很长很长很长很长的工作内容",sj:"2019-01-01"},{rw:"这是一条工作任务",nr:"这是一条很长很长很长很长很长很长很长很长很长的工作内容",sj:"2019-01-01"}]}},computed:c(c({},Object(l["mapGetters"])(["userInfo"])),{},{option1:function(){return{span:6,data:[{title:this.$t("wel.data4.column1"),count:12332,icon:"el-icon-warning",color:"rgb(49, 180, 141)",href:"https://avuejs.com",target:"_blank"},{title:this.$t("wel.data4.column2"),count:33,icon:"el-icon-view",color:"rgb(56, 161, 242)",href:"https://avuejs.com",target:"_blank"},{title:this.$t("wel.data4.column3"),count:2223,icon:"el-icon-setting",color:"rgb(117, 56, 199)",href:"https://avuejs.com",target:"_blank"},{title:this.$t("wel.data4.column4"),count:2223,icon:"el-icon-setting",color:"rgb(230, 71, 88)",href:"https://avuejs.com",target:"_blank"}]}},option3:function(){return{span:8,data:[{title:this.$t("wel.data3.column1"),color:"rgb(178, 159, 255)",count:32,href:"https://avuejs.com",target:"_blank"},{title:this.$t("wel.data3.column2"),color:"rgb(230, 71, 88)",count:32,href:"https://avuejs.com",target:"_blank"},{title:this.$t("wel.data3.column3"),color:"rgb(230, 71, 88)",count:32,href:"https://avuejs.com",target:"_blank"}]}},option2:function(){return{span:12,data:[{title:this.$t("wel.data2.column1"),count:12678,icon:"el-icon-tickets",href:"https://avuejs.com",target:"_blank"},{title:this.$t("wel.data2.column2"),count:22139,icon:"el-icon-success",href:"https://avuejs.com",target:"_blank"},{title:this.$t("wel.data2.column3"),count:35623,icon:"el-icon-info",href:"https://avuejs.com",target:"_blank"},{title:this.$t("wel.data2.column4"),count:16826,icon:"el-icon-message",href:"https://avuejs.com",target:"_blank"}]}},option:function(){return{span:8,data:[{title:this.$t("wel.data.column1"),subtitle:this.$t("wel.data.subtitle"),count:7993,allcount:10222,text:this.$t("wel.data.text1"),color:"rgb(27, 201, 142)",key:this.$t("wel.data.key1")},{title:this.$t("wel.data.column2"),subtitle:this.$t("wel.data.subtitle"),count:3112,allcount:10222,text:this.$t("wel.data.text2"),color:"rgb(230, 71, 88)",key:this.$t("wel.data.key2")},{title:this.$t("wel.data.column3"),subtitle:this.$t("wel.data.subtitle"),count:908,allcount:10222,text:this.$t("wel.data.text3"),color:"rgb(56, 161, 242)",key:this.$t("wel.data.key3")}]}},option4:function(){return{index:!0,column:[{label:this.$t("wel.table.rw"),prop:"rw"},{width:500,label:this.$t("wel.table.nr"),prop:"nr",overHidden:!0},{label:this.$t("wel.table.sj"),prop:"sj"}]}}}),created:function(){},methods:{}},u=r,h=(i("4f84"),i("2877")),d=Object(h["a"])(u,s,a,!1,null,"f98525c8",null);e["default"]=d.exports},"4f84":function(t,e,i){"use strict";i("da77")},"82e0":function(t,e,i){"use strict";i("05ce")},a597:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("basic-container",[i("h3",[t._v(t._s(t.$route.query.id?"编辑":"新增"))]),i("avue-form",{attrs:{option:t.option},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[i("template",{slot:"menuForm"},[i("el-button",{attrs:{icon:"el-icon-back"},on:{click:function(e){return t.handleBack()}}},[t._v("返 回")])],1)],2)],1)},a=[],n={data:function(){return{form:{},option:{labelWidth:110,column:[{label:"姓名",prop:"name"}]}}},watch:{$route:function(){this.$message.success("路由更新id="+this.$route.query.id)}},methods:{handleBack:function(){this.$router.$avueRouter.closeTag(),this.$router.back()}}},l=n,o=i("2877"),c=Object(o["a"])(l,s,a,!1,null,null,null);e["default"]=c.exports},adbc:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("basic-container",[i("h2",[t._v(t._s(t.index))]),i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleGo(1)}}},[t._v("参数1页面")]),i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleGo(2)}}},[t._v("参数2页面")])],1)},a=[],n={data:function(){return{index:""}},watch:{$route:function(){this.handleInit()}},created:function(){this.handleInit()},methods:{handleInit:function(){this.index=this.$route.params.params},handleGo:function(t){this.$router.push({path:"/query/"+t,query:{name:"参数"+t}})}}},l=n,o=i("2877"),c=Object(o["a"])(l,s,a,!1,null,null,null);e["default"]=c.exports},aedd:function(t,e,i){},da77:function(t,e,i){},e5fd:function(t,e,i){"use strict";i("aedd")}}]);