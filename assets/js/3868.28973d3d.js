"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[3868,9168],{79168:(t,i,s)=>{s.r(i),s.d(i,{dyte_simple_grid:()=>p});var e=s(65733),n=s(86020),o=s(68753),h=s(8934),a=s(90362),r=s(75673),c=s(36677);const p=class{constructor(t){(0,e.r)(this,t),this.setHostDimensions=()=>{const{clientWidth:t,clientHeight:i}=this.host;this.dimensions={width:t,height:i}},this.participants=[],this.aspectRatio="16:9",this.gap=8,this.size=void 0,this.meeting=void 0,this.states=void 0,this.config=n.d,this.iconPack=o.d,this.t=(0,h.u)(),this.dimensions={width:0,height:0}}connectedCallback(){this.resizeObserver=new c.i(this.setHostDimensions),this.resizeObserver.observe(this.host)}disconnectedCallback(){var t;null===(t=this.resizeObserver)||void 0===t||t.disconnect()}render(){const t={meeting:this.meeting,config:this.config,states:this.states,size:this.size,iconPack:this.iconPack,t:this.t},{width:i,height:s,getPosition:n}=(0,r.u)({dimensions:this.dimensions,count:this.participants.length,aspectRatio:this.aspectRatio,gap:this.gap});return(0,e.h)(e.H,null,this.participants.map(((o,h)=>{const{top:r,left:c}=n(h);return(0,e.h)(a.R,{element:"dyte-participant-tile",defaults:t,props:{participant:o,style:{position:"absolute",top:`${r}px`,left:`${c}px`,width:`${i}px`,height:`${s}px`},key:o.id,"data-participant":o.id},childProps:{participant:o},deepProps:!0})})),(0,e.h)("slot",null))}get host(){return(0,e.g)(this)}};p.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:block;height:100%;width:100%}"},75673:(t,i,s)=>{function e(t,i){const s=Math.pow(10,i);return Math.floor(t*s)/s}function n({dimensions:t,count:i,aspectRatio:s,gap:n}){const{width:h,height:a,rows:r,cols:c}=function({count:t,dimensions:i,aspectRatio:s,gap:n}){let{width:h,height:a}=i;if(0===h||0===a)return{width:0,height:0,rows:1,cols:1};h-=2*n,a-=2*n;const r=n,c=t,p=o(s);let d=0,l=0,g=1,u=1;const f=[];for(let e=1;e<=c;e++)f.push((h-r*(e-1))/e),f.push((a-r*(e-1))/(e*p));f.sort(((t,i)=>i-t));for(const o of f)if(d=e(o,4),l=e(d*p,4),g=Math.floor((h+r)/(d+r)),u=Math.floor((a+r)/(l+r)),g*u>=c){u=Math.ceil(c/g);break}return{width:d,height:l,rows:u,cols:g}}({dimensions:t,count:i,aspectRatio:s,gap:n}),p=function({parentDimensions:t,dimensions:i,rows:s,cols:e,count:n,gap:o}){const{width:h,height:a}=t,{width:r,height:c}=i,p=(a-(c*s+(s-1)*o))/2;let d=(h-(r*e+(e-1)*o))/2;const l=c+o,g=r+o;let u=0,f=0;const m=n%e;function w(t){const i=n-t;i===m&&(d=(h-(r*i+(i-1)*o))/2);const s=p+f*l,a=d+u*g;return u++,(t+1)%e==0&&(f++,u=0),{top:s,left:a}}return w}({parentDimensions:t,dimensions:{width:h,height:a},rows:r,cols:c,count:i,gap:n});return{width:h,height:a,getPosition:p}}s.d(i,{d:()=>h,u:()=>n});const o=t=>{const[i,s]=t.split(":");return Number.parseInt(s)/Number.parseInt(i)},h={spotlight:"sm",mixed:"sm"}}}]);