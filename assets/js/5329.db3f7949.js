"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[5329,6154],{35329:(e,i,t)=>{t.r(i),t.d(i,{dyte_camera_toggle:()=>d});var s=t(37176),a=t(68753),n=t(74710),o=t(39571);const d=class{constructor(e){(0,s.r)(this,e),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.videoUpdateListener=({videoEnabled:e})=>{this.videoEnabled=e},this.stageStatusListener=()=>{this.updateCanProduce(this.meeting)},this.mediaPermissionUpdateListener=({kind:e,message:i})=>{"video"===e&&(this.cameraPermission=i)},this.toggleCamera=()=>{var e,i,t,s,a,n,d,r,l,h,c;if(null===(e=this.meeting)||void 0===e||e.__internals__.logger.info("dyteCameraToggle::toggleCamera",{media:{video:{enabled:Boolean(null===(t=null===(i=this.meeting)||void 0===i?void 0:i.self)||void 0===t?void 0:t.videoEnabled),permission:this.cameraPermission,canProduce:null===(n=null===(a=null===(s=this.meeting)||void 0===s?void 0:s.self)||void 0===a?void 0:a.permissions)||void 0===n?void 0:n.canProduceVideo}},webinar:{stageStatus:null===(d=this.meeting)||void 0===d?void 0:d.stage.status},livestream:{stageStatus:null===(l=null===(r=this.meeting)||void 0===r?void 0:r.stage)||void 0===l?void 0:l.status},moduleExists:{self:Boolean(null===(h=this.meeting)||void 0===h?void 0:h.self)}}),this.hasPermissionError()){const e={enabled:!0,kind:"video"};return this.stateUpdate.emit({activePermissionsMessage:e}),o.s.activePermissionsMessage=e,!1}const m=null===(c=this.meeting)||void 0===c?void 0:c.self;null!=m&&this.canProduceVideo&&(m.videoEnabled?m.disableVideo():m.enableVideo())},this.variant="button",this.meeting=void 0,this.size=void 0,this.iconPack=a.d,this.t=(0,n.u)(),this.videoEnabled=!1,this.canProduceVideo=!1,this.cameraPermission="NOT_REQUESTED"}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){var e,i,t,s;null===(e=this.meeting)||void 0===e||e.self.removeListener("videoUpdate",this.videoUpdateListener),null===(i=this.meeting)||void 0===i||i.self.removeListener("mediaPermissionUpdate",this.mediaPermissionUpdateListener),null===(s=null===(t=this.meeting)||void 0===t?void 0:t.stage)||void 0===s||s.removeListener("stageStatusUpdate",this.stageStatusListener)}meetingChanged(e){if(null!=e){const{self:i,stage:t}=e;this.updateCanProduce(e),this.cameraPermission=i.mediaPermissions.video||"NOT_REQUESTED",this.videoEnabled=i.videoEnabled,i.addListener("videoUpdate",this.videoUpdateListener),i.addListener("mediaPermissionUpdate",this.mediaPermissionUpdateListener),null==t||t.addListener("stageStatusUpdate",this.stageStatusListener)}}updateCanProduce(e){const{self:i,meta:t,stage:s}=e,a="ALLOWED"===i.permissions.canProduceVideo,n="WEBINAR"===t.viewType||e.self.permissions.stageEnabled,o="LIVESTREAM"===t.viewType;if(this.canProduceVideo=!1,!a||o||n){if(n||o){a&&"OFF_STAGE"!==s.status&&"REQUESTED_TO_JOIN_STAGE"!==s.status&&(this.canProduceVideo=!0);!("CAN_REQUEST"===i.permissions.canProduceVideo)||"ON_STAGE"!==s.status&&"ACCEPTED_TO_JOIN_STAGE"!==s.status||(this.canProduceVideo=!0)}}else this.canProduceVideo=!0}hasPermissionError(){return"DENIED"===this.cameraPermission||"SYSTEM_DENIED"===this.cameraPermission}getState(){let e="",i="",t="",s={},a=this.hasPermissionError(),n="COULD_NOT_START"===this.cameraPermission;return this.videoEnabled&&!a?(i=this.t("video_on"),t=this.iconPack.video_on):(i=this.t("video_off"),t=this.iconPack.video_off,s["red-icon"]=!0),e=n?this.t("perm_could_not_start.video"):"SYSTEM_DENIED"===this.cameraPermission?this.t("perm_sys_denied.video"):"DENIED"===this.cameraPermission?this.t("perm_denied.video"):this.videoEnabled?this.t("disable_video"):this.t("enable_video"),{tooltipLabel:e,label:i,icon:t,classList:s,showWarning:a||n,disable:a}}render(){var e;if(!this.canProduceVideo||"AUDIO_ROOM"===(null===(e=this.meeting)||void 0===e?void 0:e.meta.viewType))return null;const{tooltipLabel:i,label:t,icon:a,classList:n,showWarning:o,disable:d}=this.getState();return(0,s.h)(s.H,{title:t},(0,s.h)("dyte-tooltip",{kind:"block",label:i,part:"tooltip",iconPack:this.iconPack,t:this.t},(0,s.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,class:n,variant:this.variant,label:t,icon:a,onClick:this.toggleCamera,showWarning:o,disabled:d})))}static get watchers(){return{meeting:["meetingChanged"]}}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"}}]);