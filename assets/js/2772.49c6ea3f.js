"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[2772,7987],{87987:(t,s,e)=>{e.r(s),e.d(s,{dyte_spotlight_grid:()=>d});var i=e(65733),r=e(86020),n=e(75673),o=e(68753),a=e(8934),h=e(90362);const d=class{constructor(t){(0,i.r)(this,t),this.getAdaptiveSize=t=>"sm"===this.size||t>3||"md"===this.size?"sm":"md",this.layout="row",this.participants=[],this.pinnedParticipants=[],this.aspectRatio="16:9",this.gap=8,this.size=void 0,this.meeting=void 0,this.states=void 0,this.config=r.d,this.iconPack=o.d,this.t=(0,a.u)(),this.gridSize=n.d}render(){const t={meeting:this.meeting,config:this.config,states:this.states,size:this.size,iconPack:this.iconPack,t:this.t},s=this.participants.filter((t=>this.pinnedParticipants.some((s=>s.id!=t.id))));return(0,i.h)(i.H,null,(0,i.h)("main",{part:"main"},(0,i.h)(h.R,{element:"dyte-simple-grid",defaults:t,props:{part:"main-grid",participants:this.pinnedParticipants,aspectRatio:this.aspectRatio,gap:this.gap,size:this.getAdaptiveSize(this.pinnedParticipants.length)}})),s.length>0&&(0,i.h)("aside",{part:"aside",class:this.gridSize.spotlight?`grid-width-${this.gridSize.spotlight}`:"grid-width-md"},(0,i.h)(h.R,{element:"dyte-simple-grid",defaults:t,props:{part:"aside-grid",participants:s,aspectRatio:this.aspectRatio,gap:this.gap,size:this.getAdaptiveSize(s.length)}})))}get host(){return(0,i.g)(this)}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;height:100%;width:100%}main{flex:1 1 0%}.grid-width-sm{width:25%}.grid-width-md{width:50%}.grid-width-lg{width:66.666667%}:host([size='sm']),:host([size='md']){flex-direction:column}:host([size='md']) aside{max-height:var(--dyte-space-96, 384px);width:100%;max-width:100%}:host([size='md']) .grid-width-sm{height:25%}:host([size='md']) .grid-width-md{height:50%}:host([size='md']) .grid-width-lg{height:66.666667%}:host([size='sm']) aside{max-height:var(--dyte-space-96, 384px);width:100%;max-width:100%}:host([size='sm']) .grid-width-sm,:host([size='sm']) .grid-width-md,:host([size='sm']) .grid-width-lg{height:50%}:host([size='xl']) .grid-width-sm,:host([size='xl']) .grid-width-md,:host([size='xl']) .grid-width-lg{width:400px}:host([layout='column']){flex-direction:column}:host([layout='column']) main{flex:4}:host([layout='column']) aside{flex:2;max-width:100%;width:100%}"},75673:(t,s,e)=>{function i(t,s){const e=Math.pow(10,s);return Math.floor(t*e)/e}function r({dimensions:t,count:s,aspectRatio:e,gap:r}){const{width:o,height:a,rows:h,cols:d}=function({count:t,dimensions:s,aspectRatio:e,gap:r}){let{width:o,height:a}=s;if(0===o||0===a)return{width:0,height:0,rows:1,cols:1};o-=2*r,a-=2*r;const h=r,d=t,l=n(e);let p=0,c=0,g=1,m=1;const f=[];for(let i=1;i<=d;i++)f.push((o-h*(i-1))/i),f.push((a-h*(i-1))/(i*l));f.sort(((t,s)=>s-t));for(const n of f)if(p=i(n,4),c=i(p*l,4),g=Math.floor((o+h)/(p+h)),m=Math.floor((a+h)/(c+h)),g*m>=d){m=Math.ceil(d/g);break}return{width:p,height:c,rows:m,cols:g}}({dimensions:t,count:s,aspectRatio:e,gap:r}),l=function({parentDimensions:t,dimensions:s,rows:e,cols:i,count:r,gap:n}){const{width:o,height:a}=t,{width:h,height:d}=s,l=(a-(d*e+(e-1)*n))/2;let p=(o-(h*i+(i-1)*n))/2;const c=d+n,g=h+n;let m=0,f=0;const u=r%i;function y(t){const s=r-t;s===u&&(p=(o-(h*s+(s-1)*n))/2);const e=l+f*c,a=p+m*g;return m++,(t+1)%i==0&&(f++,m=0),{top:e,left:a}}return y}({parentDimensions:t,dimensions:{width:o,height:a},rows:h,cols:d,count:s,gap:r});return{width:o,height:a,getPosition:l}}e.d(s,{d:()=>o,u:()=>r});const n=t=>{const[s,e]=t.split(":");return Number.parseInt(e)/Number.parseInt(s)},o={spotlight:"sm",mixed:"sm"}},90362:(t,s,e)=>{e.d(s,{R:()=>n});var i=e(65733);const r=({elements:t,defaults:s,props:e={},deepProps:r=!1,elementProps:o={}})=>Array.isArray(t)&&0!==t.length?t.map((t=>(0,i.h)(n,{element:t,defaults:s,props:e,childProps:r&&e,elementProps:o}))):null,n=({element:t,defaults:s,childProps:e={},props:n={},onlyChildren:o=!1,asHost:a=!1,deepProps:h=!1,elementProps:d={}},l)=>{var p;const{config:c,size:g,states:m}=s;let f,u={},y=[];Array.isArray(t)?[f,u,...y]=t:f=t;const w=null===(p=null==c?void 0:c.root)||void 0===p?void 0:p[f];null!=w&&"props"in w&&(n=Object.assign(Object.assign({},w.props),n)),n=Object.assign(Object.assign({},n),u),f in d&&(n=Object.assign(Object.assign({},n),d[f]));const A=(({element:t,size:s,states:e={},config:i={}})=>{let r=[];const n=null==i?void 0:i.root[t],o=t=>{r.push(t),"string"==typeof s&&r.push(`${t}.${s}`)};if(o(t),"object"==typeof n&&!Array.isArray(n)&&null!==n){const{state:s,states:i}=n;let r=t,a=[];if(Array.isArray(i)){a=i.filter((t=>e[t])),a.sort();for(const t of a)o(`${r}.${t}`);a.length>1&&o([r,...a].join("."))}if("string"==typeof s){const i=`${t}[${s}=${e[s]}]`;o(i);for(const t of a)o(`${i}.${t}`);a.length>1&&o([i,...a].join("."))}}return r})({element:f,size:g,states:m,config:c}),z=(({selectors:t,root:s})=>{if(!s||!Array.isArray(t))return[];let e=[];for(const i of t){const t=s[i];if(Array.isArray(t))e=[...t];else if(t){if(t.children&&(e=[...t.children]),Array.isArray(t.remove))for(const s of t.remove)e=e.filter((t=>"string"==typeof t?t!==s:!Array.isArray(t)||t[0]!==s));if(t.addBefore)for(const[s,i]of Object.entries(t.addBefore)){const t=e.findIndex((t=>"string"==typeof t?t===s:!!Array.isArray(t)&&t[0]===s));t>=0&&e.splice(t,0,...i)}Array.isArray(t.add)&&(e=e.concat(t.add)),Array.isArray(t.prepend)&&(e=t.prepend.concat(e))}}return e})({selectors:A,root:c.root});if(o)return(0,i.h)(r,{elements:z,defaults:s,props:e,deepProps:h,elementProps:d});const P=(({selectors:t,styles:s})=>{if(!Array.isArray(t)||null==s)return{};const e={};for(const i of t){const t=s[i];null!=t&&Object.assign(e,t)}return e})({selectors:A,styles:c.styles});if(a)return(0,i.h)(i.H,Object.assign({},s,{style:P},n),(0,i.h)(r,{elements:z,defaults:s,props:e,deepProps:h,elementProps:d}),l,y.map((t=>{if(Array.isArray(t)){const[e,r]=t;return(0,i.h)(e,Object.assign({},s,r))}return t})));if(["dyte-header","dyte-controlbar"].includes(f)&&(n.disableRender=!0),f.startsWith("dyte-"))return(0,i.h)(f,Object.assign({},s,{style:P},n),(0,i.h)(r,{elements:z,defaults:s,props:e,deepProps:h,elementProps:d}),l,y.map((t=>{if(Array.isArray(t)){const[e,r]=t;return(0,i.h)(e,Object.assign({},s,r))}return t})));{const[t,o]=f.split("#");return(0,i.h)(t,Object.assign({id:o,style:P},n),(0,i.h)(r,{elements:z,defaults:s,props:e,deepProps:h,elementProps:d}),l,y.map((t=>{if(Array.isArray(t)){const[e,r]=t;return(0,i.h)(e,Object.assign({},s,r))}return t})))}}}}]);