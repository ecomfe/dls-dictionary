(function(e){function l(l){for(var o,n,a=l[0],c=l[1],d=l[2],i=0,b=[];i<a.length;i++)n=a[i],Object.prototype.hasOwnProperty.call(t,n)&&t[n]&&b.push(t[n][0]),t[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(l);while(b.length)b.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var e,l=0;l<s.length;l++){for(var r=s[l],o=!0,a=1;a<r.length;a++){var c=r[a];0!==t[c]&&(o=!1)}o&&(s.splice(l--,1),e=n(n.s=r[0]))}return e}var o={},t={app:0},s=[];function n(l){if(o[l])return o[l].exports;var r=o[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=o,n.d=function(e,l,r){n.o(e,l)||Object.defineProperty(e,l,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,l){if(1&l&&(e=n(e)),8&l)return e;if(4&l&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&l&&"string"!=typeof e)for(var o in e)n.d(r,o,function(l){return e[l]}.bind(null,o));return r},n.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(l,"a",l),l},n.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},n.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=l,a=a.slice();for(var d=0;d<a.length;d++)l(a[d]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,l,r){e.exports=r("56d7")},"034f":function(e,l,r){"use strict";var o=r("85ec"),t=r.n(o);t.a},"0be0":function(e,l,r){},"1e53":function(e,l,r){},"24d8":function(e,l,r){"use strict";var o=r("8e72"),t=r.n(o);t.a},"272b":function(e,l,r){},"2d50":function(e,l,r){},"2d9d":function(e,l,r){},4813:function(e,l,r){"use strict";var o=r("2d50"),t=r.n(o);t.a},"4b52":function(e,l,r){"use strict";var o=r("c4fc"),t=r.n(o);t.a},"507f":function(e,l,r){"use strict";var o=r("a316"),t=r.n(o);t.a},"52ca":function(e,l,r){"use strict";var o=r("1e53"),t=r.n(o);t.a},"56d7":function(e,l,r){"use strict";r.r(l);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),t=function(){var e=this,l=e.$createElement,r=e._self._c||l;return r("div",{attrs:{id:"app"},on:{click:[function(l){return l.target!==l.currentTarget?null:e.focus(l)},e.waitToFocus],mousemove:e.waitToFocus,keydown:e.waitToFocus}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],ref:"search",attrs:{id:"search",type:"text",placeholder:"编号…",name:e.random},domProps:{value:e.query},on:{mouseenter:e.focus,input:function(l){l.target.composing||(e.query=l.target.value)}}}),r("div",{attrs:{id:"options"}}),r("div",{attrs:{id:"results"}},[e.exp?r("div",{key:"exp",staticClass:"result"},[r("v-exp-item",{key:"e:"+e.exp,attrs:{exp:e.exp}})],1):e._e(),e.layer?r("div",{key:"layer",staticClass:"result"},[r("v-layer-item",{key:"l:"+e.layer.code,attrs:{expanded:"",code:e.layer.code,label:e.layer.label,styles:e.layer.styles}})],1):e._e(),e.color?r("div",{key:"color",staticClass:"result"},[r("v-color-item",{key:"c:"+e.color.code,attrs:{expanded:"",code:e.color.code,label:e.color.label,styles:e.color.styles}})],1):e._e(),e.font?r("div",{key:"font",staticClass:"result"},[r("v-font-item",{key:"f:"+e.font.code,attrs:{code:e.font.code,label:e.font.label,styles:e.font.styles}})],1):e._e(),e.radius?r("div",{key:"radius",staticClass:"result"},[r("v-radius-item",{key:"r:"+e.radius.code,attrs:{code:e.radius.code,label:e.radius.label,radius:e.radius.value}})],1):e._e(),e.lineHeight?r("div",{key:"lineHeight",staticClass:"result"},[r("v-line-height-item",{key:"h:"+e.lineHeight.code,attrs:{code:e.lineHeight.code,label:e.lineHeight.label,"line-height":e.lineHeight.value}})],1):e._e(),e.shadow?r("div",{key:"shadow",staticClass:"result"},[r("v-shadow-item",{key:"h:"+e.shadow.code,attrs:{code:e.shadow.code,label:e.shadow.label,shadow:e.shadow.value}})],1):e._e()])])},s=[],n=(r("7db0"),r("a630"),r("d81d"),r("13d5"),r("a9e3"),r("b64b"),r("ac1f"),r("3ca3"),r("466d"),r("841c"),r("2909")),a=r("5530"),c=r("ade3"),d=r("3835"),u=function(){var e=this,l=e.$createElement,r=e._self._c||l;return r("div",{staticClass:"layer-item"},[r("v-desc",{attrs:{code:e.code,label:e.label}}),r("div",{staticClass:"detail"},[r("v-layer",{attrs:{styles:e.styles}}),e.expanded?r("div",{staticClass:"pieces"},[r("v-piece-table",{attrs:{properties:e.layerProps,styles:e.styles}})],1):e._e()],1)],1)},i=[],b=function(){var e=this,l=e.$createElement,r=e._self._c||l;return r("div",{staticClass:"desc"},[r("span",{staticClass:"code"},[e._v(e._s(e.code))]),r("span",{staticClass:"label"},[e._v(e._s(e.label))])])},f=[],y={name:"v-desc",props:{code:String,label:String}},g=y,p=(r("4b52"),r("2877")),v=Object(p["a"])(g,b,f,!1,null,"18ce9cea",null),h=v.exports,m=function(){var e=this,l=e.$createElement,r=e._self._c||l;return r("x-layer",{class:{focus:this.focus,disabled:this.disabled},attrs:{id:e.id},domProps:{innerHTML:e._s(e.content)}})},k=[],w=(r("99af"),r("a15b"),r("5319"),r("53ca")),S=r("d6bf");function C(e){return e?"boolean"===typeof e?e:Array.isArray(e)?e.map(C):"object"===Object(w["a"])(e)?Object.keys(e).reduce((function(l,r){return l[r]=C(e[r]),l}),{}):"string"===typeof e?e.replace(/@(\w+(?:-\w+)*)/g,(function(e,l){var r;return null===(r=S[l])||void 0===r?void 0:r.value})):e:e}function _(e,l){var r=e.match(/^(\d+)(\w+)$/)||[],o=Object(d["a"])(r,3),t=o[0],s=o[1],n=o[2];return t?Number(s)*l+n:e}var x=0,j={name:"v-layer",props:{styles:Array,disabled:Boolean,focus:Boolean,text:{type:String,default:"文"}},data:function(){return{hover:!1,active:!1,id:"layer".concat(++x)}},computed:{content:function(){var e=this,l=Object(d["a"])(this.styles,4),r=l[0],o=l[1],t=l[2],s=l[3];o=o||r,t=t||o,s=s||r;var a=C([r,o,t,s]);return["<style>"].concat(Object(n["a"])(["",":hover",":active",".disabled"].map((function(l,r){var o,t=a[r],s=Object.keys(t).reduce((function(e,l){var r;return e[l]=null!==(r=t[l])&&void 0!==r?r:a[0][l],e}),{});return["#".concat(e.id+l," {"),s.background?"background-color: ".concat(s.background,";"):"","border: 1px solid ".concat(null!==(o=s.border)&&void 0!==o?o:"transparent",";"),s.borderWidth?"border-width: ".concat(s.borderWidth,";"):"",s.color?"color: ".concat(s.color,";"):"",s.shadow?"box-shadow: ".concat(s.shadow,";"):"","}"].join("")}))),["</style>",r.color?this.text:""]).join("")}}},O=j,P=(r("507f"),Object(p["a"])(O,m,k,!1,null,"39bda697",null)),R=P.exports,E=function(){var e=this,l=e.$createElement,r=e._self._c||l;return r("table",[r("thead",[r("tr",[r("th"),r("th",{class:{hover:0===e.col}},[e._v("默认")]),r("th",{class:{hover:1===e.col}},[e._v("悬浮")]),r("th",{class:{hover:2===e.col}},[e._v("点击")]),r("th",{class:{hover:3===e.col}},[e._v("禁用")])])]),r("tbody",[r("tr",[r("td"),e._l(e.styles,(function(l,o){return r("td",{key:o,on:{mouseenter:function(l){return e.enterCol(o)},mouseleave:e.leaveCol}},[r("v-piece",e._b({},"v-piece",e.filledStyles[o],!1))],1)}))],2),e._l(e.properties,(function(l,o){return r("tr",{key:o},[r("th",[e._v(e._s(l.label))]),e._l(e.styles,(function(o,t){return r("td",{key:t,on:{mouseenter:function(l){return e.enterCol(t)},mouseleave:e.leaveCol}},[r("v-copy-button",{attrs:{value:e.getStyleProp(o,l.prop)}})],1)}))],2)}))],2)])},V=[],H=function(){var e=this,l=e.$createElement,r=e._self._c||l;return r("x-layer",{style:e.style},[e._v(e._s(this.color?this.text:""))])},L=[],T={name:"v-piece",inheritAttrs:!1,props:{background:String,border:String,borderWidth:String,color:String,shadow:String,text:{type:String,default:"文"},fontSize:String,fontWeight:String},computed:{style:function(){var e;return C({backgroundColor:this.background,border:"1px solid ".concat(null!==(e=this.border)&&void 0!==e?e:"transparent"),borderWidth:this.borderWidth||"invalid",color:this.color,boxShadow:this.shadow,fontSize:this.fontSize,fontWeight:this.fontWeight})}}},W=T,$=(r("8e90"),Object(p["a"])(W,H,L,!1,null,"56837ec0",null)),z=$.exports,N=function(){var e=this,l=e.$createElement,r=e._self._c||l;return r("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.value,expression:"value",arg:"copy"}],attrs:{"data-code":e.value,disabled:!e.value}},[e.value?r("v-icon",{attrs:{name:"regular/copy",label:"copy"}}):r("v-icon",{attrs:{name:"ban"}})],1)},A=[],B=r("bd19"),I=r.n(B),q=(r("bfa7"),r("af12"),{name:"v-copy-button",props:{value:String},components:{VIcon:I.a}}),M=q,F=(r("fb31"),Object(p["a"])(M,N,A,!1,null,"3008ff98",null)),D=F.exports,J={name:"v-piece-table",inject:["options"],components:{VPiece:z,VCopyButton:D},props:{styles:Array,properties:Array},data:function(){return{col:null}},computed:{filledStyles:function(){var e=this;return this.styles.map((function(l,r){var o=Object.keys(l).reduce((function(r,o){var t;return r[o]=null!==(t=l[o])&&void 0!==t?t:e.styles[0][o],r}),{});return Object(a["a"])({},o,{},e.options.focus&&e.styles[0].focusRing?{border:3===r?null:"error"===e.styles[0].focusRing?"@dls-border-color-error-focus":"@dls-border-color-focus",shadow:3===r?null:"error"===e.styles[0].focusRing?"@dls-shadow-error-focus":"@dls-shadow-focus"}:{})}))}},methods:{enterCol:function(e){this.col=e},leaveCol:function(){this.col=null},getStyleProp:function(e,l){if(Array.isArray(l)){for(var r=0;r<l.length;r++)if(null!=e[l[r]])return e[l[r]];return null}return e[l]}}},U=J,G=(r("b634"),Object(p["a"])(U,E,V,!1,null,"54e00802",null)),K=G.exports,Q={name:"v-layer-item",components:{VDesc:h,VLayer:R,VPieceTable:K},props:{code:String,label:String,styles:Array,expanded:Boolean},data:function(){return{layerProps:[{prop:"background",label:"背景"},{prop:"border",label:"边框"}]}}},X=Q,Y=(r("24d8"),Object(p["a"])(X,u,i,!1,null,"7536568a",null)),Z=Y.exports,ee=function(){var e=this,l=e.$createElement,r=e._self._c||l;return r("div",{staticClass:"color-item"},[r("v-desc",{attrs:{code:e.code,label:e.label}}),r("div",{staticClass:"detail"},[r("v-layer",{attrs:{styles:e.styles}}),e.expanded?r("div",{staticClass:"pieces"},[r("v-piece-table",{attrs:{properties:e.layerProps,styles:e.styles}})],1):e._e()],1)],1)},le=[],re={name:"v-color-item",components:{VDesc:h,VLayer:R,VPieceTable:K},props:{code:String,label:String,styles:Array,expanded:Boolean},data:function(){return{layerProps:[{prop:["color","border"],label:"颜色"}]}}},oe=re,te=(r("52ca"),Object(p["a"])(oe,ee,le,!1,null,"314224d4",null)),se=te.exports,ne=function(){var e=this,l=e.$createElement,r=e._self._c||l;return r("div",{staticClass:"font-item"},[r("v-desc",{attrs:{code:e.code,label:e.label}}),r("div",{staticClass:"value"},[r("v-piece",e._b({},"v-piece",e.fontStyles,!1)),r("v-copy-button",{attrs:{value:e.value}})],1)],1)},ae=[],ce={name:"v-font-item",components:{VDesc:h,VPiece:z,VCopyButton:D},props:{code:String,label:String,styles:Object},computed:{fontStyles:function(){return Object(a["a"])({},this.styles,{color:"@dls-foreground-color-neutral"})},value:function(){var e;return null!==(e=this.styles.fontSize)&&void 0!==e?e:this.styles.fontWeight}}},de=ce,ue=(r("bcbf"),Object(p["a"])(de,ne,ae,!1,null,"5e71a93a",null)),ie=ue.exports,be=function(){var e=this,l=e.$createElement,r=e._self._c||l;return r("div",{staticClass:"radius-item"},[r("v-desc",{attrs:{code:e.code,label:e.label}}),r("div",{staticClass:"value"},[r("div",{staticClass:"viewport"},[r("div",{staticClass:"box",style:e.styles})]),r("v-copy-button",{attrs:{value:e.radius}})],1)],1)},fe=[],ye={name:"v-radius-item",components:{VDesc:h,VCopyButton:D},props:{code:String,label:String,radius:String},computed:{styles:function(){return{borderRadius:C(this.radius)}}}},ge=ye,pe=(r("84e6"),Object(p["a"])(ge,be,fe,!1,null,"03dcaa2e",null)),ve=pe.exports,he=function(){var e=this,l=e.$createElement,r=e._self._c||l;return r("div",{staticClass:"line-height-item"},[r("v-desc",{attrs:{code:e.code,label:e.label}}),r("div",{staticClass:"value"},[r("div",{staticClass:"demo",style:e.styles},[e._v("百度将在 2020 年，在全线产品上线新的设计语言。")]),r("v-copy-button",{attrs:{value:e.lineHeight}})],1)],1)},me=[],ke={name:"v-radius-item",components:{VDesc:h,VCopyButton:D},props:{code:String,label:String,lineHeight:String},computed:{styles:function(){return{lineHeight:C(this.lineHeight)}}}},we=ke,Se=(r("8e53"),Object(p["a"])(we,he,me,!1,null,"6d51bacb",null)),Ce=Se.exports,_e=function(){var e=this,l=e.$createElement,r=e._self._c||l;return r("div",{staticClass:"shadow-item"},[r("v-desc",{attrs:{code:e.code,label:e.label}}),r("div",{staticClass:"value"},[r("div",{staticClass:"demo",style:e.styles}),r("v-copy-button",{attrs:{value:e.shadow}})],1)],1)},xe=[],je={name:"v-shadow-item",components:{VDesc:h,VCopyButton:D},props:{code:String,label:String,shadow:String},computed:{styles:function(){return{boxShadow:C(this.shadow)}}}},Oe=je,Pe=(r("5b91"),Object(p["a"])(Oe,_e,xe,!1,null,"6acb94d6",null)),Re=Pe.exports,Ee=function(){var e=this,l=e.$createElement,r=e._self._c||l;return r("div",{staticClass:"exp-item"},[r("div",{staticClass:"demo"},[r("div",{staticClass:"line",style:"width: "+e.length})]),r("div",{staticClass:"value"},[r("code",[e._v(e._s(e.label))]),r("v-copy-button",{attrs:{value:e.label}})],1)])},Ve=[],He={name:"v-exp-item",components:{VCopyButton:D},props:{exp:Object},computed:{label:function(){return"".concat(this.exp.unit," * ").concat(this.exp.count)},length:function(){return _(C(this.exp.unit),this.exp.count)}}},Le=He,Te=(r("4813"),Object(p["a"])(Le,Ee,Ve,!1,null,"4c11f314",null)),We=Te.exports,$e=r("9c87"),ze={H:"@dls-height-unit",P:"@dls-padding-unit"},Ne={name:"App",components:{VLayerItem:Z,VColorItem:se,VFontItem:ie,VRadiusItem:ve,VLineHeightItem:Ce,VShadowItem:Re,VExpItem:We},provide:function(){return{options:this.options}},data:function(){return{query:"",random:"i".concat(Math.floor(1e3*Math.random())),options:{focus:!1}}},computed:{layer:function(){return Ae(this.query)},color:function(){return Be(this.query)},exp:function(){var e=this.query.match(/^(\d+)([HP])$/i)||[],l=Object(d["a"])(e,3),r=l[0],o=l[1],t=l[2];return r?{unit:ze[t.toUpperCase()],count:Number(o)}:null},font:function(){return Fe(this.query)},radius:function(){return De(this.query)},lineHeight:function(){return Je(this.query)},shadow:function(){return Ue(this.query)}},mounted:function(){var e=this;this.focus(),window.addEventListener("focus",(function(){e.focus()})),document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState&&e.focus()}))},methods:{focus:function(){this.$refs.search.select()},waitToFocus:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout((function(){e.focus()}),3e3)}}};function Ae(e){if(!e)return null;for(var l=0;l<$e.layers.length;l++){var r=$e.layers[l];if(r.children)for(var o=0;o<r.children.length;o++){var t=r.children[o];if(e.toLowerCase()===t.code.toLowerCase())return{code:t.code,label:t.label,styles:Ie(qe(r.styles,t.styles)),group:r}}}return null}function Be(e){if(!e)return null;var l=$e.colors.find((function(l){return e.toLowerCase()===l.code.toLowerCase()}));return l?{code:l.code,label:l.label,styles:Ie(l.styles)}:null}function Ie(e){return Array.from({length:4}).map((function(l,r){var o,t=e.line?"border":"color",s=(o={background:e.background?e.background[r]:null,border:e.border?e.border[r]:null},Object(c["a"])(o,t,e.color?e.color[r]:null),Object(c["a"])(o,"borderWidth",e.line?"4px":null),Object(c["a"])(o,"focusRing",e.focusRing),o);return s}))}function qe(e,l){return Object.keys(e).reduce((function(e,r){return r in l&&(Array.isArray(l[r])?e[r]=Me(e[r],l[r]):e[r]=l[r]),e}),Object(a["a"])({},e))}function Me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return l.reduce((function(e,l,r){return!1!==l&&(e[r]=l),e}),Object(n["a"])(e))}function Fe(e){if(!e)return null;var l=$e.fonts.find((function(l){return e.toLowerCase()===l.code.toLowerCase()}));return l?Object(a["a"])({},l):null}function De(e){if(!e)return null;var l=$e.radii.find((function(l){return e.toLowerCase()===l.code.toLowerCase()}));return l?{code:l.code,label:l.label,value:l.styles.radius}:null}function Je(e){if(!e)return null;var l=$e.lineHeights.find((function(l){return e.toLowerCase()===l.code.toLowerCase()}));return l?{code:l.code,label:l.label,value:l.styles.lineHeight}:null}function Ue(e){if(!e)return null;var l=$e.shadows.find((function(l){return e.toLowerCase()===l.code.toLowerCase()}));return l?{code:l.code,label:l.label,value:l.styles.shadow}:null}var Ge=Ne,Ke=(r("034f"),Object(p["a"])(Ge,t,s,!1,null,null,null)),Qe=Ke.exports,Xe=r("4eb5"),Ye=r.n(Xe);o["a"].use(Ye.a),o["a"].config.productionTip=!1,o["a"].config.ignoredElements.push("x-layer"),new o["a"]({render:function(e){return e(Qe)}}).$mount("#app")},"5b91":function(e,l,r){"use strict";var o=r("272b"),t=r.n(o);t.a},"84e6":function(e,l,r){"use strict";var o=r("a8c8"),t=r.n(o);t.a},"85ec":function(e,l,r){},"8e53":function(e,l,r){"use strict";var o=r("0be0"),t=r.n(o);t.a},"8e72":function(e,l,r){},"8e90":function(e,l,r){"use strict";var o=r("2d9d"),t=r.n(o);t.a},"9c87":function(e){e.exports=JSON.parse('{"layers":[{"code":"P","label":"主要图层","styles":{"background":["@dls-background-color-primary","@dls-background-color-primary-hover","@dls-background-color-primary-active","@dls-background-color-primary-disabled"],"border":["@dls-border-color-primary",null,null,"@dls-border-color-primary-disabled"],"focusRing":true},"children":[{"code":"P","label":"按钮主色","styles":{}}]},{"code":"ST","label":"加强图层","styles":{"background":["@dls-background-color-strong","@dls-background-color-strong-hover","@dls-background-color-strong-active","@dls-background-color-strong-disabled"],"border":["@dls-border-color-strong",null,null,"@dls-border-color-strong-disabled"],"focusRing":true},"children":[{"code":"ST1","label":"按钮白浅主色","styles":{"background":[null,false,false,null],"border":null,"focusRing":false}},{"code":"ST2","label":"按钮主色边框","styles":{}}]},{"code":"C","label":"当前图层","styles":{"background":["@dls-background-color-current","@dls-background-color-current-hover","@dls-background-color-current-active","@dls-background-color-current-disabled"],"border":["@dls-border-color-current",null,null,"@dls-border-color-current-disabled"],"focusRing":true},"children":[{"code":"C1","label":"按钮主色边框填色","styles":{}},{"code":"C2","label":"按钮浅主色","styles":{"border":null}}]},{"code":"F","label":"可填充图层","styles":{"background":["@dls-background-color-fillable","@dls-background-color-fillable-hover","@dls-background-color-fillable-active","@dls-background-color-fillable-disabled"],"border":["@dls-border-color-fillable","@dls-border-color-fillable-hover","@dls-border-color-fillable-active","@dls-border-color-fillable-disabled"],"focusRing":true},"children":[{"code":"F1","label":"输入框","styles":{"background":[false,null,null,false]}},{"code":"F2","label":"按钮边框普通","styles":{}}]},{"code":"P","label":"可点按图层","styles":{"background":["@dls-background-color-pressable","@dls-background-color-pressable-hover","@dls-background-color-pressable-active","@dls-background-color-pressable-disabled"],"border":["@dls-border-color-pressable","@dls-border-color-pressable-hover","@dls-border-color-pressable-active","@dls-border-color-pressable-disabled"],"focusRing":true},"children":[{"code":"P1","label":"按钮白色贴边","styles":{"background":[false,false,false,null],"border":null,"focusRing":false}},{"code":"P2","label":"按钮边框浅","styles":{}},{"code":"P3","label":"按钮白灰","styles":{"border":null}}]},{"code":"B","label":"基础图层","styles":{"background":[],"border":[],"focusRing":false},"children":[{"code":"B1","label":"全局图层1","styles":{"background":["@dls-background-color-base-1","@dls-background-color-base-1-hover","@dls-background-color-base-1-active","@dls-background-color-base-1-disabled"]}},{"code":"B2","label":"全局图层2","styles":{"background":["@dls-background-color-base-2","@dls-background-color-base-2-hover","@dls-background-color-base-2-active","@dls-background-color-base-2-disabled"]}},{"code":"B3","label":"全局图层3","styles":{"background":["@dls-background-color-base-3","@dls-background-color-base-3-hover","@dls-background-color-base-3-active","@dls-background-color-base-3-disabled"]}}]},{"code":"NP","label":"主要中性图层","styles":{"background":["@dls-background-color-neutral-primary","@dls-background-color-neutral-primary-hover","@dls-background-color-neutral-primary-active","@dls-background-color-neutral-primary-disabled"],"border":["@dls-border-color-neutral-primary",null,null,"@dls-border-color-neutral-primary-disabled"],"focusRing":true},"children":[{"code":"NP","label":"主要中性图层","styles":{}}]},{"code":"N","label":"普通中性图层","styles":{"background":["@dls-background-color-neutral","@dls-background-color-neutral-hover","@dls-background-color-neutral-active","@dls-background-color-neutral-disabled"],"border":["@dls-border-color-neutral",null,null,"@dls-border-color-neutral-disabled"],"focusRing":true},"children":[{"code":"N1","label":"普通按钮边框","styles":{},"focusRing":false},{"code":"N2","label":"普通按钮贴边","styles":{"border":null}}]},{"code":"ES","label":"加强错误图层","styles":{"background":["@dls-background-color-error-strong","@dls-background-color-error-strong-hover","@dls-background-color-error-strong-active","@dls-background-color-error-strong-disabled"],"border":["@dls-border-color-error-strong",null,null,"@dls-border-color-error-strong-disabled"],"focusRing":"error"},"children":[{"code":"ES1","label":"输入框错误","styles":{"background":null}},{"code":"ES2","label":"按钮错误边框","styles":{"border":null}}]},{"code":"EP","label":"主要错误图层","styles":{"background":["@dls-background-color-error-primary","@dls-background-color-error-primary-hover","@dls-background-color-error-primary-active","@dls-background-color-error-primary-disabled"],"border":["@dls-border-color-error-primary",null,null,"@dls-border-color-error-primary-disabled"],"focusRing":"error"},"children":[{"code":"EP","label":"背景功能色错误","styles":{}}]},{"code":"E","label":"普通错误图层","styles":{"background":["@dls-background-color-error","@dls-background-color-error-hover","@dls-background-color-error-active","@dls-background-color-error-disabled"],"border":["@dls-border-color-error",null,null,"@dls-border-color-error-disabled"],"focusRing":"error"},"children":[{"code":"E1","label":"背景功能色错误浅带边框","styles":{}},{"code":"E2","label":"背景功能色错误浅","styles":{"border":null}}]},{"code":"IP","label":"主要信息图层","styles":{"background":["@dls-background-color-info-primary","@dls-background-color-info-primary-hover","@dls-background-color-info-primary-active","@dls-background-color-info-primary-disabled"],"border":["@dls-border-color-info-primary",null,null,"@dls-border-color-info-primary-disabled"],"focusRing":true},"children":[{"code":"IP","label":"背景功能色信息","styles":{}}]},{"code":"I","label":"普通信息图层","styles":{"background":["@dls-background-color-info","@dls-background-color-info-hover","@dls-background-color-info-active","@dls-background-color-info-disabled"],"border":["@dls-border-color-info",null,null,"@dls-border-color-info-disabled"],"focusRing":false},"children":[{"code":"I1","label":"背景功能色信息浅带边框","styles":{}},{"code":"I2","label":"背景功能色信息浅","styles":{"border":null}}]},{"code":"WP","label":"主要警示图层","styles":{"background":["@dls-background-color-warning-primary","@dls-background-color-warning-primary-hover","@dls-background-color-warning-primary-active","@dls-background-color-warning-primary-disabled"],"border":["@dls-border-color-warning-primary",null,null,"@dls-border-color-warning-primary-disabled"],"focusRing":true},"children":[{"code":"WP","label":"背景功能色警示","styles":{}}]},{"code":"W","label":"普通警示图层","styles":{"background":["@dls-background-color-warning","@dls-background-color-warning-hover","@dls-background-color-warning-active","@dls-background-color-warning-disabled"],"border":["@dls-border-color-warning",null,null,"@dls-border-color-warning-disabled"],"focusRing":true},"children":[{"code":"W1","label":"背景功能色警示浅带边框","styles":{}},{"code":"W2","label":"背景功能色警示浅","styles":{"border":null}}]},{"code":"SP","label":"主要通过图层","styles":{"background":["@dls-background-color-success-primary","@dls-background-color-success-primary-hover","@dls-background-color-success-primary-active","@dls-background-color-success-primary-disabled"],"border":["@dls-border-color-success-primary",null,null,"@dls-border-color-success-primary-disabled"],"focusRing":true},"children":[{"code":"SP","label":"背景功能色通过","styles":{}}]},{"code":"S","label":"普通通过图层","styles":{"background":["@dls-background-color-success","@dls-background-color-success-hover","@dls-background-color-success-active","@dls-background-color-success-disabled"],"border":["@dls-border-color-success",null,null,"@dls-border-color-success-disabled"],"focusRing":true},"children":[{"code":"S1","label":"背景功能色通过浅带边框","styles":{}},{"code":"S2","label":"背景功能色通过浅","styles":{"border":null}}]},{"code":"T","label":"半透明图层","styles":{"background":["@dls-background-color-translucent","@dls-background-color-translucent-hover","@dls-background-color-translucent-active","@dls-background-color-translucent-disabled"],"border":["@dls-border-color-translucent",null,null,"@dls-border-color-translucent-disabled"],"focusRing":true},"children":[{"code":"T","label":"半透明图层","styles":{}}]},{"code":"M","label":"模态图层","styles":{"background":["@dls-background-color-modal",null,null,null],"border":null,"focusRing":false},"children":[{"code":"M","label":"模态图层","styles":{}}]}],"colors":[{"code":"PR","label":"反转主要前景","styles":{"color":["@dls-foreground-color-primary-reverse",null,null,null],"background":["@dls-background-color-primary",null,null,null]}},{"code":"R","label":"反转前景","styles":{"color":["@dls-foreground-color-reverse",null,null,null],"background":["@dls-background-color-neutral-primary",null,null,null]}},{"code":"P","label":"主要前景","styles":{"color":["@dls-foreground-color-primary","@dls-foreground-color-primary-hover","@dls-foreground-color-primary-active","@dls-foreground-color-primary-disabled"]}},{"code":"NS","label":"增强前景","styles":{"color":["@dls-foreground-color-neutral-strong",null,null,null]}},{"code":"NN","label":"普通前景","styles":{"color":["@dls-foreground-color-neutral","@dls-foreground-color-neutral-hover","@dls-foreground-color-neutral-active","@dls-foreground-color-neutral-disabled"]}},{"code":"NL","label":"轻前景","styles":{"color":["@dls-foreground-color-neutral-light",null,null,null]}},{"code":"NW","label":"弱前景","styles":{"color":["@dls-foreground-color-neutral-weak","@dls-foreground-color-neutral-weak-hover","@dls-foreground-color-neutral-weak-active","@dls-foreground-color-neutral-weak-disabled"]}},{"code":"ND","label":"禁用前景","styles":{"color":["@dls-foreground-color-neutral-disabled",null,null,null]}},{"code":"IP","label":"主要信息前景","styles":{"color":["@dls-foreground-color-info-primary",null,null,"@dls-foreground-color-info-primary-disabled"]}},{"code":"SP","label":"主要通过前景","styles":{"color":["@dls-foreground-color-success-primary",null,null,"@dls-foreground-color-success-primary-disabled"]}},{"code":"WP","label":"主要警示前景","styles":{"color":["@dls-foreground-color-warning-primary",null,null,"@dls-foreground-color-warning-primary-disabled"]}},{"code":"EP","label":"主要错误前景","styles":{"color":["@dls-foreground-color-error-primary",null,null,"@dls-foreground-color-error-primary-disabled"]}},{"code":"L1","label":"线条 1","styles":{"color":["@dls-line-color-1",null,null,null],"line":true}},{"code":"L2","label":"线条 2","styles":{"color":["@dls-line-color-2",null,null,null],"line":true}},{"code":"H","label":"搜索高亮前景色","styles":{"color":["@dls-foreground-color-highlighted",null,null,null]}}],"fonts":[{"code":"T0","label":"字号 0","styles":{"fontSize":"@dls-font-size-0"}},{"code":"T1","label":"字号 1","styles":{"fontSize":"@dls-font-size-1"}},{"code":"T2","label":"字号 2","styles":{"fontSize":"@dls-font-size-2"}},{"code":"T3","label":"字号 3","styles":{"fontSize":"@dls-font-size-3"}},{"code":"T4","label":"字号 4","styles":{"fontSize":"@dls-font-size-4"}},{"code":"T5","label":"字号 5","styles":{"fontSize":"@dls-font-size-5"}},{"code":"W1","label":"字重 1","styles":{"fontWeight":"@dls-font-weight-1"}},{"code":"W2","label":"字重 2","styles":{"fontWeight":"@dls-font-weight-2"}},{"code":"W3","label":"字重 3","styles":{"fontWeight":"@dls-font-weight-3"}}],"radii":[{"code":"R0","label":"圆角 0","styles":{"radius":"@dls-border-radius-0"}},{"code":"R1","label":"圆角 1","styles":{"radius":"@dls-border-radius-1"}},{"code":"R2","label":"圆角 2","styles":{"radius":"@dls-border-radius-2"}},{"code":"R3","label":"圆角 3","styles":{"radius":"@dls-border-radius-3"}}],"lineHeights":[{"code":"LH1","label":"行高 1","styles":{"lineHeight":"@dls-line-height-1"}},{"code":"LH2","label":"行高 2","styles":{"lineHeight":"@dls-line-height-2"}},{"code":"LH3","label":"行高 3","styles":{"lineHeight":"@dls-line-height-3"}}],"shadows":[{"code":"S1","label":"阴影 1","styles":{"shadow":"@dls-shadow-1"}},{"code":"S2","label":"阴影 2","styles":{"shadow":"@dls-shadow-2"}},{"code":"S3","label":"阴影 3","styles":{"shadow":"@dls-shadow-3"}}]}')},a316:function(e,l,r){},a331:function(e,l,r){},a8c8:function(e,l,r){},b634:function(e,l,r){"use strict";var o=r("c8c9"),t=r.n(o);t.a},bcbf:function(e,l,r){"use strict";var o=r("e776"),t=r.n(o);t.a},c4fc:function(e,l,r){},c8c9:function(e,l,r){},e776:function(e,l,r){},fb31:function(e,l,r){"use strict";var o=r("a331"),t=r.n(o);t.a}});
//# sourceMappingURL=app.ad6a28b8.js.map