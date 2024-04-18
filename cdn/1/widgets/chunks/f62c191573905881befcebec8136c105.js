/*! For license information please see f62c191573905881befcebec8136c105.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[64435],{58892:(e,t,s)=>{s.d(t,{a:()=>r,b:()=>o,c:()=>n,d:()=>a});const a=(0,s(27010).c)({typeKeywords:[],customParameters:[],analyzedLocationTypes:[],allowStoredAuth:!0,isSecured:null,checkAuth:!1}),r=a.state,n=a.state,o=a.state},64435:(e,t,s)=>{s.r(t),s.d(t,{arcgis_new_item_pages_feature_layer_summary:()=>l});var a=s(28384),r=s(58892),n=s(54871),o=s(71120);s(27010),s(76134);const l=class{constructor(e){(0,a.r)(this,e),this.newItemUpdatePage=(0,a.c)(this,"newItemUpdatePage",7),this.featureLayerInfos=[],this.selectAll=()=>{const e={};this.featureLayerInfos.forEach((t=>{e[t.name]=!0})),this.selectedLayerInfoNames=e},this.deselectAll=()=>{this.selectedLayerInfoNames={}},this.selectOrDeselectLayer=(e,t)=>{t?this.selectedLayerInfoNames[e]=!0:delete this.selectedLayerInfoNames[e],this.selectedLayerInfoNames=Object.assign({},this.selectedLayerInfoNames)},this.selectedLayerInfoNames={},this.alertInfo=void 0}handleNext(){const{selectedLayerInfoNames:e,featureLayerInfos:t}=this;if(!Object.keys(e).some((t=>!0===e[t])))return(0,o.f)("No layer chosen"),void this.setAlertMessage("noLayer");r.a.selectedServiceInfoLayersNames=Object.assign({},e);const s=t.some((t=>"Table"!==t.type&&e[t.name]));this.newItemUpdatePage.emit(s?"featureLayerPreference":"itemProperties")}async componentWillLoad(){const{serviceInfo:e,selectedServiceInfoLayersNames:t,addFeatureLayerType:s}=r.a,{i18n:a}=n.u;this.addCreateI18n=a,this.i18n=a.featureLayerSummary,this.creationType=s,this.layerName=(null==e?void 0:e.name)||r.a.sourceTitle;const o=e;this.featureLayerInfos=[...o.layers,...o.tables].sort(((e,t)=>e.id-t.id));let l={};t?l=Object.assign({},t):this.featureLayerInfos.forEach((e=>{l[e.name]=!0})),this.selectedLayerInfoNames=l}setAlertMessage(e){this.alertInfo=this.i18n.error[e]}render(){const{i18n:e,addCreateI18n:t,selectedLayerInfoNames:s,featureLayerInfos:r,alertInfo:n,creationType:l,layerName:c,selectAll:i,deselectAll:d,selectOrDeselectLayer:y}=this,u=r.length>1,m=t.featureLayer,f=Object.keys(s).length<=0;return(0,a.h)(a.H,null,(0,a.h)("arcgis-new-item-description",{class:"layer-description",header:m.creationType[l],content:c,leadingIconInfo:{icon:"featureLayer",scale:"s"}}),(0,a.h)("arcgis-new-item-description",{header:e.layerDetails,content:u?e.deselectAnyLayers:"",class:"details"}),u&&(0,a.h)("calcite-button",{kind:"neutral",class:"deselect-button",onClick:f?i:d},f?e.selectAll:e.deselectAll),(0,a.h)("div",{class:"info-container"},null==r?void 0:r.map(((e,r)=>(0,a.h)("arcgis-new-item-layer-summary-item",{key:r,layerInfo:e,translatedLayerType:m.type,translatedFieldType:t.fieldType,selected:s[e.name],hideSelect:!u,onLayerSelectionChange:t=>{y(e.name,t.detail)},onExpand:e=>{const{expanded:t}=e.detail;t&&(0,o.i)("layer")}})))),(0,a.h)("arcgis-new-item-alert",{heading:null==n?void 0:n.title,description:null==n?void 0:n.description,active:!!n,onAlertDismiss:()=>this.alertInfo=null}))}get el(){return(0,a.d)(this)}};l.style=".info-container{padding-bottom:1.5rem}.layer-description{display:block;margin-bottom:1.5rem}.details{padding-bottom:0.5rem;display:block}.deselect-button{margin-top:1.5rem;margin-bottom:1rem}arcgis-new-item-layer-summary-item+arcgis-new-item-layer-summary-item{border-top:none}"},76134:(e,t,s)=>{s.d(t,{c:()=>r,o:()=>n});const a=(0,s(27010).c)({portal:null,user:null,api:4,scale:"m"}),r=a.state,n=a.onChange},71120:(e,t,s)=>{s.d(t,{a:()=>u,b:()=>d,c:()=>y,e:()=>c,f:()=>m,i:()=>i});var a=s(76134),r=s(58892);const n="create feature layer",o="my content",l=e=>{switch(e){case"build":return"blank";case"existing":return"fs";case"template":return"template";case"link":return"url"}},c=e=>{const t=a.c.telemetry;null==t||t.stepWorkflow(n,"enable "+("captureGPS"===e?"gps":"enableZDefaults"===e?"z":"m"),{category:n,attribute:l(r.a.addFeatureLayerType),pageName:o})},i=e=>{const t=a.c.telemetry;null==t||t.stepWorkflow(n,`expand ${e} details`,{category:n,attribute:l(r.a.addFeatureLayerType),pageName:o})},d=()=>{const e=a.c.telemetry;null==e||e.stepWorkflow(n,"filter",{category:n,attribute:l(r.a.addFeatureLayerType),pageName:o})},y=e=>{const t=l(e),s=a.c.telemetry;null==s||s.stepWorkflow(n,"from option",{category:n,attribute:t,pageName:o})},u=()=>{const{addFeatureLayerType:e,serviceInfo:t}=r.a,s=t,c=a.c.telemetry;null==c||c.endWorkflow(n,{category:n,attribute:l(e),pageName:o,count:s.layers.length,number:s.tables.length})},m=e=>{var t;null===(t=a.c.telemetry)||void 0===t||t.logError({category:n,error:e})}},27010:(e,t,s)=>{s.d(t,{c:()=>l});var a=s(28384);const r=e=>!("isConnected"in e)||e.isConnected,n=((e,t)=>{let s;return(...e)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,(e=>{for(let t of e.keys())e.set(t,e.get(t).filter(r))})(...e)}),2e3)}})(),o=e=>"function"==typeof e?e():e,l=(e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{const s=o(e);let a=new Map(Object.entries(null!=s?s:{}));const r={dispose:[],get:[],set:[],reset:[]},n=()=>{var t;a=new Map(Object.entries(null!==(t=o(e))&&void 0!==t?t:{})),r.reset.forEach((e=>e()))},l=e=>(r.get.forEach((t=>t(e))),a.get(e)),c=(e,s)=>{const n=a.get(e);t(s,n,e)&&(a.set(e,s),r.set.forEach((t=>t(e,s,n))))},i="undefined"==typeof Proxy?{}:new Proxy(s,{get:(e,t)=>l(t),ownKeys:e=>Array.from(a.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>a.has(t),set:(e,t,s)=>(c(t,s),!0)}),d=(e,t)=>(r[e].push(t),()=>{((e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)})(r[e],t)});return{state:i,get:l,set:c,on:d,onChange:(t,s)=>{const a=d("set",((e,a)=>{e===t&&s(a)})),r=d("reset",(()=>s(o(e)[t])));return()=>{a(),r()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(d("set",t.set)),t.get&&e.push(d("get",t.get)),t.reset&&e.push(d("reset",t.reset)),t.dispose&&e.push(d("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{r.dispose.forEach((e=>e())),n()},reset:n,forceUpdate:e=>{const t=a.get(e);r.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof a.g)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,a.g)();s&&((e,t,s)=>{const a=e.get(t);a?a.includes(s)||a.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(a.f)),n(e)},reset:()=>{e.forEach((e=>e.forEach(a.f))),n(e)}}})()),s}},54871:(e,t,s)=>{s.d(t,{a:()=>a,u:()=>r});const a=(0,s(27010).c)({nextText:"next",workflow:"content",scale:"m",disableScroll:!1,featureFlags:{tileLayer3dTiles:!1}}),r=a.state}}]);