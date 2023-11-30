"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[3532,3833],{13532:(t,a,i)=>{i.r(a),i.d(a,{dyte_image_message_view:()=>c});var o=i(37176),e=(i(78410),i(68753)),r=i(74710),s=(i(60804),i(22906)),n=i(96396);const c=class{constructor(t){(0,o.r)(this,t),this.onPreview=(0,o.c)(this,"preview",7),this.url=void 0,this.iconPack=e.d,this.t=(0,r.u)(),this.status="loading"}render(){return(0,o.h)("div",{class:{image:!0,loaded:"loaded"===this.status}},(0,o.h)("img",{src:(0,s.a)(this.url),onLoad:()=>{this.status="loaded"},onError:()=>{this.status="errored"},onClick:()=>{"loaded"===this.status&&this.onPreview.emit(this.url)}}),"loading"===this.status&&(0,o.h)("div",{class:"image-spinner",title:this.t("chat.img.loading"),"aria-label":this.t("chat.img.loading")},(0,o.h)("dyte-spinner",{iconPack:this.iconPack,t:this.t})),"errored"===this.status&&(0,o.h)("div",{class:"image-errored",title:this.t("chat.error.img_not_found"),"aria-label":this.t("chat.error.img_not_found")},(0,o.h)("dyte-icon",{icon:this.iconPack.image_off,iconPack:this.iconPack,t:this.t})),"loaded"===this.status&&(0,o.h)("div",{class:"actions"},(0,o.h)("dyte-button",{class:"action",variant:"secondary",kind:"icon",onClick:()=>{this.onPreview.emit(this.url)},iconPack:this.iconPack,t:this.t},(0,o.h)("dyte-icon",{icon:this.iconPack.full_screen_maximize})),(0,o.h)("dyte-button",{class:"action",variant:"secondary",kind:"icon",onClick:()=>(0,n.d)(this.url,{fallbackName:"image"}),iconPack:this.iconPack,t:this.t},(0,o.h)("dyte-icon",{icon:this.iconPack.download,iconPack:this.iconPack,t:this.t}))))}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.image-spinner{cursor:wait}.image-errored{cursor:not-allowed}.image{display:block;font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));position:relative;height:var(--dyte-space-40, 160px);max-width:var(--dyte-space-64, 256px);cursor:pointer}.image img{display:none;height:100%;width:100%;border-radius:var(--dyte-border-radius-sm, 4px);-o-object-fit:cover;object-fit:cover}.image .image-spinner{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.image .image-spinner dyte-spinner{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}.image .image-errored{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);background-color:rgba(var(--dyte-colors-danger, 255 45 45) / 0.1);--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.image .actions{display:none;height:var(--dyte-space-8, 32px);align-items:center;position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.image .actions .action{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);border-radius:var(--dyte-border-radius-none, 0);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.image .actions .action:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.image.loaded img{display:block}.image.loaded .image-spinner{display:none}.image:hover .actions,.image:focus .actions{display:flex}"},96396:(t,a,i)=>{i.d(a,{a:()=>r,d:()=>s,g:()=>e});var o=i(22906);const e=t=>t.split(/[#?]/)[0].split(".").pop().trim(),r=t=>{if(!t)return"0 B";const a=Math.floor(Math.log(t)/Math.log(1024));return`${(t/1024**a).toFixed(2)} ${["B","kB","MB","GB","TB"][a]}`},s=async(t,a)=>{t=(0,o.a)(t);let i=null==a?void 0:a.name;const e=await fetch(t);if(!e.ok)return void window.open(t,"_blank");const r=URL.createObjectURL(await e.blob()),s=document.createElement("a");s.href=r,s.download=null!=i?i:((t,a="file")=>{try{const i=new URL(t).pathname.split("/").pop();return"/"!==i?i:a}catch(i){return a}})(t,null==a?void 0:a.fallbackName),s.click()}},22906:(t,a,i)=>{i.d(a,{a:()=>r,f:()=>s,g:()=>n,h:()=>e,s:()=>o});const o=(t,a=20)=>null==t?"":t.length>a?`${t.substring(0,a)}...`:t,e=t=>/^\p{Emoji}+$/u.test(t)&&!/^\d+$/.test(t),r=t=>(null==t?void 0:t.trim().toLowerCase().startsWith("javascript:"))?"https://dyte.io":t,s=t=>""===(t=null==t?void 0:t.trim())?"Participant":t;function n(t,a=2){return t.replace(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w\s]/g,"").trim().split(/\s+/).slice(0,a).map((t=>t.charAt(0))).join("").toUpperCase()}}}]);