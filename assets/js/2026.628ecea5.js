"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[2026,7311],{37311:(t,i,e)=>{e.r(i),e.d(i,{dyte_avatar:()=>n});var a=e(65733),r=e(68753),s=e(22906),o=e(8934);const n=class{constructor(t){(0,a.r)(this,t),this.getAvatar=()=>{var t;const i=(0,s.f)((null===(t=this.participant)||void 0===t?void 0:t.name)||"");let e;if(null!=this.participant&&"picture"in this.participant&&(e=this.participant.picture),e&&e.length>0&&"errored"!==this.imageState)return(0,a.h)("div",{class:"image-ctr"},"loading"===this.imageState&&(0,a.h)("dyte-spinner",{iconPack:this.iconPack,t:this.t}),(0,a.h)("img",{src:e,class:{loaded:"loaded"===this.imageState},loading:"lazy",title:i,onLoad:()=>this.imageState="loaded",onError:()=>this.imageState="errored",part:"image"}));const r=(0,s.g)(i);return(0,a.h)("div",{class:"initials",title:i,part:"initials"},r)},this.participant=void 0,this.variant="circular",this.size=void 0,this.iconPack=r.d,this.t=(0,o.u)(),this.imageState="loading"}render(){return(0,a.h)(a.H,null,this.getAvatar(),(0,a.h)("slot",null))}};n.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;height:var(--dyte-space-32, 128px);width:var(--dyte-space-32, 128px);align-items:center;justify-content:center;font-size:28px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));border-radius:9999px}dyte-icon{height:50%;width:50%}.image-ctr{display:flex;height:100%;width:100%;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}img{height:var(--dyte-space-0, 0px);width:var(--dyte-space-0, 0px);-o-object-fit:cover;object-fit:cover}img.loaded{height:100%;width:100%}.initials{display:flex;height:100%;width:100%;align-items:center;justify-content:center;text-transform:uppercase}.image{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.image img{display:none;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.image img.loaded{display:block}:host([variant='hexagon']){border-radius:var(--dyte-border-radius-none, 0);-webkit-clip-path:polygon(50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);clip-path:polygon(50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)}:host([variant='square']){border-radius:var(--dyte-border-radius-none, 0);-webkit-clip-path:polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);clip-path:polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)}:host([size='sm']){height:var(--dyte-space-14, 56px);width:var(--dyte-space-14, 56px);font-size:12px}:host([size='md']){height:var(--dyte-space-28, 112px);width:var(--dyte-space-28, 112px)}:host([size='lg']){height:var(--dyte-space-32, 128px);width:var(--dyte-space-32, 128px)}"},22906:(t,i,e)=>{e.d(i,{a:()=>s,f:()=>o,g:()=>n,h:()=>r,s:()=>a});const a=(t,i=20)=>null==t?"":t.length>i?`${t.substring(0,i)}...`:t,r=t=>/^\p{Emoji}+$/u.test(t)&&!/^\d+$/.test(t),s=t=>(null==t?void 0:t.trim().toLowerCase().startsWith("javascript:"))?"https://dyte.io":t,o=t=>""===(t=null==t?void 0:t.trim())?"Participant":t;function n(t,i=2){return t.replace(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w\s]/g,"").trim().split(/\s+/).slice(0,i).map((t=>t.charAt(0))).join("").toUpperCase()}}}]);