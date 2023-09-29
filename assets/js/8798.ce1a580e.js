"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[8798,3395],{98798:(e,t,s)=>{s.r(t),s.d(t,{dyte_ai:()=>c});var i=s(65733),r=s(68753),a=s(8934),n=s(90362),o=s(86020),l=s(46503);const c=class{constructor(e){(0,i.r)(this,e),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.close=()=>{this.stateUpdate.emit({activeAI:!1}),l.s.activeAI=!1},this.transcriptionHandler=()=>{"transcriptions"!==this.tab&&(this.newTranscriptionAvailable=!0)},this.aiMessageHandler=()=>{"home"!==this.tab&&(this.newAiMessageAvailable=!0)},this.defaultSection="home",this.meeting=void 0,this.middlewares={},this.states=void 0,this.config=o.d,this.iconPack=r.d,this.t=(0,a.u)(),this.size=void 0,this.view="sidebar",this.tab=this.defaultSection,this.newTranscriptionAvailable=!1,this.newAiMessageAvailable=!1}connectedCallback(){var e,t,s,i;this.viewChanged(this.view),null===(t=null===(e=this.middlewares)||void 0===e?void 0:e.speech)||void 0===t||t.on("transcription",this.transcriptionHandler),null===(i=null===(s=this.middlewares)||void 0===s?void 0:s.speech)||void 0===i||i.on("chatGPTReply",this.aiMessageHandler)}disconnectedCallback(){var e,t,s,i;this.keydownListener&&document.removeEventListener("keydown",this.keydownListener),null===(t=null===(e=this.middlewares)||void 0===e?void 0:e.speech)||void 0===t||t.off("transcription",this.transcriptionHandler),null===(i=null===(s=this.middlewares)||void 0===s?void 0:s.speech)||void 0===i||i.off("chatGPTReply",this.aiMessageHandler)}viewChanged(e){"full-screen"===e&&(this.keydownListener=e=>{"Escape"===e.key&&this.close()},document.addEventListener("keydown",this.keydownListener))}tabChanged(e){"transcriptions"===e&&this.newTranscriptionAvailable&&(this.newTranscriptionAvailable=!1),"home"===e&&this.newAiMessageAvailable&&(this.newAiMessageAvailable=!1)}viewSection(e){this.tab=e,l.s.activeSidebar=!0}render(){var e;if(!this.middlewares.speech||!(null===(e=this.states)||void 0===e?void 0:e.activeAI))return null;const t={meeting:this.meeting,config:this.config,states:this.states||l.s,size:this.size,t:this.t,iconPack:this.iconPack,middlewares:this.middlewares},s=this.middlewares.speech;return(0,i.h)(i.H,null,(0,i.h)("h3",{class:"title"},this.t("ai")),(0,i.h)("div",{id:"mobile-header"},(0,i.h)("dyte-button",{variant:"ghost",class:{active:"home"===this.tab},onClick:()=>this.viewSection("home"),iconPack:this.iconPack,t:this.t},this.t("ai.home"),this.newAiMessageAvailable&&(0,i.h)("span",{class:"dot"},".")),(0,i.h)("dyte-button",{variant:"ghost",class:{active:"transcriptions"===this.tab},onClick:()=>this.viewSection("transcriptions"),iconPack:this.iconPack,t:this.t},this.t("ai.transcriptions"),this.newTranscriptionAvailable&&(0,i.h)("span",{class:"dot"},"."))),(0,i.h)("dyte-button",{variant:"ghost",kind:"icon",class:"close",onClick:this.close,"aria-label":this.t("close"),iconPack:this.iconPack,t:this.t},(0,i.h)("dyte-icon",{icon:this.iconPack.dismiss,iconPack:this.iconPack,t:this.t})),"home"===this.tab&&(0,i.h)(n.R,{element:"dyte-ai-home",defaults:t,props:{aiClient:s,initialMessages:s.aiMesssages,meeting:this.meeting}}),"transcriptions"===this.tab&&(0,i.h)(n.R,{element:"dyte-ai-transcriptions",defaults:t,props:{aiClient:s,initialTranscriptions:s.transcriptions}}),"personal"===this.tab&&(0,i.h)(n.R,{element:"dyte-ai-chat",defaults:t}))}static get watchers(){return{view:["viewChanged"],tab:["tabChanged"]}}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;box-sizing:border-box;display:flex;width:100%;max-width:var(--dyte-space-80, 320px);flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden}.close{position:absolute;top:var(--dyte-space-3, 12px);left:var(--dyte-space-3, 12px)}.title{margin-left:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-0, 0px);margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-2, 8px);-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:var(--dyte-space-0, 0px);text-align:center;font-size:16px;font-weight:400}#mobile-header{margin-top:var(--dyte-space-2, 8px);display:flex;align-items:center;justify-content:space-evenly;border-bottom:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}#mobile-header dyte-button{border-bottom:var(--dyte-border-width-md, 2px) solid transparent;position:relative;border-radius:var(--dyte-border-radius-none, 0)}#mobile-header dyte-button:hover{background-color:transparent}#mobile-header dyte-button.active{border-color:rgb(var(--dyte-colors-brand-400, 53 110 253))}#mobile-header dyte-button .dot{font-size:48px;position:absolute;top:-26px;right:calc(var(--dyte-space-1, 4px) * -1);--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}dyte-ai-home,dyte-ai-transcriptions,dyte-ai-chat{flex:1}:host([view='sidebar']){margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}:host([view='full-screen']){position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);z-index:50;max-width:100%;border:none}"},90362:(e,t,s)=>{s.d(t,{R:()=>a});var i=s(65733);const r=({elements:e,defaults:t,props:s={},deepProps:r=!1,elementProps:n={}})=>Array.isArray(e)&&0!==e.length?e.map((e=>(0,i.h)(a,{element:e,defaults:t,props:s,childProps:r&&s,elementProps:n}))):null,a=({element:e,defaults:t,childProps:s={},props:a={},onlyChildren:n=!1,asHost:o=!1,deepProps:l=!1,elementProps:c={}},d)=>{var h;const{config:p,size:y,states:v}=t;let b,g={},u=[];Array.isArray(e)?[b,g,...u]=e:b=e;const f=null===(h=null==p?void 0:p.root)||void 0===h?void 0:h[b];null!=f&&"props"in f&&(a=Object.assign(Object.assign({},f.props),a)),a=Object.assign(Object.assign({},a),g),b in c&&(a=Object.assign(Object.assign({},a),c[b]));const m=(({element:e,size:t,states:s={},config:i={}})=>{let r=[];const a=null==i?void 0:i.root[e],n=e=>{r.push(e),"string"==typeof t&&r.push(`${e}.${t}`)};if(n(e),"object"==typeof a&&!Array.isArray(a)&&null!==a){const{state:t,states:i}=a;let r=e,o=[];if(Array.isArray(i)){o=i.filter((e=>s[e])),o.sort();for(const e of o)n(`${r}.${e}`);o.length>1&&n([r,...o].join("."))}if("string"==typeof t){const i=`${e}[${t}=${s[t]}]`;n(i);for(const e of o)n(`${i}.${e}`);o.length>1&&n([i,...o].join("."))}}return r})({element:b,size:y,states:v,config:p}),w=(({selectors:e,root:t})=>{if(!t||!Array.isArray(e))return[];let s=[];for(const i of e){const e=t[i];if(Array.isArray(e))s=[...e];else if(e){if(e.children&&(s=[...e.children]),Array.isArray(e.remove))for(const t of e.remove)s=s.filter((e=>"string"==typeof e?e!==t:!Array.isArray(e)||e[0]!==t));if(e.addBefore)for(const[t,i]of Object.entries(e.addBefore)){const e=s.findIndex((e=>"string"==typeof e?e===t:!!Array.isArray(e)&&e[0]===t));e>=0&&s.splice(e,0,...i)}Array.isArray(e.add)&&(s=s.concat(e.add)),Array.isArray(e.prepend)&&(s=e.prepend.concat(s))}}return s})({selectors:m,root:p.root});if(n)return(0,i.h)(r,{elements:w,defaults:t,props:s,deepProps:l,elementProps:c});const A=(({selectors:e,styles:t})=>{if(!Array.isArray(e)||null==t)return{};const s={};for(const i of e){const e=t[i];null!=e&&Object.assign(s,e)}return s})({selectors:m,styles:p.styles});if(o)return(0,i.h)(i.H,Object.assign({},t,{style:A},a),(0,i.h)(r,{elements:w,defaults:t,props:s,deepProps:l,elementProps:c}),d,u.map((e=>{if(Array.isArray(e)){const[s,r]=e;return(0,i.h)(s,Object.assign({},t,r))}return e})));if(["dyte-header","dyte-controlbar"].includes(b)&&(a.disableRender=!0),b.startsWith("dyte-"))return(0,i.h)(b,Object.assign({},t,{style:A},a),(0,i.h)(r,{elements:w,defaults:t,props:s,deepProps:l,elementProps:c}),d,u.map((e=>{if(Array.isArray(e)){const[s,r]=e;return(0,i.h)(s,Object.assign({},t,r))}return e})));{const[e,n]=b.split("#");return(0,i.h)(e,Object.assign({id:n,style:A},a),(0,i.h)(r,{elements:w,defaults:t,props:s,deepProps:l,elementProps:c}),d,u.map((e=>{if(Array.isArray(e)){const[s,r]=e;return(0,i.h)(s,Object.assign({},t,r))}return e})))}}}}]);