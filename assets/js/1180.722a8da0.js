"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[1180,1001],{1001:(t,e,s)=>{s.r(e),s.d(e,{dyte_pip_toggle:()=>p});var i=s(37176),n=s(9367),o=(s(78410),s(68753)),r=s(74710),a=(s(60804),s(39571));const p=class{constructor(t){(0,i.r)(this,t),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.variant="button",this.meeting=void 0,this.states=void 0,this.config=n.d,this.iconPack=o.d,this.size=void 0,this.t=(0,r.u)(),this.pipSupported=!1}connectedCallback(){this.meetingChanged(this.meeting)}meetingChanged(t){var e,s;null!==t&&(this.pipSupported=t.participants.pip.isSupported()&&(null===(e=t.self.config)||void 0===e?void 0:e.pipMode)&&"LIVESTREAM"!==(null===(s=t.self.config)||void 0===s?void 0:s.viewType))}togglePip(){this.meeting.participants.pip.isActive?this.meeting.participants.pip.disable():this.meeting.participants.pip.enable(),this.stateUpdate.emit({activeMoreMenu:!1}),a.s.activeMoreMenu=!1}render(){if(!this.pipSupported)return;const t=this.meeting.participants.pip.isActive;return(0,i.h)(i.H,{tabIndex:0,role:"log","aria-label":"Picture-in-Picture mode"},(0,i.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,onClick:()=>this.togglePip(),icon:t?this.iconPack.pip_on:this.iconPack.pip_off,label:t?this.t("pip_off"):this.t("pip_on"),variant:this.variant}))}static get watchers(){return{meeting:["meetingChanged"]}}};p.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"},39571:(t,e,s)=>{s.d(e,{o:()=>c,s:()=>p});var i=s(37176);const n=t=>!("isConnected"in t)||t.isConnected,o=((t,e)=>{let s;return(...i)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,t(...i)}),e)}})((t=>{for(let e of t.keys())t.set(e,t.get(e).filter(n))}),2e3),r=t=>"function"==typeof t?t():t,a=(t,e)=>{const s=t.indexOf(e);s>=0&&(t[s]=t[t.length-1],t.length--)},{state:p,onChange:c}=((t,e)=>{const s=((t,e=((t,e)=>t!==e))=>{const s=r(t);let i=new Map(Object.entries(null!=s?s:{}));const n={dispose:[],get:[],set:[],reset:[]},o=()=>{var e;i=new Map(Object.entries(null!==(e=r(t))&&void 0!==e?e:{})),n.reset.forEach((t=>t()))},p=t=>(n.get.forEach((e=>e(t))),i.get(t)),c=(t,s)=>{const o=i.get(t);e(s,o,t)&&(i.set(t,s),n.set.forEach((e=>e(t,s,o))))},h="undefined"==typeof Proxy?{}:new Proxy(s,{get:(t,e)=>p(e),ownKeys:t=>Array.from(i.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>i.has(e),set:(t,e,s)=>(c(e,s),!0)}),d=(t,e)=>(n[t].push(e),()=>{a(n[t],e)});return{state:h,get:p,set:c,on:d,onChange:(e,s)=>{const i=d("set",((t,i)=>{t===e&&s(i)})),n=d("reset",(()=>s(r(t)[e])));return()=>{i(),n()}},use:(...t)=>{const e=t.reduce(((t,e)=>(e.set&&t.push(d("set",e.set)),e.get&&t.push(d("get",e.get)),e.reset&&t.push(d("reset",e.reset)),e.dispose&&t.push(d("dispose",e.dispose)),t)),[]);return()=>e.forEach((t=>t()))},dispose:()=>{n.dispose.forEach((t=>t())),o()},reset:o,forceUpdate:t=>{const e=i.get(t);n.set.forEach((s=>s(t,e,e)))}}})(t,e);return s.use((()=>{if("function"!=typeof i.a)return{};const t=new Map;return{dispose:()=>t.clear(),get:e=>{const s=(0,i.a)();s&&((t,e,s)=>{const i=t.get(e);i?i.includes(s)||i.push(s):t.set(e,[s])})(t,e,s)},set:e=>{const s=t.get(e);s&&t.set(e,s.filter(i.f)),o(t)},reset:()=>{t.forEach((t=>t.forEach(i.f))),o(t)}}})()),s})({})}}]);