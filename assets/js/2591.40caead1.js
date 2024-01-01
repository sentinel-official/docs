"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[2591,8180],{8180:(t,e,i)=>{i.r(e),i.d(e,{dyte_audio_grid:()=>o});var s=i(37176),r=(i(78410),i(68753)),a=i(74710),n=(i(60804),i(67341));const o=class{constructor(t){(0,s.r)(this,t),this.onParticipantListUpdate=()=>{if(!this.meeting)return;let t=this.meeting.participants.active.toArray();this.hideSelf||(t=[...t,this.meeting.self]);let e=this.meeting.participants.joined.toArray().filter((e=>!t.some((t=>t.id===e.id))));this.activeParticipants=t,this.onStageParticipants=e},this.meeting=void 0,this.config=void 0,this.states=void 0,this.iconPack=r.d,this.size=void 0,this.t=(0,a.u)(),this.hideSelf=!1,this.activeParticipants=[],this.onStageParticipants=[],this.offStageParticipants=[]}connectedCallback(){this.meetingChanged(this.meeting)}meetingChanged(t){t&&"AUDIO_ROOM"===t.self.config.viewType&&(this.onParticipantListUpdate(),t.participants.active.addListener("participantJoined",this.onParticipantListUpdate),t.participants.active.addListener("participantLeft",this.onParticipantListUpdate),t.participants.joined.addListener("participantJoined",this.onParticipantListUpdate),t.participants.joined.addListener("participantLeft",this.onParticipantListUpdate))}disconnectedCallback(){this.resizeObserver.disconnect(),this.resizeObserver=void 0,this.meeting.participants.active.removeListener("participantJoined",this.onParticipantListUpdate),this.meeting.participants.active.removeListener("participantLeft",this.onParticipantListUpdate),this.meeting.participants.joined.removeListener("participantJoined",this.onParticipantListUpdate),this.meeting.participants.joined.removeListener("participantLeft",this.onParticipantListUpdate)}renderGrid(t=[]){const e={meeting:this.meeting,size:this.size,config:this.config,t:this.t,iconPack:this.iconPack,states:this.states};return t.map((t=>(0,s.h)(n.R,{element:"dyte-audio-tile",defaults:e,props:{key:t.id,participant:t},childProps:{participant:t},deepProps:!0})))}render(){const t=this.activeParticipants.concat(this.onStageParticipants);return(0,s.h)(s.H,null,(0,s.h)("div",{class:"content scrollbar"},(0,s.h)("div",{class:"stage grid"},this.renderGrid(t)),this.offStageParticipants.length>0&&(0,s.h)("div",{class:"waitlist-area"},(0,s.h)("div",{class:"listening-title"},this.offStageParticipants.length," ",this.t("grid.listening")),(0,s.h)("div",{class:"waitlist-grid grid"},this.renderGrid(this.offStageParticipants)))),(0,s.h)("slot",null))}get host(){return(0,s.g)(this)}static get watchers(){return{meeting:["meetingChanged"]}}};o.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{position:relative;height:100%;width:100%;box-sizing:border-box}.content{position:relative;display:flex;height:100%;width:100%;flex-direction:column;overflow-y:auto}.waitlist-area{display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.listening-title{text-align:center;margin-top:var(--dyte-space-5, 20px);margin-bottom:var(--dyte-space-4, 16px)}.waitlist-grid{flex:1 1 0%}.grid{box-sizing:border-box;flex:1 1 0%;gap:var(--dyte-space-6, 24px);display:flex;align-content:center;justify-content:center;flex-wrap:wrap}:host([size='md']) .grid{gap:var(--dyte-space-4, 16px)}:host([size='sm']) .grid{gap:var(--dyte-space-3, 12px)}dyte-audio-tile{aspect-ratio:1 / 1;flex:none;width:calc(20%);max-width:var(--dyte-space-48, 192px);transition:all 0.3s}dyte-audio-tile[size='md']{width:100%;max-width:var(--dyte-space-36, 144px)}dyte-audio-tile[size='sm']{width:100%;max-width:var(--dyte-space-24, 96px)}"},67341:(t,e,i)=>{i.d(e,{R:()=>c,l:()=>o});var s=i(37176);const r=({element:t,size:e,states:i={},config:s={}})=>{let r=[];const a=null==s?void 0:s.root[t],n=t=>{r.push(t),"string"==typeof e&&r.push(`${t}.${e}`)};if(n(t),"object"==typeof a&&!Array.isArray(a)&&null!==a){const{state:e,states:s}=a;let r=t,o=[];if(Array.isArray(s)){o=s.filter((t=>i[t])),o.sort();for(const t of o)n(`${r}.${t}`);if(o.length>1){n([r,...o].join("."))}}if("string"==typeof e){const s=`${t}[${e}=${i[e]}]`;n(s);for(const t of o)n(`${s}.${t}`);if(o.length>1){n([s,...o].join("."))}}}return r},a=({selectors:t,root:e})=>{if(!e||!Array.isArray(t))return[];let i=[];for(const s of t){const t=e[s];if(Array.isArray(t))i=[...t];else if(t){if(t.children&&(i=[...t.children]),Array.isArray(t.remove))for(const e of t.remove)i=i.filter((t=>"string"==typeof t?t!==e:!Array.isArray(t)||t[0]!==e));if(t.addBefore)for(const[e,s]of Object.entries(t.addBefore)){const t=i.findIndex((t=>"string"==typeof t?t===e:!!Array.isArray(t)&&t[0]===e));t>=0&&i.splice(t,0,...s)}Array.isArray(t.add)&&(i=i.concat(t.add)),Array.isArray(t.prepend)&&(i=t.prepend.concat(i))}}return i},n=({elements:t,defaults:e,props:i={},deepProps:r=!1,elementProps:a={}})=>Array.isArray(t)&&0!==t.length?t.map((t=>(0,s.h)(c,{element:t,defaults:e,props:i,childProps:r&&i,elementProps:a}))):null,o=({element:t,defaults:e,props:i={},elementProps:s={}})=>{var n;const{config:o,size:c,states:l}=e;let p,d={},h=[];Array.isArray(t)?[p,d,...h]=t:p=t;const g=null===(n=null==o?void 0:o.root)||void 0===n?void 0:n[p];null!=g&&"props"in g&&(i=Object.assign(Object.assign({},g.props),i)),i=Object.assign(Object.assign({},i),d),p in s&&(i=Object.assign(Object.assign({},i),s[p]));const f=r({element:p,size:c,states:l,config:o});return a({selectors:f,root:o.root}).length},c=({element:t,defaults:e,childProps:i={},props:o={},onlyChildren:c=!1,asHost:l=!1,deepProps:p=!1,elementProps:d={}},h)=>{var g;const{config:f,size:y,states:u}=e;let b,m={},v=[];Array.isArray(t)?[b,m,...v]=t:b=t;const P=null===(g=null==f?void 0:f.root)||void 0===g?void 0:g[b];null!=P&&"props"in P&&(o=Object.assign(Object.assign({},P.props),o)),o=Object.assign(Object.assign({},o),m),b in d&&(o=Object.assign(Object.assign({},o),d[b]));const A=r({element:b,size:y,states:u,config:f}),x=a({selectors:A,root:f.root});if(c)return(0,s.h)(n,{elements:x,defaults:e,props:i,deepProps:p,elementProps:d});const j=(({selectors:t,styles:e})=>{if(!Array.isArray(t)||null==e)return{};const i={};for(const s of t){const t=e[s];null!=t&&Object.assign(i,t)}return i})({selectors:A,styles:f.styles});if(l)return(0,s.h)(s.H,Object.assign({},e,{style:j},o),(0,s.h)(n,{elements:x,defaults:e,props:i,deepProps:p,elementProps:d}),h,v.map((t=>{if(Array.isArray(t)){const[i,r]=t;return(0,s.h)(i,Object.assign({},e,r))}return t})));if(["dyte-header","dyte-controlbar"].includes(b)&&(o.disableRender=!0),b.startsWith("dyte-"))return(0,s.h)(b,Object.assign({},e,{style:j},o),(0,s.h)(n,{elements:x,defaults:e,props:i,deepProps:p,elementProps:d}),h,v.map((t=>{if(Array.isArray(t)){const[i,r]=t;return(0,s.h)(i,Object.assign({},e,r))}return t})));{const[t,r]=b.split("#");return(0,s.h)(t,Object.assign({id:r,style:j},o),(0,s.h)(n,{elements:x,defaults:e,props:i,deepProps:p,elementProps:d}),h,v.map((t=>{if(Array.isArray(t)){const[i,r]=t;return(0,s.h)(i,Object.assign({},e,r))}return t})))}}}}]);