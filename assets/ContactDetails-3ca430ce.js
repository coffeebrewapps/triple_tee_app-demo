import{u as L}from"./input-f75b7148.js";import{_ as V,a as F,x as j,u as A,q as M,b as N,r as q,e as z,o as e,c as s,z as m,B as h,j as g,t as f,h as t,f as l,p as H,i as K}from"./index-4aadfbc8.js";import{u as O}from"./utils-ed8b1c6f.js";const U=c=>(H("data-v-12e1ac5a"),c=c(),K(),c),G={class:"contact-container"},J={class:"field-label"},P={key:0,class:"field-value"},Q={key:0},R=["src"],T={key:1,class:"field-value"},W=U(()=>g("span",null,"--- no value ---",-1)),X=[W],Y={__name:"ContactDetails",props:{contactId:{type:String,default:null}},setup(c){const k=c,{fieldsLayout:C,dataFields:r,includeKeys:u}=O(),{inputLabel:S,inputValue:i,fileField:d}=L(r),I=F(),{isEmpty:_,notEmpty:p}=j(),{flashMessage:w}=A(),v=M(),x=N(),a=q();async function B(){a.value=null;const y={include:u.value};await I.view("contacts",k.contactId,y).then(n=>{a.value=n}).catch(n=>{x.error("Error loading contact",n),w("Error loading contact!")})}return z(async()=>{await B()}),(y,n)=>(e(),s("div",G,[(e(!0),s(m,null,h(t(C),(D,E)=>(e(),s("div",{key:E,class:"data-row"},[(e(!0),s(m,null,h(Object.keys(D),(o,b)=>(e(),s("div",{key:b,class:"data-field"},[g("div",J,f(t(S)(o)),1),t(p)(a.value)&&t(p)(a.value[o])?(e(),s("div",P,[t(d)(o)?l("",!0):(e(),s("span",Q,f(t(i)(o,a.value,t(u),t(r),t(v))),1)),t(d)(o)?(e(),s("img",{key:1,style:{width:"50%"},src:t(i)(o,a.value,t(u),t(r),t(v))},null,8,R)):l("",!0)])):l("",!0),t(_)(a.value)||t(_)(a.value[o])?(e(),s("div",T,X)):l("",!0)]))),128))]))),128))]))}},et=V(Y,[["__scopeId","data-v-12e1ac5a"]]);export{et as default};
