"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[1780],{71780:(t,e,i)=>{i.r(e),i.d(e,{dyte_settings_audio:()=>d,dyte_settings_video:()=>c});var s=i(26786),a=i(17073),o=i(13773),n=i(55055),r=i(8263);const d=class{constructor(t){(0,s.r)(this,t),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=a.d,this.t=(0,o.u)()}render(){var t,e;if(null==this.meeting)return null;const i={meeting:this.meeting,states:this.states||r.s,size:this.size,iconPack:this.iconPack,t:this.t},a=this.states||r.s,o=!0===(null===(t=null==a?void 0:a.prefs)||void 0===t?void 0:t.muteNotificationSounds)||"true"===(0,n.b)("mute-notification-sounds");return(0,s.h)(s.H,null,(0,s.h)("dyte-microphone-selector",Object.assign({},i),(0,s.h)("dyte-audio-visualizer",{participant:null===(e=this.meeting)||void 0===e?void 0:e.self,iconPack:this.iconPack,t:this.t,slot:"indicator"})),(0,s.h)("dyte-speaker-selector",Object.assign({},i)),(0,s.h)("div",{class:"group",part:"notification-toggle"},(0,s.h)("div",{class:"row"},(0,s.h)("label",{htmlFor:"notification-toggle"},this.t("settings.notification_sound")),(0,s.h)("dyte-switch",{id:"notification-toggle",checked:!o,onDyteChange:t=>{var e;const{checked:i}=t.target,s=!i;this.stateUpdate.emit({prefs:{muteNotificationSounds:s}}),r.s.prefs=Object.assign(Object.assign({},null!==(e=r.s.prefs)&&void 0!==e?e:{}),{muteNotificationSounds:s}),(0,n.s)("mute-notification-sounds",s)},iconPack:this.iconPack,t:this.t}))))}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;width:100%;flex-direction:column}audio{visibility:hidden}.group{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px)}.group>*{margin-bottom:var(--dyte-space-2, 8px)}.group>*:last-child{margin-bottom:var(--dyte-space-0, 0px)}.group select{flex:1 1 0%}dyte-audio-visualizer{flex-shrink:0}dyte-button{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}dyte-button dyte-icon{margin-right:var(--dyte-space-2, 8px)}";const c=class{constructor(t){(0,s.r)(this,t),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.onVideoUpdate=t=>{this.videoEnabled=t.videoEnabled},this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=a.d,this.t=(0,o.u)(),this.videoEnabled=void 0}componentDidLoad(){this.meetingChanged(this.meeting)}meetingChanged(t){var e;null!=t&&(this.videoEnabled=t.self.videoEnabled,null===(e=t.self)||void 0===e||e.addListener("videoUpdate",this.onVideoUpdate))}disconnectedCallback(){var t;null===(t=this.meeting.self)||void 0===t||t.removeListener("videoUpdate",this.onVideoUpdate)}render(){var t,e,i;if(null==this.meeting)return null;const a={meeting:this.meeting,states:this.states||r.s,size:this.size,iconPack:this.iconPack,t:this.t},o=this.states||r.s,d=!0===(null===(t=null==o?void 0:o.prefs)||void 0===t?void 0:t.mirrorVideo)||"true"===(0,n.b)("mirror-video");return(0,s.h)(s.H,null,(0,s.h)("div",{class:"section",part:"tile-preview"},(0,s.h)("div",{class:"group",part:"tile-preview"},!0===this.videoEnabled?(0,s.h)("dyte-participant-tile",{meeting:this.meeting,participant:null===(e=this.meeting)||void 0===e?void 0:e.self,iconPack:this.iconPack,t:this.t,states:o,size:this.size,isPreview:!0}):(0,s.h)("div",{class:"camera-off-helper"},(0,s.h)("dyte-participant-tile",{meeting:this.meeting,participant:null===(i=this.meeting)||void 0===i?void 0:i.self,size:this.size},(0,s.h)("div",null,(0,s.h)("dyte-icon",{id:"icon",icon:this.iconPack.video_off,tabIndex:-1,"aria-hidden":!0,iconPack:this.iconPack,t:this.t}),(0,s.h)("div",null,this.t("settings.camera_off"))))))),(0,s.h)("dyte-camera-selector",Object.assign({},a)),(0,s.h)("div",{class:"group",part:"mirror-toggle"},(0,s.h)("div",{class:"row"},(0,s.h)("label",{htmlFor:"mirror-toggle"},this.t("settings.mirror_video")),(0,s.h)("dyte-switch",{checked:d,iconPack:this.iconPack,t:this.t,onDyteChange:t=>{var e;const{checked:i}=t.target;this.stateUpdate.emit({prefs:{mirrorVideo:i}}),r.s.prefs=Object.assign(Object.assign({},null!==(e=r.s.prefs)&&void 0!==e?e:{}),{mirrorVideo:i}),(0,n.s)("mirror-video",i)}}))))}static get watchers(){return{meeting:["meetingChanged"]}}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.dyte-select{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.dyte-select:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.dyte-select{display:block;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:var(--dyte-space-3, 12px);font-size:16px;--icon-size:var(--dyte-select-chevron-size, var(--dyte-space-6, 24px));--icon-right-position:var(--dyte-select-chevron-right-position, var(--dyte-space-2, 8px));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right var(--icon-right-position) center;background-repeat:no-repeat;background-size:var(--icon-size) var(--icon-size);padding-right:calc(var(--icon-right-position) * 5)}:host{display:flex;width:100%;flex-direction:column}.dyte-select{width:100%;text-overflow:ellipsis}dyte-participant-tile{margin-left:auto;margin-right:auto;margin-bottom:var(--dyte-space-4, 16px);max-width:100%}#icon{padding-bottom:var(--dyte-space-1, 4px)}.apply-button{height:var(--dyte-space-10, 40px)}label{-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:14px}.group{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px)}.group>*{margin-bottom:var(--dyte-space-2, 8px)}.group>*:last-child{margin-bottom:var(--dyte-space-0, 0px)}.group select{flex:1 1 0%}.row{display:flex;align-items:center;justify-content:space-between;gap:var(--dyte-space-3, 12px)}.section{display:flex;flex-direction:column}@media only screen and (max-height: 480px) and (orientation: landscape){:host{flex-direction:row}:host([size='sm']){flex-direction:row}.section[part='tile-preview']{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);max-height:90%;max-width:40%;flex-shrink:1}.section[part='video-settings']{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);flex-grow:1}}"}}]);