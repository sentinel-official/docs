"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[4327,8833],{84327:(t,e,i)=>{i.r(e),i.d(e,{dyte_plugins_toggle:()=>o});var s=i(65733),n=i(68753),a=i(8934),l=i(46503),r=i(24953);i(24555),i(24942);const o=class{constructor(t){(0,s.r)(this,t),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.updateCanView=()=>{this.canViewPlugins=(0,r.b)(this.meeting)},this.variant="button",this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=n.d,this.t=(0,a.u)(),this.pluginsActive=!1,this.canViewPlugins=!1}disconnectedCallback(){var t,e;null===(e=null===(t=this.meeting)||void 0===t?void 0:t.stage)||void 0===e||e.removeListener("stageStatusUpdate",this.updateCanView)}connectedCallback(){this.statesChanged(this.states),this.meetingChanged(this.meeting),(0,l.o)("sidebar",(()=>this.statesChanged()))}meetingChanged(t){var e;null!=t&&(this.canViewPlugins=(0,r.b)(t),null===(e=null==t?void 0:t.stage)||void 0===e||e.on("stageStatusUpdate",this.updateCanView))}statesChanged(t){const e=t||l.s;null!=e&&(this.pluginsActive=!0===e.activeSidebar&&"plugins"===e.sidebar)}togglePlugins(){const t=this.states||l.s;this.pluginsActive=!((null==t?void 0:t.activeSidebar)&&"plugins"===(null==t?void 0:t.sidebar)),this.stateUpdate.emit({activeSidebar:this.pluginsActive,sidebar:this.pluginsActive?"plugins":void 0,activeMoreMenu:!1,activeAI:!1}),l.s.activeSidebar=this.pluginsActive,l.s.sidebar=this.pluginsActive?"plugins":void 0,l.s.activeMoreMenu=!1}render(){if(!this.canViewPlugins)return;const t=this.t("plugins");return(0,s.h)(s.H,{title:t},(0,s.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,class:{active:this.pluginsActive},onClick:()=>this.togglePlugins(),icon:this.iconPack.rocket,label:t,variant:this.variant}))}static get watchers(){return{meeting:["meetingChanged"],states:["statesChanged"]}}};o.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"},24953:(t,e,i)=>{i.d(e,{a:()=>r,b:()=>o,c:()=>a,d:()=>l});var s=i(24555),n=i(24942);const a=t=>{if(t&&!t.chat)return!1;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.chat)return!1;const{chatPublic:i,chatPrivate:s}=t.self.permissions;return i.canSend||i.text||i.files||s.canSend||s.canReceive||s.files||s.text},l=t=>{if(t&&!t.polls)return!1;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.polls)return!1;const{polls:i}=t.self.permissions;return i.canCreate||i.canView||i.canVote},r=t=>{var e,i,a;if((null==t?void 0:t.__internals__.features.hasFeature(n.F.FEAT_PARTICIPANT_LIST))&&!(null===(e=t.self.permissions)||void 0===e?void 0:e.showParticipantList))return!1;if((0,s.s)(t)&&!(null===(i=t.self.permissions)||void 0===i?void 0:i.acceptPresentRequests))return!1;if(t&&!t.participants)return!1;if("LIVESTREAM"===t.meta.viewType)return t.self.permissions.acceptPresentRequests||"ON_STAGE"===(null===(a=null==t?void 0:t.stage)||void 0===a?void 0:a.status);const l=null==t?void 0:t.self.config;return!(l&&!l.controlBar.elements.participants)},o=t=>{if((0,s.a)(t))return!1;if(t&&!t.plugins)return!1;if("LIVESTREAM"===t.meta.viewType)return"ON_STAGE"===t.stage.status;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.plugins)return!1;const{plugins:i}=t.self.permissions;return i.canClose||i.canStart}}}]);