"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[7215],{89596:(t,e,i)=>{i.r(e),i.d(e,{dyte_breakout_room_manager:()=>c,dyte_breakout_room_participants:()=>d,dyte_counter:()=>p});var r=i(26786),a=i(13773),o=i(17073),s=i(2174),n=i(1821);i(8263),i(1847),i(13297),i(55055),i(43362);const c=class{constructor(t){(0,r.r)(this,t),this.onParticipantsAdd=(0,r.c)(this,"participantsAdd",7),this.onParticipantDelete=(0,r.c)(this,"participantDelete",7),this.onRoomJoin=(0,r.c)(this,"roomJoin",7),this.deleteRoom=(0,r.c)(this,"delete",7),this.updateRoom=(0,r.c)(this,"update",7),this.permissionsUpdateListener=()=>{this.permissions=this.meeting.self.permissions.connectedMeetings},this.reset=()=>{this.editingTitleRoomId=null,this.newTitle=null},this.onEditClick=()=>{if(this.editingTitleRoomId){if(this.newTitle.length<3)return;this.roomTitle=this.newTitle,this.updateRoom.emit({title:this.newTitle,id:this.editingTitleRoomId}),this.glowCard(),this.reset()}else this.editingTitleRoomId=this.room.id,(0,r.w)((()=>{this.inputTextEl.focus(),this.inputTextEl.select()}))},this.onDrop=t=>{t.currentTarget instanceof HTMLParagraphElement&&(t.currentTarget.classList.remove("drop-zone-active"),this.onAssign())},this.onDragOver=t=>{t.currentTarget instanceof HTMLParagraphElement&&(t.currentTarget.classList.add("drop-zone-active"),t.preventDefault())},this.meeting=void 0,this.assigningParticipants=void 0,this.mode=void 0,this.states=void 0,this.allowDelete=!0,this.iconPack=o.d,this.t=(0,a.u)(),this.isDragMode=!1,this.room=void 0,this.defaultExpanded=!1,this.editingTitleRoomId=null,this.newTitle=null,this.showExpandedCard=!1,this.glowingCard=!1}connectedCallback(){var t;this.allParticipants=(0,s.g)(this.meeting),this.permissionsUpdateListener(),this.showExpandedCard=this.defaultExpanded,this.roomTitle=this.room.isParent?this.t("breakout_rooms.main_room"):null===(t=this.room)||void 0===t?void 0:t.title,this.canEditMeetingTitle=this.permissions.canAlterConnectedMeetings&&!this.room.isParent&&!this.meeting.connectedMeetings.isActive,this.meeting.self.permissions.on("permissionsUpdate",this.permissionsUpdateListener)}disconnectedCallback(){this.meeting.self.permissions.off("permissionsUpdate",this.permissionsUpdateListener)}onDragLeave(t){t.currentTarget instanceof HTMLParagraphElement&&t.currentTarget.classList.remove("drop-zone-active")}getAssignmentHint(){return this.assigningParticipants&&this.isDragMode?this.t("breakout_rooms.drag_drop_participants"):this.assigningParticipants?this.t("breakout_rooms.click_drop_participants"):0===this.room.participants.length?this.t("breakout_rooms.none_assigned"):void 0}toggleCardDisplay(){this.showExpandedCard=!this.showExpandedCard}glowCard(){this.glowingCard=!0,setTimeout((()=>{this.glowingCard=!1}),2e3)}onAssign(){this.onParticipantsAdd.emit(),this.glowCard()}onJoin(){this.onRoomJoin.emit()}onTitleChanged(t){"Enter"===t.key&&(this.newTitle=t.target.value,this.onEditClick())}renderPeer(t){const{displayPictureUrl:e}=this.allParticipants.find((e=>(0,s.p)(e)===(0,s.p)(t))),i=(0,n.f)(t.displayName||"");return(0,r.h)("div",{class:"peer-ui-container"},(0,r.h)("dyte-avatar",{participant:{name:i,picture:e},size:"sm"}),(0,r.h)("p",{class:"name",title:i},(0,n.s)(i,16),this.meeting.self.userId===t.id&&` (${this.t("you")})`))}renderExpandedCardMaybe(){if(this.showExpandedCard&&!this.room.isParent&&this.getAssignmentHint()&&this.permissions.canAlterConnectedMeetings)return(0,r.h)("div",{class:"message-container"},(0,r.h)("p",{class:{"compact-height":0!==this.room.participants.length},onClick:()=>this.onAssign(),onDragOver:this.onDragOver,onDragLeave:this.onDragLeave,onDrop:this.onDrop},this.getAssignmentHint()))}renderParticipantsMaybe(){if(this.showExpandedCard&&!this.room.isParent&&0!==this.room.participants.length)return(0,r.h)("div",{class:"participant-list",onClick:()=>{this.onAssign()}},this.room.participants.map((t=>(0,r.h)("div",{class:"participant-item",role:"listitem",key:t.id},this.renderPeer(t),this.permissions.canAlterConnectedMeetings&&(0,r.h)("dyte-icon",{class:"show-on-hover",icon:this.iconPack.dismiss,iconPack:this.iconPack,t:this.t,onClick:()=>{this.onParticipantDelete.emit(t)}})))))}render(){var t,e,i;return(0,r.h)(r.H,null,(0,r.h)("div",{class:{"assign-mode":this.assigningParticipants,"selector-mode":!this.assigningParticipants,"glowing-card":this.glowingCard}},(0,r.h)("div",{class:"header"},(0,r.h)("input",{ref:t=>this.inputTextEl=t,placeholder:this.t("breakout_rooms.room_name"),disabled:!(this.editingTitleRoomId===this.room.id),value:this.roomTitle,minlength:3,onChange:t=>{this.newTitle=t.target.value},onKeyPress:t=>this.onTitleChanged(t),class:{"editing-enabled":this.editingTitleRoomId===this.room.id},style:{width:`${this.roomTitle.length+1}ch`}}),this.editingTitleRoomId!==this.room.id&&(0,r.h)("span",{class:"participant-count"},"(",(0,r.h)("dyte-icon",{icon:this.iconPack.people,iconPack:this.iconPack,t:this.t}),null!==(i=null===(e=null===(t=this.room)||void 0===t?void 0:t.participants)||void 0===e?void 0:e.length)&&void 0!==i?i:"0",")"),this.canEditMeetingTitle&&(0,r.h)("dyte-tooltip",{label:this.editingTitleRoomId===this.room.id?this.t("breakout_rooms.save_room_name"):this.t("breakout_rooms.edit_room_name"),iconPack:this.iconPack,t:this.t},(0,r.h)("dyte-icon",{icon:this.editingTitleRoomId===this.room.id?this.iconPack.checkmark:this.iconPack.edit,iconPack:this.iconPack,t:this.t,class:"show-on-hover",onClick:this.onEditClick})),(0,r.h)("div",{class:"rooms-container"},this.permissions.canAlterConnectedMeetings&&!this.room.isParent&&this.allowDelete&&(0,r.h)("dyte-tooltip",{label:this.t("breakout_rooms.delete"),class:"danger",iconPack:this.iconPack,t:this.t},(0,r.h)("dyte-icon",{icon:this.iconPack.delete,class:"show-on-hover",iconPack:this.iconPack,t:this.t,onClick:()=>{this.deleteRoom.emit()}})),this.assigningParticipants&&this.permissions.canAlterConnectedMeetings&&!this.room.isParent&&(0,r.h)("dyte-button",{iconPack:this.iconPack,t:this.t,kind:"button",variant:"ghost",class:"assign-button",size:"md",onClick:()=>this.onAssign()},this.t("breakout_rooms.assign")),"edit"===this.mode&&!this.assigningParticipants&&this.permissions.canSwitchConnectedMeetings&&(0,r.h)("dyte-button",{iconPack:this.iconPack,t:this.t,kind:"button",variant:"ghost",class:"assign-button",size:"md",disabled:this.room.id===this.meeting.meta.meetingId,onClick:()=>this.onJoin()},this.room.id===this.meeting.meta.meetingId?this.t("joined"):this.t("join")),!this.room.isParent&&(0,r.h)("dyte-icon",{icon:this.showExpandedCard?this.iconPack.chevron_up:this.iconPack.chevron_down,iconPack:this.iconPack,t:this.t,onClick:()=>this.toggleCardDisplay()}))),this.renderExpandedCardMaybe(),this.renderParticipantsMaybe()))}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));border-radius:var(--dyte-border-radius-sm, 4px)}@keyframes bg-glow{25%{background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.2)}50%{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}75%{background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.2)}}.glowing-card{animation:bg-glow 0.8s}.selector-mode,.assign-mode{display:flex;flex-direction:column;align-items:center;padding:var(--dyte-space-2, 8px);cursor:pointer}.selector:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.show-on-hover{display:none}.header{width:100%;display:flex;align-items:center}.header dyte-icon{margin-left:var(--dyte-space-2, 8px);height:var(--dyte-space-5, 20px);cursor:pointer}.header .danger{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.header .hide{display:none}.header .rooms-container{display:flex;flex-grow:1;flex-direction:row;align-items:center;justify-content:flex-end}.header input{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding:var(--dyte-space-1, 4px);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));max-width:var(--dyte-space-36, 144px);font-size:14px;font-weight:500;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;outline:2px solid transparent;outline-offset:2px;border-bottom-width:var(--dyte-border-width-sm, 1px);border-style:solid;--tw-border-opacity:1;border-bottom-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-border-opacity))}.header input:disabled{overflow-x:visible;border-radius:var(--dyte-border-radius-none, 0);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent}.header input:invalid{border-bottom-width:var(--dyte-border-width-sm, 1px);border-style:dashed;--tw-border-opacity:1;border-bottom-color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-border-opacity))}.header input.editing-enabled{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}.header .participant-count{display:flex;align-items:center;font-size:14px;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.header .participant-count dyte-icon{margin:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-0\\.5, 2px);width:var(--dyte-space-3, 12px)}.header .assign-button{height:var(--dyte-space-6, 24px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity));-webkit-text-decoration-line:underline;text-decoration-line:underline}.header .assign-button:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.participant-list{display:grid;flex-grow:1;grid-template-columns:repeat(2, minmax(0, 1fr));gap:var(--dyte-space-2, 8px);margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);width:100%;border-radius:var(--dyte-border-radius-sm, 4px)}.participant-list::-webkit-scrollbar{width:var(--dyte-space-1\\.5, 6px)}.participant-list::-webkit-scrollbar-thumb{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.participant-list::-webkit-scrollbar-track{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.participant-item{display:flex;align-items:center;justify-content:space-between;margin-right:var(--dyte-space-2, 8px);height:-moz-fit-content;height:fit-content;padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px)}.participant-item:hover{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.selector-mode:hover .show-on-hover{display:flex}.message-container{margin:var(--dyte-space-0, 0px);display:flex;width:100%;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px)}.message-container p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px);height:var(--dyte-space-20, 80px);display:flex;width:100%;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);font-size:12px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));border-style:dashed;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-border-opacity))}.message-container p:hover{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-border-opacity));background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.25)}.message-container .drop-zone-active{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-border-opacity));background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.25)}dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}.show-on-hover{margin-left:var(--dyte-space-4, 16px);height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);display:none}:host(:hover) .show-on-hover{display:flex}.peer-ui-container{position:relative;display:flex;align-items:center;gap:var(--dyte-space-2, 8px);height:var(--dyte-space-10, 40px);cursor:pointer;border-radius:var(--dyte-border-radius-sm, 4px);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.peer-ui-container dyte-avatar{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px);font-size:14px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.peer-ui-container .name{font-size:14px;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}";const d=class{constructor(t){(0,r.r)(this,t),this.onSelectedParticipantsUpdate=(0,r.c)(this,"selectedParticipantsUpdate",7),this.onAllToggled=(0,r.c)(this,"allParticipantsToggleUpdate",7),this.onParticipantsDragging=(0,r.c)(this,"participantsDragging",7),this.onSearchInput=t=>{this.search=t.target.value},this.onDragStart=t=>{this.isDragging=!0,this.onParticipantsDragging.emit(!0),this.updateSelectedParticipants(t,!0)},this.onDragEnd=t=>{this.isDragging=!1,this.onParticipantsDragging.emit(!1),this.updateSelectedParticipants(t,!1)},this.onClick=t=>{const e=this.selectedParticipantIds.includes((0,s.p)(t));this.updateSelectedParticipants(t,!e)},this.onToggleAll=t=>{const e=t?this.participantsToShow.map(s.p):[];this.onAllToggled.emit(e)},this.meeting=void 0,this.participantIds=[],this.iconPack=o.d,this.t=(0,a.u)(),this.search="",this.participantsToShow=[],this.selectedParticipantIds=[],this.isDragging=!1}connectedCallback(){this.meetingChanged(this.meeting),this.searchChanged(this.search)}disconnectedCallback(){this.meeting}updateSelectedParticipants(t,e){const i=(0,s.p)(t);let r=[];r=e&&!this.selectedParticipantIds.includes(i)?[...this.selectedParticipantIds,i]:[...this.selectedParticipantIds.filter((t=>t!==i))],this.onSelectedParticipantsUpdate.emit(r)}meetingChanged(t){null!=t&&this.getParticipants(this.search)}participantsChanged(){this.getParticipants(this.search)}searchChanged(t){this.getParticipants(t)}getParticipants(t){const e=(0,s.g)(this.meeting);this.participantsToShow=e.filter((e=>{var i;return this.participantIds.includes((0,s.p)(e))&&(null!==(i=e.displayName)&&void 0!==i?i:"").toLowerCase().includes(t.toLowerCase())}))}renderPeer(t){const e=(0,n.f)(t.displayName||"");return(0,r.h)("div",{class:"peer-ui-container"},(0,r.h)("dyte-avatar",{participant:{name:t.displayName,picture:t.displayPictureUrl},size:"sm"}),(0,r.h)("p",{class:"name",title:e},(0,n.s)(e,16),this.meeting.self.userId===t.id&&` (${this.t("you")})`))}render(){return(0,r.h)(r.H,null,(0,r.h)("div",{class:"search-wrapper"},(0,r.h)("div",{class:"search",part:"search"},(0,r.h)("dyte-icon",{icon:this.iconPack.search,part:"search-icon",iconPack:this.iconPack,t:this.t,class:"search-icon"}),(0,r.h)("input",{type:"search",autocomplete:"off",placeholder:this.t("search"),onInput:this.onSearchInput,part:"search-input"})),(0,r.h)("slot",{name:"shuffle-button"})),(0,r.h)("div",{class:"header"},(0,r.h)("div",{class:"title-wrapper"},(0,r.h)("span",null,this.t("breakout_rooms.main_room")),(0,r.h)("span",{class:"participant-count"},"(",(0,r.h)("dyte-icon",{icon:this.iconPack.people,iconPack:this.iconPack,t:this.t}),this.participantsToShow.length,")")),0!==this.selectedParticipantIds.length&&(0,r.h)("dyte-tooltip",{label:this.t("breakout_rooms.select_all"),iconPack:this.iconPack,t:this.t},(0,r.h)("input",{type:"checkbox",checked:this.selectedParticipantIds.length===this.participantsToShow.length,onChange:t=>this.onToggleAll(!!t.target.checked)}))),(0,r.h)("div",{class:"ctr scrollbar",part:"container"},this.participantsToShow.length>0&&(0,r.h)("ul",{class:"participants",part:"participants"},this.participantsToShow.map((t=>(0,r.h)("li",{class:{"participant-item":!0,dragging:this.isDragging},onClick:()=>this.onClick(t),onDragStart:()=>this.onDragStart(t),onDragEnd:()=>this.onDragEnd(t),draggable:0===this.selectedParticipantIds.length,role:"listitem",key:t.id},this.renderPeer(t),!this.isDragging&&(0,r.h)("input",{type:"checkbox",class:{"hide-checkbox":0===this.selectedParticipantIds.length},checked:this.selectedParticipantIds.includes((0,s.p)(t))}))))),0===this.participantsToShow.length&&this.search.length>0&&(0,r.h)("div",{class:"empty-message"},this.t("participants.errors.empty_results")),0===this.participantsToShow.length&&0===this.search.length&&(0,r.h)("div",{class:"empty-room"},(0,r.h)("dyte-icon",{icon:this.iconPack.people_checked,part:"search-icon",iconPack:this.iconPack,t:this.t,class:"search-icon"}),(0,r.h)("p",null,this.t("breakout_rooms.all_assigned")),(0,r.h)("span",null,this.t("breakout_rooms.empty_main_room")))))}static get watchers(){return{meeting:["meetingChanged"],participantIds:["participantsChanged"],search:["searchChanged"]}}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{display:flex;height:100%;flex-direction:column;font-size:14px}:host input[type='checkbox']{margin:var(--dyte-space-0, 0px);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:var(--dyte-border-radius-sm, 4px);position:relative;height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);border-width:var(--dyte-border-width-sm, 1px);border-style:solid;border-color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}:host input[type='checkbox']:checked{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity))}:host input[type='checkbox']:checked::before{position:absolute;top:1px;left:1px;height:var(--dyte-space-3, 12px);width:var(--dyte-space-3, 12px);background-color:rgb(var(--dyte-colors-text-1000, 255 255 255));content:'';clip-path:polygon(5% 60%, 35% 93%, 100% 19%, 86% 4%, 36% 62%, 19% 44%)}*{box-sizing:border-box}.participants{margin-top:var(--dyte-space-2, 8px);padding:var(--dyte-space-0, 0px)}.ctr{box-sizing:border-box;padding-top:var(--dyte-space-0, 0px);padding-bottom:var(--dyte-space-0, 0px);overflow-y:auto;flex-grow:1;flex-basis:0}.empty-message{margin-top:var(--dyte-space-10, 40px);margin-bottom:var(--dyte-space-10, 40px);text-align:center;font-size:14px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.empty-room{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--dyte-space-2, 8px);height:100%;text-align:center;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.empty-room dyte-icon{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px)}.empty-room p{font-size:16px;font-weight:500;margin:var(--dyte-space-0, 0px)}.empty-room span{font-size:12px;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.search-wrapper{margin-bottom:var(--dyte-space-1, 4px);display:flex;align-items:center;gap:var(--dyte-space-2, 8px)}.search{position:sticky;box-sizing:border-box;display:flex;align-items:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px);height:var(--dyte-space-8, 32px)}.search .search-icon{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.search input{box-sizing:border-box;width:100%;padding-right:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:inherit;color:rgb(var(--dyte-colors-text-1000, 255 255 255));outline:2px solid transparent;outline-offset:2px;border-radius:var(--dyte-border-radius-sm, 4px);font-size:14px}.search input::-moz-placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.search input::placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.header{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-1\\.5, 6px);height:var(--dyte-space-9, 36px);padding-top:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-0\\.5, 2px);border-bottom-width:var(--dyte-border-width-sm, 1px);border-top-width:var(--dyte-border-width-none, 0);border-right-width:var(--dyte-border-width-none, 0);border-left-width:var(--dyte-border-width-none, 0);border-style:solid;--tw-border-opacity:1;border-bottom-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-border-opacity));font-size:12px;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));display:flex;align-items:center;justify-content:space-between}.title-wrapper{display:flex;align-items:center;gap:var(--dyte-space-2, 8px)}.participant-count{display:flex;align-items:center;font-size:14px}.participant-count dyte-icon{margin-right:var(--dyte-space-0\\.5, 2px);width:var(--dyte-space-3, 12px)}.participant-item{display:flex;align-items:center;justify-content:space-between;margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);border-radius:var(--dyte-border-radius-sm, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);cursor:pointer}.participant-item input.hide-checkbox{display:none}.participant-item input:checked{display:inline-block}.dragging input{display:none}.participant-item:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.participant-item:hover input{display:inline-block}.peer-ui-container{position:relative;display:flex;align-items:center;gap:var(--dyte-space-2, 8px);height:var(--dyte-space-10, 40px);cursor:pointer;border-radius:var(--dyte-border-radius-sm, 4px);color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.peer-ui-container dyte-avatar{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px);font-size:14px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.peer-ui-container .name{font-size:14px;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}";const p=class{constructor(t){(0,r.r)(this,t),this.onChange=(0,r.c)(this,"valueChange",7),this.input="1",this.size=void 0,this.value=void 0,this.minValue=0,this.iconPack=o.d,this.t=(0,a.u)()}connectedCallback(){this.watchStateHandler(this.input),this.input=this.value.toString()}watchStateHandler(t){this.onChange.emit(t)}increment(){this.input=Math.max(parseInt(this.input)+1,this.minValue).toString()}decrement(){this.input=Math.max(this.minValue,parseInt(this.input)-1).toString()}render(){return(0,r.h)(r.H,null,(0,r.h)("dyte-button",{kind:"icon",variant:"ghost",onClick:()=>this.decrement(),iconPack:this.iconPack,t:this.t},(0,r.h)("dyte-icon",{icon:this.iconPack.subtract,iconPack:this.iconPack,t:this.t})),(0,r.h)("input",{type:"number",value:this.input,min:this.minValue,onInput:t=>{const e=parseInt(t.target.value,10);isNaN(e)||e<this.minValue?this.input=this.minValue.toString():this.input=e.toString()}}),(0,r.h)("dyte-button",{kind:"icon",variant:"ghost",onClick:()=>this.increment(),iconPack:this.iconPack,t:this.t},(0,r.h)("dyte-icon",{icon:this.iconPack.add,iconPack:this.iconPack,t:this.t})))}static get watchers(){return{input:["watchStateHandler"]}}};p.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;flex-direction:row;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));width:-moz-fit-content;width:fit-content;border-radius:var(--dyte-border-radius-sm, 4px);padding:var(--dyte-space-1, 4px)}p{margin:var(--dyte-space-0, 0px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px)}input{margin:var(--dyte-space-0, 0px);width:var(--dyte-space-6, 24px);padding:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-sm, 1px);border-style:solid;border-color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));text-align:center;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));border-radius:var(--dyte-border-radius-sm, 4px);font-size:16px;outline:2px solid transparent;outline-offset:2px;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{margin:var(--dyte-space-0, 0px);appearance:none;-webkit-appearance:none}input[type='number']{-moz-appearance:textfield}"},1821:(t,e,i)=>{i.d(e,{a:()=>o,f:()=>s,g:()=>d,h:()=>a,s:()=>r});const r=(t,e=20)=>null==t?"":t.length>e?`${t.substring(0,e)}...`:t,a=t=>/^\p{Emoji}+$/u.test(t)&&!/^\d+$/.test(t),o=t=>(null==t?void 0:t.trim().toLowerCase().startsWith("javascript:"))?"https://dyte.io":t,s=t=>""===(t=null==t?void 0:t.trim())?"Participant":t,n=new RegExp(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w\s]/,"g"),c=new RegExp(/\s+/);function d(t,e=2){return t.replace(n,"").trim().split(c).slice(0,e).map((t=>t.charAt(0))).join("").toUpperCase()}}}]);