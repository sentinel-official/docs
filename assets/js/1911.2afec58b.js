"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[1911],{20442:(e,t,i)=>{i.d(t,{d:()=>R});var n=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==i.g?i.g:"undefined"!=typeof self?self:{},r="object"==typeof s&&s&&s.Object===Object&&s,a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")(),d=function(){return o.Date.now()},c=/\s/;var p=function(e){for(var t=e.length;t--&&c.test(e.charAt(t)););return t},h=/^\s+/;var l=function(e){return e?e.slice(0,p(e)+1).replace(h,""):e},g=o.Symbol,u=Object.prototype,f=u.hasOwnProperty,m=u.toString,v=g?g.toStringTag:void 0;var y=function(e){var t=f.call(e,v),i=e[v];try{e[v]=void 0;var n=!0}catch(r){}var s=m.call(e);return n&&(t?e[v]=i:delete e[v]),s},S=Object.prototype.toString;var P=function(e){return S.call(e)},b=g?g.toStringTag:void 0;var L=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":b&&b in Object(e)?y(e):P(e)};var w=function(e){return null!=e&&"object"==typeof e};var x=function(e){return"symbol"==typeof e||w(e)&&"[object Symbol]"==L(e)},A=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,C=/^0o[0-7]+$/i,U=parseInt;var O=function(e){if("number"==typeof e)return e;if(x(e))return NaN;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=l(e);var i=j.test(e);return i||C.test(e)?U(e.slice(2),i?2:8):A.test(e)?NaN:+e},z=Math.max,k=Math.min;var R=function(e,t,i){var s,r,a,o,c,p,h=0,l=!1,g=!1,u=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var i=s,n=r;return s=r=void 0,h=t,o=e.apply(n,i)}function m(e){var i=e-p;return void 0===p||i>=t||i<0||g&&e-h>=a}function v(){var e=d();if(m(e))return y(e);c=setTimeout(v,function(e){var i=t-(e-p);return g?k(i,a-(e-h)):i}(e))}function y(e){return c=void 0,u&&s?f(e):(s=r=void 0,o)}function S(){var e=d(),i=m(e);if(s=arguments,r=this,p=e,i){if(void 0===c)return function(e){return h=e,c=setTimeout(v,t),l?f(e):o}(p);if(g)return clearTimeout(c),c=setTimeout(v,t),f(p)}return void 0===c&&(c=setTimeout(v,t)),o}return t=O(t)||0,n(i)&&(l=!!i.leading,a=(g="maxWait"in i)?z(O(i.maxWait)||0,t):a,u="trailing"in i?!!i.trailing:u),S.cancel=function(){void 0!==c&&clearTimeout(c),h=0,s=p=r=c=void 0},S.flush=function(){return void 0===c?o:y(d())},S}},61911:(e,t,i)=>{i.r(t),i.d(t,{dyte_grid:()=>l});var n=i(72944),s=i(93514),r=i(17073),a=i(74157),o=i(20442),d=i(17213),c=i(26468),p=i(94370),h=i(37895);i(55055);const l=class{constructor(e){(0,n.r)(this,e),this.stateUpdate=(0,n.c)(this,"dyteStateUpdate",7),this.hideSelf=!1,this.networkUpdateListener=({event:e})=>{this.meetingConnected="connected"===e},this.meetingDisconnectedListener=()=>{this.networkUpdateListener({event:"disconnected"})},this.meetingConnectedListener=()=>{this.networkUpdateListener({event:"connected"})},this.filterParticipants=e=>{var t;if(this.overrides&&(null===(t=this.overrides)||void 0===t?void 0:t.videoUnsubscribed)){const t=this.overrides.videoUnsubscribed.preset;t.length>0&&(e=e.filter((e=>!t.some((t=>void 0!==e.presetName&&e.presetName.match(t))))))}return e},this.onViewModeChanged=()=>{null!=this.meeting&&this.updateActiveParticipants()},this.onParticipantJoined=(0,o.d)((()=>{this.updateActiveParticipants()}),50),this.onParticipantLeft=(0,o.d)((()=>{this.updateActiveParticipants()}),50),this.stageStatusListener=()=>{this.updateActiveParticipants(),this.showLiveStreamPlayer=(0,p.a)(this.meeting),"ON_STAGE"!==this.meeting.stage.status&&this.removeScreenShare(this.meeting.self)},this.peerStageStatusListener=e=>{this.updateActiveParticipants(),"ON_STAGE"!==this.meeting.stage.status&&(this.removePinned(e),this.removeScreenShare(e))},this.onScreenShareUpdate=e=>{e.screenShareEnabled?this.addScreenShare(e):this.removeScreenShare(e)},this.onSelfScreenShareUpdate=({screenShareEnabled:e})=>{e?this.addScreenShare(this.meeting.self):this.removeScreenShare(this.meeting.self)},this.onPluginStateUpdate=(e,{active:t})=>{t?this.plugins.some((t=>t.id===e.id))||(this.plugins=[...this.plugins,e]):this.plugins=this.plugins.filter((t=>t.id!==e.id))},this.onParticipantPinned=()=>{this.updateActiveParticipants()},this.onParticipantUnpinned=()=>{this.updateActiveParticipants()},this.roomJoinedListener=()=>{this.mediaConnected=this.meeting.meta.mediaConnected},this.updateRoomStateListener=()=>{this.roomState=this.meeting.self.roomState},this.participants=[],this.pinnedParticipants=[],this.screenShareParticipants=[],this.plugins=[],this.showStage=!1,this.showLiveStreamPlayer=!1,this.canCurrentPeerHost=!1,this.pipSupported=!1,this.pipEnabled=!1,this.layout="row",this.aspectRatio="16:9",this.meeting=void 0,this.gap=8,this.size=void 0,this.states=c.s,this.config=s.d,this.iconPack=r.d,this.t=(0,a.u)(),this.gridSize=h.d,this.overrides={},this.meetingConnected=!0,this.mediaConnected=!0,this.roomState=void 0}connectedCallback(){this.meetingChanged(this.meeting)}disconnectMeeting(e){var t;if(null==e)return;this.participants=[],this.plugins=[];const{self:i,participants:n,plugins:s,meta:r}=e;n.active.removeListener("participantJoined",this.onParticipantJoined),n.active.removeListener("participantLeft",this.onParticipantLeft),n.joined.removeListener("screenShareUpdate",this.onScreenShareUpdate),n.joined.removeListener("stageStatusUpdate",this.peerStageStatusListener),i.removeListener("screenShareUpdate",this.onSelfScreenShareUpdate),null==s||s.all.removeListener("stateUpdate",this.onPluginStateUpdate),n.pinned.removeListener("participantJoined",this.onParticipantPinned),n.pinned.removeListener("participantLeft",this.onParticipantUnpinned),i.removeListener("pinned",this.onParticipantPinned),i.removeListener("unpinned",this.onParticipantUnpinned),n.removeListener("viewModeChanged",this.onViewModeChanged),r.removeListener("disconnected",this.meetingDisconnectedListener),r.removeListener("connected",this.meetingConnectedListener),null===(t=e.stage)||void 0===t||t.removeListener("stageStatusUpdate",this.stageStatusListener),r.removeListener("connected",this.roomJoinedListener),r.removeListener("disconnected",this.roomJoinedListener),i.removeListener("roomLeft",this.updateRoomStateListener),i.removeListener("roomJoined",this.updateRoomStateListener)}disconnectedCallback(){this.disconnectMeeting(this.meeting)}overridesChanged(e){this.updateActiveParticipants()}screenShareParticipantsChanged(e){const t=e.length>0;!!c.s.activeScreenShare!==t&&(this.stateUpdate.emit({activeScreenShare:t}),c.s.activeScreenShare=t)}pluginsChanged(e){const t=e.length>0;!!c.s.activePlugin!==t&&(this.stateUpdate.emit({activePlugin:t}),c.s.activePlugin=t)}pinnedParticipantsChanged(e){const t=e.length>0;!!c.s.activeSpotlight!==t&&(this.stateUpdate.emit({activeSpotlight:t}),c.s.activeSpotlight=t)}updateActiveParticipants(){var e;const{self:t,participants:i,stage:n}=this.meeting;this.hideSelf="ON_STAGE"!==n.status||(null===(e=t.permissions)||void 0===e?void 0:e.isRecorder)||t.permissions.hiddenParticipant,this.participants=this.filterParticipants([...i.active.toArray().filter((e=>e.id!==t.id)),..."ACTIVE_GRID"!==i.viewMode||t.isPinned||this.hideSelf?[]:[t]]),this.pinnedParticipants=[...i.pinned.toArray().filter((e=>e.id!==t.id)),...t.isPinned&&!this.hideSelf?[t]:[]],this.screenShareParticipants=i.joined.toArray().filter((e=>e.screenShareEnabled)),t.screenShareEnabled&&(this.screenShareParticipants=this.screenShareParticipants.concat([t])),this.updateStage()}updateStage(){var e;const{self:t}=this.meeting;this.meeting&&((null===(e=null==t?void 0:t.permissions)||void 0===e?void 0:e.stageEnabled)?this.showStage=0===this.participants.length&&0===this.pinnedParticipants.length:this.showStage=!1)}meetingChanged(e,t){var i,n,s,r;if(null!==t&&this.disconnectMeeting(t),null!=e){const{self:t,participants:a,plugins:o,meta:d,stage:c}=e,{permissions:p}=t;this.roomState=t.roomState,this.mediaConnected=d.mediaConnected;const h="ON_STAGE"!==this.meeting.stage.status,l=null==p?void 0:p.isRecorder;this.hideSelf=h||l||p.hiddenParticipant,this.participants=this.filterParticipants([...a.active.toArray(),...t.isPinned||this.hideSelf?[]:[t]]),this.pinnedParticipants=[...a.pinned.toArray(),...t.isPinned&&!this.hideSelf?[t]:[]],this.screenShareParticipants=a.joined.toArray().filter((e=>e.screenShareEnabled)),this.plugins=(null==o?void 0:o.active.toArray())||[],(null==p?void 0:p.stageEnabled)&&(this.canCurrentPeerHost=p.acceptStageRequests||p.canPresent,this.updateStage()),this.pipSupported=(null===(i=this.meeting.participants.pip)||void 0===i?void 0:i.isSupported())&&(null===(n=e.self.config)||void 0===n?void 0:n.pipMode),this.pipSupported&&this.meeting.participants.pip.init(),a.active.addListener("participantJoined",this.onParticipantJoined),a.active.addListener("participantLeft",this.onParticipantLeft),a.joined.addListener("screenShareUpdate",this.onScreenShareUpdate),null===(s=null==a?void 0:a.joined)||void 0===s||s.on("stageStatusUpdate",this.peerStageStatusListener),t.addListener("screenShareUpdate",this.onSelfScreenShareUpdate),null==o||o.all.addListener("stateUpdate",this.onPluginStateUpdate),a.pinned.addListener("participantJoined",this.onParticipantPinned),a.pinned.addListener("participantLeft",this.onParticipantUnpinned),t.addListener("pinned",this.onParticipantPinned),t.addListener("unpinned",this.onParticipantUnpinned),d.addListener("disconnected",this.meetingDisconnectedListener),d.addListener("connected",this.meetingConnectedListener),null==c||c.addListener("stageStatusUpdate",this.stageStatusListener),a.addListener("viewModeChanged",this.onViewModeChanged),d.addListener("connected",this.roomJoinedListener),d.addListener("disconnected",this.roomJoinedListener),t.addListener("roomLeft",this.updateRoomStateListener),t.addListener("roomJoined",this.updateRoomStateListener),(null===(r=e.stage)||void 0===r?void 0:r.status)&&this.stageStatusListener()}}addScreenShare(e){this.screenShareParticipants.some((t=>t.id===e.id))||(this.screenShareParticipants=[...this.screenShareParticipants,e])}removeScreenShare(e){this.screenShareParticipants=this.screenShareParticipants.filter((t=>t.id!==e.id))}removePinned(e){this.pinnedParticipants=this.pinnedParticipants.filter((t=>t.id!==e.id))}render(){const e={meeting:this.meeting,size:this.size,states:this.states||c.s,config:this.config,iconPack:this.iconPack,t:this.t};return"joined"===this.roomState||(0,p.a)(this.meeting)?this.mediaConnected||(0,p.a)(this.meeting)?this.meetingConnected||!this.hideSelf||(0,p.a)(this.meeting)?this.showStage&&!this.showLiveStreamPlayer?(0,n.h)(n.H,null,(0,n.h)("div",{class:"webinar-stage"},(0,n.h)("div",{class:"center"},this.canCurrentPeerHost&&(0,n.h)("div",{class:"ctr",part:"container"},(0,n.h)("p",{class:"message",part:"message"},this.t("stage.empty_host")),(0,n.h)("span",{class:"description",part:"description"},this.t("stage.empty_host_summary"))),!this.canCurrentPeerHost&&(0,n.h)("div",{class:"ctr",part:"container"},(0,n.h)("p",{class:"message",part:"message"},this.t("stage.empty_viewer")))))):this.showLiveStreamPlayer?(0,n.h)(n.H,null,(0,n.h)("dyte-livestream-player",{meeting:this.meeting,size:this.size}),(0,n.h)("dyte-livestream-indicator",{meeting:this.meeting,size:"sm",t:this.t}),(0,n.h)("dyte-viewer-count",{meeting:this.meeting,variant:"embedded",t:this.t})):(0,n.h)(n.H,null,(0,n.h)(d.R,{element:"dyte-grid",defaults:e,childProps:{participants:this.participants,screenShareParticipants:this.screenShareParticipants,plugins:this.plugins,pinnedParticipants:this.pinnedParticipants,aspectRatio:this.aspectRatio,gap:this.gap,layout:this.layout,gridSize:this.gridSize},onlyChildren:!0}),(0,n.h)("dyte-livestream-indicator",{meeting:this.meeting,size:"sm",t:this.t}),(0,n.h)("dyte-viewer-count",{meeting:this.meeting,variant:"embedded"})):(0,n.h)("div",{class:"offline-grid"},(0,n.h)("p",null,this.t("stage.reconnecting"))):(0,n.h)(n.H,null,(0,n.h)("div",{class:"offline-grid"},(0,n.h)("dyte-icon",{icon:this.iconPack.disconnected,size:"xl"}),(0,n.h)("h3",null,this.t("offline")),(0,n.h)("p",null,this.t("offline.description")))):(0,n.h)(n.H,null,(0,n.h)("div",{class:"offline-grid"},(0,n.h)("dyte-icon",{icon:this.iconPack.join_stage,size:"xl"}),(0,n.h)("h3",null,this.t("disconnected")),(0,n.h)("p",null,this.t("disconnected.description"))))}static get watchers(){return{overrides:["overridesChanged"],screenShareParticipants:["screenShareParticipantsChanged"],plugins:["pluginsChanged"],pinnedParticipants:["pinnedParticipantsChanged"],meeting:["meetingChanged"]}}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block;height:100%;width:100%}.offline-grid{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center}.offline-grid h3{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);margin-left:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-0, 0px);font-size:20px;font-weight:500;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.offline-grid p{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);margin-left:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-0, 0px);text-align:center;font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.offline-grid dyte-icon{margin-bottom:var(--dyte-space-2, 8px)}.webinar-stage{box-sizing:border-box;height:100%;display:flex;align-content:center;align-items:center;justify-content:center;text-align:center}.webinar-stage h2{margin:var(--dyte-space-0, 0px);font-weight:normal}dyte-viewer-count{display:none}.ctr{display:flex;flex-direction:column;align-items:center}.message{font-size:16px;border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-8, 32px);padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.description{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);font-size:14px}dyte-livestream-indicator{display:none}@media only screen and (max-device-height: 480px) and (orientation: landscape){dyte-viewer-count[variant='embedded']{position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-2, 8px);z-index:20;margin-top:var(--dyte-space-0, 0px);margin-left:var(--dyte-space-0, 0px);display:flex}dyte-livestream-indicator{position:absolute;top:var(--dyte-space-0, 0px);left:var(--dyte-space-2, 8px);z-index:20;margin-top:var(--dyte-space-0, 0px);margin-left:var(--dyte-space-0, 0px);display:flex}}"},37895:(e,t,i)=>{function n(e,t){const i=Math.pow(10,t);return Math.floor(e*i)/i}function s({dimensions:e,count:t,aspectRatio:i,gap:s}){const{width:a,height:o,rows:d,cols:c}=function({count:e,dimensions:t,aspectRatio:i,gap:s}){let{width:a,height:o}=t;if(0===a||0===o)return{width:0,height:0,rows:1,cols:1};a-=2*s,o-=2*s;const d=s,c=e,p=r(i);let h=0,l=0,g=1,u=1;const f=[];for(let n=1;n<=c;n++)f.push((a-d*(n-1))/n),f.push((o-d*(n-1))/(n*p));f.sort(((e,t)=>t-e));for(const r of f)if(h=n(r,4),l=n(h*p,4),g=Math.floor((a+d)/(h+d)),u=Math.floor((o+d)/(l+d)),g*u>=c){u=Math.ceil(c/g);break}return{width:h,height:l,rows:u,cols:g}}({dimensions:e,count:t,aspectRatio:i,gap:s}),p=function({parentDimensions:e,dimensions:t,rows:i,cols:n,count:s,gap:r}){const{width:a,height:o}=e,{width:d,height:c}=t,p=(o-(c*i+(i-1)*r))/2;let h=(a-(d*n+(n-1)*r))/2;const l=c+r,g=d+r;let u=0,f=0;const m=s%n;function v(e){const t=s-e;t===m&&(h=(a-(d*t+(t-1)*r))/2);const i=p+f*l,o=h+u*g;return u++,(e+1)%n==0&&(f++,u=0),{top:i,left:o}}return v}({parentDimensions:e,dimensions:{width:a,height:o},rows:d,cols:c,count:t,gap:s});return{width:a,height:o,getPosition:p}}i.d(t,{d:()=>a,u:()=>s});const r=e=>{const[t,i]=e.split(":");return Number.parseInt(i)/Number.parseInt(t)},a={spotlight:"sm",mixed:"sm"}},17213:(e,t,i)=>{i.d(t,{R:()=>d,l:()=>o});var n=i(72944);const s=({element:e,size:t,states:i={},config:n={}})=>{let s=[];const r=null==n?void 0:n.root[e],a=e=>{s.push(e),"string"==typeof t&&s.push(`${e}.${t}`)};if(a(e),"object"==typeof r&&!Array.isArray(r)&&null!==r){const{state:t,states:n}=r;let s=e,o=[];if(Array.isArray(n)){o=n.filter((e=>i[e])),o.sort();for(const e of o)a(`${s}.${e}`);if(o.length>1){a([s,...o].join("."))}}if("string"==typeof t){const n=`${e}[${t}=${i[t]}]`;a(n);for(const e of o)a(`${n}.${e}`);if(o.length>1){a([n,...o].join("."))}}}return s},r=({selectors:e,root:t})=>{if(!t||!Array.isArray(e))return[];let i=[];for(const n of e){const e=t[n];if(Array.isArray(e))i=[...e];else if(e){if(e.children&&(i=[...e.children]),Array.isArray(e.remove))for(const t of e.remove)i=i.filter((e=>"string"==typeof e?e!==t:!Array.isArray(e)||e[0]!==t));if(e.addBefore)for(const[t,n]of Object.entries(e.addBefore)){const e=i.findIndex((e=>"string"==typeof e?e===t:!!Array.isArray(e)&&e[0]===t));e>=0&&i.splice(e,0,...n)}Array.isArray(e.add)&&(i=i.concat(e.add)),Array.isArray(e.prepend)&&(i=e.prepend.concat(i))}}return i},a=({elements:e,defaults:t,props:i={},deepProps:s=!1,elementProps:r={}})=>Array.isArray(e)&&0!==e.length?e.map((e=>(0,n.h)(d,{element:e,defaults:t,props:i,childProps:s&&i,elementProps:r}))):null,o=({element:e,defaults:t,props:i={},elementProps:n={}})=>{var a;const{config:o,size:d,states:c}=t;let p,h={},l=[];Array.isArray(e)?[p,h,...l]=e:p=e;const g=null===(a=null==o?void 0:o.root)||void 0===a?void 0:a[p];null!=g&&"props"in g&&(i=Object.assign(Object.assign({},g.props),i)),i=Object.assign(Object.assign({},i),h),p in n&&(i=Object.assign(Object.assign({},i),n[p]));const u=s({element:p,size:d,states:c,config:o});return r({selectors:u,root:o.root}).length},d=({element:e,defaults:t,childProps:i={},props:o={},onlyChildren:d=!1,asHost:c=!1,deepProps:p=!1,elementProps:h={}},l)=>{var g;const{config:u,size:f,states:m}=t;let v,y={},S=[];Array.isArray(e)?[v,y,...S]=e:v=e;const P=null===(g=null==u?void 0:u.root)||void 0===g?void 0:g[v];null!=P&&"props"in P&&(o=Object.assign(Object.assign({},P.props),o)),o=Object.assign(Object.assign({},o),y),v in h&&(o=Object.assign(Object.assign({},o),h[v]));const b=s({element:v,size:f,states:m,config:u}),L=r({selectors:b,root:u.root});if(d)return(0,n.h)(a,{elements:L,defaults:t,props:i,deepProps:p,elementProps:h});const w=(({selectors:e,styles:t})=>{if(!Array.isArray(e)||null==t)return{};const i={};for(const n of e){const e=t[n];null!=e&&Object.assign(i,e)}return i})({selectors:b,styles:u.styles});if(c)return(0,n.h)(n.H,Object.assign({},t,{style:w},o),(0,n.h)(a,{elements:L,defaults:t,props:i,deepProps:p,elementProps:h}),l,S.map((e=>{if(Array.isArray(e)){const[i,s]=e;return(0,n.h)(i,Object.assign({},t,s))}return e})));if(["dyte-header","dyte-controlbar"].includes(v)&&(o.disableRender=!0),v.startsWith("dyte-"))return(0,n.h)(v,Object.assign({},t,{style:w},o),(0,n.h)(a,{elements:L,defaults:t,props:i,deepProps:p,elementProps:h}),l,S.map((e=>{if(Array.isArray(e)){const[i,s]=e;return(0,n.h)(i,Object.assign({},t,s))}return e})));{const[e,s]=v.split("#");return(0,n.h)(e,Object.assign({id:s,style:w},o),(0,n.h)(a,{elements:L,defaults:t,props:i,deepProps:p,elementProps:h}),l,S.map((e=>{if(Array.isArray(e)){const[i,s]=e;return(0,n.h)(i,Object.assign({},t,s))}return e})))}}}}]);