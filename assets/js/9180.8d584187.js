"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[9180],{89180:(t,i,a)=>{a.r(i),a.d(i,{dyte_participants_waiting_list:()=>r});var e=a(26786),s=(a(8263),a(1847),a(50975)),n=(a(13297),a(17073)),c=a(13773);a(55055),a(2174),a(43362);const r=class{constructor(t){(0,e.r)(this,t),this.acceptWaitingRoomRequest=async t=>{await this.meeting.participants.acceptWaitingRoomRequest(t)},this.acceptAllWaitingRoomRequests=async()=>{await this.meeting.participants.acceptAllWaitingRoomRequest(this.waitlistedParticipants.map((t=>t.id)))},this.rejectWaitingRoomRequest=async t=>{await this.meeting.participants.rejectWaitingRoomRequest(t)},this.shouldShowWaitlist=()=>"LIVESTREAM"!==this.meeting.meta.viewType&&(this.meeting.self.permissions.acceptWaitingRequests&&0!==this.waitlistedParticipants.length),this.meeting=void 0,this.config=s.d,this.size=void 0,this.iconPack=n.d,this.view="sidebar",this.t=(0,c.u)(),this.waitlistedParticipants=[]}disconnectedCallback(){const{participants:t}=this.meeting;this.waitlistedParticipantJoinedListener&&t.waitlisted.removeListener("participantJoined",this.waitlistedParticipantJoinedListener),this.waitlistedParticipantLeftListener&&t.waitlisted.removeListener("participantLeft",this.waitlistedParticipantLeftListener),this.waitlistedParticipantsClearedListener&&t.waitlisted.removeListener("participantsCleared",this.waitlistedParticipantsClearedListener)}connectedCallback(){this.meetingChanged(this.meeting)}meetingChanged(t){null!=t&&(this.waitlistedParticipants=t.participants.waitlisted.toArray(),this.waitlistedParticipantJoinedListener=t=>{this.waitlistedParticipants.some((i=>i.id===t.id))||(this.waitlistedParticipants=[...this.waitlistedParticipants,t])},this.waitlistedParticipantLeftListener=t=>{this.waitlistedParticipants=this.waitlistedParticipants.filter((i=>i.id!==t.id))},this.waitlistedParticipantsClearedListener=()=>{this.waitlistedParticipants=[]},t.participants.waitlisted.addListener("participantJoined",this.waitlistedParticipantJoinedListener),t.participants.waitlisted.addListener("participantLeft",this.waitlistedParticipantLeftListener),t.participants.waitlisted.addListener("participantsCleared",this.waitlistedParticipantsClearedListener))}render(){if("sidebar"===this.view&&this.shouldShowWaitlist())return(0,e.h)("div",{class:"waiting-participants"},(0,e.h)("div",{class:"heading-count",part:"waitlisted-heading-count"},this.t("waitlist.header_title")," (",this.waitlistedParticipants.length,")"),(0,e.h)("ul",{class:"participants",part:"waitlisted-participants"},this.waitlistedParticipants.map((t=>(0,e.h)("li",{class:"waiting-participant",key:t.id},(0,e.h)("div",{class:"participant-details"},(0,e.h)("dyte-avatar",{participant:t,size:"sm",iconPack:this.iconPack,t:this.t}),(0,e.h)("p",{class:"name",title:t.name},t.name)),(0,e.h)("div",{class:"waitlist-controls"},(0,e.h)("dyte-tooltip",{label:this.t("waitlist.deny_request"),variant:"secondary",iconPack:this.iconPack,t:this.t},(0,e.h)("dyte-button",{variant:"secondary",kind:"icon",iconPack:this.iconPack,t:this.t,onClick:()=>this.rejectWaitingRoomRequest(t.id)},(0,e.h)("dyte-icon",{class:"deny",icon:this.iconPack.dismiss,iconPack:this.iconPack,t:this.t}))),(0,e.h)("dyte-tooltip",{label:this.t("waitlist.accept_request"),variant:"secondary",iconPack:this.iconPack,t:this.t},(0,e.h)("dyte-button",{variant:"secondary",kind:"icon",iconPack:this.iconPack,t:this.t,onClick:()=>this.acceptWaitingRoomRequest(t.id)},(0,e.h)("dyte-icon",{class:"accept",icon:this.iconPack.checkmark,iconPack:this.iconPack,t:this.t})))))))),(0,e.h)("dyte-button",{class:"accept-all-button",variant:"secondary",kind:"wide",iconPack:this.iconPack,t:this.t,onClick:this.acceptAllWaitingRoomRequests},this.t("waitlist.accept_all")))}static get watchers(){return{meeting:["meetingChanged"]}}};r.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-top:var(--dyte-space-4, 16px);margin-bottom:calc(var(--dyte-space-2, 8px) * -1);display:flex;width:100%;flex-direction:column;font-size:14px}.waiting-participants{margin-bottom:var(--dyte-space-8, 32px)}.waiting-participants .accept-all-button{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}h3,.heading-count{margin:var(--dyte-space-0, 0px);display:flex;align-items:center;justify-content:center;padding:var(--dyte-space-0, 0px);font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}.heading-count{font-size:14px}.participants{margin-top:var(--dyte-space-2, 8px);padding:var(--dyte-space-0, 0px)}.waiting-participant{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);display:flex;align-items:center}.waiting-participant .participant-details{margin-right:auto;display:flex;align-items:center}.waiting-participant .participant-details dyte-avatar{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);flex-shrink:0;font-size:14px}.waiting-participant .participant-details .name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 1080px){.waiting-participant .participant-details .name{max-width:var(--dyte-space-40, 160px)}}.waiting-participant .waitlist-controls{display:flex}.waiting-participant .waitlist-controls dyte-button{margin-left:var(--dyte-space-2, 8px);cursor:pointer;border-radius:var(--dyte-border-radius-sm, 4px)}.waiting-participant .waitlist-controls dyte-icon.accept{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}.waiting-participant .waitlist-controls dyte-icon.deny{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}"}}]);