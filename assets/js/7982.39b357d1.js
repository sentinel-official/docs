"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[7982],{77982:(t,e,i)=>{i.r(e),i.d(e,{dyte_breakout_rooms_toggle:()=>c});var s=i(12754),o=i(55471),a=i(24012),n=i(32622),r=i(64311);i(1873),i(1810),i(24996);const c=class{constructor(t){(0,s.r)(this,t),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.permissionsUpdateListener=()=>{this.canToggle=(0,r.a)(this.meeting)},this.breakoutRoomToggle=()=>{var t,e,i;const s=this.meeting.connectedMeetings.isActive?"view":"create";this.stateUpdate.emit({activeBreakoutRoomsManager:{active:!(null===(e=null===(t=this.states)||void 0===t?void 0:t.activeBreakoutRoomsManager)||void 0===e?void 0:e.active),mode:s}}),n.s.activeBreakoutRoomsManager={active:!(null===(i=n.s.activeBreakoutRoomsManager)||void 0===i?void 0:i.active),mode:s}},this.variant="button",this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=o.d,this.t=(0,a.u)(),this.canToggle=!1}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){var t,e,i;null===(i=null===(e=null===(t=this.meeting)||void 0===t?void 0:t.self)||void 0===e?void 0:e.permissions)||void 0===i||i.off("permissionsUpdate",this.permissionsUpdateListener)}meetingChanged(t){t&&(this.canToggle=(0,r.a)(t),t.self.permissions.on("permissionsUpdate",this.permissionsUpdateListener))}render(){if(this.canToggle)return(0,s.h)(s.H,{title:this.t("breakout_rooms")},(0,s.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,onClick:this.breakoutRoomToggle,icon:this.iconPack.breakout_rooms,label:this.t("breakout_rooms"),variant:this.variant}))}static get watchers(){return{meeting:["meetingChanged"]}}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"}}]);