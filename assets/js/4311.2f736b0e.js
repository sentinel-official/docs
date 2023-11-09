"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[4311],{14311:(t,i,e)=>{e.r(i),e.d(i,{dyte_participant:()=>l});var s=e(37176),n=e(68753),a=e(74710),r=e(67341),o=e(22906),c=e(39571),d=e(9367);e(78410),e(60804);const l=class{constructor(t){(0,s.r)(this,t),this.dyteSendNotification=(0,s.c)(this,"dyteSendNotification",7),this.pinnedListener=({isPinned:t})=>{this.isPinned=t},this.stageListener=({stageStatus:t})=>{this.isOnStage="ON_STAGE"===t},this.inviteToStageToggle=async()=>{const t=this.participant,{stage:i}=this.meeting;"ACCEPTED_TO_JOIN_STAGE"!==t.stageStatus?(this.isOnStage?(t.isPinned&&t.unpin(),await i.kick([t.userId])):(await i.grantAccess([t.userId]),this.dyteSendNotification.emit({message:`${t.name} ${this.t("stage.invited_notification")}`,trace:`join-stage-invite-${t.id}`})),this.isOnStage="ON_STAGE"===t.stageStatus):this.dyteSendNotification.emit({message:`${t.name} ${this.t("stage.invited_notification")}`,trace:`join-stage-${t.id}`})},this.meeting=void 0,this.view="sidebar",this.participant=void 0,this.iconPack=n.d,this.t=(0,a.u)(),this.config=d.d,this.audioEnabled=!1,this.videoEnabled=!1,this.isPinned=!1,this.isOnStage=!1,this.canDisableParticipantAudio=!1,this.canDisableParticipantVideo=!1,this.canKickParticipant=!1,this.canPinParticipant=!1,this.canAllowParticipantOnStage=!1}connectedCallback(){this.meetingChanged(this.meeting),this.participantChanged(this.participant)}disconnectedCallback(){null!=this.participant&&null!=this.participant.removeListener&&(this.audioUpdateListener&&this.participant.removeListener("audioUpdate",this.audioUpdateListener),this.videoUpdateListener&&this.participant.removeListener("videoUpdate",this.videoUpdateListener),this.participant.removeListener("pinned",this.pinnedListener),this.participant.removeListener("unpinned",this.pinnedListener),this.participant.removeListener("stageStatusUpdate",this.stageListener))}meetingChanged(t){if(null!=t){const{self:i}=t;this.canDisableParticipantAudio=i.permissions.canAllowParticipantAudio||i.permissions.canDisableParticipantAudio,this.canDisableParticipantVideo=i.permissions.canAllowParticipantVideo||i.permissions.canDisableParticipantVideo,this.canKickParticipant=i.permissions.kickParticipant,this.canPinParticipant=i.permissions.pinParticipant,this.canAllowParticipantOnStage=i.permissions.acceptPresentRequests}}participantChanged(t){if(null!=t){if(this.audioEnabled=t.audioEnabled,this.videoEnabled=t.videoEnabled,this.isPinned=t.isPinned,this.isOnStage="ON_STAGE"===t.stageStatus,this.audioUpdateListener=({audioEnabled:t})=>{this.audioEnabled=t},this.videoUpdateListener=({videoEnabled:t})=>{this.videoEnabled=t},null==t.addListener)return;t.addListener("audioUpdate",this.audioUpdateListener),t.addListener("videoUpdate",this.videoUpdateListener),t.addListener("pinned",this.pinnedListener),t.addListener("unpinned",this.pinnedListener),t.addListener("stageStatusUpdate",this.stageListener)}}render(){var t,i,e,n,a,d,l,h,p;const u="AUDIO_ROOM"===(null===(t=this.meeting)||void 0===t?void 0:t.meta.viewType),g=(null===(i=this.meeting)||void 0===i?void 0:i.self.id)===this.participant.id,f=this.canDisableParticipantAudio&&this.audioEnabled||this.canDisableParticipantVideo&&!u||this.canKickParticipant||this.canPinParticipant,m=(0,o.f)((null===(e=this.participant)||void 0===e?void 0:e.name)||""),y=this.isOnStage||["GROUP_CALL","AUDIO_ROOM"].includes(null===(n=this.meeting)||void 0===n?void 0:n.meta.viewType),P={meeting:this.meeting,size:"sm",states:c.s,config:this.config,iconPack:this.iconPack,t:this.t};return(0,s.h)(s.H,null,(0,s.h)("div",{class:"left"},(0,s.h)("dyte-avatar",{participant:this.participant,size:"sm",iconPack:this.iconPack,t:this.t}),(0,s.h)("p",{class:"name",title:m},(0,o.s)(m,16)," ",(null===(a=this.meeting)||void 0===a?void 0:a.self.id)===(null===(d=this.participant)||void 0===d?void 0:d.id)&&this.t("(you)"))),"sidebar"===this.view&&(0,s.h)("div",{class:"right"},y&&(0,s.h)("dyte-icon",{class:{red:!this.audioEnabled},iconPack:this.iconPack,t:this.t,icon:this.audioEnabled?this.iconPack.mic_on:this.iconPack.mic_off}),y&&!u&&(0,s.h)("dyte-icon",{class:{red:!this.videoEnabled},iconPack:this.iconPack,t:this.t,icon:this.videoEnabled?this.iconPack.video_on:this.iconPack.video_off}),(f||(0,r.l)({element:"dyte-participant",defaults:P,childProps:{participant:this.participant}})>0)&&(0,s.h)("dyte-menu",{iconPack:this.iconPack,t:this.t},(0,s.h)("dyte-button",{variant:"ghost",kind:"icon",slot:"trigger",iconPack:this.iconPack,t:this.t},(0,s.h)("dyte-icon",{class:"more",icon:this.iconPack.more_vertical})),(0,s.h)("dyte-menu-list",{iconPack:this.iconPack,t:this.t},this.canPinParticipant&&y&&(0,s.h)("dyte-menu-item",{onClick:()=>{this.isPinned?this.participant.unpin():this.participant.pin()},iconPack:this.iconPack,t:this.t},(0,s.h)("dyte-icon",{icon:this.isPinned?this.iconPack.pin_off:this.iconPack.pin,slot:"start",iconPack:this.iconPack,t:this.t}),this.isPinned?this.t("unpin"):this.t("pin")),this.canDisableParticipantAudio&&y&&this.audioEnabled&&(0,s.h)("dyte-menu-item",{iconPack:this.iconPack,t:this.t,onClick:()=>{this.participant.disableAudio()}},(0,s.h)("dyte-icon",{icon:this.iconPack.mic_off,slot:"start"}),this.t("mute")),this.canDisableParticipantVideo&&y&&this.videoEnabled&&(0,s.h)("dyte-menu-item",{iconPack:this.iconPack,t:this.t,onClick:()=>{this.participant.disableVideo()}},(0,s.h)("dyte-icon",{icon:this.iconPack.video_off,slot:"start",iconPack:this.iconPack,t:this.t}),this.t("participants.turn_off_video")),"WEBINAR"===(null===(l=this.meeting)||void 0===l?void 0:l.meta.viewType)&&this.canAllowParticipantOnStage&&(null===(h=this.participant)||void 0===h?void 0:h.id)!==(null===(p=this.meeting)||void 0===p?void 0:p.self.id)&&(0,s.h)("dyte-menu-item",{iconPack:this.iconPack,t:this.t,class:this.isOnStage?"red":"",onClick:this.inviteToStageToggle},(0,s.h)("dyte-icon",{iconPack:this.iconPack,t:this.t,icon:this.isOnStage?this.iconPack.leave_stage:this.iconPack.join_stage,slot:"start"}),this.isOnStage?this.t("stage.remove_from_stage"):this.t("stage.add_to_stage")),!g&&this.canKickParticipant&&(0,s.h)("dyte-menu-item",{iconPack:this.iconPack,t:this.t,class:"red",onClick:()=>{var t,i;null===(t=this.meeting)||void 0===t||t.participants.kick(null===(i=this.participant)||void 0===i?void 0:i.id)}},(0,s.h)("dyte-icon",{icon:this.iconPack.dismiss,slot:"start",iconPack:this.iconPack,t:this.t}),this.t("kick")),(0,s.h)("slot",null,(0,s.h)(r.R,{element:"dyte-participant",defaults:P,childProps:{participant:this.participant},deepProps:!0,onlyChildren:!0}))))))}static get watchers(){return{meeting:["meetingChanged"],participant:["participantChanged"]}}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:flex;height:var(--dyte-space-14, 56px);align-items:center;justify-content:space-between;cursor:pointer;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}:host dyte-avatar{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);font-size:14px}.left{display:flex;align-items:center}.left>*{margin-right:var(--dyte-space-2, 8px)}.left>*:last-child{margin-right:var(--dyte-space-0, 0px)}.right{display:flex;align-items:center;justify-content:flex-end}.right>*{margin-left:var(--dyte-space-2, 8px)}.right>*:first-child{margin-left:var(--dyte-space-0, 0px)}.name{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}dyte-icon.red{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}dyte-icon.more{cursor:pointer}"},67341:(t,i,e)=>{e.d(i,{R:()=>c,l:()=>o});var s=e(37176);const n=({element:t,size:i,states:e={},config:s={}})=>{let n=[];const a=null==s?void 0:s.root[t],r=t=>{n.push(t),"string"==typeof i&&n.push(`${t}.${i}`)};if(r(t),"object"==typeof a&&!Array.isArray(a)&&null!==a){const{state:i,states:s}=a;let n=t,o=[];if(Array.isArray(s)){o=s.filter((t=>e[t])),o.sort();for(const t of o)r(`${n}.${t}`);if(o.length>1){r([n,...o].join("."))}}if("string"==typeof i){const s=`${t}[${i}=${e[i]}]`;r(s);for(const t of o)r(`${s}.${t}`);if(o.length>1){r([s,...o].join("."))}}}return n},a=({selectors:t,root:i})=>{if(!i||!Array.isArray(t))return[];let e=[];for(const s of t){const t=i[s];if(Array.isArray(t))e=[...t];else if(t){if(t.children&&(e=[...t.children]),Array.isArray(t.remove))for(const i of t.remove)e=e.filter((t=>"string"==typeof t?t!==i:!Array.isArray(t)||t[0]!==i));if(t.addBefore)for(const[i,s]of Object.entries(t.addBefore)){const t=e.findIndex((t=>"string"==typeof t?t===i:!!Array.isArray(t)&&t[0]===i));t>=0&&e.splice(t,0,...s)}Array.isArray(t.add)&&(e=e.concat(t.add)),Array.isArray(t.prepend)&&(e=t.prepend.concat(e))}}return e},r=({elements:t,defaults:i,props:e={},deepProps:n=!1,elementProps:a={}})=>Array.isArray(t)&&0!==t.length?t.map((t=>(0,s.h)(c,{element:t,defaults:i,props:e,childProps:n&&e,elementProps:a}))):null,o=({element:t,defaults:i,props:e={},elementProps:s={}})=>{var r;const{config:o,size:c,states:d}=i;let l,h={},p=[];Array.isArray(t)?[l,h,...p]=t:l=t;const u=null===(r=null==o?void 0:o.root)||void 0===r?void 0:r[l];null!=u&&"props"in u&&(e=Object.assign(Object.assign({},u.props),e)),e=Object.assign(Object.assign({},e),h),l in s&&(e=Object.assign(Object.assign({},e),s[l]));const g=n({element:l,size:c,states:d,config:o});return a({selectors:g,root:o.root}).length},c=({element:t,defaults:i,childProps:e={},props:o={},onlyChildren:c=!1,asHost:d=!1,deepProps:l=!1,elementProps:h={}},p)=>{var u;const{config:g,size:f,states:m}=i;let y,P={},v=[];Array.isArray(t)?[y,P,...v]=t:y=t;const k=null===(u=null==g?void 0:g.root)||void 0===u?void 0:u[y];null!=k&&"props"in k&&(o=Object.assign(Object.assign({},k.props),o)),o=Object.assign(Object.assign({},o),P),y in h&&(o=Object.assign(Object.assign({},o),h[y]));const b=n({element:y,size:f,states:m,config:g}),A=a({selectors:b,root:g.root});if(c)return(0,s.h)(r,{elements:A,defaults:i,props:e,deepProps:l,elementProps:h});const O=(({selectors:t,styles:i})=>{if(!Array.isArray(t)||null==i)return{};const e={};for(const s of t){const t=i[s];null!=t&&Object.assign(e,t)}return e})({selectors:b,styles:g.styles});if(d)return(0,s.h)(s.H,Object.assign({},i,{style:O},o),(0,s.h)(r,{elements:A,defaults:i,props:e,deepProps:l,elementProps:h}),p,v.map((t=>{if(Array.isArray(t)){const[e,n]=t;return(0,s.h)(e,Object.assign({},i,n))}return t})));if(["dyte-header","dyte-controlbar"].includes(y)&&(o.disableRender=!0),y.startsWith("dyte-"))return(0,s.h)(y,Object.assign({},i,{style:O},o),(0,s.h)(r,{elements:A,defaults:i,props:e,deepProps:l,elementProps:h}),p,v.map((t=>{if(Array.isArray(t)){const[e,n]=t;return(0,s.h)(e,Object.assign({},i,n))}return t})));{const[t,n]=y.split("#");return(0,s.h)(t,Object.assign({id:n,style:O},o),(0,s.h)(r,{elements:A,defaults:i,props:e,deepProps:l,elementProps:h}),p,v.map((t=>{if(Array.isArray(t)){const[e,n]=t;return(0,s.h)(e,Object.assign({},i,n))}return t})))}}},22906:(t,i,e)=>{e.d(i,{a:()=>a,f:()=>r,g:()=>o,h:()=>n,s:()=>s});const s=(t,i=20)=>null==t?"":t.length>i?`${t.substring(0,i)}...`:t,n=t=>/^\p{Emoji}+$/u.test(t)&&!/^\d+$/.test(t),a=t=>(null==t?void 0:t.trim().toLowerCase().startsWith("javascript:"))?"https://dyte.io":t,r=t=>""===(t=null==t?void 0:t.trim())?"Participant":t;function o(t,i=2){return t.replace(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w\s]/g,"").trim().split(/\s+/).slice(0,i).map((t=>t.charAt(0))).join("").toUpperCase()}}}]);