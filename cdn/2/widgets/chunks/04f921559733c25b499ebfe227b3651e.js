/*! For license information please see 04f921559733c25b499ebfe227b3651e.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[8269],{8269:(t,e,n)=>{n.d(e,{getClippingRect:()=>E,getElementRects:()=>r,getOffsetParent:()=>R});var o=n(58738);function i(t){return d(t)&&"fixed"!==s(t).position?function(t){let{offsetParent:e}=t,n=t,o=!1;for(;n&&n!==e;){const{assignedSlot:t}=n;if(t){let i=t.offsetParent;if("contents"===s(t).display){const e=t.hasAttribute("style"),o=t.style.display;t.style.display=s(n).display,i=t.offsetParent,t.style.display=o,e||t.removeAttribute("style")}n=t,e!==i&&(e=i,o=!0)}else if(a(n)&&n.host&&o)break;n=a(n)&&n.host||n.parentNode}return e}(t):null}function r(t){const{reference:e,floating:n,strategy:o}=t;return{reference:C(e,R(n),o),floating:{...D(n),x:0,y:0}}}function l(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function c(t){if(null==t)return window;if(!l(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function s(t){return c(t).getComputedStyle(t)}function f(t){return l(t)?"":t?(t.nodeName||"").toLowerCase():""}function u(){const t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((t=>t.brand+"/"+t.version)).join(" "):navigator.userAgent}function d(t){return t instanceof c(t).HTMLElement}function h(t){return t instanceof c(t).Element}function a(t){return"undefined"!=typeof ShadowRoot&&(t instanceof c(t).ShadowRoot||t instanceof ShadowRoot)}function p(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=s(t);return/auto|scroll|overlay|hidden/.test(e+o+n)&&!["inline","contents"].includes(i)}function g(t){return["table","td","th"].includes(f(t))}function w(t){const e=/firefox/i.test(u()),n=s(t);return"none"!==n.transform||"none"!==n.perspective||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some((t=>n.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=n.contain;return null!=e&&e.includes(t)}))}function y(){return!/^((?!chrome|android).)*safari/i.test(u())}function m(t){return["html","body","#document"].includes(f(t))}const v=Math.min,b=Math.max,x=Math.round;function L(t,e,n){var o,i,r,l;void 0===e&&(e=!1),void 0===n&&(n=!1);const s=t.getBoundingClientRect();let f=1,u=1;e&&d(t)&&(f=t.offsetWidth>0&&x(s.width)/t.offsetWidth||1,u=t.offsetHeight>0&&x(s.height)/t.offsetHeight||1);const a=h(t)?c(t):window,p=!y()&&n,g=(s.left+(p&&null!=(o=null==(i=a.visualViewport)?void 0:i.offsetLeft)?o:0))/f,w=(s.top+(p&&null!=(r=null==(l=a.visualViewport)?void 0:l.offsetTop)?r:0))/u,m=s.width/f,v=s.height/u;return{width:m,height:v,top:w,right:g+m,bottom:w+v,left:g,x:g,y:w}}function W(t){return(e=t,(e instanceof c(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function H(t){return h(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function T(t){return L(W(t)).left+H(t).scrollLeft}function C(t,e,n){const o=d(e),i=W(e),r=L(t,o&&function(t){const e=L(t);return x(e.width)!==t.offsetWidth||x(e.height)!==t.offsetHeight}(e),"fixed"===n);let l={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if(o||!o&&"fixed"!==n)if(("body"!==f(e)||p(i))&&(l=H(e)),d(e)){const t=L(e,!0);c.x=t.x+e.clientLeft,c.y=t.y+e.clientTop}else i&&(c.x=T(i));return{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}function N(t){return"html"===f(t)?t:t.assignedSlot||t.parentNode||(a(t)?t.host:null)||W(t)}function R(t){const e=c(t);let n=i(t);for(;n&&g(n)&&"static"===s(n).position;)n=i(n);return n&&("html"===f(n)||"body"===f(n)&&"static"===s(n).position&&!w(n))?e:n||function(t){let e=N(t);for(a(e)&&(e=e.host);d(e)&&!m(e);){if(w(e))return e;{const t=e.parentNode;e=a(t)?t.host:t}}return null}(t)||e}function D(t){if(d(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=L(t);return{width:e.width,height:e.height}}function S(t){const e=N(t);return m(e)?t.ownerDocument.body:d(e)&&p(e)?e:S(e)}function k(t,e){var n;void 0===e&&(e=[]);const o=S(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=c(o),l=i?[r].concat(r.visualViewport||[],p(o)?o:[]):o,s=e.concat(l);return i?s:s.concat(k(l))}function A(t,e,n){return"viewport"===e?(0,o.e)(function(t,e){const n=c(t),o=W(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,s=0,f=0;if(i){r=i.width,l=i.height;const t=y();(t||!t&&"fixed"===e)&&(s=i.offsetLeft,f=i.offsetTop)}return{width:r,height:l,x:s,y:f}}(t,n)):h(e)?function(t,e){const n=L(t,!1,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft;return{top:o,left:i,x:i,y:o,right:i+t.clientWidth,bottom:o+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(e,n):(0,o.e)(function(t){var e;const n=W(t),o=H(t),i=null==(e=t.ownerDocument)?void 0:e.body,r=b(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=b(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let c=-o.scrollLeft+T(t);const f=-o.scrollTop;return"rtl"===s(i||n).direction&&(c+=b(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:l,x:c,y:f}}(W(t)))}function V(t){const e=k(t),n=function(t,e){let n=t;for(;n&&!m(n)&&!e.includes(n)&&(!h(n)||!["absolute","fixed"].includes(s(n).position));){const t=N(n);n=a(t)?t.host:t}return n}(t,e);let o=null;if(n&&d(n)){const t=R(n);p(n)?o=n:d(t)&&(o=t)}return h(o)?e.filter((t=>o&&h(t)&&function(t,e){const n=null==e.getRootNode?void 0:e.getRootNode();if(t.contains(e))return!0;if(n&&a(n)){let n=e;do{if(n&&t===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(t,o)&&"body"!==f(t))):[]}function E(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[..."clippingAncestors"===n?V(e):[].concat(n),o],l=r[0],c=r.reduce(((t,n)=>{const o=A(e,n,i);return t.top=b(o.top,t.top),t.right=v(o.right,t.right),t.bottom=v(o.bottom,t.bottom),t.left=b(o.left,t.left),t}),A(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}}}]);