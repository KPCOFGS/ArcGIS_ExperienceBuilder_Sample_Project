/*! For license information please see 5809.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[5809],{5611:(e,t,i)=>{function n(){const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}i.d(t,{g:()=>n})},5809:(e,t,i)=>{i.r(t),i.d(t,{calcite_tile:()=>l});var n=i(8641),o=i(8082),s=i(2322),r=i(9336);i(8274);const c="content-start",a="content-end",l=class{constructor(e){(0,n.r)(this,e),this.active=!1,this.description=void 0,this.disabled=!1,this.embed=!1,this.focused=!1,this.heading=void 0,this.hidden=!1,this.href=void 0,this.icon=void 0,this.iconFlipRtl=!1}connectedCallback(){(0,o.c)(this),(0,r.c)(this)}disconnectedCallback(){(0,o.d)(this),(0,r.d)(this)}componentDidRender(){(0,r.u)(this)}renderTile(){const{icon:e,el:t,heading:i,description:o,iconFlipRtl:r}=this,l=i&&e&&!o,d=l?{height:"64px",width:"64px"}:void 0;return(0,n.h)("div",{class:{container:!0,"large-visual":l}},e&&(0,n.h)("div",{class:"icon"},(0,n.h)("calcite-icon",{flipRtl:r,icon:e,scale:"l",style:d})),(0,n.h)("div",{class:"content-container"},(0,s.e)(t,c)?(0,n.h)("div",{class:"content-slot-container"},(0,n.h)("slot",{name:c})):null,(0,n.h)("div",{class:"content"},i&&(0,n.h)("div",{class:"heading"},i),o&&(0,n.h)("div",{class:"description"},o)),(0,s.e)(t,a)?(0,n.h)("div",{class:"content-slot-container"},(0,n.h)("slot",{name:a})):null))}render(){return(0,n.h)(n.F,null,this.href?(0,n.h)("calcite-link",{disabled:this.disabled,href:this.href},this.renderTile()):this.renderTile())}get el(){return(0,n.a)(this)}};l.style=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{box-sizing:border-box;display:inline-block;-webkit-user-select:none;user-select:none;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .container{pointer-events:none;display:grid;grid-template-columns:repeat(1, minmax(0, 1fr));gap:0.5rem}:host .content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;gap:0.5rem;inline-size:10%}:host .content-container{display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;padding:0px;color:var(--calcite-ui-text-2);outline-color:transparent}:host .content-slot-container{display:flex;align-items:center;background-color:var(--calcite-ui-foreground-1)}:host .content-slot-container:first-child{padding-inline:0 0.75rem}:host .content-slot-container:last-child{padding-inline:0.75rem 0}:host .heading{pointer-events:none;overflow-wrap:break-word;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .large-visual{align-items:center;text-align:center;min-block-size:12rem}:host .large-visual .icon{display:flex;justify-content:center;align-self:flex-end}:host .large-visual .content-container{align-self:center}:host .description{pointer-events:none;overflow-wrap:break-word;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([href]) .heading,:host([href]:hover) .heading{text-decoration-line:underline;color:var(--calcite-ui-text-link)}:host(:not([embed])){padding:0.75rem;box-shadow:0 0 0 1px var(--calcite-ui-border-2)}:host(:not([embed])[href]:hover){cursor:pointer;box-shadow:0 0 0 2px var(--calcite-ui-brand)}:host(:not([embed])[href]:active){box-shadow:0 0 0 3px var(--calcite-ui-brand)}:host([icon][heading]:not([description]):not([embed])){padding:0px}:host([icon][heading]:not([description])) .icon{display:flex;justify-content:center}:host([icon][heading]:not([description])) .large-visual{text-align:center}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host(:hover) .heading,:host([active]) .heading{color:var(--calcite-ui-text-1)}:host(:hover) .description,:host([active]) .description{color:var(--calcite-ui-text-2)}:host([hidden]){display:none}[hidden]{display:none}"},8082:(e,t,i)=>{i.d(t,{c:()=>a,d:()=>l});var n=i(8641),o=i(5527);const s=new Set;let r;const c={childList:!0};function a(e){r||(r=(0,o.c)("mutation",d)),r.observe(e.el,c)}function l(e){s.delete(e.el),d(r.takeRecords()),r.disconnect();for(const[e]of s.entries())r.observe(e,c)}function d(e){e.forEach((({target:e})=>{(0,n.f)(e)}))}},9336:(e,t,i)=>{i.d(t,{c:()=>f,d:()=>p,u:()=>h});var n=i(5611);const o=/firefox/i.test((0,n.g)()),s=o?new WeakMap:null;function r(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function c(e){const t=e.target;if(o&&!s.get(t))return;const{disabled:i}=t;i&&e.preventDefault()}const a=["mousedown","mouseup","click"];function l(e){if(o&&!s.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const d={capture:!0};function h(e,t=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void u(e);b(e),"function"==typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function u(e){var t;e.el.click=r,(t=o?v(e):e.el)&&(t.addEventListener("pointerdown",c,d),a.forEach((e=>t.addEventListener(e,l,d))))}function v(e){return s.get(e.el)}function b(e){var t;delete e.el.click,(t=o?v(e):e.el)&&(t.removeEventListener("pointerdown",c,d),a.forEach((e=>t.removeEventListener(e,l,d))))}function f(e){if(!e.disabled||!o)return;const t=e.el.parentElement||e.el;s.set(e.el,t),u(e)}function p(e){o&&(s.delete(e.el),b(e))}},5527:(e,t,i)=>{function n(e,t,i){const n=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new n(t,i)}i.d(t,{c:()=>n})}}]);