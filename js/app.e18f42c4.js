(function(e){function t(t){for(var n,r,s=t[0],c=t[1],d=t[2],v=0,u=[];v<s.length;v++)r=s[v],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(u.length)u.shift()();return a.push.apply(a,d||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,s=1;s<o.length;s++){var c=o[s];0!==i[c]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},i={app:0},a=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=c;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},2015:function(e,t,o){},2279:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA/klEQVRIS9XVIU4DQRSH8V+PwA0QBIGtxFDHBVCoGs5QB1iwxYBAA6qOBEErkCgUqJ6gGkkeGZLuZiDd6bbAJJvsJDPf994/mZmOFY/OivnWLjhusaPTYM13EPC9lgTB+WTnBL0lJQF//JOCbbwhorzCDO+Zbos6OMAGLnGPfUxwhNeapLEg4F0MEugJu+l/hCEe5iSNBTc4wzMipsMUUzBvcZe+L0djQWwMyTW28JLiycFjbZEgNkZUmzhPpcY8qq+PYsGix+P3BeNFS/1h3UnuJO/gogV4IKbo1++ilthVTO49WPZGrUScE8RdExmWjgpz7S9aadXf7vv/HXwAW1s0Gav8uegAAAAASUVORK5CYII="},"2b1f":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABB0lEQVRIS92UsUoDURBFz+kVrK3FWlARu/gJEbSxEosUae3FD7BNESwsrCKCf2AqEe1sBT9BRLAeWXjKZhXZfW6anXpmzps7943MOZxzfzoGiIg14EV9L6SLiFVgOUPGR/WjqPuWKCJ6wC0wVXcS4AHYzAAcq2dVwArwDFyp+wlQAAtw0zhUL2YAqeGS+ta021/53XNRT51+jRwRC8BGU8nKPcou2gMmwFgdpJ3cAdtNAcDPJUfEAXBZcVGrgEVgHXhSX9ME7UmUIUOtkg7ZNCJ2gWtgpA7/eSoG6rh6i46Ac+BG7SfAPbBVS+zZpKE6+u0WnainpY/W3rnOeGWtkg65qNa8GUmfG2xkGcI832EAAAAASUVORK5CYII="},"56d7":function(e,t,o){"use strict";o.r(t);o("e623"),o("e379"),o("5dc8"),o("37e1");var n=o("a026"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app",oncontextmenu:"return "+e.dev}},[o("transition",{attrs:{name:"fade","enter-active-class":"animated bounceInDown","leave-active-class":"animated bounceOutUp",duration:2e3}},[o("Nav",{directives:[{name:"show",rawName:"v-show",value:e.isShowTopMenu,expression:"isShowTopMenu"}],ref:"topMenu"})],1),o("router-view")],1)},a=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"top-menu"}},[n("div",[n("div",{staticClass:"logo-left-top pc"},[e._v("IT'S A BEAUTIFY LOGO")]),n("div",{staticClass:"logo-left-top mobile",on:{click:e.toggleLeftList}},[n("img",{attrs:{src:o("2b1f"),alt:"img"}})]),n("div",{staticClass:"top-menu"},e._l(e.menus,(function(t){return n("div",{staticClass:"top-menu-item ripple",class:{selected:t.selected},on:{click:function(o){return e.menuClick(t)}}},[e._v(" "+e._s(t.name)+" ")])})),0)]),n("div",[n("div",{staticClass:"top-menu-func"},[n("div",{staticClass:"top-menu-func-time"},[n("div",{staticClass:"top-menu-func-time-time"},[e._v(e._s(e.timeStr))]),n("div",{staticClass:"top-menu-func-time-date"},[e._v(e._s(e.dateStr))])])])])])},s=[],c=(o("4160"),o("b0c0"),o("159b"),{name:"top-menu",data:function(){return{menus:[],num:1e4,timeStr:"",dateStr:""}},mounted:function(){var e=this;e.initTopMenu()},methods:{toggleLeftList:function(){var e=this.$store.state.isShowLeftList;this.$store.dispatch("upShowLeftList",!e)},initMenu:function(){var e=this,t=this.$router.options.routes;t.forEach((function(t){Array.isArray(t.children)?t.children.forEach((function(o){o.path=t.path+o.path,e.menus.push(o)})):e.menus.push(t)}))},initTopMenu:function(){var e=this;e.getDateTime()},getDateTime:function(){var e=this;setInterval((function(){var t=new Date;e.dateStr=t.format("YYYY.MM.DD"),e.timeStr=t.format("hh:mm:ss")}),1e3)},menuClick:function(e){var t=this;t.$router.currentRoute.path!==e.path&&(t.$router.push(e),t.toggleMenuStyle(e),t.showViewByMenu(e))},showViewByMenu:function(e){var t=this;switch(t.$notify({message:e.name,type:"success",position:"bottom-right",duration:4500}),e.name){case"资源统计":break;case"防汛指挥":t.setVisibleByLayerName("防汛");break}},setVisibleByLayerName:function(e){},toggleMenuStyle:function(e){var t=this;t.menus.forEach((function(t){t.selected=t.path===e.path}))}},computed:{nowWeather:function(){var e={img:"",temp:0},t=this;return t.$store.state.iot.weather.now&&(e=t.$store.state.iot.weather.now),e}},watch:{num:function(e){var t=this;t.filpObj&&t.filpObj.flipTo({to:e})}}}),d=c,l=(o("caca"),o("2877")),v=Object(l["a"])(d,r,s,!1,null,"b3337d40",null),u=v.exports,m=(o("dde5"),{name:"App",components:{Nav:u},data:function(){return{dev:!GLOBAL_SETTING.PRODUCTION}},created:function(){console.clear()},computed:{isShowTopMenu:function(){return!0}},mounted:function(){},methods:{}}),f=m,p=(o("d6e3"),Object(l["a"])(f,i,a,!1,null,"69b37909",null)),h=p.exports,g=o("8c4f"),C=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home-content",on:{click:function(t){return e.clearSelected()}}},[o("VideoComp",{ref:"videoCompRef",attrs:{"video-data":e.videoData,"video-style":e.videoStyle,"video-code-list":e.videoCodeList}})],1)},y=[],b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"video-component-content"},[o("div",{staticClass:"video-component-content-background"},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.leftShow,expression:"leftShow"}],ref:"leftRef",staticClass:"video-component-content-left",style:{boxShadow:e.themeData.list.shadow}},[o("div",{staticClass:"video-component-content-left-header"},[o("div",[e._v("视频列表")]),e.isPC?o("div",{staticClass:"video-component-content-left-header-add",on:{click:e.addVideoUrl}}):e._e()]),o("div",{staticClass:"video-component-content-left-search"},[o("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:e.serchKey,expression:"serchKey"}],ref:"searchRef",attrs:{type:"text",placeholder:"请输入关键字"},domProps:{value:e.serchKey},on:{input:function(t){t.target.composing||(e.serchKey=t.target.value)}}})]),o("div",{staticClass:"video-component-content-left-list parent-dom"},[o("vue-scroll",[o("div",{staticClass:"child-dom"},[o("el-menu",{staticStyle:{"border-right":"0","border-bottom":"0.0625rem"},attrs:{"default-active":"1","text-color":"#26282e","active-text-color":"red","unique-opened":""}},e._l(e.videoArray,(function(t,n){return o("el-submenu",{key:t.GroupName,staticClass:"child-dom-submenu",attrs:{index:n+"1"}},[o("template",{slot:"title"},[e._l(e.videoCodeList,(function(n){return n.code===t.GroupCode?o("img",{staticClass:"video-component-content-left-list_img",attrs:{src:e.getImg(n.imgName)}}):e._e()})),o("span",[e._v(e._s(t.GroupName))])],2),o("el-menu-item-group",[e._l(t.Videos,(function(t,i){return o("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:t.SPDMC.includes(e.serchKey),expression:"vv.SPDMC.includes(serchKey)"}],key:t.SPDMC,staticClass:"video-component-content-left-list-second-item",attrs:{index:n+1+"-"+(i+1)},on:{click:function(o){return e.handleNodeClick(t)}}},[o("div",{staticClass:"squareDiv",class:{offline:t.offline}}),t.SPDMC.length<16?o("span",[e._v(e._s(t.SPDMC))]):o("span",{attrs:{title:t.SPDMC}},[e._v(" "+e._s(t.SPDMC.substr(0,14)+"..")+" ")])])})),e._l(t.Groups,(function(t,i){return o("el-submenu",{directives:[{name:"show",rawName:"v-show",value:t.GroupName.includes(e.serchKey),expression:"item.GroupName.includes(serchKey)"}],key:t.GroupName,staticStyle:{height:"35px","line-height":"35px"},attrs:{index:n+1+"-"+(i+1)}},[o("template",{slot:"title"},[e._v(e._s(t.GroupName))]),e._l(t.Videos,(function(t,a){return o("el-menu-item",{key:t.SPDMC,staticClass:"menu-click",class:{active:!0},attrs:{index:n+1+"-"+(i+1)+"-"+(a+1)},on:{click:function(o){return e.handleNodeClick(t)}}},[e._v(e._s(t.SPDMC)+" ")])}))],2)}))],2)],2)})),1)],1)])],1)]),o("div",{staticClass:"video-component-content-video-content"},[o("div",{staticClass:"video-component-content-video-content-viewer"},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.urlFlag,expression:"urlFlag"}],staticClass:"video-component-content-video-content-viewer-url"},[o("el-input",{ref:"inputRef",staticStyle:{"border-radius":"0"},attrs:{placeholder:"请输入u3m8地址"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getUrl(t)}},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}},[o("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getUrl},slot:"append"})],1)],1),1===e.videoSplitMode?o("div",{directives:[{name:"show",rawName:"v-show",value:!e.urlFlag,expression:"!urlFlag"}],staticClass:"video-component-content-video-content-mode"},[o("video",{ref:"videoPlayer1",staticClass:"video-component-content-video-content-video-one",attrs:{id:"1",controls:""}},[e._v("/> ")]),o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading1,expression:"loading1"}],staticClass:"video-component-content-video-content-video-one-cover",on:{dblclick:function(t){return t.stopPropagation(),e.fullVideo(1)}}}),e.iframe1.obj?o("div",{staticClass:"video-component-content-video-content-video-monitor-value"},[e._l(e.iframe1.obj.configList.slice(0,6),(function(t,n){return o("div",{key:n},[e._v(" "+e._s(t.CONFIG_DESC)+" "+e._s(t.runTimeData.CONFIG_VALUE)+e._s(t.UNITS)+" ")])})),o("div",[e._v(e._s(e.iframe1.obj.time))])],2):e._e()]):e._e(),4===e.videoSplitMode?o("div",{directives:[{name:"show",rawName:"v-show",value:!e.urlFlag,expression:"!urlFlag"}],staticClass:"video-component-content-video-content-mode"},[o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading2,expression:"loading2"}],staticClass:"video-component-content-video-content-video-four",staticStyle:{margin:"0 4px 4px 0"}},[o("video",{ref:"videoPlayer2",staticClass:"video-component-content-video-content-video-one",class:{active:e.videoInfor.videoId==e.iframe2.id&&e.videoInfor.videoId},attrs:{id:"411",controls:""}},[e._v("/> ")]),o("div",{staticClass:"video-component-content-video-content-video-one-cover",on:{click:function(t){return t.stopPropagation(),e.playVideo("2",411)},dblclick:function(t){return t.stopPropagation(),e.fullVideo(411)}}}),e.iframe2.obj?o("div",{staticClass:"video-component-content-video-content-video-monitor-value"},[e._l(e.iframe2.obj.configList.slice(0,6),(function(t,n){return o("div",{key:n},[e._v(" "+e._s(t.CONFIG_DESC)+" "+e._s(t.runTimeData.CONFIG_VALUE)+" "+e._s(t.UNITS)+" ")])})),o("div",[e._v(e._s(e.iframe2.obj.time))])],2):e._e()]),o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading3,expression:"loading3"}],staticClass:"video-component-content-video-content-video-four",staticStyle:{margin:"0 0 4px 0"}},[o("video",{ref:"videoPlayer3",staticClass:"video-component-content-video-content-video-one",class:{active:e.videoInfor.videoId==e.iframe3.id&&e.videoInfor.videoId},attrs:{id:"412",controls:""}},[e._v(">/> ")]),o("div",{staticClass:"video-component-content-video-content-video-one-cover",on:{click:function(t){return t.stopPropagation(),e.playVideo("3",412)},dblclick:function(t){return t.stopPropagation(),e.fullVideo(412)}}}),e.iframe3.obj?o("div",{staticClass:"video-component-content-video-content-video-monitor-value"},[e._l(e.iframe3.obj.configList.slice(0,6),(function(t,n){return o("div",{key:n},[e._v(" "+e._s(t.CONFIG_DESC)+" "+e._s(t.runTimeData.CONFIG_VALUE)+" "+e._s(t.UNITS)+" ")])})),o("div",[e._v(e._s(e.iframe3.obj.time))])],2):e._e()]),o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading4,expression:"loading4"}],staticClass:"video-component-content-video-content-video-four",staticStyle:{margin:"0 4px 0 0"}},[o("video",{ref:"videoPlayer4",staticClass:"video-component-content-video-content-video-one",class:{active:e.videoInfor.videoId==e.iframe4.id&&e.videoInfor.videoId},attrs:{id:"421",controls:""}},[e._v("/> ")]),o("div",{staticClass:"video-component-content-video-content-video-one-cover",on:{click:function(t){return t.stopPropagation(),e.playVideo("4",421)},dblclick:function(t){return t.stopPropagation(),e.fullVideo(421)}}}),e.iframe4.obj?o("div",{staticClass:"video-component-content-video-content-video-monitor-value"},[e._l(e.iframe4.obj.configList.slice(0,6),(function(t,n){return o("div",{key:n},[e._v(" "+e._s(t.CONFIG_DESC)+" "+e._s(t.runTimeData.CONFIG_VALUE)+" "+e._s(t.UNITS)+" ")])})),o("div",[e._v(e._s(e.iframe4.obj.time))])],2):e._e()]),o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading5,expression:"loading5"}],staticClass:"video-component-content-video-content-video-four"},[o("video",{ref:"videoPlayer5",staticClass:"video-component-content-video-content-video-one",class:{active:e.videoInfor.videoId==e.iframe5.id&&e.videoInfor.videoId},attrs:{id:"422",controls:""}},[e._v("/> ")]),o("div",{staticClass:"video-component-content-video-content-video-one-cover",on:{click:function(t){return t.stopPropagation(),e.playVideo("5",422)},dblclick:function(t){return t.stopPropagation(),e.fullVideo(422)}}}),e.iframe5.obj?o("div",{staticClass:"video-component-content-video-content-video-monitor-value"},[e._l(e.iframe5.obj.configList.slice(0,6),(function(t,n){return o("div",{key:n},[e._v(" "+e._s(t.CONFIG_DESC)+e._s(t.runTimeData.CONFIG_VALUE)+" "+e._s(t.UNITS)+" ")])})),o("div",[e._v(e._s(e.iframe5.obj.time))])],2):e._e()])]):e._e(),9===e.videoSplitMode?o("div",{directives:[{name:"show",rawName:"v-show",value:!e.urlFlag,expression:"!urlFlag"}],staticClass:"video-component-content-video-content-mode"},[o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading6,expression:"loading6"}],staticClass:"video-component-content-video-content-video-nine",staticStyle:{margin:"0 4px 4px 0"}},[o("video",{ref:"videoPlayer6",staticClass:"video-component-content-video-content-video-one",class:{active:e.videoInfor.videoId==e.iframe6.id&&e.videoInfor.videoId},attrs:{id:"911",controls:""}},[e._v("/> ")]),o("div",{staticClass:"video-component-content-video-content-video-one-cover",on:{click:function(t){return t.stopPropagation(),e.playVideo("6",911)},dblclick:function(t){return t.stopPropagation(),e.fullVideo(911)}}}),e.iframe6.obj?o("div",{staticClass:"video-component-content-video-content-video-monitor-value"},[e._l(e.iframe6.obj.configList.slice(0,6),(function(t,n){return o("div",{key:n},[e._v(" "+e._s(t.CONFIG_DESC)+" "+e._s(t.runTimeData.CONFIG_VALUE)+" "+e._s(t.UNITS)+" ")])})),o("div",[e._v(e._s(e.iframe6.obj.time))])],2):e._e()]),o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading7,expression:"loading7"}],staticClass:"video-component-content-video-content-video-nine",staticStyle:{margin:"0 4px 4px 0"}},[o("video",{ref:"videoPlayer7",staticClass:"video-component-content-video-content-video-one",class:{active:e.videoInfor.videoId==e.iframe7.id&&e.videoInfor.videoId},attrs:{id:"912",controls:""}},[e._v("/> ")]),o("div",{staticClass:"video-component-content-video-content-video-one-cover",on:{click:function(t){return t.stopPropagation(),e.playVideo("7",912)},dblclick:function(t){return t.stopPropagation(),e.fullVideo(912)}}}),e.iframe7.obj?o("div",{staticClass:"video-component-content-video-content-video-monitor-value"},[e._l(e.iframe7.obj.configList.slice(0,6),(function(t,n){return o("div",{key:n},[e._v(" "+e._s(t.CONFIG_DESC)+" "+e._s(t.runTimeData.CONFIG_VALUE)+" "+e._s(t.UNITS)+" ")])})),o("div",[e._v(e._s(e.iframe7.obj.time))])],2):e._e()]),o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading8,expression:"loading8"}],staticClass:"video-component-content-video-content-video-nine",staticStyle:{margin:"0 0 4px"}},[o("video",{ref:"videoPlayer8",staticClass:"video-component-content-video-content-video-one",class:{active:e.videoInfor.videoId==e.iframe8.id&&e.videoInfor.videoId},attrs:{id:"913",controls:""}},[e._v("/> ")]),o("div",{staticClass:"video-component-content-video-content-video-one-cover",on:{click:function(t){return t.stopPropagation(),e.playVideo("8",913)},dblclick:function(t){return t.stopPropagation(),e.fullVideo(913)}}}),e.iframe8.obj?o("div",{staticClass:"video-component-content-video-content-video-monitor-value"},[e._l(e.iframe8.obj.configList.slice(0,6),(function(t,n){return o("div",{key:n},[e._v(" "+e._s(t.CONFIG_DESC)+" "+e._s(t.runTimeData.CONFIG_VALUE)+" "+e._s(t.UNITS)+" ")])})),o("div",[e._v(e._s(e.iframe8.obj.time))])],2):e._e()]),o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading9,expression:"loading9"}],staticClass:"video-component-content-video-content-video-nine",staticStyle:{margin:"0 4px 4px 0"}},[o("video",{ref:"videoPlayer9",staticClass:"video-component-content-video-content-video-one",class:{active:e.videoInfor.videoId==e.iframe9.id&&e.videoInfor.videoId},attrs:{id:"921",controls:""}},[e._v("/> ")]),o("div",{staticClass:"video-component-content-video-content-video-one-cover",on:{click:function(t){return t.stopPropagation(),e.playVideo("9",921)},dblclick:function(t){return t.stopPropagation(),e.fullVideo(921)}}}),e.iframe9.obj?o("div",{staticClass:"video-component-content-video-content-video-monitor-value"},[e._l(e.iframe9.obj.configList.slice(0,6),(function(t,n){return o("div",{key:n},[e._v(" "+e._s(t.CONFIG_DESC)+e._s(t.runTimeData.CONFIG_VALUE)+" "+e._s(t.UNITS)+" ")])})),o("div",[e._v(e._s(e.iframe9.obj.time))])],2):e._e()]),o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading10,expression:"loading10"}],staticClass:"video-component-content-video-content-video-nine",staticStyle:{margin:"0 4px 4px 0"}},[o("video",{ref:"videoPlayer10",staticClass:"video-component-content-video-content-video-one",class:{active:e.videoInfor.videoId==e.iframe10.id&&e.videoInfor.videoId},attrs:{id:"922",controls:""}},[e._v("/> ")]),o("div",{staticClass:"video-component-content-video-content-video-one-cover",on:{click:function(t){return t.stopPropagation(),e.playVideo("10",922)},dblclick:function(t){return t.stopPropagation(),e.fullVideo(922)}}}),e.iframe10.obj?o("div",{staticClass:"video-component-content-video-content-video-monitor-value"},[e._l(e.iframe10.obj.configList.slice(0,6),(function(t,n){return o("div",{key:n},[e._v(" "+e._s(t.CONFIG_DESC)+" "+e._s(t.runTimeData.CONFIG_VALUE)+" "+e._s(t.UNITS)+" ")])})),o("div",[e._v(e._s(e.iframe10.obj.time))])],2):e._e()]),o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading11,expression:"loading11"}],staticClass:"video-component-content-video-content-video-nine",staticStyle:{margin:"0 0 4px 0"}},[o("video",{ref:"videoPlayer11",staticClass:"video-component-content-video-content-video-one",class:{active:e.videoInfor.videoId==e.iframe11.id&&e.videoInfor.videoId},attrs:{id:"923",controls:""}},[e._v("/> ")]),o("div",{staticClass:"video-component-content-video-content-video-one-cover",on:{click:function(t){return t.stopPropagation(),e.playVideo("11",923)},dblclick:function(t){return t.stopPropagation(),e.fullVideo(923)}}}),e.iframe11.obj?o("div",{staticClass:"video-component-content-video-content-video-monitor-value"},[e._l(e.iframe11.obj.configList.slice(0,6),(function(t,n){return o("div",{key:n},[e._v(" "+e._s(t.CONFIG_DESC)+" "+e._s(t.runTimeData.CONFIG_VALUE)+" "+e._s(t.UNITS)+" ")])})),o("div",[e._v(e._s(e.iframe11.obj.time))])],2):e._e()]),o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading12,expression:"loading12"}],staticClass:"video-component-content-video-content-video-nine",staticStyle:{margin:"0 4px 0 0"}},[o("video",{ref:"videoPlayer12",staticClass:"video-component-content-video-content-video-one",class:{active:e.videoInfor.videoId==e.iframe12.id&&e.videoInfor.videoId},attrs:{id:"931",controls:""}},[e._v("/> ")]),o("div",{staticClass:"video-component-content-video-content-video-one-cover",on:{click:function(t){return t.stopPropagation(),e.playVideo("12",931)},dblclick:function(t){return t.stopPropagation(),e.fullVideo(931)}}}),e.iframe12.obj?o("div",{staticClass:"video-component-content-video-content-video-monitor-value"},[e._l(e.iframe12.obj.configList.slice(0,6),(function(t,n){return o("div",{key:n},[e._v(" "+e._s(t.CONFIG_DESC)+" "+e._s(t.runTimeData.CONFIG_VALUE)+" "+e._s(t.UNITS)+" ")])})),o("div",[e._v(e._s(e.iframe12.obj.time))])],2):e._e()]),o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading13,expression:"loading13"}],staticClass:"video-component-content-video-content-video-nine",staticStyle:{margin:"0 4px 0 0"}},[o("video",{ref:"videoPlayer13",staticClass:"video-component-content-video-content-video-one",class:{active:e.videoInfor.videoId==e.iframe13.id&&e.videoInfor.videoId},attrs:{id:"932",controls:""}},[e._v("/> ")]),o("div",{staticClass:"video-component-content-video-content-video-one-cover",on:{click:function(t){return t.stopPropagation(),e.playVideo("13",932)},dblclick:function(t){return t.stopPropagation(),e.fullVideo(932)}}}),e.iframe13.obj?o("div",{staticClass:"video-component-content-video-content-video-monitor-value"},[e._l(e.iframe13.obj.configList.slice(0,6),(function(t,n){return o("div",{key:n},[e._v(" "+e._s(t.CONFIG_DESC)+e._s(t.runTimeData.CONFIG_VALUE)+" "+e._s(t.UNITS)+" ")])})),o("div",[e._v(e._s(e.iframe13.obj.time))])],2):e._e()]),o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading5,expression:"loading5"}],staticClass:"video-component-content-video-content-video-nine"},[o("video",{ref:"videoPlayer14",staticClass:"video-component-content-video-content-video-one",class:{active:e.videoInfor.videoId==e.iframe14.id&&e.videoInfor.videoId},attrs:{id:"933",controls:""}},[e._v("/> ")]),o("div",{staticClass:"video-component-content-video-content-video-one-cover",on:{click:function(t){return t.stopPropagation(),e.playVideo("14",933)},dblclick:function(t){return t.stopPropagation(),e.fullVideo(933)}}}),e.iframe14.obj?o("div",{staticClass:"video-component-content-video-content-video-monitor-value"},[e._l(e.iframe14.obj.configList.slice(0,6),(function(t,n){return o("div",{key:n},[e._v(" "+e._s(t.CONFIG_DESC)+e._s(t.runTimeData.CONFIG_VALUE)+" "+e._s(t.UNITS)+" ")])})),o("div",[e._v(e._s(e.iframe14.obj.time))])],2):e._e()])]):e._e()]),o("div",{staticClass:"video-component-content-video-content-toolbar"},[o("div",{staticClass:"one",class:{active:1===e.videoSplitMode},attrs:{title:"单屏"},on:{click:function(t){return e.changeMode(1)}}}),o("div",{staticClass:"four",class:{active:4===e.videoSplitMode},attrs:{title:"四屏"},on:{click:function(t){return e.changeMode(4)}}}),o("div",{staticClass:"nine",class:{active:9===e.videoSplitMode},attrs:{title:"九屏"},on:{click:function(t){return e.changeMode(9)}}})])])])])},_=[],A=(o("caad"),o("d3b7"),o("25f0"),o("2532"),o("96cf"),o("1da1")),S=o("ba56"),w=o.n(S),I=o("5c96"),P=o.n(I),N={name:"VideoComp",props:["videoStyle","videoData","videoCodeList"],data:function(){return{url:"",urlFlag:!1,theme:{},innerUrl:"",outerUrl:"",videoInfor:{maliu:"sub",speed:4,name:"",videoId:null},serchKey:"",videoSplitMode:1,videoPlayer1:null,videoPlayer2:null,videoPlayer3:null,videoPlayer4:null,videoPlayer5:null,videoPlayer6:null,videoPlayer7:null,videoPlayer8:null,videoPlayer9:null,videoPlayer10:null,videoPlayer11:null,videoPlayer12:null,videoPlayer13:null,videoPlayer14:null,loading1:!1,loading2:!1,loading3:!1,loading4:!1,loading5:!1,loading6:!1,loading7:!1,loading8:!1,loading9:!1,loading10:!1,loading11:!1,loading12:!1,loading13:!1,loading14:!1,activeUrl:"",activeId:"",activeName:"",iframe1:{url:"",name:"",id:"",obj:null},iframe2:{url:"",name:"",id:"",obj:null},iframe3:{url:"",name:"",id:"",obj:null},iframe4:{url:"",name:"",id:"",obj:null},iframe5:{url:"",name:"",id:"",obj:null},iframe6:{url:"",name:"",id:"",obj:null},iframe7:{url:"",name:"",id:"",obj:null},iframe8:{url:"",name:"",id:"",obj:null},iframe9:{url:"",name:"",id:"",obj:null},iframe10:{url:"",name:"",id:"",obj:null},iframe11:{url:"",name:"",id:"",obj:null},iframe12:{url:"",name:"",id:"",obj:null},iframe13:{url:"",name:"",id:"",obj:null},iframe14:{url:"",name:"",id:"",obj:null}}},created:function(){if(!w.a)throw Object(I["Notification"])({message:"视频组件依赖于Hls组件，请安装：npm install --save hls.js",type:"error",position:"bottom-right",duration:1e3}),"视频组件依赖于Hls组件，请安装：npm install --save hls.js"},beforeDestroy:function(){this.cancelAllVideo()},directives:{focus:{update:function(e,t){var o=t.value;if(o){var n=e.querySelector("input")||e.querySelector("textarea");n.focus()}},inserted:function(e){e.focus()}}},mounted:function(){var e=!0,t=document.body.clientWidth;t<600&&(e=!1),this.$store.dispatch("upShowLeftList",e);var o=this;window.addEventListener("onorientationchange"in window?"orientationchange":"resize",(function(){180!==window.orientation&&0!==window.orientation||o.$nextTick((function(){o.$store.dispatch("upShowLeftList",!1)})),90!==window.orientation&&-90!==window.orientation||o.$nextTick((function(){o.$store.dispatch("upShowLeftList",!0)}))}),!1)},watch:{},computed:{isPC:function(){return document.body.offsetWidth>600},leftShow:function(){return this.$store.state.isShowLeftList},videoArray:function(){return this.videoData},themeData:function(){this.theme={list:{},videoContent:{}};var e={list:{header:"#1586e2",shadow:"0.25rem 0.25rem 0.25rem 0 rgba(0, 0, 70, 0.2)"},videoContent:{backgroundColor:"black",toolbarColor:"#3D3D3D",videoSelectedColor:"#6DC542",videoSlot:"#262626"}};return this.theme.list=this.videoStyle.list||e.list,this.theme.videoContent=this.videoStyle.videoContent||e.videoContent,this.theme.videoContent.videoSlot.includes("png")&&(this.theme.videoContent.videoSlot="url("+this.theme.videoContent.videoSlot+") no-repeat 0 0 / 100% 100%"),this.setTheme(),this.theme}},methods:{getImg:function(e){return o("746f")("./"+e+".png")},addVideoUrl:function(){var e=this;if(this.urlFlag)return this.urlFlag=!1,document.documentElement.style.setProperty("--video-component-content-video-content-mode-content","none"),document.documentElement.style.setProperty("--video-component-content-video-content-video-one-cover-top","calc(-100% - 0px)"),void this.$nextTick((function(){e.$refs.searchRef.focus()}));this.urlFlag=!0,document.documentElement.style.setProperty("--video-component-content-video-content-mode-content","blur(2px)"),document.documentElement.style.setProperty("--video-component-content-video-content-video-one-cover-top","calc(-100% - 4px)"),this.$nextTick((function(){e.$refs.inputRef.focus()}))},getUrl:function(){var e=this;this.urlFlag=!1,document.documentElement.style.setProperty("--video-component-content-video-content-mode-content","none"),document.documentElement.style.setProperty("--video-component-content-video-content-video-one-cover-top","calc(-100% - 4px)"),1===this.videoSplitMode&&(this.activeUrl=this.url,this.activeId="测试",this.activeName="测试",this.iframe1.url=this.activeUrl,this.iframe1.id=this.activeId,this.iframe1.name=this.activeName,this.loading1=!0,this.handlerHlsJs(this.$refs.videoPlayer1,this.iframe1.url).then((function(t){e.videoPlayer1=t,e.loading1=!1})).catch((function(e){throw"视频播放失败"+e})))},changeMode:function(e){var t=this;this.hiddenBorder(),this.cancelAllVideo((function(){t.url="",t.videoSplitMode=e,document.querySelectorAll("video").forEach((function(e){e["disablePictureInPicture"]=!0,e["controlslist"]="nodownload noremoteplayback"}))}))},handleNodeClick:function(e){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(t.url="",e.JXCS){o.next=4;break}throw Object(I["Notification"])({message:"获取视频流地址失败！",type:"error",position:"bottom-right",duration:1e3}),"获取视频流地址失败";case 4:if(t.activeId=e.JXCS,n=e.JXCS,n){o.next=9;break}throw Object(I["Notification"])({message:"获取视频流地址失败！",type:"error",position:"bottom-right",duration:1e3}),"获取视频流地址失败";case 9:t.activeUrl=n,t.activeName=e.SPDMC,1===t.videoSplitMode&&(t.iframe1.url=t.activeUrl,t.iframe1.id=t.activeId,t.iframe1.name=t.activeName,t.loading1=!0,t.handlerHlsJs(t.$refs.videoPlayer1,t.iframe1.url).then((function(e){t.videoPlayer1=e,t.loading1=!1})).catch((function(e){throw"视频播放失败"+e}))),e.monitor&&(t.iframe1.obj=e.monitor,t.videoInfor.obj=e.monitor);case 13:case"end":return o.stop()}}),o)})))()},playVideo:function(e,t){var o=this;if(this.hiddenBorder(),document.getElementById(t).style.border="1px solid "+this.theme.videoContent.videoSelectedColor,""!==this.url&&(this.activeUrl=this.url,this.activeId="测试",this.activeName="测试"),""===this.activeUrl)return this.videoInfor.name=this["iframe"+e].name,this.videoInfor.videoId=this["iframe"+e].id,void(this.videoInfor.obj=this["iframe"+e].obj);this["iframe"+e].url=this.activeUrl,this["iframe"+e].id=this.activeId,this["iframe"+e].name=this.activeName,this["loading"+e]=!0,this.videoInfor.name=this["iframe"+e].name,this.videoInfor.videoId=this["iframe"+e].id,this["iframe"+e].obj=this.videoInfor.obj;var n=this.$refs["videoPlayer"+e],i=this["iframe"+e];i&&i.url&&this.handlerHlsJs(n,i.url).then((function(t){o["videoPlayer"+e]=t,o["loading"+e]=!1})).catch((function(e){throw"视频播放失败"+e})),this.url="",this.activeId=null,this.activeUrl="",this.activeName=""},fullVideo:function(e){if(e){var t=document.getElementById(e),o=t.src;if(!o)return;var n=t.requestFullScreen||t.webkitRequestFullScreen||t.mozRequestFullScreen||t.msRequestFullscreen;"undefined"!=typeof n&&n&&n.call(t)}},setTheme:function(){var e=this.theme;document.documentElement.style.setProperty("--list-header",e.list.header),document.documentElement.style.setProperty("--list-shadow",e.list.shadow),document.documentElement.style.setProperty("--video-content-background-color",e.videoContent.backgroundColor),document.documentElement.style.setProperty("--video-content-toolbar-color",e.videoContent.toolbarColor),document.documentElement.style.setProperty("--video-content-slot",e.videoContent.videoSlot),document.documentElement.style.setProperty("--video-component-content-video-content-mode-height","100%"),document.documentElement.style.setProperty("--video-component-content-video-content-mode-content","none"),document.documentElement.style.setProperty("--video-component-content-video-content-video-one-cover-top","calc(-100% - 4px)")},hiddenBorder:function(){var e=null,t=[411,412,421,422,911,912,913,921,922,923,931,932,933];t.forEach((function(t){e=document.getElementById(t.toString()),e&&(e.style.border=0)}))},cancelAllVideo:function(e){var t=0;while(t<14)t++,this["videoPlayer"+t]&&this["videoPlayer"+t].destroy(),this["loading"+t]=!1,this["iframe"+t].url="",this["iframe"+t].id="",this["iframe"+t].name="",this["iframe"+t].obj="";this.videoInfor.obj="",this.activeUrl="","function"===typeof e&&e()},handlerHlsJs:function(e,t){if(t)return new Promise((function(o,n){try{if(w.a.isSupported()){var i=new w.a;i.loadSource(t),i.attachMedia(e),i.on(w.a.Events.MANIFEST_PARSED,(function(){e.play(),o(i)})),i.on(w.a.Events.ERROR,(function(e,t){if(t.details.includes("TimeOut"))throw Object(I["Notification"])({message:"视频流获取超时",type:"error",position:"bottom-right",duration:3e3}),"视频流获取超时"}))}}catch(a){n("error")}}))}}},j=N,k=(o("6ad7"),Object(l["a"])(j,b,_,!1,null,"1013518c",null)),E=k.exports,x={name:"HomePage",data:function(){return{videoStyle:{},videoData:[],videoCodeList:GLOBAL_SETTING.groupCodeList}},components:{VideoComp:E},mounted:function(){this.init()},computed:{},methods:{clearSelected:function(){this.$refs.videoCompRef.hiddenBorder()},init:function(){this.videoStyle={list:{header:"#1586e2",shadow:"0.25rem 0.25rem 0.25rem 0 rgba(0, 0, 70, 0.2)"},videoContent:{backgroundColor:"black",toolbarColor:"#3D3D3D",videoSelectedColor:"#6DC542",videoSlot:"#262626"}},this.videoData=GLOBAL_SETTING.videoData}}},O=x,U=Object(l["a"])(O,C,y,!1,null,"52ecfe0e",null),D=U.exports,T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"pageConten"},[o("router-view")],1)},L=[],V={name:"PageContent",data:function(){return{}},created:function(){},computed:{},components:{},methods:{}},F=V,G=(o("b945"),Object(l["a"])(F,T,L,!1,null,null,null)),B=G.exports;n["default"].use(g["a"]);var M,R=new g["a"]({routes:[{path:"/",name:"资源统计",shortcut:"1",component:D,selected:!0},{path:"/PageContent/",name:"子页面",component:B,children:[]}]}),Y=o("2f62"),K=o("ade3"),J="UPDATE_TOPMENU",q="UPDATE_LEFTLIST",Q=(M={},Object(K["a"])(M,J,(function(e,t){e.isShowTopMenu=t})),Object(K["a"])(M,q,(function(e,t){e.isShowLeftList=t})),M),X={},z=X,W={upShowTopMenu:function(e,t){var o=e.commit;o("UPDATE_TOPMENU",t)},upShowLeftList:function(e,t){var o=e.commit;o("UPDATE_LEFTLIST",t)}};n["default"].use(Y["a"]);var Z=new Y["a"].Store({state:{isShowTopMenu:!1,isShowLeftList:!1},getters:z,actions:W,mutations:Q,modules:{}}),$=Z,H=(o("0fae"),o("77ed")),ee=o.n(H),te=o("77a0"),oe=o.n(te),ne=o("2b27"),ie=o.n(ne),ae=o("5530"),re=o("bc3a"),se=o.n(re),ce=o("f2e8"),de=o.n(ce),le=se.a.create({timeout:18e4});le.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var ve={400:"请求参数错误",401:"权限不足, 请重新登录",403:"服务器拒绝本次访问",404:"请求资源未找到",500:"内部服务器错误",501:"服务器不支持该请求中使用的方法",502:"网关错误",504:"网关超时"};le.interceptors.request.use((function(e){return e.withCredentials=!0,"get"===e.method&&(e.params=Object(ae["a"])(Object(ae["a"])({},e.params),{},{t:(new Date).getTime()})),e.params=Object(ae["a"])({},e.params),e.url.includes("pur/contract/export")&&(e.headers["responseType"]="blob"),e.url.includes("upload")&&(e.headers["Content-Type"]="multipart/form-data;boundary=----WebKitFormBoundaryBAj2Xhnr6Ehfxa1t"),e}),(function(e){return Promise.reject(e)})),le.interceptors.response.use((function(e){return 200===e.status||e.data.Success||e.data.success||"success"===e.data.msg?Promise.resolve(e.data):(e.data.message||(e.data.message="请求失败"),Object(I["Message"])({message:e.data.message,type:"error"}),Promise.reject(e.data.message))}),(function(e){if(e.response){e.response.data.message||(e.response.data.message="请求失败");var t=e.response.status in ve?ve[e.response.status]:e.response.data.message;return Object(I["Message"])({message:t,type:"error"}),401===e.response.status&&Object(I["Message"])({message:"权限不足, 请重新登录",type:"error"}),Promise.reject(e)}return Promise.reject(new Error("请求超时, 请刷新重试"))}));var ue=function(e,t){return new Promise((function(o,n){de()(e,t,(function(e,t){e?Object(I["Message"])({message:"登录失败",type:"error"}):o(t)}))}))},me=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(n,i){le(Object(ae["a"])({method:"get",url:e,params:t},o)).then((function(e){n(e)})).catch((function(e){i(e)}))}))},fe=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(n,i){le(Object(ae["a"])({method:"post",url:e,params:t},o)).then((function(e){n(e)})).catch((function(e){i(e)}))}))},pe=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(n,i){le(Object(ae["a"])({method:"delete",url:e,params:t},o)).then((function(e){n(e)})).catch((function(e){i(e)}))}))},he=se.a,ge=function(e){$cookies.set("token",e,{path:"/"})},Ce=function(){$cookies.remove("token",{path:"/"})},ye=function(e,t){localStorage.setItem(e,t)},be=function(e){return localStorage.getItem(e)},_e=function(e){localStorage.removeItem(e)},Ae=function(){localStorage.clear()},Se={get:me,post:fe,del:pe,jsonp:ue,_axios:he,register:ge,unregister:Ce,setCache:ye,getCache:be,removeCacheByKey:_e,clearCache:Ae},we=Se,Ie=o("f580"),Pe=o.n(Ie);n["default"].use(Pe.a),n["default"].config.productionTip=!1,n["default"].use(P.a),n["default"].use(ee.a),n["default"].use(oe.a,{ops:{initialScrollY:!1,initialScrollX:!1,scrollingX:!0,scrollingY:!0,speed:100,easing:void 0,verticalNativeBarPos:"right"},name:"vue-scroll"}),n["default"].prototype.httpRequest=we,window.httpRequest=we,window.$cookies=ie.a,R.beforeEach((function(e,t,o){o()})),new n["default"]({el:"#app",store:$,router:R,components:{App:h},template:"<App/>"})},"5c3a":function(e,t,o){},"6ad7":function(e,t,o){"use strict";o("5c3a")},"746f":function(e,t,o){var n={"./其他.png":"2279","./地方.png":"c877","./央视.png":"b77b"};function i(e){var t=a(e);return o(t)}function a(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id="746f"},"962d":function(e,t,o){},a46a:function(e,t,o){},b77b:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABQUlEQVRIS82VAQ3CMBBF/xwgAQlIQAISkIAUJCABCUhAAhKQQB7ZX46jXUuWJVzSbCntf3f/2jFo5RhW1tdfAXaSGJdfqu6tAOHtOB6Srr2QHoDFEd1Luks6Sjr3QFqAKL4ZAYB4B4JdzzlQC2ARMkcUMaxyH04tSA+ABLGFQTh7KqEfQKp2zQHIGgFssv9kT9yCRcyxjvEVcwDs8UaetgsRsmaOarAr/vYBaQFYbL+piMwNcFX8fqgd3V6A7bINFnTmP1fg886TTLNAvHTY5PBBmCZqFTjDnGn019C5NdWPHZtsB1lF/w3J9hT7UKrAN9YnBMGSx119KAHYyGmx/wB4d3Av7DXrYj9490l7ry8Bsrf58pTsqvYhA9jsm+lnBvibFOfznqmKDCATLFgS2Df9X7Q+dktA1R4sFo0Cq1fwAjurVRmDlNxSAAAAAElFTkSuQmCC"},b945:function(e,t,o){"use strict";o("2015")},c877:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACSElEQVRIS+2Wv2sUQRTHv2+TK2wsQ0QREUFLIYU7cz+y1op/gyichCCx0sLijGBx9gYJESySxlaJiIiX3WRnLLSxUSxUUCLY2ySZr8x6K3fnrneEs3Ob/TFv3ue9N2++s4J/fMk4/dfr9UNJkmz3+uwDREqddwGagcNyx5gno8K9Y9nbaUJkJt4yF0oBWuupCeFlIZoQvB0G+u0YsiDAC0esJMY8KwXkA0qpAxWgScFcAPkuZLs3o67jBUBuCLjqHO4n1m4VZdxXoloYRoNGgchJEZkDOAlIm2ANQBPEA0euDtpPinzrGPMu/54BIq1Pk1yhYIZEZ9TaF0YsiACxcZoqP54B6kpdE8HtODUH/Xu1Wj0qe3vHy0Cb1v4RRK12ZmZz89VrP6eh1VeCN5PUPswADR22/D1O7eKs1ksEL5EwZQDJouQtb591nuAxgC8AjsSpkbpSL0XY8eN9AAKfBTJPxyuJtW/KALNK+QZoxak53KiqRyTXfbQNrT5ywp3DbnCvEJA79ORh69DQilm0WrcF7gcozyF4ukNMTwLrYwNEYXiMQdAiGBFc9JmUlmg/GRRl+h+QVSVf5LzF81I5hw0RaY1tkX29e9eB5GIpoLsPWoHj2Y61n8pata7DiwK5G6dmqki/SgG+/xtaG4Dh3zSpu5OX4tTOj5TBrA6vEnIn16JIqVO75HSpVFQq7wdPrl5br0UQXo+37NovNVXqhBN88M/jUVOvaybz3XceDHbEMLkolGvK9oYxy33nwX4cjTpnrH8VRdCfBbVqKPRHVA0AAAAASUVORK5CYII="},caca:function(e,t,o){"use strict";o("962d")},d6e3:function(e,t,o){"use strict";o("a46a")},dde5:function(e,t){}});