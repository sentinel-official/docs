"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[1967,3585],{73585:(t,e,i)=>{i.r(e),i.d(e,{dyte_clock:()=>d});var n=i(65733),s=i(68753),a=i(8934);const r=t=>Math.trunc(t).toString().padStart(2,"0"),d=class{constructor(t){(0,n.r)(this,t),this.disconnectMeeting=()=>{var t,e;this.timeout&&clearTimeout(this.timeout),"number"==typeof this.request&&cancelAnimationFrame(this.request),null===(e=null===(t=this.meeting)||void 0===t?void 0:t.meta)||void 0===e||e.removeListener("meetingStartTimeUpdate",this.startedTimeUpdateListener)},this.startedTimeUpdateListener=()=>{var t,e,i;this.startedTime=null===(i=null===(e=null===(t=this.meeting)||void 0===t?void 0:t.meta)||void 0===e?void 0:e.meetingStartedTimestamp)||void 0===i?void 0:i.toISOString()},this.meeting=void 0,this.iconPack=s.d,this.t=(0,a.u)(),this.startedTime=void 0,this.timeDiff=void 0}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){this.disconnectMeeting()}meetingChanged(t){var e,i,n;this.disconnectMeeting(),null!=t&&(this.startedTime=null===(i=null===(e=t.meta)||void 0===e?void 0:e.meetingStartedTimestamp)||void 0===i?void 0:i.toISOString(),null===(n=t.meta)||void 0===n||n.addListener("meetingStartTimeUpdate",this.startedTimeUpdateListener))}startedTimeChanged(t){if(void 0!==t){const t=()=>{this.timeDiff=(Date.now()-new Date(this.startedTime).getTime())/1e3,this.timeout=setTimeout((()=>{null!=this.request&&(this.request=requestAnimationFrame(t))}),500)};this.request=requestAnimationFrame(t)}}getFormattedTime(){if(null==this.timeDiff)return null;const t=this.timeDiff;let e="";return t>=3600&&(e=`${r(t/3600)}:`),e+=`${r(t%3600/60)}:${r(t%60)}`,e}render(){return(0,n.h)(n.H,{tabIndex:0,role:"timer","aria-live":"off"},void 0!==this.startedTime&&[(0,n.h)("dyte-icon",{icon:this.iconPack.clock,"aria-hidden":!0,tabIndex:-1,part:"icon",iconPack:this.iconPack,t:this.t}),(0,n.h)("span",{part:"text"},this.getFormattedTime())])}static get watchers(){return{meeting:["meetingChanged"],startedTime:["startedTimeChanged"]}}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:inline-flex;align-items:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:14px;color:rgb(var(--dyte-colors-text-1000, 255 255 255));font-variant-numeric:tabular-nums}:host([size='sm']){margin-left:var(--dyte-space-1, 4px);margin-right:var(--dyte-space-1, 4px);font-size:12px}dyte-icon{margin-right:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}:host([size='sm']) dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}"}}]);