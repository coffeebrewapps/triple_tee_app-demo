import{_ as m,r as g,o as a,c as n,k as h,F as b,y as f,D as _,W as u,t as C,H as T,J as k,L as $}from"./index-2931c377.js";const w={class:"tab-container"},x={class:"tabs"},S=["onClick","onKeydown"],B={__name:"TabContainer",props:{selectedTab:{type:Number,default:0},tabs:{type:Array,default(){return[]}}},emits:["tabChange"],setup(s,{emit:v}){const r=s,o=g([]);function i(e){o.value[e].blur(),v("tabChange",e)}function d(e){e<0||e>r.tabs.length-1||o.value[e].focus()}function y(e){return e===r.selectedTab?"tab active":"tab"}function p(e){return e===r.selectedTab?"tab-content active":"tab-content"}return(e,K)=>(a(),n("div",w,[h("div",x,[(a(!0),n(b,null,f(s.tabs,(c,t)=>(a(),n("div",{key:t,ref_for:!0,ref_key:"tabRefs",ref:o,class:_(y(t)),tabindex:"0",onClick:l=>i(t),onKeydown:[u(l=>i(t),["enter"]),u(l=>d(t-1),["arrow-left"]),u(l=>d(t+1),["arrow-right"])]},C(c.label),43,S))),128))]),(a(!0),n(b,null,f(s.tabs,(c,t)=>(a(),n("div",{key:t,class:_(p(t))},[T(e.$slots,`tab-${t}`,k($({tab:c,i:t})),void 0,!0)],2))),128))]))}},z=m(B,[["__scopeId","data-v-2efa968d"]]);export{z as T};
