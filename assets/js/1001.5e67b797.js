"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[1001,1180],{1001:(t,i,e)=>{e.r(i),e.d(i,{dyte_pip_toggle:()=>l});var s=e(65733),a=e(86020),n=e(21237),o=(e(24555),e(68753)),d=e(8934),p=(e(60804),e(46503));const l=class{constructor(t){(0,s.r)(this,t),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.variant="button",this.meeting=void 0,this.states=void 0,this.config=a.d,this.iconPack=o.d,this.size=void 0,this.t=(0,d.u)(),this.pipEnabled=!1,this.pipSupported=!1}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){}statesChanged(t){const i=t||p.s;null!=(null==i?void 0:i.activePipMode)&&(this.pipEnabled=i.activePipMode)}meetingChanged(t){var i,e;if(null===t)return;this.pipSupported=n.s.isSupported()&&(null===(i=t.self.config)||void 0===i?void 0:i.pipMode)&&"LIVESTREAM"!==(null===(e=t.self.config)||void 0===e?void 0:e.viewType);const s=this.states||p.s;this.pipEnabled=s.activePipMode}togglePip(){const t=this.states||p.s,{activePipMode:i}=t;!0!==i?(n.s.updateMediaSession(n.P.CAMERA,this.meeting.self.videoEnabled),n.s.updateMediaSession(n.P.MIC,this.meeting.self.audioEnabled),n.s.enable(),this.stateUpdate.emit({activePipMode:!0})):(n.s.disable(),this.stateUpdate.emit({activePipMode:!1})),this.stateUpdate.emit({activeMoreMenu:!1}),p.s.activeMoreMenu=!1}render(){if(this.pipSupported)return(0,s.h)(s.H,{tabIndex:0,role:"log","aria-label":"Picture-in-Picture mode"},(0,s.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,onClick:()=>this.togglePip(),icon:this.pipEnabled?this.iconPack.pip_on:this.iconPack.pip_off,label:this.pipEnabled?this.t("pip_off"):this.t("pip_on"),variant:this.variant}))}static get watchers(){return{states:["statesChanged"],meeting:["meetingChanged"]}}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"}}]);