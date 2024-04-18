/*! For license information please see 88933ea7c75e0d360abcd310fe1d226b.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[5575],{5575:(e,t,n)=>{n.r(t),n.d(t,{arcgis_credit_estimate:()=>c,arcgis_select:()=>d});var i=n(28384),r=n(81068),o=n(62727),a=n(79878),s=n(26426),l=n(48680);n(66716),n(18869);const c=class{constructor(e){(0,i.r)(this,e),this.api=4,this.transactionCreditCost=void 0,this.availableCredits=void 0,this.showTotal=!1,this.formattedStrings=void 0}updateTransactionCost(){this.replaceStrings()}async componentWillLoad(){const e=await(0,o.g)(this.el);this.i18n=e[0],await this.replaceStrings()}async replaceStrings(){const{transactionCreditCost:e,availableCredits:t,i18n:n}=this,i={api:this.api,type:"decimal",places:2},o=await(0,r.f)(t,i),a=await(0,r.f)(e,i),s=await(0,r.f)(e/t,Object.assign(Object.assign({},i),{type:"percent"}));this.formattedStrings=Object.assign(Object.assign({},n),{creditsAvailable:n.creditsAvailable.replace("${credits}",o),creditsAvailableColon:n.creditsAvailableColon.replace("${credits}",o),creditsNeededColon:n.creditsNeededColon.replace("${credits}",a),creditsNeeded:n.creditsNeeded.replace("${credits}",a),creditsNeededPercent:n.creditsNeededPercent.replace("${percent}",s),needed:a,percent:s})}render(){if(!this.formattedStrings)return null;const{transactionCreditCost:e,availableCredits:t,showTotal:n,formattedStrings:r,api:o}=this,s=(0,a.g)(e,t);return(0,i.h)(i.H,null,(0,i.h)("div",{class:"left"},(0,i.h)("h4",{class:"header"},r.creditEstimate),(0,i.h)("p",{class:"text"},(0,i.h)("span",{class:"text--left"},r.creditsNeededColon),n&&(0,i.h)("span",null,r.creditsAvailableColon)),(0,i.h)("arcgis-meter",{max:t,maxLabel:r.notEnough,current:e,min:0,label:n?r.creditEstimate:r.creditsNeededPercent,api:o})),(0,i.h)("div",{class:"right"},(0,i.h)("span",{class:`number number--${s}`},"red"===s&&(0,i.h)("calcite-icon",{icon:"exclamation-mark-triangle"}),r.needed),r.creditsNeeded))}get el(){return(0,i.d)(this)}static get watchers(){return{transactionCreditCost:["updateTransactionCost"],availableCredits:["updateTransactionCost"]}}};c.style=":host{display:flex;border:1px solid var(--calcite-ui-border-1)}.left{padding-top:1rem;padding-bottom:1rem;padding-left:1.5rem;padding-right:1.5rem;flex:1 1 auto}.right{display:flex;flex-direction:column;justify-content:center;text-align:center;font-size:0.875rem;color:var(--calcite-ui-text-3);padding-top:1rem;padding-bottom:1rem;padding-left:1.5rem;padding-right:1.5rem;flex:0 0 auto;-webkit-border-start:1px solid var(--calcite-ui-border-1);border-inline-start:1px solid var(--calcite-ui-border-1)}.number{font-weight:700;font-size:1.625rem;display:block}.number--blue{color:var(--calcite-ui-brand)}.number--red{color:var(--calcite-ui-danger)}.number--orange{color:#fe583e}.number calcite-icon{vertical-align:-0.25rem;-webkit-margin-end:0.25rem;margin-inline-end:0.25rem}.header{font-weight:500;color:var(--calcite-ui-text-1);font-size:1rem;padding-bottom:0.5rem;margin:0}.text{font-size:0.875rem;color:var(--calcite-ui-text-2);margin-bottom:0.25rem;margin-top:0;display:flex}.text--left{flex:1 1 auto}";const d=class{constructor(e){(0,i.r)(this,e),this.arcgisOptionChange=(0,i.c)(this,"arcgisOptionChange",7),this.guid=(0,l.g)(),this.handleKeys=e=>{const t=e.key,{options:n,selectedIndex:i,selectOpen:r,selectedOption:o}=this;switch(t){case" ":case"Enter":this.selectOpen=!this.selectOpen,r&&this.arcgisOptionChange.emit(n[i].value);break;case"ArrowDown":this.selectOpen=!0,this.selectOpen&&(e.preventDefault(),this.selectedIndex=(i+1)%n.length);break;case"ArrowUp":this.selectOpen&&(e.preventDefault(),this.selectedIndex=0===i?n.length-1:i-1);break;case"Tab":r&&(this.selectedIndex=Math.max(n.findIndex((e=>e.value===o)),0),this.selectOpen=!1);break;case"Escape":this.selectedIndex=Math.max(n.findIndex((e=>e.value===o)),0),this.selectOpen=!1,this.defaultOptionRef.setFocus()}},this.renderOptions=()=>this.options.map((({optionTitle:e,description:t,icon:n,badge:r,value:o},a)=>{const s=a===this.selectedIndex,l=o===this.selectedOption;return(0,i.h)("arcgis-option",{"aria-selected":l?"true":"false",selected:l,active:s,optionTitle:e,value:o,badge:r,description:t,icon:n,autoFocus:!0})})),this.renderSelectedOption=()=>{var e;const{selectOpen:t,selectedOption:n,emptyText:r,options:o,guid:a}=this,s=o.find((e=>e.value===n));return(0,i.h)("arcgis-option",{"aria-controls":`select_${a}`,"aria-labelledby":`label_${a}`,"aria-expanded":t?"true":"false","aria-activedescendant":(null===(e=o[this.selectedIndex])||void 0===e?void 0:e.value)||"no-selection",isSelector:!0,optionTitle:(null==s?void 0:s.optionTitle)||r,value:(null==s?void 0:s.value)||"",description:(null==s?void 0:s.description)||"",badge:null==s?void 0:s.badge,icon:(null==s?void 0:s.icon)||"",ref:e=>this.defaultOptionRef=e,onArcgisSelectOpen:()=>{this.selectOpen=!this.selectOpen}})},this.selectOpen=!1,this.selectedIndex=void 0,this.selectedOption="",this.emptyText=void 0,this.options=void 0,this.label=void 0,this.labelDescription=void 0,this.labelWeight="bold",this.autoFocus=void 0,this.focusDelay=0}async componentDidLoad(){this.onSelectedOptionChanged(this.selectedOption),this.autoFocus&&this.selectOpen&&(await(0,s.t)(this.focusDelay),this.defaultOptionRef.focus())}async setFocus(){this.defaultOptionRef.setFocus()}closeOnBlur(){this.selectOpen=!1}onSelectedOptionChanged(e){const t=this.options.findIndex((t=>t.value===e));this.selectedIndex=Math.max(0,t)}async arcgisOptionChangeHandler(){this.selectOpen=!1,this.defaultOptionRef.setFocus()}render(){const{label:e,labelDescription:t,guid:n,selectOpen:r}=this,o=!(!this.label||!this.labelDescription);return(0,i.h)(i.H,null,(0,i.h)("label",{id:`label_${n}`,class:"label"},e&&(0,i.h)("span",{class:{label:!0,"label--bold":"bold"===this.labelWeight,large:o}},e,(0,i.h)("slot",{name:"afterLabel"})),t&&(0,i.h)("span",{class:{description:!0,large:o}},t)),(0,i.h)("div",{class:"select",onKeyDown:this.handleKeys},this.renderSelectedOption(),r&&(0,i.h)("div",{role:"listbox","aria-haspopup":"listbox",id:`select_${n}`,class:"dropdown-container"},this.renderOptions())))}get element(){return(0,i.d)(this)}static get watchers(){return{selectedOption:["onSelectedOptionChanged"]}}};d.style=":host{position:relative}.select{margin-top:0.25rem;margin-bottom:1rem;position:relative}.select--no-margin{margin:0}.label{font-size:0.875rem;color:var(--calcite-ui-text-1);line-height:18px}.label--bold{font-weight:500}.description{display:block;font-weight:400;font-size:0.875rem;color:var(--calcite-ui-text-3);margin-top:0.5rem;margin-bottom:1rem}.large{font-size:1rem}.dropdown-container{position:absolute;left:0;box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);width:100%;top:100%;max-height:240px;overflow:auto;z-index:100}"},26426:(e,t,n)=>{n.d(t,{a:()=>c,b:()=>p,c:()=>r,d:()=>i,e:()=>o,f:()=>d,g:()=>h,i:()=>a,m:()=>s,t:()=>l,u:()=>u});const i=(e,t)=>{let n,i="idle";const r=(...r)=>new Promise((o=>{switch(i){case"flushed":i="idle",n?(clearTimeout(n),o(e(...r))):o(null);break;case"invoked":clearTimeout(n),i="idle",o(e(...r));break;case"cancelled":clearTimeout(n),i="idle",o(null);break;default:n&&clearTimeout(n),i="pending",n=setTimeout((()=>(i="idle",o(e(...r)))),t)}}));return r.flush=function(...e){return i="flushed",r(...e)},r.invoke=function(...e){return i="invoked",r(...e)},r.cancel=function(...e){return i="cancelled",r(...e)},r.getStatus=function(){return i},r},r=(e,t)=>{let n;return(...i)=>new Promise((r=>{n||(n=setTimeout((()=>{clearTimeout(n),n=void 0,r(e(...i))}),t))}))};function o(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function a(e){return null!=e}async function s(e,t){return await Promise.all([e,l(t)]),e}function l(e){return new Promise((t=>setTimeout(t,e)))}const c=(e,t)=>Object.fromEntries((e||[]).map((e=>{const{key:n,data:i}=t(e);return[n,i]}))),d=(e,t)=>e.length===t.length&&e.reduce(((e,n)=>e&&t.indexOf(n)>-1),!0);function u(e,t){const n=[],i={};return e.forEach((e=>{const r=t(e);null==i[r]&&(i[r]=e,n.push(e))})),n}function p(e){const t={boolean:{},number:{},string:{}},n=[];return e.filter((e=>{let i=typeof e;return i in t?!t[i].hasOwnProperty(e)&&(t[i][e]=!0):!(n.indexOf(e)>=0)&&n.push(e)}))}const h=(e,t)=>[...Array(Math.ceil(e.length/t))].map(((n,i)=>e.slice(t*i,t+t*i)))},48680:(e,t,n)=>{n.d(t,{g:()=>i});const i=()=>[2,1,1,1,3].map((e=>{let t="";for(let n=0;n<e;n++)t+=(65536*(1+Math.random())|0).toString(16).substring(1);return t})).join("-")},81068:(e,t,n)=>{n.d(t,{C:()=>s,a:()=>d,f:()=>l,g:()=>a,l:()=>o});var i=n(66716),r=n(18869);const o=new Map([["ar","ar"],["bg","bg"],["bs","bs"],["ca","ca"],["cs","cs"],["da","da"],["de","de"],["el","el"],["en","en"],["es","es"],["et","et"],["fi","fi"],["fr","fr"],["he","he"],["hr","hr"],["hu","hu"],["id","id"],["it","it"],["ja","ja"],["ko","ko"],["lt","lt"],["lv","lv"],["nb","nb"],["nl","nl"],["pl","pl"],["pt-br","pt-BR"],["pt-pt","pt-PT"],["ro","ro"],["ru","ru"],["sk","sk"],["sl","sl"],["sr","sr"],["sv","sv"],["th","th"],["tr","tr"],["uk","uk"],["vi","vi"],["zh-cn","zh-CN"],["zh-hk","zh-HK"],["zh-tw","zh-TW"]]);function a(e){return function(e,t,n){const i=(0,r.c)(e,"[dir]");return i?i.getAttribute("dir"):"ltr"}(e)}const s={rtl:"arcgis--rtl"};async function l(e,t){const{api:n,type:r,places:o}=t||{};if(4===n){const[t]=await(0,i.l)(["esri/intl"]),n=t.convertNumberFormatToIntlOptions({places:o,style:r,digitSeparator:!0});return t.formatNumber(e,Object.assign(Object.assign({},n),{style:r}))}const[a]=await(0,i.l)(["dojo/number"]);return a.format(e,{type:r,places:o,pattern:null==t?void 0:t.pattern})}const c={};function d(e){const t=document.documentElement.lang;return c[t]||(c[t]=new Intl.DateTimeFormat(document.documentElement.lang,{year:"numeric",month:"short",day:"numeric"})),c[t].format(e)}},66716:(e,t,n)=>{n.d(t,{a:()=>i,c:()=>o,e:()=>a,g:()=>r,l:()=>s});var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var a=o((function(e,t){!function(e){var t={Promise:"undefined"!=typeof window?window.Promise:void 0},n="4.24",i="next";function r(e){if(e.toLowerCase()===i)return i;var t=e&&e.match(/^(\d)\.(\d+)/);return t&&{major:parseInt(t[1],10),minor:parseInt(t[2],10)}}function o(e){return void 0===e&&(e=n),"https://js.arcgis.com/".concat(e,"/")}function a(e){return!e||r(e)?function(e){void 0===e&&(e=n);var t=o(e),a=r(e);if(a!==i&&3===a.major){var s=a.minor<=10?"js/":"";return"".concat(t).concat(s,"esri/css/esri.css")}return"".concat(t,"esri/themes/light/main.css")}(e):e}function s(e,t){var n=a(e),i=function(e){return document.querySelector('link[href*="'.concat(e,'"]'))}(n);return i||function(e,t){if(t){var n=document.querySelector(t);n.parentNode.insertBefore(e,n)}else document.head.appendChild(e)}(i=function(e){var t=document.createElement("link");return t.rel="stylesheet",t.href=e,t}(n),t),i}var l={};function c(e,t,n){var i;n&&(i=function(e,t){var n=function(i){t(i.error||new Error("There was an error attempting to load ".concat(e.src))),e.removeEventListener("error",n,!1)};return e.addEventListener("error",n,!1),n}(e,n));var r=function(){t(e),e.removeEventListener("load",r,!1),i&&e.removeEventListener("error",i,!1)};e.addEventListener("load",r,!1)}function d(){return document.querySelector("script[data-esri-loader]")}function u(){var e=window.require;return e&&e.on}function p(e){void 0===e&&(e={});var n={};[l,e].forEach((function(e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}));var i=n.version,r=n.url||o(i);return new t.Promise((function(e,t){var o=d();if(o){var a=o.getAttribute("src");a!==r?t(new Error("The ArcGIS API for JavaScript is already loaded (".concat(a,")."))):u()?e(o):c(o,e,t)}else if(u())t(new Error("The ArcGIS API for JavaScript is already loaded."));else{var l=n.css;l&&s(!0===l?i:l,n.insertCssBefore),c(o=function(e){var t=document.createElement("script");return t.type="text/javascript",t.src=e,t.setAttribute("data-esri-loader","loading"),t}(r),(function(){o.setAttribute("data-esri-loader","loaded"),e(o)}),t),document.body.appendChild(o)}}))}function h(e){return new t.Promise((function(t,n){var i=window.require.on("error",n);window.require(e,(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];i.remove(),t(e)}))}))}e.utils=t,e.loadModules=function(e,t){if(void 0===t&&(t={}),u())return h(e);var n=d(),i=n&&n.getAttribute("src");return!t.url&&i&&(t.url=i),p(t).then((function(){return h(e)}))},e.getScript=d,e.isLoaded=u,e.loadScript=p,e.setDefaultOptions=function(e){void 0===e&&(e={}),l=e},e.loadCss=s,Object.defineProperty(e,"__esModule",{value:!0})}(t)}));const s=async(e,t)=>(await a.loadModules(e,t)).map((e=>e.__esModule&&e.default?e.default:e))},62727:(e,t,n)=>{n.d(t,{a:()=>a,g:()=>c});var i=n(18869),r=n(81068),o=n(28384);function a(e){var t,n,o;const a=null!==(t=(0,i.c)(e,"[lang]"))&&void 0!==t?t:null===(o=null===(n=e.shadowRoot)||void 0===n?void 0:n.ownerDocument)||void 0===o?void 0:o.documentElement,s=((null==a?void 0:a.lang)||(null===navigator||void 0===navigator?void 0:navigator.language)||"en").toLowerCase();return r.l.has(s)?r.l.get(s):r.l.has(s.slice(0,2))?r.l.get(s.slice(0,2)):"en"}const s={};function l(e,t){const n=`${e}${t}`;return s[n]||(s[n]=function(e,t){return new Promise(((n,i)=>{fetch((0,o.a)(`../arcgis-app-assets/i18n/${e}.i18n.${t}.json`)).then((e=>{e.ok?n(e.json()):i()}),(()=>i()))}))}(e,t)),s[n]}async function c(e,t){const n=t||e.tagName.toLowerCase(),o=a(e),s=function(e){var t,n,o;const a=null!==(t=(0,i.c)(e,"[lang]"))&&void 0!==t?t:null===(o=null===(n=e.shadowRoot)||void 0===n?void 0:n.ownerDocument)||void 0===o?void 0:o.documentElement,s=((null==a?void 0:a.lang)||(null===navigator||void 0===navigator?void 0:navigator.language)||"en").toLowerCase();return r.l.has(s)?r.l.get(s):r.l.has(s.slice(0,2))?s:"en"}(e);let c;try{c=await l(n,o)}catch(e){console.warn(`no locale for ${n} (${o}) loading default locale en.`),c=await l(n,"en")}return[c,o,s]}},79878:(e,t,n)=>{function i(e,t){const n=e/t;return n>=1||n<0?"red":n>.8?"orange":"blue"}n.d(t,{g:()=>i})}}]);