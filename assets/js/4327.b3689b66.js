"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[4327,8833],{84327:(e,t,s)=>{s.r(t),s.d(t,{dyte_plugins_toggle:()=>l});var i=s(37176),n=s(68753),a=s(74710),r=s(39571),o=s(57419);s(78410),s(2079);const l=class{constructor(e){(0,i.r)(this,e),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.updateCanView=()=>{this.canViewPlugins=(0,o.b)(this.meeting)},this.variant="button",this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=n.d,this.t=(0,a.u)(),this.pluginsActive=!1,this.canViewPlugins=!1}disconnectedCallback(){var e,t;null===(t=null===(e=this.meeting)||void 0===e?void 0:e.stage)||void 0===t||t.removeListener("stageStatusUpdate",this.updateCanView)}connectedCallback(){this.statesChanged(this.states),this.meetingChanged(this.meeting),(0,r.o)("sidebar",(()=>this.statesChanged()))}meetingChanged(e){var t;null!=e&&(this.canViewPlugins=(0,o.b)(e),null===(t=null==e?void 0:e.stage)||void 0===t||t.on("stageStatusUpdate",this.updateCanView))}statesChanged(e){const t=e||r.s;null!=t&&(this.pluginsActive=!0===t.activeSidebar&&"plugins"===t.sidebar)}togglePlugins(){const e=this.states||r.s;this.pluginsActive=!((null==e?void 0:e.activeSidebar)&&"plugins"===(null==e?void 0:e.sidebar)),this.stateUpdate.emit({activeSidebar:this.pluginsActive,sidebar:this.pluginsActive?"plugins":void 0,activeMoreMenu:!1,activeAI:!1}),r.s.activeSidebar=this.pluginsActive,r.s.sidebar=this.pluginsActive?"plugins":void 0,r.s.activeMoreMenu=!1}render(){if(!this.canViewPlugins)return;const e=this.t("plugins");return(0,i.h)(i.H,{title:e},(0,i.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,class:{active:this.pluginsActive},onClick:()=>this.togglePlugins(),icon:this.iconPack.rocket,label:e,variant:this.variant}))}static get watchers(){return{meeting:["meetingChanged"],states:["statesChanged"]}}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"},57419:(e,t,s)=>{s.d(t,{a:()=>o,b:()=>l,c:()=>a,d:()=>r});var i=s(78410),n=s(2079);const a=e=>{if(e&&!e.chat)return!1;const t=null==e?void 0:e.self.config;if(t&&!t.controlBar.elements.chat)return!1;const{chatPublic:s,chatPrivate:i}=e.self.permissions;return s.canSend||s.text||s.files||i.canSend||i.canReceive||i.files||i.text},r=e=>{if(e&&!e.polls)return!1;const t=null==e?void 0:e.self.config;if(t&&!t.controlBar.elements.polls)return!1;const{polls:s}=e.self.permissions;return s.canCreate||s.canView||s.canVote},o=e=>{var t,s,a,r;if((null===(t=null==e?void 0:e.__internals__)||void 0===t?void 0:t.features.hasFeature(n.F.FEAT_PARTICIPANT_LIST))&&!(null===(s=e.self.permissions)||void 0===s?void 0:s.showParticipantList))return!1;if((0,i.s)(e)&&!(null===(a=e.self.permissions)||void 0===a?void 0:a.acceptPresentRequests))return!1;if(e&&!e.participants)return!1;if("LIVESTREAM"===e.meta.viewType)return e.self.permissions.acceptPresentRequests||"ON_STAGE"===(null===(r=null==e?void 0:e.stage)||void 0===r?void 0:r.status);const o=null==e?void 0:e.self.config;return!(o&&!o.controlBar.elements.participants)},l=e=>{if((0,i.a)(e))return!1;if(e&&!e.plugins)return!1;if("LIVESTREAM"===e.meta.viewType)return"ON_STAGE"===e.stage.status;const t=null==e?void 0:e.self.config;if(t&&!t.controlBar.elements.plugins)return!1;const{plugins:s}=e.self.permissions;return s.canClose||s.canStart}},39571:(e,t,s)=>{s.d(t,{o:()=>c,s:()=>l});var i=s(37176);const n=e=>!("isConnected"in e)||e.isConnected,a=((e,t)=>{let s;return(...i)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,e(...i)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(n))}),2e3),r=e=>"function"==typeof e?e():e,o=(e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)},{state:l,onChange:c}=((e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{const s=r(e);let i=new Map(Object.entries(null!=s?s:{}));const n={dispose:[],get:[],set:[],reset:[]},a=()=>{var t;i=new Map(Object.entries(null!==(t=r(e))&&void 0!==t?t:{})),n.reset.forEach((e=>e()))},l=e=>(n.get.forEach((t=>t(e))),i.get(e)),c=(e,s)=>{const a=i.get(e);t(s,a,e)&&(i.set(e,s),n.set.forEach((t=>t(e,s,a))))},u="undefined"==typeof Proxy?{}:new Proxy(s,{get:(e,t)=>l(t),ownKeys:e=>Array.from(i.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>i.has(t),set:(e,t,s)=>(c(t,s),!0)}),d=(e,t)=>(n[e].push(t),()=>{o(n[e],t)});return{state:u,get:l,set:c,on:d,onChange:(t,s)=>{const i=d("set",((e,i)=>{e===t&&s(i)})),n=d("reset",(()=>s(r(e)[t])));return()=>{i(),n()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(d("set",t.set)),t.get&&e.push(d("get",t.get)),t.reset&&e.push(d("reset",t.reset)),t.dispose&&e.push(d("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{n.dispose.forEach((e=>e())),a()},reset:a,forceUpdate:e=>{const t=i.get(e);n.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof i.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,i.a)();s&&((e,t,s)=>{const i=e.get(t);i?i.includes(s)||i.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(i.f)),a(e)},reset:()=>{e.forEach((e=>e.forEach(i.f))),a(e)}}})()),s})({})}}]);