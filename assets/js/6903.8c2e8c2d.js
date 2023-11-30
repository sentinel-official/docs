"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[6903,6625],{16625:(t,i,e)=>{e.r(i),e.d(i,{dyte_tab_bar:()=>n});var a=e(37176),s=e(9367),r=e(68753),o=e(74710),c=e(22906);const n=class{constructor(t){(0,a.r)(this,t),this.tabChange=(0,a.c)(this,"tabChange",7),this.size=void 0,this.meeting=void 0,this.states=void 0,this.config=s.d,this.layout="row",this.iconPack=r.d,this.t=(0,o.u)(),this.activeTab=void 0,this.tabs=[]}render(){return(0,a.h)(a.H,null,(0,a.h)("dyte-spotlight-indicator",{meeting:this.meeting,iconPack:this.iconPack,t:this.t,size:this.size}),this.tabs.map((t=>{var i,e,s,r,o;if("screenshare"===t.type){const r=t.participant,o=(0,c.f)(r.name);return(0,a.h)("dyte-button",{title:`${o}'s Screen Share`,key:t.participant.id,kind:"icon",iconPack:this.iconPack,t:this.t,class:{tab:!0,active:"screenshare"===(null===(i=this.activeTab)||void 0===i?void 0:i.type)&&(null===(e=this.activeTab)||void 0===e?void 0:e.participant.id)===t.participant.id},onClick:()=>this.tabChange.emit(t)},(0,a.h)("div",{class:"center col"},(0,a.h)("dyte-icon",{icon:this.iconPack.share_screen_person,iconPack:this.iconPack,t:this.t}),(0,a.h)("span",{class:"name"},r.id===(null===(s=this.meeting)||void 0===s?void 0:s.self.id)?this.t("you"):(0,c.s)(o,6))))}if("plugin"===t.type){const i=t.plugin;return(0,a.h)("dyte-button",{title:i.name,key:i.id,kind:"icon",iconPack:this.iconPack,t:this.t,class:{tab:!0,active:"plugin"===(null===(r=this.activeTab)||void 0===r?void 0:r.type)&&(null===(o=this.activeTab)||void 0===o?void 0:o.plugin.id)===i.id},onClick:()=>this.tabChange.emit(t)},(0,a.h)("div",{class:"center col"},(0,a.h)("img",{src:i.picture}),(0,a.h)("span",{class:"name"},(0,c.s)(i.name,6))))}})))}};n.style=".scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{box-sizing:border-box;display:flex;height:100%;width:var(--dyte-space-16, 64px);flex-direction:column;gap:var(--dyte-space-2, 8px);overflow-y:auto;font-family:var(--dyte-font-family, sans-serif)}dyte-button{z-index:10}.col{display:flex;flex-direction:column;align-items:center}.tab{display:flex;height:var(--dyte-space-16, 64px);width:var(--dyte-space-16, 64px);align-items:center;justify-content:center;margin-bottom:var(--dyte-space-2, 8px);font-size:12px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}.tab.active{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity))}.tab img{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px);border-radius:var(--dyte-border-radius-sm, 4px)}@media (orientation: portrait){:host([size='sm']){margin-top:var(--dyte-space-2, 8px);height:var(--dyte-space-16, 64px);width:100%;flex-direction:row;transition:all 0.3s linear}:host([size='md']){height:var(--dyte-space-24, 96px);width:100%;flex-direction:row;transition:all 0.3s linear}:host .tab{margin:var(--dyte-space-0, 0px)}}:host([size='sm']){flex-direction:column;margin-top:var(--dyte-space-4, 16px);height:var(--dyte-space-16, 64px);width:100%;flex-direction:row;gap:var(--dyte-space-2, 8px);overflow-x:auto}:host([size='sm']) .tab{margin:var(--dyte-space-0, 0px);text-overflow:clip;min-width:100px;height:40px}:host([size='sm']) .tab .col{display:flex;flex-direction:row;align-items:center;gap:var(--dyte-space-2, 8px)}:host([size='sm']) .tab .col img,:host([size='sm']) .tab .col dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}:host([layout='column']){flex-direction:column}:host([layout='column']) .aside{flex:2;max-width:100%;width:100%}"},22906:(t,i,e)=>{e.d(i,{a:()=>r,f:()=>o,g:()=>c,h:()=>s,s:()=>a});const a=(t,i=20)=>null==t?"":t.length>i?`${t.substring(0,i)}...`:t,s=t=>/^\p{Emoji}+$/u.test(t)&&!/^\d+$/.test(t),r=t=>(null==t?void 0:t.trim().toLowerCase().startsWith("javascript:"))?"https://dyte.io":t,o=t=>""===(t=null==t?void 0:t.trim())?"Participant":t;function c(t,i=2){return t.replace(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w\s]/g,"").trim().split(/\s+/).slice(0,i).map((t=>t.charAt(0))).join("").toUpperCase()}}}]);