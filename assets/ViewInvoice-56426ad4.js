import{u as G}from"./input-f75b7148.js";import{x as P,d as j,o as a,g as m,s as g,v as q,j as f,t as _,h as n,_ as J,a as Q,E as R,u as W,q as X,b as Y,r as v,e as Z,c as o,I as ee,f as u,z as A,B as H}from"./index-4aadfbc8.js";import{u as te}from"./utils-371b99f1.js";import{T as ae}from"./TabContainer-57afd930.js";import{D as ne}from"./DataPage-b5787fe6.js";import{T as ie}from"./TemplateEditor-da7ef8d3.js";import"./errors-29306128.js";import"./DataForm-42274987.js";const oe={__name:"InvoiceLines",props:{invoiceId:{type:String,default:null}},setup(I){const p=I,{greaterThanOrEqual:l}=P(),h=[{description:"lg"},{unit:"md",unitCost:"md",subtotal:"md"},{invoiceId:"lg"}],k=j(()=>[{key:"id",type:"text",label:"ID",listable:!0,viewable:!0,creatable:!1,updatable:!1,sortable:!0},{key:"description",type:"text",label:"Description",listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0},{key:"unit",type:"enum",label:"Unit",listable:!0,viewable:!0,creatable:!0,updatable:!0},{key:"unitCost",type:"number",label:"Unit Cost",listable:!0,viewable:!0,creatable:!0,updatable:!0},{key:"subtotal",type:"number",label:"Subtotal",listable:!0,viewable:!0,creatable:!0,updatable:!0},{key:"invoiceId",type:"singleSelect",label:"Invoice",reference:{label:s},listable:!1,viewable:!0,creatable:!0,updatable:!1,filterable:!0,options:{server:!0,pagination:!0,modelClass:"invoices",value:S,label:s}}]);function S(e){return e.id}function s(e){return`Invoice #${e.invoiceNumber}`}const D={create:{unitCost:[e=>l(e,"unitCost",0)],subtotal:[e=>l(e,"subtotal",0)]},update:{unitCost:[e=>l(e,"unitCost",0)],subtotal:[e=>l(e,"subtotal",0)]}},C=j(()=>{const e={};return p.invoiceId&&(e.invoiceId=[{value:p.invoiceId}]),e.description=null,{initData:e,layout:[{invoiceId:"lg",description:"lg"}]}}),E={oneline:!0,showHeader:!1,highlightField:"description"};return(e,T)=>(a(),m(ne,{"model-class":"invoice_lines","data-type":"Invoice Lines","fields-layout":h,"data-fields":n(k),validations:D,filters:n(C),"table-style":E},{["data-col.unitCost"]:g(({row:b,formattedValue:x,inputValue:w})=>[q(" Charging "),f("strong",null,_(x),1),q(" per "),f("strong",null,_(w("unit",b)),1)]),["data-col.subtotal"]:g(({formattedValue:b})=>[q(" Subtotal "),f("strong",null,_(b.toFixed(2)),1)]),_:2},1032,["data-fields","filters"]))}};const le={class:"page-container"},se={key:0,class:"details-container"},ce={class:"field-label"},ue={class:"field-value"},re={key:0},de={key:1},ve={__name:"ViewInvoice",props:{contactId:{type:String,default:null},invoiceId:{type:String,default:null}},setup(I){const p=I,l=Q(),{isEmpty:h,notEmpty:k}=P(),S=R(),{flashMessage:s}=W(),D=X(),C=Y(),{fieldsLayout:E,generateDataFields:e}=te(),T=j(()=>e(p.contactId)),{inputLabel:b,inputValue:x,includeKeys:w}=G(T.value),i=v(),V=v(),F=v(),r=v(),M=v();async function O(){i.value=null;const t={include:w.value};await l.view("invoices",p.invoiceId,t).then(d=>{i.value=d,s("Loaded invoice successfully!")}).catch(d=>{C.error("Error loading invoice",d),s("Error loading invoice!")})}async function $(){V.value=null,F.value=null,r.value=null,l.view("invoices",i.value.id,{},{path:"template_data"}).then(t=>{V.value=t.invoiceLines,F.value=t.invoiceConfig,r.value=t.invoiceTemplate;const d=t.invoiceNumberSequence,N=t.currency,B=t.billingContact,c=t.country,L=t.logo;M.value={invoice:i.value,invoiceLines:V.value,invoiceConfig:F.value,invoiceNumberSequence:d,billingContact:Object.assign({},B,{country:c.countryName,logo:L.rawData}),currency:N,country:c,logo:L},s("Loaded template data successfully!")}).catch(t=>{C.error("Error loading template data",t),s("Error loading template data!")})}const y=v(0),U=[{label:"Details",onchange:O},{label:"Invoice Lines",onchange:z},{label:"View Invoice PDF",onchange:$}];async function z(){S.emitEvent("loadData",{dataType:"Invoice Lines"})}async function K(t){await U[t].onchange(),y.value=t}return Z(async()=>{await O()}),(t,d)=>(a(),o("div",le,[i.value?u("",!0):(a(),m(n(ee),{key:0})),i.value?(a(),m(ae,{key:1,"selected-tab":y.value,tabs:U,onTabChange:K},{"tab-0":g(()=>[y.value===0?(a(),o("div",se,[(a(!0),o(A,null,H(n(E),(N,B)=>(a(),o("div",{key:B,class:"data-row"},[(a(!0),o(A,null,H(Object.keys(N),(c,L)=>(a(),o("div",{key:L,class:"data-field"},[f("div",ce,_(n(b)(c)),1),f("div",ue,[n(k)(i.value)&&n(k)(i.value[c])?(a(),o("span",re,_(n(x)(c,i.value,n(w),n(T),n(D))),1)):u("",!0),n(h)(i.value)||n(h)(i.value[c])?(a(),o("span",de," --- no value --- ")):u("",!0)])]))),128))]))),128))])):u("",!0)]),"tab-1":g(()=>[y.value===1?(a(),m(oe,{key:0,"invoice-id":I.invoiceId},null,8,["invoice-id"])):u("",!0)]),"tab-2":g(()=>[y.value===2&&r.value?(a(),m(ie,{key:0,id:r.value.id,"template-type":"invoice_templates","content-markup":r.value.contentMarkup,"content-styles":r.value.contentStyles,data:M.value,disabled:!0},null,8,["id","content-markup","content-styles","data"])):u("",!0)]),_:1},8,["selected-tab"])):u("",!0)]))}},he=J(ve,[["__scopeId","data-v-7c443302"]]);export{he as default};
