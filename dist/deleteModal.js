!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("deleteModal",[],t):"object"==typeof exports?exports.deleteModal=t():e.deleteModal=t()}("undefined"!=typeof self?self:this,function(){/******/
return function(e){/******/
/******/
// The require function
/******/
function t(r){/******/
/******/
// Check if module is in cache
/******/
if(n[r])/******/
return n[r].exports;/******/
// Create a new module (and put it into the cache)
/******/
var o=n[r]={/******/
i:r,/******/
l:!1,/******/
exports:{}};/******/
/******/
// Return the exports of the module
/******/
/******/
/******/
// Execute the module function
/******/
/******/
/******/
// Flag the module as loaded
/******/
return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}// webpackBootstrap
/******/
// The module cache
/******/
var n={};/******/
/******/
// Load entry module and return exports
/******/
/******/
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
/******/
// expose the module cache
/******/
/******/
/******/
// define getter function for harmony exports
/******/
/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
/******/
/******/
// __webpack_public_path__
/******/
return t.m=e,t.c=n,t.d=function(e,n,r){/******/
t.o(e,n)||/******/
Object.defineProperty(e,n,{/******/
configurable:!1,/******/
enumerable:!0,/******/
get:r})},t.n=function(e){/******/
var n=e&&e.__esModule?/******/
function(){return e.default}:/******/
function(){return e};/******/
/******/
return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([/* 0 */
/***/
function(e,t,n){"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */
t.a={name:"deleteModal",data:function(){return{
//模态框是否显示
isDeleteModal:!1}},methods:{
//打开或者关闭模态框 1为打开，2为关闭
openModal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isDeleteModal="1"==e},deletePost:function(){this.$emit("deletePost")}}}},/* 1 */
/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});/* harmony import */
var r=n(2);
// sumFunction 插件对应组件的名字
// Vue.js 的插件应当有一个公开方法 install 。第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象
// 参考：https://cn.vuejs.org/v2/guide/plugins.html#%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6
// 此处注意，组件需要添加name属性，代表注册的组件名称，也可以修改成其他的
r.a.install=function(e){return e.component(r.a.name,r.a)},//注册组件
// 标签的方式引入，留到后面再另开新篇讨论
//const install = function(Vue, opts = {}) {
//　　Vue.component(deleteModal.name, deleteModal);
//}
/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
//if (typeof window !== 'undefined' && window.Vue) {
//  install(window.Vue);
//}
/* harmony default export */
t.default=r.a},/* 2 */
/***/
function(e,t,n){"use strict";function r(e){n(3)}/* harmony import */
var o=n(0),s=n(9),i=n(8),a=r,u=i(o.a,s.a,!1,a,"data-v-4b33f89f",null);/* harmony default export */
t.a=u.exports},/* 3 */
/***/
function(e,t,n){
// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);
// add the styles to the DOM
n(6)("66ae7656",r,!0,{})},/* 4 */
/***/
function(e,t,n){t=e.exports=n(5)(!1),
// imports
// module
t.push([e.i,"",""])},/* 5 */
/***/
function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var s=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([s]).join("\n")}return[n].join("\n")}
// Adapted from convert-source-map (MIT)
function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
e.exports=function(e){var t=[];
// return the list of modules as css string
// import a list of modules into the list
return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<e.length;o++){var i=e[o];
// skip already imported module
// this implementation is not 100% perfect for weird media query combinations
//  when a module is imported multiple times with different media queries.
//  I hope this will never occur (Hey this way we have smaller bundles)
"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},/* 6 */
/***/
function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(s(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(s(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function s(e){var t,n,r=document.querySelector("style["+g+'~="'+e.id+'"]');if(r){if(v)
// has SSR styles and in production mode.
// simply do nothing.
return h;
// has SSR styles but in dev mode.
// for some reason Chrome can't handle source map in server-rendered
// style tags - source maps in <style> only works if the style tag is
// created and inserted dynamically. So we remove the server rendered
// styles and inject new ones.
r.parentNode.removeChild(r)}if(y){
// use singleton mode for IE9.
var s=p++;r=f||(f=o()),t=i.bind(null,r,s,!1),n=i.bind(null,r,s,!0)}else
// use multi-style-tag mode in all other cases
r=o(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),m.ssrId&&e.setAttribute(g,t.id),o&&(
// https://developer.chrome.com/devtools/docs/javascript-debugging
// this makes source maps inside style tags work properly in Chrome
n+="\n/*# sourceURL="+o.sources[0]+" */",
// http://stackoverflow.com/a/26603875
n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/
var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(7),d={},l=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},m=null,g="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,o){v=n,m=o||{};var s=c(e,t);return r(s),function(t){for(var n=[],o=0;o<s.length;o++){var i=s[o],a=d[i.id];a.refs--,n.push(a)}t?(s=c(e,t),r(s)):s=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete d[a.id]}}}};var _=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},/* 7 */
/***/
function(e,t){/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],i=s[0],a=s[1],u=s[2],c=s[3],d={id:e+":"+o,css:a,media:u,sourceMap:c};r[i]?r[i].parts.push(d):n.push(r[i]={id:i,parts:[d]})}return n}},/* 8 */
/***/
function(e,t){/* globals __VUE_SSR_CONTEXT__ */
// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.
e.exports=function(e,t,n,r,o,s){var i,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(i=e,a=e.default);
// Vue.extend constructor export interop
var c="function"==typeof a?a.options:a;
// render functions
t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),
// functional template
n&&(c.functional=!0),
// scopedId
o&&(c._scopeId=o);var d;if(s?(// server build
d=function(e){
// 2.3 injection
e=e||// cached call
this.$vnode&&this.$vnode.ssrContext||// stateful
this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,// functional
// 2.2 with runInNewContext: true
e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),
// inject component styles
r&&r.call(this,e),
// register component module identifier for async chunk inferrence
e&&e._registeredComponents&&e._registeredComponents.add(s)},
// used by ssr in case component is cached and beforeCreate
// never gets called
c._ssrRegister=d):r&&(d=r),d){var l=c.functional,f=l?c.render:c.beforeCreate;l?(
// for template-only hot-reload because in that case the render fn doesn't
// go through the normalizer
c._injectStyles=d,
// register for functioal component in vue file
c.render=function(e,t){return d.call(t),f(e,t)}):
// inject component registration as beforeCreate hook
c.beforeCreate=f?[].concat(f,d):[d]}return{esModule:i,exports:a,options:c}}},/* 9 */
/***/
function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Modal",{attrs:{width:"360"},model:{value:e.isDeleteModal,callback:function(t){e.isDeleteModal=t},expression:"isDeleteModal"}},[n("p",{attrs:{slot:"header"},slot:"header"},[n("span",[e._v("删除确认")])]),e._v(" "),n("div",[n("p",[e._v("是否删除此数据？")])]),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"dashed",size:"small"},on:{click:function(t){return e.openModal(2)}}},[e._v("取消")]),e._v(" "),n("Button",{attrs:{type:"error",size:"small"},on:{click:e.deletePost}},[e._v("删除")])],1)])],1)},o=[],s={render:r,staticRenderFns:o};/* harmony default export */
t.a=s}])});
//# sourceMappingURL=deleteModal.js.map