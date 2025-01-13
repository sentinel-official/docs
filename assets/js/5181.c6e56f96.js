"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[5181],{65181:(t,e,s)=>{s.r(e),s.d(e,{dyte_ai:()=>l});var i=s(26786),r=s(17073),a=s(13773),n=s(16890),o=s(50975),c=s(8263);s(55055);const l=class{constructor(t){(0,i.r)(this,t),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.close=()=>{this.stateUpdate.emit({activeAI:!1}),c.s.activeAI=!1},this.transcriptionHandler=()=>{"transcriptions"!==this.tab&&(this.newTranscriptionAvailable=!0)},this.defaultSection="home",this.meeting=void 0,this.states=void 0,this.config=o.d,this.iconPack=r.d,this.t=(0,a.u)(),this.size=void 0,this.view="sidebar",this.tab=this.defaultSection,this.newTranscriptionAvailable=!1,this.newAiMessageAvailable=!1}connectedCallback(){var t,e;this.viewChanged(this.view),null===(e=null===(t=this.meeting)||void 0===t?void 0:t.meta)||void 0===e||e.on("transcript",this.transcriptionHandler)}disconnectedCallback(){var t,e;this.keydownListener&&document.removeEventListener("keydown",this.keydownListener),null===(e=null===(t=this.meeting)||void 0===t?void 0:t.meta)||void 0===e||e.off("transcript",this.transcriptionHandler)}viewChanged(t){"full-screen"===t&&(this.keydownListener=t=>{"Escape"===t.key&&this.close()},document.addEventListener("keydown",this.keydownListener))}tabChanged(t){"transcriptions"===t&&this.newTranscriptionAvailable&&(this.newTranscriptionAvailable=!1),"home"===t&&this.newAiMessageAvailable&&(this.newAiMessageAvailable=!1)}viewSection(t){this.tab=t,c.s.activeSidebar=!0}render(){var t,e,s;if(!(null===(e=null===(t=this.meeting)||void 0===t?void 0:t.self)||void 0===e?void 0:e.permissions).transcriptionEnabled||!(null===(s=this.states)||void 0===s?void 0:s.activeAI))return null;const r={meeting:this.meeting,config:this.config,states:this.states||c.s,size:this.size,t:this.t,iconPack:this.iconPack};return(0,i.h)(i.H,null,(0,i.h)("h3",{class:"title"},this.t("ai")),(0,i.h)("div",{id:"mobile-header"},(0,i.h)("dyte-button",{variant:"ghost",class:{active:"home"===this.tab},onClick:()=>this.viewSection("home"),iconPack:this.iconPack,t:this.t},this.t("ai.home"),this.newAiMessageAvailable&&(0,i.h)("span",{class:"dot"},".")),(0,i.h)("dyte-button",{variant:"ghost",class:{active:"transcriptions"===this.tab},onClick:()=>this.viewSection("transcriptions"),iconPack:this.iconPack,t:this.t},this.t("ai.transcriptions"),this.newTranscriptionAvailable&&(0,i.h)("span",{class:"dot"},"."))),(0,i.h)("dyte-button",{variant:"ghost",kind:"icon",class:"close",onClick:this.close,"aria-label":this.t("close"),iconPack:this.iconPack,t:this.t},(0,i.h)("dyte-icon",{icon:this.iconPack.dismiss,iconPack:this.iconPack,t:this.t})),"home"===this.tab&&(0,i.h)(n.R,{element:"dyte-ai-home",defaults:r,props:{meeting:this.meeting}}),"transcriptions"===this.tab&&(0,i.h)(n.R,{element:"dyte-ai-transcriptions",defaults:r}),"personal"===this.tab&&(0,i.h)(n.R,{element:"dyte-ai-chat",defaults:r}))}static get watchers(){return{view:["viewChanged"],tab:["tabChanged"]}}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;box-sizing:border-box;display:flex;width:100%;max-width:var(--dyte-space-80, 320px);flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden}.close{position:absolute;top:var(--dyte-space-3, 12px);left:var(--dyte-space-3, 12px)}.title{margin-left:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-0, 0px);margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-2, 8px);-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:var(--dyte-space-0, 0px);text-align:center;font-size:16px;font-weight:400}#mobile-header{margin-top:var(--dyte-space-2, 8px);display:flex;align-items:center;justify-content:space-evenly;border-bottom:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}#mobile-header dyte-button{border-bottom:var(--dyte-border-width-md, 2px) solid transparent;position:relative;border-radius:var(--dyte-border-radius-none, 0)}#mobile-header dyte-button:hover{background-color:transparent}#mobile-header dyte-button.active{border-color:rgb(var(--dyte-colors-brand-400, 53 110 253))}#mobile-header dyte-button .dot{font-size:48px;position:absolute;top:-26px;right:calc(var(--dyte-space-1, 4px) * -1);--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}dyte-ai-home,dyte-ai-transcriptions,dyte-ai-chat{flex:1}:host([view='sidebar']){margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}:host([view='full-screen']){position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);z-index:50;max-width:100%;border:none}"},16890:(t,e,s)=>{s.d(e,{R:()=>c,l:()=>o});var i=s(26786);const r=({element:t,size:e,states:s={},config:i={}})=>{let r=[];const a=null==i?void 0:i.root[t],n=t=>{r.push(t),"string"==typeof e&&r.push(`${t}.${e}`)};if(n(t),"object"==typeof a&&!Array.isArray(a)&&null!==a){const{state:e,states:i}=a;let r=t,o=[];if(Array.isArray(i)){o=i.filter((t=>s[t])),o.sort();for(const t of o)n(`${r}.${t}`);if(o.length>1){n([r,...o].join("."))}}if("string"==typeof e){const i=`${t}[${e}=${s[e]}]`;n(i);for(const t of o)n(`${i}.${t}`);if(o.length>1){n([i,...o].join("."))}}}return r},a=({selectors:t,root:e})=>{if(!e||!Array.isArray(t))return[];let s=[];for(const i of t){const t=e[i];if(Array.isArray(t))s=[...t];else if(t){if(t.children&&(s=[...t.children]),Array.isArray(t.remove))for(const e of t.remove)s=s.filter((t=>"string"==typeof t?t!==e:!Array.isArray(t)||t[0]!==e));if(t.addBefore)for(const[e,i]of Object.entries(t.addBefore)){const t=s.findIndex((t=>"string"==typeof t?t===e:!!Array.isArray(t)&&t[0]===e));t>=0&&s.splice(t,0,...i)}Array.isArray(t.add)&&(s=s.concat(t.add)),Array.isArray(t.prepend)&&(s=t.prepend.concat(s))}}return s},n=({elements:t,defaults:e,props:s={},deepProps:r=!1,elementProps:a={}})=>Array.isArray(t)&&0!==t.length?t.map((t=>(0,i.h)(c,{element:t,defaults:e,props:s,childProps:r&&s,elementProps:a}))):null,o=({element:t,defaults:e,props:s={},elementProps:i={}})=>{var n;const{config:o,size:c,states:l}=e;let d,p={},h=[];Array.isArray(t)?[d,p,...h]=t:d=t;const y=null===(n=null==o?void 0:o.root)||void 0===n?void 0:n[d];null!=y&&"props"in y&&(s=Object.assign(Object.assign({},y.props),s)),s=Object.assign(Object.assign({},s),p),d in i&&(s=Object.assign(Object.assign({},s),i[d]));const b=r({element:d,size:c,states:l,config:o});return a({selectors:b,root:o.root}).length},c=({element:t,defaults:e,childProps:s={},props:o={},onlyChildren:c=!1,asHost:l=!1,deepProps:d=!1,elementProps:p={}},h)=>{var y;const{config:b,size:v,states:g}=e;let u,f={},m=[];Array.isArray(t)?[u,f,...m]=t:u=t;const A=null===(y=null==b?void 0:b.root)||void 0===y?void 0:y[u];null!=A&&"props"in A&&(o=Object.assign(Object.assign({},A.props),o)),o=Object.assign(Object.assign({},o),f),u in p&&(o=Object.assign(Object.assign({},o),p[u]));const w=r({element:u,size:v,states:g,config:b}),x=a({selectors:w,root:b.root});if(c)return(0,i.h)(n,{elements:x,defaults:e,props:s,deepProps:d,elementProps:p});const k=(({selectors:t,styles:e})=>{if(!Array.isArray(t)||null==e)return{};const s={};for(const i of t){const t=e[i];null!=t&&Object.assign(s,t)}return s})({selectors:w,styles:b.styles});if(l)return(0,i.h)(i.H,Object.assign({},e,{style:k},o),(0,i.h)(n,{elements:x,defaults:e,props:s,deepProps:d,elementProps:p}),h,m.map((t=>{if(Array.isArray(t)){const[s,r]=t;return(0,i.h)(s,Object.assign({},e,r))}return t})));if(["dyte-header","dyte-controlbar"].includes(u)&&(o.disableRender=!0),u.startsWith("dyte-"))return(0,i.h)(u,Object.assign({},e,{style:k},o),(0,i.h)(n,{elements:x,defaults:e,props:s,deepProps:d,elementProps:p}),h,m.map((t=>{if(Array.isArray(t)){const[s,r]=t;return(0,i.h)(s,Object.assign({},e,r))}return t})));{const[t,r]=u.split("#");return(0,i.h)(t,Object.assign({id:r,style:k},o),(0,i.h)(n,{elements:x,defaults:e,props:s,deepProps:d,elementProps:p}),h,m.map((t=>{if(Array.isArray(t)){const[s,r]=t;return(0,i.h)(s,Object.assign({},e,r))}return t})))}}}}]);