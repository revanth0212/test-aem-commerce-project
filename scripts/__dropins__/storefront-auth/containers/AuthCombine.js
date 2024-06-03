import*as e from"@dropins/tools/event-bus.js";import*as n from"@dropins/tools/fetch-graphql.js";export const id=907;export const ids=[907];export const modules={1890:(e,n,t)=>{t.d(n,{E:()=>_,A:()=>j});var r=t(6613),i=t(5292),o=t.n(i),a=t(9893),l=t.n(a),s=t(9383),d=t.n(s),p=t(8296),c=t.n(p),u=t(9088),m=t.n(u),f=t(5459),g={attributes:{"data-dropin":"storefront-auth","data-sdk":"0.21.2"},styleTagTransform:function(e,n){window._loadedStyles=window._loadedStyles??{};const t=e?.match(/^\.dropin-(\w+)/)?.[1],r=n.getAttribute("data-sdk"),i=t?`sdk/${t}`:n.getAttribute("data-dropin");n.setAttribute("data-dropin",i),n.removeAttribute("data-sdk");const o=window._loadedStyles[i];if(o){const i=function(e,n){const[t,r]=e.split("-"),[i,o]=n.split("-"),a=[...t.split("."),r],l=[...i.split("."),o],s=parseInt(a[0],10),d=parseInt(l[0],10);if(s!==d)return s>d?e:n;const p=parseInt(a[1],10),c=parseInt(l[1],10);if(p!==c)return p>c?e:n;const u=parseInt(a[2],10),m=parseInt(l[2],10);if(u!==m)return u>m?e:n;if(a[3]&&l[3]){const t=/(alpha|beta)(.*)/,r=a[3].match(t),i=l[3].match(t),o=r[1],s=i[1],d=parseInt(r[2],10),p=parseInt(i[2],10);if(o===s)return d>p?e:n;if("alpha"===o&&"beta"===s)return n;if("beta"===o&&"alpha"===s)return e}return a[3]?n:e}(r,o.sdk);if(!t||t&&i===o.sdk){const n=o.style.textContent;o.style.textContent=`${n}\n/* --- MERGED --- */\n${e}`}else t&&i!==o.sdk&&(o.style.textContent=`/* --- UPGRADED --- */\n${e}`);return void n.remove()}n.textContent=e,window._loadedStyles[i]={sdk:r,core:t,style:n};const a=document.querySelector("head"),{lastDropinStyleInjected:l,lastSDKStyleInjected:s}=window._loadedStyles;t?(s?a.insertBefore(n,s.nextSibling):a.insertBefore(n,a.firstChild),window._loadedStyles.lastSDKStyleInjected=n):(l?a.insertBefore(n,l.nextSibling):s?a.insertBefore(n,s.nextSibling):a.insertBefore(n,a.firstChild),window._loadedStyles.lastDropinStyleInjected=n)}};g.setAttributes=c(),g.insert=d().bind(null,"head"),g.domAPI=l(),g.insertStyleElement=m();o()(f.A,g);f.A&&f.A.locals&&f.A.locals;var h=t(8294),v=["className","fullWidth","lines","size","variant","children","multilineGap"],w=["className","children","rowGap"];function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){k(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function k(e,n,t){var r;return(n="symbol"==typeof(r=function(e,n){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(n,"string"))?r:r+"")in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function x(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var O=1,j=e=>{var{className:n,fullWidth:t=!1,lines:i=O,size:o="small",variant:a="row",children:l=null,multilineGap:s="medium"}=e,d=x(e,v),p=[["dropin-skeleton-row__".concat(a),a],["dropin-skeleton-row__".concat(a,"-").concat(o),a&&o]];if(!l&&"empty"===a)return(0,h.Y)("div",{className:(0,r.L)(["dropin-skeleton-row dropin-skeleton-row__empty",n])});if(l){var c=l.trim();return(0,h.Y)("div",y(y({},d),{},{class:(0,r.L)(["dropin-skeleton-row",["dropin-skeleton-row--full",t],n]),dangerouslySetInnerHTML:{__html:c}}))}return!1===i>O?(0,h.Y)("div",y(y({},d),{},{class:(0,r.L)(["dropin-skeleton-row",["dropin-skeleton-row--full",t],"dropin-skeleton--row__content",...p,n])})):(0,h.Y)("div",y(y({},d),{},{style:{"--multiline-gap-spacing":"var(--spacing-".concat(s,")")},class:(0,r.L)(["dropin-skeleton-row--multiline",["dropin-skeleton-row--full",t],n]),children:Array.from({length:i}).map(((e,n)=>(0,h.Y)("div",{class:(0,r.L)(["dropin-skeleton-row",["dropin-skeleton-row--full",t],"dropin-skeleton--row__content",...p])},n)))}))},_=e=>{var{className:n,children:t,rowGap:i="medium"}=e,o=x(e,w);return(0,h.Y)("div",y(y({style:{"--row-gap-spacing":"var(--spacing-".concat(i,")")}},o),{},{className:(0,r.L)(["dropin-skeleton",n]),role:"status","aria-label":"Loading...",children:t}))}},7427:(e,n,t)=>{t.d(n,{j:()=>d});var r=t(3078),i=t(1890),o=t(8294),a=()=>(0,o.FD)(i.E,{children:[(0,o.Y)(i.A,{variant:"heading",size:"xlarge",fullWidth:!1,lines:1}),(0,o.Y)(i.A,{variant:"heading",size:"xlarge",fullWidth:!0,lines:1}),(0,o.Y)(i.A,{variant:"heading",size:"xlarge",fullWidth:!0,lines:1}),(0,o.Y)(i.A,{variant:"heading",size:"medium",fullWidth:!1,lines:1})," ",(0,o.Y)(i.A,{variant:"heading",size:"medium",fullWidth:!1,lines:1})]}),l=()=>(0,o.FD)(i.E,{children:[(0,o.Y)(i.A,{variant:"heading",size:"xlarge",fullWidth:!1,lines:1}),(0,o.Y)(i.A,{variant:"heading",size:"xlarge",fullWidth:!0,lines:1}),(0,o.Y)(i.A,{variant:"heading",size:"medium",fullWidth:!1,lines:1}),(0,o.Y)(i.A,{variant:"heading",size:"medium",fullWidth:!1,lines:1})," ",(0,o.Y)(i.A,{variant:"heading",size:"xlarge",fullWidth:!0,lines:1}),(0,o.Y)(i.A,{variant:"heading",size:"xlarge",fullWidth:!0,lines:1}),(0,o.Y)(i.A,{variant:"heading",size:"medium",fullWidth:!0,lines:1}),(0,o.Y)(i.A,{variant:"heading",size:"xlarge",fullWidth:!0,lines:1}),(0,o.Y)(i.A,{variant:"heading",size:"xlarge",fullWidth:!0,lines:1}),(0,o.Y)(i.A,{variant:"heading",size:"medium",fullWidth:!1,lines:1}),(0,o.Y)(i.A,{variant:"heading",size:"medium",fullWidth:!1,lines:1})]}),s=()=>(0,o.FD)(i.E,{children:[(0,o.Y)(i.A,{variant:"heading",size:"xlarge",fullWidth:!1,lines:1}),(0,o.Y)(i.A,{variant:"heading",size:"xlarge",fullWidth:!0,lines:1}),(0,o.Y)(i.A,{variant:"heading",size:"xlarge",fullWidth:!0,lines:1}),(0,o.Y)(i.A,{variant:"heading",size:"medium",fullWidth:!1,lines:1})," ",(0,o.Y)(i.A,{variant:"heading",size:"medium",fullWidth:!1,lines:1})]}),d=e=>{var{activeSkeleton:n}=e,t=(0,r.Kr)((()=>({signInForm:(0,o.Y)(a,{}),signUpForm:(0,o.Y)(l,{}),resetPasswordForm:(0,o.Y)(s,{})})),[]);return(0,o.Y)(o.FK,{children:t[n]})}},5783:(e,n,t)=>{t.d(n,{S:()=>m,A:()=>m});var r=t(9094),i=t(3078),o=t(7427),a=t(8294);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){d(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n,t){var r;return(n="symbol"==typeof(r=function(e,n){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(n,"string"))?r:r+"")in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var p=(0,r.RZ)((()=>Promise.all([t.e(591),t.e(243),t.e(101),t.e(378),t.e(728)]).then(t.bind(t,6728)))),c=(0,r.RZ)((()=>Promise.all([t.e(591),t.e(243),t.e(101),t.e(739),t.e(592),t.e(902),t.e(508)]).then(t.bind(t,4508)))),u=(0,r.RZ)((()=>Promise.all([t.e(591),t.e(243),t.e(101),t.e(739),t.e(592),t.e(77),t.e(474)]).then(t.bind(t,8638)))),m=e=>{var{defaultView:n="signInForm",signInFormConfig:t,signUpFormConfig:l,resetPasswordFormConfig:d}=e,[m,f]=(0,i.J0)(n),g=(0,i.Kr)((()=>({signInForm:(0,a.Y)(c,s({setActiveComponent:f},t)),signUpForm:(0,a.Y)(u,s({setActiveComponent:f},l)),resetPasswordForm:(0,a.Y)(p,s({setActiveComponent:f},d))})),[d,t,l,f]);return(0,a.Y)(r.tY,{fallback:(0,a.Y)(o.j,{activeSkeleton:m}),children:(0,a.Y)("div",{className:"auth-combine",children:g[m]})})}},5459:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(8645),i=t.n(r),o=t(278),a=t.n(o)()(i());a.push([e.id,".dropin-skeleton{\n  --row-gap-spacing:var(--spacing-medium);\n  display:grid;\n  grid-template-columns:1fr 1fr;\n  gap:var(--row-gap-spacing);\n}\n\n.dropin-skeleton .dropin-skeleton--row__content{\n  background:var(--color-neutral-300) linear-gradient(\n      to right,\n      var(--color-neutral-300) 0%,\n      var(--color-neutral-100) 20%,\n      var(--color-neutral-300) 40%,\n      var(--color-neutral-300) 100%\n    ) no-repeat;\n  animation:skeletonShimmer infinite 1.2s linear;\n  border-radius:var(--shape-border-radius-2);\n}\n.dropin-skeleton__empty{\n  background:none;\n}\n\n.dropin-skeleton-row--multiline{\n  --multiline-gap-spacing:var(--spacing-medium);\n  display:grid;\n  grid-auto-rows:max-content;\n  gap:var(--multiline-gap-spacing);\n}\n\n.dropin-skeleton-row--full{\n  grid-column:1 / -1;\n}\n.dropin-skeleton-row svg{\n  fill:var(--color-neutral-400);\n  fill-opacity:0.5;\n  animation-duration:1s;\n  animation-fill-mode:forwards;\n  animation-iteration-count:infinite;\n  animation-name:placeholderShimmer;\n  animation-timing-function:linear;\n}\n\n.dropin-skeleton-row__row-xsmall{\n  height:32px;\n}\n\n.dropin-skeleton-row__row-small{\n  height:40px;\n}\n\n.dropin-skeleton-row__row-medium{\n  height:48px;\n}\n\n.dropin-skeleton-row__row-large{\n  height:56px;\n}\n\n.dropin-skeleton-row__row-xlarge{\n  height:72px;\n}\n\n.dropin-skeleton-row__heading-xsmall{\n  height:20px;\n}\n\n.dropin-skeleton-row__heading-small{\n  height:24px;\n}\n\n.dropin-skeleton-row__heading-medium{\n  height:32px;\n}\n\n.dropin-skeleton-row__heading-large{\n  height:40px;\n}\n\n.dropin-skeleton-row__heading-xlarge{\n  height:48px;\n}\n\n@keyframes skeletonShimmer{\n  0%{\n    background-position:-600px 0;\n  }\n\n  100%{\n    background-position:600px 0;\n  }\n}\n\n@keyframes placeholderShimmer{\n  0%{\n    fill-opacity:0.5;\n  }\n\n  50%{\n    fill-opacity:1;\n  }\n\n  100%{\n    fill-opacity:0.5;\n  }\n}\n@media only screen and (max-width: 600px){\n  .dropin-skeleton{\n    grid-template-columns:1fr;\n  }\n}\n",""]);const l=a},1178:(n,t,r)=>{n.exports=(e=>{var n={};return r.d(n,e),n})({events:()=>e.events})},5867:(e,t,r)=>{e.exports=(e=>{var n={};return r.d(n,e),n})({FetchGraphQL:()=>n.FetchGraphQL})}};import t from"../runtime.js";import*as r from"../408.js";t.C(r);import*as i from"./AuthCombine.js";t.C(i);var o,a=(o=5783,t(t.s=o)),l=a.S,s=a.A;export{l as AuthCombine,s as default};