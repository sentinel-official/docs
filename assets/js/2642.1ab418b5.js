"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[2642],{42642:(t,i,s)=>{s.r(i),s.d(i,{dyte_simple_grid:()=>p});var e=s(26786),n=s(50975),o=s(17073),h=s(13773),a=s(16890),c=s(37895),r=s(79379);const p=class{constructor(t){(0,e.r)(this,t),this.setHostDimensions=()=>{const{clientWidth:t,clientHeight:i}=this.host;this.dimensions={width:t,height:i}},this.participants=[],this.aspectRatio="16:9",this.gap=8,this.size=void 0,this.meeting=void 0,this.states=void 0,this.config=n.d,this.iconPack=o.d,this.t=(0,h.u)(),this.dimensions={width:0,height:0},this.mediaConnection=void 0}connectedCallback(){this.resizeObserver=new r.i(this.setHostDimensions),this.resizeObserver.observe(this.host);const{meta:t}=this.meeting;this.mediaConnection=Object.assign({},t.mediaState)}disconnectedCallback(){var t;null===(t=this.resizeObserver)||void 0===t||t.disconnect()}render(){const t={meeting:this.meeting,config:this.config,states:this.states,size:this.size,iconPack:this.iconPack,t:this.t},{width:i,height:s,getPosition:n}=(0,c.u)({dimensions:this.dimensions,count:this.participants.length,aspectRatio:this.aspectRatio,gap:this.gap});return(0,e.h)(e.H,null,this.participants.map(((o,h)=>{const{top:c,left:r}=n(h);return(0,e.h)(a.R,{element:"dyte-participant-tile",defaults:t,props:{participant:o,style:{position:"absolute",top:`${c}px`,left:`${r}px`,width:`${i}px`,height:`${s}px`},key:o.id,"data-participant":o.id,mediaConnection:this.mediaConnection},childProps:{participant:o},deepProps:!0})})),(0,e.h)("slot",null))}get host(){return(0,e.a)(this)}};p.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:block;height:100%;width:100%}"},37895:(t,i,s)=>{function e(t,i){const s=Math.pow(10,i);return Math.floor(t*s)/s}function n({dimensions:t,count:i,aspectRatio:s,gap:n}){const{width:h,height:a,rows:c,cols:r}=function({count:t,dimensions:i,aspectRatio:s,gap:n}){let{width:h,height:a}=i;if(0===h||0===a)return{width:0,height:0,rows:1,cols:1};h-=2*n,a-=2*n;const c=n,r=t,p=o(s);let d=0,l=0,g=1,u=1;const m=[];for(let e=1;e<=r;e++)m.push((h-c*(e-1))/e),m.push((a-c*(e-1))/(e*p));m.sort(((t,i)=>i-t));for(const o of m)if(d=e(o,4),l=e(d*p,4),g=Math.floor((h+c)/(d+c)),u=Math.floor((a+c)/(l+c)),g*u>=r){u=Math.ceil(r/g);break}return{width:d,height:l,rows:u,cols:g}}({dimensions:t,count:i,aspectRatio:s,gap:n}),p=function({parentDimensions:t,dimensions:i,rows:s,cols:e,count:n,gap:o}){const{width:h,height:a}=t,{width:c,height:r}=i,p=(a-(r*s+(s-1)*o))/2;let d=(h-(c*e+(e-1)*o))/2;const l=r+o,g=c+o;let u=0,m=0;const f=n%e;function w(t){const i=n-t;i===f&&(d=(h-(c*i+(i-1)*o))/2);const s=p+m*l,a=d+u*g;return u++,(t+1)%e==0&&(m++,u=0),{top:s,left:a}}return w}({parentDimensions:t,dimensions:{width:h,height:a},rows:c,cols:r,count:i,gap:n});return{width:h,height:a,getPosition:p}}s.d(i,{d:()=>h,u:()=>n});const o=t=>{const[i,s]=t.split(":");return Number.parseInt(s)/Number.parseInt(i)},h={spotlight:"sm",mixed:"sm"}}}]);