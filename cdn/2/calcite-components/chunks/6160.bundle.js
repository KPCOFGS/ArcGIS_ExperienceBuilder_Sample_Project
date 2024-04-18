/*! For license information please see 6160.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[6160],{5611:(t,e,n)=>{function i(){const t=navigator.userAgentData;return t?.brands?t.brands.map((({brand:t,version:e})=>`${t}/${e}`)).join(" "):navigator.userAgent}n.d(e,{g:()=>i})},6160:(t,e,n)=>{n.r(e),n.d(e,{calcite_action:()=>u});var i=n(8641),o=n(2322),a=n(6851),r=n(9336),c=n(3844),s=n(4879),l=n(5527),d=n(339);n(8274);const u=class{constructor(t){(0,i.r)(this,t),this.mutationObserver=(0,l.c)("mutation",(()=>(0,i.f)(this))),this.guid=`calcite-action-${(0,a.g)()}`,this.indicatorId=`${this.guid}-indicator`,this.buttonId=`${this.guid}-button`,this.handleTooltipSlotChange=t=>{const e=t.target.assignedElements({flatten:!0}).filter((t=>t?.matches("calcite-tooltip")))[0];e&&(e.referenceElement=this.buttonEl)},this.active=!1,this.alignment=void 0,this.appearance="solid",this.compact=!1,this.disabled=!1,this.icon=void 0,this.iconFlipRtl=!1,this.indicator=!1,this.label=void 0,this.loading=!1,this.scale="m",this.text=void 0,this.textEnabled=!1,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0}onMessagesChange(){}effectiveLocaleChange(){(0,d.u)(this,this.effectiveLocale)}connectedCallback(){(0,r.c)(this),(0,s.c)(this),(0,d.c)(this),this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}async componentWillLoad(){(0,c.s)(this),await(0,d.s)(this)}componentDidLoad(){(0,c.a)(this)}disconnectedCallback(){(0,r.d)(this),(0,s.d)(this),(0,d.d)(this),this.mutationObserver?.disconnect()}componentDidRender(){(0,r.u)(this)}async setFocus(){await(0,c.c)(this),this.buttonEl?.focus()}renderTextContainer(){const{text:t,textEnabled:e}=this,n={"text-container":!0,"text-container--visible":e};return t?(0,i.h)("div",{class:n,key:"text-container"},t):null}renderIndicatorText(){const{indicator:t,messages:e,indicatorId:n,buttonId:o}=this;return(0,i.h)("div",{"aria-labelledby":o,"aria-live":"polite",class:"indicator-text",id:n,role:"region"},t?e.indicator:null)}renderIconContainer(){const{loading:t,icon:e,scale:n,el:o,iconFlipRtl:a}=this,r="l"===n?"m":"s",c="l"===n?"l":"m",s=t?(0,i.h)("calcite-loader",{inline:!0,label:this.messages.loading,scale:c}):null,l=e?(0,i.h)("calcite-icon",{flipRtl:a,icon:e,scale:r}):null,d=s||l,u=d||o.children?.length,b=(0,i.h)("div",{class:{"slot-container":!0,"slot-container--hidden":t}},(0,i.h)("slot",null));return u?(0,i.h)("div",{"aria-hidden":"true",class:"icon-container",key:"icon-container"},d,b):null}render(){const{active:t,compact:e,disabled:n,loading:a,textEnabled:r,label:c,text:s,indicator:l,indicatorId:d,buttonId:u,messages:b}=this,h=`${c||s}${l?` (${b.indicator})`:""}`,f={button:!0,"button--text-visible":r,"button--compact":e};return(0,i.h)(i.H,null,(0,i.h)("button",{"aria-busy":(0,o.t)(a),"aria-controls":l?d:null,"aria-disabled":(0,o.t)(n),"aria-label":h,"aria-pressed":(0,o.t)(t),class:f,disabled:n,id:u,ref:t=>this.buttonEl=t},this.renderIconContainer(),this.renderTextContainer()),(0,i.h)("slot",{name:"tooltip",onSlotchange:this.handleTooltipSlotChange}),this.renderIndicatorText())}static get assetsDirs(){return["assets"]}get el(){return(0,i.a)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};u.style=':host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent;--calcite-action-indicator-color:var(--calcite-ui-brand)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.button{position:relative;margin:0px;display:flex;inline-size:auto;cursor:pointer;align-items:center;justify-content:flex-start;border-style:none;background-color:var(--calcite-ui-foreground-1);fill:var(--calcite-ui-text-3);font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-3);outline-color:transparent;text-align:unset;flex:1 0 auto}.button:hover{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}.button:focus{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.button:active{background-color:var(--calcite-ui-foreground-3)}.button .icon-container{pointer-events:none;margin:0px;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1rem}.button .text-container{margin:0px;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-property:opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:margin;transition-property:inline-size}.button .text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1;margin-inline-end:1rem}:host([scale=s]) .button{padding-inline:0.5rem;padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=s]) .button--text-visible .icon-container{margin-inline-end:0.5rem}:host([scale=m]) .button{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=m]) .button--text-visible .icon-container{margin-inline-end:0.75rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=l]) .button--text-visible .icon-container{margin-inline-end:1rem}:host([alignment=center]) .button{justify-content:center}:host([alignment=end]) .button{justify-content:flex-end}:host([alignment=center]) .button .text-container--visible,:host([alignment=end]) .button .text-container--visible{flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{background-color:var(--calcite-ui-foreground-3);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}:host([active]) .button:active{background-color:var(--calcite-ui-foreground-1)}:host([appearance=transparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([appearance=transparent]) .button:hover,:host([appearance=transparent]) .button:focus{background-color:transparent;box-shadow:0 0 0 2px var(--calcite-ui-border-1) inset}:host([active][appearance=transparent]) .button,:host([active][appearance=transparent]) .button:hover,:host([active][appearance=transparent]) .button:focus{background-color:var(--calcite-ui-foreground-3);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}:host([appearance=transparent][loading]) .button,:host([appearance=transparent][disabled]) .button{background-color:transparent}:host([loading]) .button,:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-ui-foreground-1)}:host([loading]) .button .text-container,:host([loading]) .button:hover .text-container,:host([loading]) .button:focus .text-container{opacity:var(--calcite-ui-opacity-disabled)}:host([loading]) calcite-loader[inline]{color:var(--calcite-ui-text-3);margin-inline-end:0px}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;background-color:var(--calcite-ui-foreground-1);opacity:var(--calcite-ui-opacity-disabled)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{background-color:var(--calcite-ui-foreground-3);opacity:var(--calcite-ui-opacity-disabled)}:host([indicator]) .button::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;border-width:2px;background-color:var(--calcite-action-indicator-color);border-color:var(--calcite-ui-foreground-1);inset-block-end:0.75rem;inset-inline-end:0.75rem}:host([indicator]) .button--text-visible::after{inset-block-end:auto}:host([indicator]) .button:hover::after,:host([indicator]) .button:focus::after{border-color:var(--calcite-ui-foreground-1)}:host([indicator][scale=s]) .button::after{inset-block-end:0.25rem;inset-inline-end:0.25rem}:host([indicator][scale=s]) .button--text-visible::after{inset-block-end:auto;inset-inline-end:0.5rem}:host([indicator][active]) .button::after{border-color:var(--calcite-ui-foreground-3)}.indicator-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}'},9336:(t,e,n)=>{n.d(e,{c:()=>g,d:()=>v,u:()=>u});var i=n(5611);const o=/firefox/i.test((0,i.g)()),a=o?new WeakMap:null;function r(){const{disabled:t}=this;t||HTMLElement.prototype.click.call(this)}function c(t){const e=t.target;if(o&&!a.get(e))return;const{disabled:n}=e;n&&t.preventDefault()}const s=["mousedown","mouseup","click"];function l(t){if(o&&!a.get(t.target))return;const{disabled:e}=t.target;e&&(t.stopImmediatePropagation(),t.preventDefault())}const d={capture:!0};function u(t,e=!1){if(t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void b(t);f(t),"function"==typeof e?t.el.setAttribute("tabindex",e.call(t)?"0":"-1"):!0===e?t.el.setAttribute("tabindex","0"):!1===e&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}function b(t){var e;t.el.click=r,(e=o?h(t):t.el)&&(e.addEventListener("pointerdown",c,d),s.forEach((t=>e.addEventListener(t,l,d))))}function h(t){return a.get(t.el)}function f(t){var e;delete t.el.click,(e=o?h(t):t.el)&&(e.removeEventListener("pointerdown",c,d),s.forEach((t=>e.removeEventListener(t,l,d))))}function g(t){if(!t.disabled||!o)return;const e=t.el.parentElement||t.el;a.set(t.el,e),b(t)}function v(t){o&&(a.delete(t.el),f(t))}},3844:(t,e,n)=>{n.d(e,{a:()=>c,b:()=>s,c:()=>l,s:()=>r});var i=n(8641);const o=new WeakMap,a=new WeakMap;function r(t){a.set(t,new Promise((e=>o.set(t,e))))}function c(t){o.get(t)()}function s(t){return a.get(t)}async function l(t){return await s(t),(0,i.f)(t),new Promise((t=>requestAnimationFrame((()=>t()))))}},339:(t,e,n)=>{n.d(e,{c:()=>u,d:()=>b,s:()=>s,u:()=>d});var i=n(8641),o=n(4879);const a={};function r(){throw new Error("could not fetch component message bundle")}function c(t){t.messages={...t.defaultMessages,...t.messageOverrides}}async function s(t){t.defaultMessages=await l(t,t.effectiveLocale),c(t)}async function l(t,e){const{el:n}=t,c=n.tagName.toLowerCase().replace("calcite-","");return async function(t,e){const n=`${e}_${t}`;return a[n]||(a[n]=fetch((0,i.g)(`./assets/${e}/t9n/messages_${t}.json`)).then((t=>(t.ok||r(),t.json()))).catch((()=>r()))),a[n]}((0,o.g)(e,"t9n"),c)}async function d(t,e){t.defaultMessages=await l(t,e),c(t)}function u(t){t.onMessagesChange=h}function b(t){t.onMessagesChange=void 0}function h(){c(this)}}}]);