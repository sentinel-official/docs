"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[9922,6076],{56076:(t,i,e)=>{e.r(i),e.d(i,{dyte_participants_toggle:()=>p});var s=e(37176),a=e(68753),n=e(74710),r=e(39571),c=e(57419);e(78410),e(2079);const p=class{constructor(t){(0,s.r)(this,t),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.updateStageRequests=async t=>{var i,e,s;if("LIVESTREAM"===this.meeting.meta.viewType)t||(t=null!==(s=null===(e=await(null===(i=this.meeting.stage)||void 0===i?void 0:i.getAccessRequests()))||void 0===e?void 0:e.stageRequests)&&void 0!==s?s:[]),this.stageRequestedParticipants=t;else{const t=this.meeting.participants.joined.toArray().filter((t=>"REQUESTED_TO_JOIN_STAGE"===t.stageStatus));this.stageRequestedParticipants="REQUESTED_TO_JOIN_STAGE"===this.meeting.stage.status?[this.meeting.self]:[],this.stageRequestedParticipants=[...this.stageRequestedParticipants,...t]}this.updateBadgeCount()},this.updateBadgeCount=()=>{this.badgeCount=this.waitlistedParticipants.length+this.stageRequestedParticipants.length},this.updateCanView=()=>{this.canViewParticipants=(0,c.a)(this.meeting)},this.variant="button",this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=a.d,this.t=(0,n.u)(),this.participantsActive=!1,this.waitlistedParticipants=[],this.stageRequestedParticipants=[],this.badgeCount=0,this.canViewParticipants=!1}connectedCallback(){this.meetingChanged(this.meeting),this.statesChanged(this.states),(0,r.o)("sidebar",(()=>this.statesChanged()))}disconnectedCallback(){var t,i,e,s;null!=this.meeting&&(null===(i=null===(t=this.meeting)||void 0===t?void 0:t.stage)||void 0===i||i.removeListener("stageStatusUpdate",this.updateCanView),this.waitlistedParticipantJoinedListener&&this.meeting.participants.waitlisted.removeListener("participantJoined",this.waitlistedParticipantJoinedListener),this.waitlistedParticipantLeftListener&&this.meeting.participants.waitlisted.removeListener("participantLeft",this.waitlistedParticipantLeftListener),null===(e=this.meeting.stage)||void 0===e||e.removeListener("stageAccessRequestUpdate",this.updateStageRequests),null===(s=this.meeting.participants)||void 0===s||s.joined.removeListener("stageStatusUpdate",this.updateStageRequests))}meetingChanged(t){var i;null!=t&&(this.canViewParticipants=(0,c.a)(t),null===(i=null==t?void 0:t.stage)||void 0===i||i.on("stageStatusUpdate",this.updateCanView),t.self.permissions.acceptWaitingRequests&&(this.waitlistedParticipants=t.participants.waitlisted.toArray(),this.waitlistedParticipantJoinedListener=t=>{this.waitlistedParticipants.some((i=>i.id===t.id))||(this.waitlistedParticipants=[...this.waitlistedParticipants,t],this.updateBadgeCount())},this.waitlistedParticipantLeftListener=t=>{this.waitlistedParticipants=this.waitlistedParticipants.filter((i=>i.id!==t.id)),this.updateBadgeCount()},t.participants.waitlisted.addListener("participantJoined",this.waitlistedParticipantJoinedListener),t.participants.waitlisted.addListener("participantLeft",this.waitlistedParticipantLeftListener)),this.meeting.self.permissions.acceptPresentRequests&&(this.updateStageRequests(),null==t||t.stage.on("stageAccessRequestUpdate",this.updateStageRequests),null==t||t.participants.joined.on("stageStatusUpdate",this.updateStageRequests)),this.updateBadgeCount())}statesChanged(t){const i=t||r.s;null!=i&&(this.participantsActive=!0===i.activeSidebar&&"participants"===i.sidebar)}toggleParticipantsTab(){const t=this.states||r.s;this.participantsActive=!((null==t?void 0:t.activeSidebar)&&"participants"===(null==t?void 0:t.sidebar)),r.s.activeSidebar=this.participantsActive,r.s.sidebar=this.participantsActive?"participants":void 0,this.stateUpdate.emit({activeSidebar:this.participantsActive,sidebar:this.participantsActive?"participants":void 0,activeMoreMenu:!1,activeAI:!1}),r.s.activeMoreMenu=!1}render(){if(!this.canViewParticipants)return;const t=this.t("participants");return(0,s.h)(s.H,{title:t},0!==this.badgeCount&&!this.participantsActive&&(0,s.h)("div",{class:"waiting-participants-count",part:"waiting-participants-count"},(0,s.h)("span",null,this.badgeCount<=100?this.badgeCount:"99+")),(0,s.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,class:{active:this.participantsActive},onClick:()=>this.toggleParticipantsTab(),icon:this.iconPack.participants,label:t,variant:this.variant}))}static get watchers(){return{meeting:["meetingChanged"],states:["statesChanged"]}}};p.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:block}.waiting-participants-count{position:absolute;right:var(--dyte-space-3, 12px);box-sizing:border-box;padding:var(--dyte-space-0\\.5, 2px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px;display:flex;height:var(--dyte-space-5, 20px);min-width:var(--dyte-space-5, 20px);align-items:center;justify-content:center;border-radius:9999px;z-index:1}:host([variant='horizontal']){display:flex;flex-direction:row-reverse;align-items:center}:host([variant='horizontal']) .waiting-participants-count{right:var(--dyte-space-4, 16px);top:auto}"},57419:(t,i,e)=>{e.d(i,{a:()=>c,b:()=>p,c:()=>n,d:()=>r});var s=e(78410),a=e(2079);const n=t=>{if(t&&!t.chat)return!1;const i=null==t?void 0:t.self.config;if(i&&!i.controlBar.elements.chat)return!1;const{chatPublic:e,chatPrivate:s}=t.self.permissions;return e.canSend||e.text||e.files||s.canSend||s.canReceive||s.files||s.text},r=t=>{if(t&&!t.polls)return!1;const i=null==t?void 0:t.self.config;if(i&&!i.controlBar.elements.polls)return!1;const{polls:e}=t.self.permissions;return e.canCreate||e.canView||e.canVote},c=t=>{var i,e,n,r;if((null===(i=null==t?void 0:t.__internals__)||void 0===i?void 0:i.features.hasFeature(a.F.FEAT_PARTICIPANT_LIST))&&!(null===(e=t.self.permissions)||void 0===e?void 0:e.showParticipantList))return!1;if((0,s.s)(t)&&!(null===(n=t.self.permissions)||void 0===n?void 0:n.acceptPresentRequests))return!1;if(t&&!t.participants)return!1;if("LIVESTREAM"===t.meta.viewType)return t.self.permissions.acceptPresentRequests||"ON_STAGE"===(null===(r=null==t?void 0:t.stage)||void 0===r?void 0:r.status);const c=null==t?void 0:t.self.config;return!(c&&!c.controlBar.elements.participants)},p=t=>{if((0,s.a)(t))return!1;if(t&&!t.plugins)return!1;if("LIVESTREAM"===t.meta.viewType)return"ON_STAGE"===t.stage.status;const i=null==t?void 0:t.self.config;if(i&&!i.controlBar.elements.plugins)return!1;const{plugins:e}=t.self.permissions;return e.canClose||e.canStart}}}]);