"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[4737],{74737:(e,t,i)=>{i.r(t),i.d(t,{dyte_grid:()=>h});var s=i(37176),n=i(9367),a=i(68753),r=i(74710),o=i(67341),d=i(39571),c=i(78410),p=i(75673);const h=class{constructor(e){(0,s.r)(this,e),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.hideSelf=!1,this.networkUpdateListener=({event:e})=>{this.connected="connected"===e},this.meetingDisconnectedListener=()=>{this.networkUpdateListener({event:"disconnected"})},this.meetingConnectedListener=()=>{this.networkUpdateListener({event:"connected"})},this.filterParticipants=e=>{var t;if(this.overrides&&(null===(t=this.overrides)||void 0===t?void 0:t.videoUnsubscribed)){const t=this.overrides.videoUnsubscribed.preset;t.length>0&&(e=e.filter((e=>!t.some((t=>void 0!==e.presetName&&e.presetName.match(t))))))}return e},this.onViewModeChanged=()=>{null!=this.meeting&&this.updateActiveParticipants()},this.onParticipantJoined=e=>{null!=this.meeting&&(this.participants.some((t=>t.id===e.id))||(this.participants=this.filterParticipants([e,...this.participants])),e.isPinned&&!this.pinnedParticipants.some((t=>t.id===e.id))&&(this.pinnedParticipants=this.pinnedParticipants.concat([e])),this.updateWebinarStage())},this.onParticipantLeft=e=>{this.participants=this.participants.filter((t=>t.id!==e.id)),this.participants=this.participants.concat(this.meeting.participants.active.toArray().filter((e=>!this.participants.find((t=>t.id===e.id))))),this.participants=this.filterParticipants(this.participants),this.pinnedParticipants=this.pinnedParticipants.filter((t=>t.id!==e.id)),e.screenShareEnabled&&this.removeScreenShare(e),this.updateWebinarStage()},this.stageStatusListener=()=>{this.updateActiveParticipants(),this.showLiveStreamPlayer=(0,c.a)(this.meeting),"ON_STAGE"!==this.meeting.stage.status&&this.removeScreenShare(this.meeting.self)},this.peerStageStatusListener=e=>{this.updateActiveParticipants(),"ON_STAGE"!==this.meeting.stage.status&&(this.removePinned(e),this.removeScreenShare(e))},this.onScreenShareUpdate=e=>{e.screenShareEnabled?this.addScreenShare(e):this.removeScreenShare(e)},this.onSelfScreenShareUpdate=({screenShareEnabled:e})=>{e?this.addScreenShare(this.meeting.self):this.removeScreenShare(this.meeting.self)},this.onPluginStateUpdate=(e,{active:t})=>{t?this.plugins.some((t=>t.id===e.id))||(this.plugins=[...this.plugins,e]):this.plugins=this.plugins.filter((t=>t.id!==e.id))},this.onParticipantPinned=()=>{this.updateActiveParticipants()},this.onParticipantUnpinned=()=>{this.updateActiveParticipants()},this.roomJoinedListener=()=>{this.mediaConnected=this.meeting.meta.mediaConnected},this.updateRoomStateListener=()=>{this.roomState=this.meeting.self.roomState},this.participants=[],this.pinnedParticipants=[],this.screenShareParticipants=[],this.plugins=[],this.showWebinarStage=!1,this.showLiveStreamPlayer=!1,this.canCurrentPeerHost=!1,this.connected=!0,this.pipSupported=!1,this.pipEnabled=!1,this.layout="row",this.aspectRatio="16:9",this.meeting=void 0,this.gap=8,this.size=void 0,this.states=d.s,this.config=n.d,this.iconPack=a.d,this.t=(0,r.u)(),this.gridSize=p.d,this.overrides={},this.mediaConnected=!0,this.roomState=void 0}connectedCallback(){this.meetingChanged(this.meeting)}disconnectMeeting(e){var t;if(null==e)return;this.participants=[],this.plugins=[];const{self:i,participants:s,plugins:n,meta:a}=e;s.active.removeListener("participantJoined",this.onParticipantJoined),s.active.removeListener("participantLeft",this.onParticipantLeft),s.joined.removeListener("screenShareUpdate",this.onScreenShareUpdate),s.joined.removeListener("stageStatusUpdate",this.peerStageStatusListener),i.removeListener("screenShareUpdate",this.onSelfScreenShareUpdate),null==n||n.all.removeListener("stateUpdate",this.onPluginStateUpdate),s.pinned.removeListener("participantJoined",this.onParticipantPinned),s.pinned.removeListener("participantLeft",this.onParticipantUnpinned),i.removeListener("pinned",this.onParticipantPinned),i.removeListener("unpinned",this.onParticipantUnpinned),s.removeListener("viewModeChanged",this.onViewModeChanged),a.removeListener("disconnected",this.meetingDisconnectedListener),a.removeListener("connected",this.meetingConnectedListener),null===(t=e.stage)||void 0===t||t.removeListener("stageStatusUpdate",this.stageStatusListener),a.removeListener("connected",this.roomJoinedListener),a.removeListener("disconnected",this.roomJoinedListener),i.removeListener("roomLeft",this.updateRoomStateListener),i.removeListener("roomJoined",this.updateRoomStateListener)}disconnectedCallback(){this.disconnectMeeting(this.meeting)}overridesChanged(e){this.updateActiveParticipants()}screenShareParticipantsChanged(e){const t=e.length>0;this.stateUpdate.emit({activeScreenShare:t}),d.s.activeScreenShare=t}pluginsChanged(e){const t=e.length>0;this.stateUpdate.emit({activePlugin:t}),d.s.activePlugin=t}pinnedParticipantsChanged(e){const t=e.length>0;this.stateUpdate.emit({activeSpotlight:t}),d.s.activeSpotlight=t}updateActiveParticipants(){var e,t;const{self:i,participants:s,stage:n}=this.meeting,a="WEBINAR"===(null===(e=i.config)||void 0===e?void 0:e.viewType)&&"ON_STAGE"!==n.status,r=null===(t=i.permissions)||void 0===t?void 0:t.isRecorder;this.hideSelf=a||r||i.permissions.hiddenParticipant,this.participants=this.filterParticipants([...s.active.toArray().filter((e=>e.id!==i.id)),..."ACTIVE_GRID"!==s.viewMode||i.isPinned||this.hideSelf?[]:[i]]),this.pinnedParticipants=[...s.pinned.toArray().filter((e=>e.id!==i.id)),...i.isPinned&&!this.hideSelf?[i]:[]],this.screenShareParticipants=s.joined.toArray().filter((e=>e.screenShareEnabled)),i.screenShareEnabled&&(this.screenShareParticipants=this.screenShareParticipants.concat([i])),this.updateWebinarStage()}updateWebinarStage(){this.meeting&&"WEBINAR"===this.meeting.meta.viewType?this.showWebinarStage=0===this.participants.length&&0===this.pinnedParticipants.length:this.showWebinarStage=!1}meetingChanged(e,t){var i,s,n;if(null!==t&&this.disconnectMeeting(t),null!=e){const{self:t,participants:a,plugins:r,meta:o,stage:d}=e,{config:c,permissions:p}=t;this.roomState=t.roomState,this.mediaConnected=o.mediaConnected;const h="ON_STAGE"!==this.meeting.stage.status,l=null==p?void 0:p.isRecorder;this.hideSelf=h||l||p.hiddenParticipant,this.participants=this.filterParticipants([...a.active.toArray(),...t.isPinned||this.hideSelf?[]:[t]]),this.pinnedParticipants=[...a.pinned.toArray(),...t.isPinned&&!this.hideSelf?[t]:[]],this.screenShareParticipants=a.joined.toArray().filter((e=>e.screenShareEnabled)),this.plugins=(null==r?void 0:r.active.toArray())||[],"WEBINAR"===(null==c?void 0:c.viewType)&&(this.canCurrentPeerHost=p.acceptPresentRequests||p.canPresent,this.updateWebinarStage()),this.pipSupported=this.meeting.participants.pip.isSupported()&&(null===(i=e.self.config)||void 0===i?void 0:i.pipMode),this.pipSupported&&this.meeting.participants.pip.init(),a.active.addListener("participantJoined",this.onParticipantJoined),a.active.addListener("participantLeft",this.onParticipantLeft),a.joined.addListener("screenShareUpdate",this.onScreenShareUpdate),null===(s=null==a?void 0:a.joined)||void 0===s||s.on("stageStatusUpdate",this.peerStageStatusListener),t.addListener("screenShareUpdate",this.onSelfScreenShareUpdate),null==r||r.all.addListener("stateUpdate",this.onPluginStateUpdate),a.pinned.addListener("participantJoined",this.onParticipantPinned),a.pinned.addListener("participantLeft",this.onParticipantUnpinned),t.addListener("pinned",this.onParticipantPinned),t.addListener("unpinned",this.onParticipantUnpinned),o.addListener("disconnected",this.meetingDisconnectedListener),o.addListener("connected",this.meetingConnectedListener),null==d||d.addListener("stageStatusUpdate",this.stageStatusListener.bind(this)),a.addListener("viewModeChanged",this.onViewModeChanged),o.addListener("connected",this.roomJoinedListener),o.addListener("disconnected",this.roomJoinedListener),t.addListener("roomLeft",this.updateRoomStateListener),t.addListener("roomJoined",this.updateRoomStateListener),(null===(n=e.stage)||void 0===n?void 0:n.status)&&this.stageStatusListener()}}addScreenShare(e){this.screenShareParticipants.some((t=>t.id===e.id))||(this.screenShareParticipants=[...this.screenShareParticipants,e])}removeScreenShare(e){this.screenShareParticipants=this.screenShareParticipants.filter((t=>t.id!==e.id))}removePinned(e){this.pinnedParticipants=this.pinnedParticipants.filter((t=>t.id!==e.id))}render(){const e={meeting:this.meeting,size:this.size,states:this.states||d.s,config:this.config,iconPack:this.iconPack,t:this.t};return"joined"===this.roomState||(0,c.a)(this.meeting)?this.mediaConnected||(0,c.a)(this.meeting)?!this.connected&&this.hideSelf?(0,s.h)("div",{class:"webinar-stage"},(0,s.h)("div",{class:"center"},(0,s.h)("h2",null,this.t("stage.reconnecting")))):this.showWebinarStage?(0,s.h)(s.H,null,(0,s.h)("div",{class:"webinar-stage"},(0,s.h)("div",{class:"center"},this.canCurrentPeerHost&&(0,s.h)("div",{class:"ctr",part:"container"},(0,s.h)("p",{class:"message",part:"message"},this.t("stage.empty_host")),(0,s.h)("span",{class:"description",part:"description"},this.t("stage.empty_host_summary"))),!this.canCurrentPeerHost&&(0,s.h)("div",{class:"ctr",part:"container"},(0,s.h)("p",{class:"message",part:"message"},this.t("stage.empty_viewer")))))):this.showLiveStreamPlayer?(0,s.h)(s.H,null,(0,s.h)("dyte-livestream-player",{meeting:this.meeting,size:this.size}),(0,s.h)("dyte-livestream-indicator",{meeting:this.meeting,size:"sm",t:this.t}),(0,s.h)("dyte-viewer-count",{meeting:this.meeting,variant:"embedded",t:this.t})):(0,s.h)(s.H,null,(0,s.h)(o.R,{element:"dyte-grid",defaults:e,childProps:{participants:this.participants,screenShareParticipants:this.screenShareParticipants,plugins:this.plugins,pinnedParticipants:this.pinnedParticipants,aspectRatio:this.aspectRatio,gap:this.gap,layout:this.layout,gridSize:this.gridSize},onlyChildren:!0}),(0,s.h)("dyte-livestream-indicator",{meeting:this.meeting,size:"sm",t:this.t}),(0,s.h)("dyte-viewer-count",{meeting:this.meeting,variant:"embedded"})):(0,s.h)(s.H,null,(0,s.h)("div",{class:"offline-grid"},(0,s.h)("dyte-icon",{icon:this.iconPack.disconnected,size:"xl"}),(0,s.h)("h3",null,this.t("offline")),(0,s.h)("p",null,this.t("offline.description")))):(0,s.h)(s.H,null,(0,s.h)("div",{class:"offline-grid"},(0,s.h)("dyte-icon",{icon:this.iconPack.join_stage,size:"xl"}),(0,s.h)("h3",null,this.t("disconnected")),(0,s.h)("p",null,this.t("disconnected.description"))))}static get watchers(){return{overrides:["overridesChanged"],screenShareParticipants:["screenShareParticipantsChanged"],plugins:["pluginsChanged"],pinnedParticipants:["pinnedParticipantsChanged"],meeting:["meetingChanged"]}}};h.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block;height:100%;width:100%}.offline-grid{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center}.offline-grid h3{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);margin-left:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-0, 0px);font-size:20px;font-weight:500;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.offline-grid p{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);margin-left:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-0, 0px);text-align:center;font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.offline-grid dyte-icon{margin-bottom:var(--dyte-space-2, 8px)}.webinar-stage{box-sizing:border-box;height:100%;display:flex;align-content:center;align-items:center;justify-content:center;text-align:center}.webinar-stage h2{margin:var(--dyte-space-0, 0px);font-weight:normal}dyte-viewer-count{display:none}.ctr{display:flex;flex-direction:column;align-items:center}.message{font-size:16px;border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-8, 32px);padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.description{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);font-size:14px}dyte-livestream-indicator{display:none}@media only screen and (max-device-height: 480px) and (orientation: landscape){dyte-viewer-count[variant='embedded']{position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-2, 8px);z-index:20;margin-top:var(--dyte-space-0, 0px);margin-left:var(--dyte-space-0, 0px);display:flex}dyte-livestream-indicator{position:absolute;top:var(--dyte-space-0, 0px);left:var(--dyte-space-2, 8px);z-index:20;margin-top:var(--dyte-space-0, 0px);margin-left:var(--dyte-space-0, 0px);display:flex}}"},75673:(e,t,i)=>{function s(e,t){const i=Math.pow(10,t);return Math.floor(e*i)/i}function n({dimensions:e,count:t,aspectRatio:i,gap:n}){const{width:r,height:o,rows:d,cols:c}=function({count:e,dimensions:t,aspectRatio:i,gap:n}){let{width:r,height:o}=t;if(0===r||0===o)return{width:0,height:0,rows:1,cols:1};r-=2*n,o-=2*n;const d=n,c=e,p=a(i);let h=0,l=0,g=1,m=1;const u=[];for(let s=1;s<=c;s++)u.push((r-d*(s-1))/s),u.push((o-d*(s-1))/(s*p));u.sort(((e,t)=>t-e));for(const a of u)if(h=s(a,4),l=s(h*p,4),g=Math.floor((r+d)/(h+d)),m=Math.floor((o+d)/(l+d)),g*m>=c){m=Math.ceil(c/g);break}return{width:h,height:l,rows:m,cols:g}}({dimensions:e,count:t,aspectRatio:i,gap:n}),p=function({parentDimensions:e,dimensions:t,rows:i,cols:s,count:n,gap:a}){const{width:r,height:o}=e,{width:d,height:c}=t,p=(o-(c*i+(i-1)*a))/2;let h=(r-(d*s+(s-1)*a))/2;const l=c+a,g=d+a;let m=0,u=0;const f=n%s;function v(e){const t=n-e;t===f&&(h=(r-(d*t+(t-1)*a))/2);const i=p+u*l,o=h+m*g;return m++,(e+1)%s==0&&(u++,m=0),{top:i,left:o}}return v}({parentDimensions:e,dimensions:{width:r,height:o},rows:d,cols:c,count:t,gap:n});return{width:r,height:o,getPosition:p}}i.d(t,{d:()=>r,u:()=>n});const a=e=>{const[t,i]=e.split(":");return Number.parseInt(i)/Number.parseInt(t)},r={spotlight:"sm",mixed:"sm"}},67341:(e,t,i)=>{i.d(t,{R:()=>d,l:()=>o});var s=i(37176);const n=({element:e,size:t,states:i={},config:s={}})=>{let n=[];const a=null==s?void 0:s.root[e],r=e=>{n.push(e),"string"==typeof t&&n.push(`${e}.${t}`)};if(r(e),"object"==typeof a&&!Array.isArray(a)&&null!==a){const{state:t,states:s}=a;let n=e,o=[];if(Array.isArray(s)){o=s.filter((e=>i[e])),o.sort();for(const e of o)r(`${n}.${e}`);if(o.length>1){r([n,...o].join("."))}}if("string"==typeof t){const s=`${e}[${t}=${i[t]}]`;r(s);for(const e of o)r(`${s}.${e}`);if(o.length>1){r([s,...o].join("."))}}}return n},a=({selectors:e,root:t})=>{if(!t||!Array.isArray(e))return[];let i=[];for(const s of e){const e=t[s];if(Array.isArray(e))i=[...e];else if(e){if(e.children&&(i=[...e.children]),Array.isArray(e.remove))for(const t of e.remove)i=i.filter((e=>"string"==typeof e?e!==t:!Array.isArray(e)||e[0]!==t));if(e.addBefore)for(const[t,s]of Object.entries(e.addBefore)){const e=i.findIndex((e=>"string"==typeof e?e===t:!!Array.isArray(e)&&e[0]===t));e>=0&&i.splice(e,0,...s)}Array.isArray(e.add)&&(i=i.concat(e.add)),Array.isArray(e.prepend)&&(i=e.prepend.concat(i))}}return i},r=({elements:e,defaults:t,props:i={},deepProps:n=!1,elementProps:a={}})=>Array.isArray(e)&&0!==e.length?e.map((e=>(0,s.h)(d,{element:e,defaults:t,props:i,childProps:n&&i,elementProps:a}))):null,o=({element:e,defaults:t,props:i={},elementProps:s={}})=>{var r;const{config:o,size:d,states:c}=t;let p,h={},l=[];Array.isArray(e)?[p,h,...l]=e:p=e;const g=null===(r=null==o?void 0:o.root)||void 0===r?void 0:r[p];null!=g&&"props"in g&&(i=Object.assign(Object.assign({},g.props),i)),i=Object.assign(Object.assign({},i),h),p in s&&(i=Object.assign(Object.assign({},i),s[p]));const m=n({element:p,size:d,states:c,config:o});return a({selectors:m,root:o.root}).length},d=({element:e,defaults:t,childProps:i={},props:o={},onlyChildren:d=!1,asHost:c=!1,deepProps:p=!1,elementProps:h={}},l)=>{var g;const{config:m,size:u,states:f}=t;let v,y={},S=[];Array.isArray(e)?[v,y,...S]=e:v=e;const P=null===(g=null==m?void 0:m.root)||void 0===g?void 0:g[v];null!=P&&"props"in P&&(o=Object.assign(Object.assign({},P.props),o)),o=Object.assign(Object.assign({},o),y),v in h&&(o=Object.assign(Object.assign({},o),h[v]));const b=n({element:v,size:u,states:f,config:m}),L=a({selectors:b,root:m.root});if(d)return(0,s.h)(r,{elements:L,defaults:t,props:i,deepProps:p,elementProps:h});const A=(({selectors:e,styles:t})=>{if(!Array.isArray(e)||null==t)return{};const i={};for(const s of e){const e=t[s];null!=e&&Object.assign(i,e)}return i})({selectors:b,styles:m.styles});if(c)return(0,s.h)(s.H,Object.assign({},t,{style:A},o),(0,s.h)(r,{elements:L,defaults:t,props:i,deepProps:p,elementProps:h}),l,S.map((e=>{if(Array.isArray(e)){const[i,n]=e;return(0,s.h)(i,Object.assign({},t,n))}return e})));if(["dyte-header","dyte-controlbar"].includes(v)&&(o.disableRender=!0),v.startsWith("dyte-"))return(0,s.h)(v,Object.assign({},t,{style:A},o),(0,s.h)(r,{elements:L,defaults:t,props:i,deepProps:p,elementProps:h}),l,S.map((e=>{if(Array.isArray(e)){const[i,n]=e;return(0,s.h)(i,Object.assign({},t,n))}return e})));{const[e,n]=v.split("#");return(0,s.h)(e,Object.assign({id:n,style:A},o),(0,s.h)(r,{elements:L,defaults:t,props:i,deepProps:p,elementProps:h}),l,S.map((e=>{if(Array.isArray(e)){const[i,n]=e;return(0,s.h)(i,Object.assign({},t,n))}return e})))}}}}]);