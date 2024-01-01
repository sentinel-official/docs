"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[4318,6406],{16406:(t,e,i)=>{i.r(e),i.d(e,{dyte_stage_toggle:()=>n});var s=i(37176),a=(i(78410),i(68753)),l=i(74710);i(60804);const n=class{constructor(t){(0,s.r)(this,t),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.stageCallback=async()=>{var t,e,i,s,a,l,n;const o=null===(t=this.meeting.stage)||void 0===t?void 0:t.status;"ON_STAGE"===o&&await(null===(i=null===(e=null==this?void 0:this.meeting)||void 0===e?void 0:e.stage)||void 0===i?void 0:i.leave()),"OFF_STAGE"===o&&(null===(a=null===(s=null==this?void 0:this.meeting)||void 0===s?void 0:s.stage)||void 0===a||a.requestAccess(),(t=>{var e,i,s,a,l,n;return!("LIVESTREAM"!==t.meta.viewType&&"WEBINAR"!==t.meta.viewType||"ALLOWED"!==(null===(i=null===(e=null==t?void 0:t.self)||void 0===e?void 0:e.permissions)||void 0===i?void 0:i.canProduceAudio)&&"ALLOWED"!==(null===(a=null===(s=null==t?void 0:t.self)||void 0===s?void 0:s.permissions)||void 0===a?void 0:a.canProduceScreenshare)&&"ALLOWED"!==(null===(n=null===(l=null==t?void 0:t.self)||void 0===l?void 0:l.permissions)||void 0===n?void 0:n.canProduceVideo))})(this.meeting)&&this.stateUpdate.emit({activeJoinStage:!0})),"REQUESTED_TO_JOIN_STAGE"===o&&(null===(n=null===(l=null==this?void 0:this.meeting)||void 0===l?void 0:l.stage)||void 0===n||n.cancelRequestAccess())},this.variant="button",this.meeting=void 0,this.size=void 0,this.iconPack=a.d,this.stageStatus="OFF_STAGE",this.state={label:"",disabled:!1,icon:""},this.t=(0,l.u)()}connectedCallback(){this.meetingChanged(this.meeting)}stageStatusHandler(t,e){this.stageStatus=e,"ACCEPTED_TO_JOIN_STAGE"===e&&(t.self.setupTracks({audio:!1,video:!1}),this.stateUpdate.emit({activeJoinStage:!0})),this.state=this.getState()}disconnectedCallback(){var t,e;null===(e=null===(t=this.meeting)||void 0===t?void 0:t.stage)||void 0===e||e.removeListener("stageStatusUpdate",(t=>this.stageStatusHandler(this.meeting,t)))}meetingChanged(t){var e,i,s,a;null!=t&&(this.stageStatus=null===(e=t.stage)||void 0===e?void 0:e.status,this.stageStatusHandler(t,null===(i=t.stage)||void 0===i?void 0:i.status),null===(a=null===(s=this.meeting)||void 0===s?void 0:s.stage)||void 0===a||a.on("stageStatusUpdate",(e=>this.stageStatusHandler(t,e))))}getState(){let t="",e="",i=!1;switch(this.stageStatus){case"ON_STAGE":e=this.iconPack.leave_stage,t="Leave Stage",i=!1;break;case"ACCEPTED_TO_JOIN_STAGE":e=this.iconPack.join_stage,t="Join Stage",i=!0;break;case"REQUESTED_TO_JOIN_STAGE":e=this.iconPack.join_stage,t="Requested",i=!1;break;default:e=this.iconPack.join_stage,t="Join Stage",i=!1}return{label:t,disabled:i,icon:e}}render(){var t,e,i,a,l,n,o,d,v,u,c;if(("LIVESTREAM"===(t=this.meeting).meta.viewType||"WEBINAR"===t.meta.viewType)&&("NOT_ALLOWED"!==(null===(i=null===(e=null==t?void 0:t.self)||void 0===e?void 0:e.permissions)||void 0===i?void 0:i.canProduceAudio)||"NOT_ALLOWED"!==(null===(l=null===(a=null==t?void 0:t.self)||void 0===a?void 0:a.permissions)||void 0===l?void 0:l.canProduceScreenshare)||"NOT_ALLOWED"!==(null===(o=null===(n=null==t?void 0:t.self)||void 0===n?void 0:n.permissions)||void 0===o?void 0:o.canProduceVideo)||(null===(v=null===(d=null==t?void 0:t.self)||void 0===d?void 0:d.permissions)||void 0===v?void 0:v.canLivestream)||(null===(c=null===(u=null==t?void 0:t.self)||void 0===u?void 0:u.permissions)||void 0===c?void 0:c.canLivestream)))return(0,s.h)(s.H,{title:this.state.label},(0,s.h)("dyte-tooltip",{placement:"top",kind:"block",label:this.state.label,delay:600,part:"tooltip",iconPack:this.iconPack,t:this.t},(0,s.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,variant:this.variant,label:this.state.label,icon:this.state.icon,onClick:this.stageCallback,disabled:this.state.disabled,showWarning:!1})))}static get watchers(){return{meeting:["meetingChanged"]}}};n.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"}}]);