"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[1196,8905],{61196:(e,t,o)=>{o.r(t),o.d(t,{dyte_more_toggle:()=>n});var a=o(65733),r=o(68753),i=o(8934),s=o(46503);const n=class{constructor(e){(0,a.r)(this,e),this.stateUpdate=(0,a.c)(this,"dyteStateUpdate",7),this.handleKeyDown=({key:e})=>{"Escape"===e&&this.states.activeMoreMenu&&(this.stateUpdate.emit({activeMoreMenu:!1}),s.s.activeMoreMenu=!s.s.activeMoreMenu)},this.handleOnClick=e=>{!e.composedPath().includes(this.host)&&this.states.activeMoreMenu&&(this.stateUpdate.emit({activeMoreMenu:!1}),s.s.activeMoreMenu=!s.s.activeMoreMenu)},this.toggleMoreMenu=()=>{this.stateUpdate.emit({activeMoreMenu:!s.s.activeMoreMenu}),s.s.activeMoreMenu=!s.s.activeMoreMenu},this.states=void 0,this.size=void 0,this.iconPack=r.d,this.t=(0,i.u)()}connectedCallback(){window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("click",this.handleOnClick)}disconnectedCallback(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("click",this.handleOnClick)}render(){const e=this.t("more");return(0,a.h)(a.H,{title:e},this.states.activeMoreMenu&&(0,a.h)("div",{class:"more-menu"},(0,a.h)("slot",{name:"more-elements"})),(0,a.h)("dyte-controlbar-button",{size:this.size,iconPack:this.iconPack,t:this.t,onClick:e=>{e.stopPropagation(),this.toggleMoreMenu()},icon:this.iconPack.horizontal_dots,label:e,part:"controlbar-button"}),(0,a.h)("slot",{name:"expanded"}))}get host(){return(0,a.g)(this)}};n.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:flex;flex-direction:column;overflow:visible}.more-menu{position:absolute;right:calc(var(--dyte-space-24, 96px) * -1);bottom:var(--dyte-space-16, 64px);z-index:50;margin-bottom:var(--dyte-space-3, 12px);box-sizing:border-box;max-height:60vh;width:var(--dyte-space-64, 256px);overflow:auto;border-radius:var(--dyte-border-radius-md, 8px);border-width:var(--dyte-border-width-sm, 1px);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));outline:2px solid transparent;outline-offset:2px}:host([size='sm']) .more-menu{bottom:var(--dyte-space-10, 40px)}.more-menu::-webkit-scrollbar{height:var(--dyte-space-0, 0px);width:var(--dyte-space-1\\.5, 6px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}.more-menu::-webkit-scrollbar-thumb{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}"}}]);