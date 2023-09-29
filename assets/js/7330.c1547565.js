"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[7330,8419],{84764:(e,t,a)=>{a.d(t,{C:()=>r});var s=a(65733),i=a(72729),o=a(22906);const r=({name:e,time:t,now:a})=>(0,s.h)("div",{class:"head"},(0,s.h)("div",{class:"name"},(0,o.s)((0,o.f)(e),20)),(0,s.h)("div",{class:"time",title:(0,i.f)(t)},(0,i.e)(t,a)))},72729:(e,t,a)=>{a.d(t,{d:()=>s,e:()=>i,f:()=>o});const s=(e,t)=>{const a=t.getTime()-e.getTime();return Math.round(Math.abs(a/1e3/60))},i=(e,t)=>{const a=s(e,t);if(a<2)return"just now";if(a<60)return`${a}m ago`;const i=Math.round(a/60);if(a<90)return`about ${i}h ago`;if(i<24)return`${i}h ago`;const o=Math.round(i/24);if(o<7)return`${o}d ago`;return`${Math.round(o/7)}w ago`},o=e=>e.toDateString()+" "+e.toLocaleTimeString()},88419:(e,t,a)=>{a.r(t),a.d(t,{dyte_ai_home:()=>r});var s=a(65733),i=a(84764),o=a(82321);const r=class{constructor(e){(0,s.r)(this,e),this.handleSubmit=e=>{var t,a;e.preventDefault(),e.stopPropagation(),this.messages=[...this.messages,{action:"Prompt",participantName:this.meeting.self.name,createdAt:new Date,prompt:this.prompt,loading:!0}],null===(a=null===(t=this.middlewares)||void 0===t?void 0:t.speech)||void 0===a||a.sendMessageToChatGPT({action:"default",message:this.prompt}),this.prompt=""},this.handleSummarise=()=>{var e,t;null===(t=null===(e=this.middlewares)||void 0===e?void 0:e.speech)||void 0===t||t.sendMessageToChatGPT({action:"summarization"})},this.handleAgenda=()=>{var e,t;null===(t=null===(e=this.middlewares)||void 0===e?void 0:e.speech)||void 0===t||t.sendMessageToChatGPT({action:"agenda generation"})},this.handleMoM=()=>{var e,t;null===(t=null===(e=this.middlewares)||void 0===e?void 0:e.speech)||void 0===t||t.sendMessageToChatGPT({action:"action items generation"})},this.prompt="",this.messages=[],this.meeting=void 0,this.initialMessages=void 0,this.middlewares={}}handleChatGPTReply(e){const t=this.messages.find((t=>"default"===e.action?t.id===e.id:t.id===e.id||t.action===this.mapMessageAction(e.action)));t&&(t.loading||t.action!==this.mapMessageAction("default"))?this.messages=[...this.messages.map((t=>t.id===e.id||t.action===this.mapMessageAction(e.action)?Object.assign(Object.assign({},e),{action:this.mapMessageAction(e.action)}):t))]:this.messages=[...this.messages,Object.assign(Object.assign({},e),{action:this.mapMessageAction(e.action)})]}connectedCallback(){var e,t,a;this.initialMessages?this.messages=this.initialMessages.map((e=>Object.assign(Object.assign({},e),{action:this.mapMessageAction(e.action)}))):(null===(e=this.middlewares)||void 0===e?void 0:e.speech)&&setTimeout((()=>{var e;this.messages=null===(e=this.middlewares.speech.aiMesssages)||void 0===e?void 0:e.map((e=>Object.assign(Object.assign({},e),{action:this.mapMessageAction(e.action)})))}),1e3),null===(a=null===(t=this.middlewares)||void 0===t?void 0:t.speech)||void 0===a||a.on("chatGPTReply",(e=>this.handleChatGPTReply(e)))}disconnectedCallback(){var e,t;null===(t=null===(e=this.middlewares)||void 0===e?void 0:e.speech)||void 0===t||t.off("chatGPTReply",(e=>this.handleChatGPTReply(e)))}messagesUpdated(){setTimeout((()=>{(0,o.s)(this.contentContainer,!1)}),100)}mapMessageAction(e){switch(e){case"default":return"Prompt";case"summarization":return"Summary";case"agenda generation":return"Agenda";case"action items generation":return"Action items"}}render(){return(0,s.h)(s.H,null,(0,s.h)("div",{class:"content scrollbar",ref:e=>this.contentContainer=e},(0,s.h)("p",{class:"public-message"},"This conversation will be visible to everyone on the call."),!this.messages.length&&(0,s.h)("div",{class:"hint-message"},(0,s.h)("p",null,"Ask ",(0,s.h)("i",null,'"Hey AI, summarise this call"'),(0,s.h)("br",null)," or ",(0,s.h)("br",null),"Type ",(0,s.h)("i",null,'"Hey AI, what is today\'s agenda?"'))),this.messages.length>0&&(0,s.h)("div",{class:""},this.messages.map((e=>(0,s.h)("div",{class:"message"},(0,s.h)(i.C,{name:e.action,time:new Date(e.createdAt),now:new Date}),(0,s.h)("p",{class:"subtitle"},"Triggered by ",e.participantName),e.prompt&&(0,s.h)("div",{class:"prompt-text"},e.prompt),e.loading?(0,s.h)("div",{class:"loader"},(0,s.h)("dyte-spinner",{size:"sm"}),"\xa0\xa0Generating..."):(0,s.h)("div",{class:"body"},e.response)))))),(0,s.h)("div",{class:"actions"},(0,s.h)("span",null,"Quick actions:"),(0,s.h)("div",null,(0,s.h)("button",{onClick:this.handleSummarise},"Summarise"),(0,s.h)("button",{onClick:this.handleAgenda},"Agenda"),(0,s.h)("button",{onClick:this.handleMoM},"MoM"))),(0,s.h)("form",{class:"prompt",onSubmit:this.handleSubmit},(0,s.h)("input",{value:this.prompt,onInput:e=>{this.prompt=e.target.value},placeholder:"Type your prompt..."})))}static get watchers(){return{messages:["messagesUpdated"]}}};r.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.head{display:flex;align-items:center}.head .name{margin-right:var(--dyte-space-4, 16px);font-size:12px;font-weight:700}.head .time{font-size:12px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}*{box-sizing:border-box;border-width:0;border-style:solid}:host{display:flex;flex-direction:column}.public-message{text-align:center;font-size:12px;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52));margin-top:var(--dyte-space-8, 32px);margin-bottom:var(--dyte-space-8, 32px);margin-left:var(--dyte-space-10, 40px);margin-right:var(--dyte-space-10, 40px)}.content{box-sizing:border-box;display:flex;flex-direction:column;padding:var(--dyte-space-3, 12px);flex:1 0 0px;overflow-y:scroll;}.subtitle{margin-top:var(--dyte-space-1, 4px);font-size:12px;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.hint-message{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;flex:1 1 0%;font-size:14px;line-height:1.5;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}i{font-weight:500;font-style:italic;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.actions{padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-3, 12px);display:flex;align-items:center;justify-content:space-between;font-size:12px}.actions div{display:flex;align-items:center;gap:var(--dyte-space-2, 8px)}.actions button{display:inline-flex;cursor:pointer;border-radius:var(--dyte-border-radius-md, 8px);padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.5);color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.prompt{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.prompt input{height:var(--dyte-space-12, 48px);width:100%;resize:none;background-color:transparent;padding:var(--dyte-space-4, 16px);font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-1000, 255 255 255));outline:2px solid transparent;outline-offset:2px}.message .body{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);white-space:pre-wrap;font-size:14px}.message .loader{display:flex;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);font-size:12px}.message{margin-bottom:var(--dyte-space-3, 12px)}.message:last-child{margin-bottom:var(--dyte-space-0, 0px)}.prompt-text{margin-top:var(--dyte-space-2, 8px);margin-left:var(--dyte-space-1, 4px);border-left-width:var(--dyte-border-width-sm, 1px);border-left-color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);font-size:12px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}"},82321:(e,t,a)=>{a.d(t,{s:()=>s});const s=(e,t=!0)=>{null!=e&&e.scrollTo({top:e.scrollHeight,behavior:t?"smooth":"auto"})}},22906:(e,t,a)=>{a.d(t,{a:()=>o,f:()=>r,g:()=>n,h:()=>i,s:()=>s});const s=(e,t=20)=>null==e?"":e.length>t?`${e.substring(0,t)}...`:e,i=e=>/^\p{Emoji}+$/u.test(e)&&!/^\d+$/.test(e),o=e=>(null==e?void 0:e.trim().toLowerCase().startsWith("javascript:"))?"https://dyte.io":e,r=e=>""===(e=null==e?void 0:e.trim())?"Participant":e;function n(e,t=2){return e.replace(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w\s]/g,"").trim().split(/\s+/).slice(0,t).map((e=>e.charAt(0))).join("").toUpperCase()}}}]);