"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[4592,7200],{47200:(e,t,s)=>{s.r(t),s.d(t,{dyte_ended_screen:()=>d});var a=s(65733),o=s(8934),n=s(68753),i=s(46503),r=s(86020);s(21237),s(24555),s(60804);const d=class{constructor(e){(0,a.r)(this,e),this.config=r.d,this.size=void 0,this.icon=n.d,this.states=void 0,this.t=(0,o.u)(),this.iconPack=n.d,this.message="",this.meeting=void 0}connectedCallback(){this.statesChanged(this.states),(0,i.o)("roomLeftState",(()=>this.statesChanged()))}getBreakoutRoomsMessage(e){var t;let s;return"connected-meeting"===(null==e?void 0:e.roomLeftState)&&(s=(null===(t=i.s.activeBreakoutRoomsManager)||void 0===t?void 0:t.destinationMeetingId)===this.meeting.connectedMeetings.parentMeeting.id?"breakout_rooms.move_reason.switch_main_room":"breakout_rooms.move_reason.switch_room"),s}statesChanged(e){const t=e||i.s;if(null!=t)switch(null==t?void 0:t.roomLeftState){case"left":this.message="ended.left";break;case"kicked":this.message="ended.kicked";break;case"disconnected":this.message="ended.disconnected";break;case"rejected":this.message="ended.rejected";break;case"connected-meeting":this.message=this.getBreakoutRoomsMessage(t);break;default:this.message="ended"}}renderBreakoutRoomScreen(){return(0,a.h)(a.H,null,(0,a.h)("div",{class:"ctr",part:"container"},(0,a.h)("dyte-icon",{icon:this.iconPack.breakout_rooms}),(0,a.h)("p",{part:"message",class:"breakout"},this.t(this.message))))}render(){const e=this.states||i.s;return"connected-meeting"===e.roomLeftState?this.renderBreakoutRoomScreen():(0,a.h)(a.H,null,(0,a.h)("div",{class:"ctr",part:"container"},(0,a.h)("dyte-logo",{meeting:this.meeting,config:this.config,part:"logo",t:this.t}),(0,a.h)("p",{part:"message"},this.t(this.message)),"disconnected"===(null==e?void 0:e.roomLeftState)&&(0,a.h)("span",{part:"description"},this.t("ended.network"))))}static get watchers(){return{states:["statesChanged"]}}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{height:100%;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;flex-direction:column;align-items:center;justify-content:center}.ctr{display:flex;flex-direction:column;align-items:center}dyte-logo{margin-bottom:var(--dyte-space-8, 32px);height:var(--dyte-space-12, 48px)}.rejoin-button{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);padding-top:var(--dyte-space-6, 24px);padding-bottom:var(--dyte-space-6, 24px);padding-left:var(--dyte-space-16, 64px);padding-right:var(--dyte-space-16, 64px)}.rejoin-icon{margin-right:var(--dyte-space-2, 8px)}p{font-size:16px;border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-8, 32px);padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}p.breakout{font-size:20px;display:flex;flex-direction:column;align-items:center}p.breakout span{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-0, 0px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}span{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);font-size:14px}"}}]);