import{D as L}from"./DataPage-591ce55a.js";import{t as R,u as U,j,a as q,k as G,c as g,r as y,d as u,e as h,q as H,x as c,A as l,y as a,f as I,n as v,i as o,h as M,G as $}from"./index-ba169bee.js";import{u as z}from"./utils-28e2d45d.js";import"./input-4371380f.js";import"./errors-ebd9927f.js";import"./DataForm-0ca6d382.js";const J={class:"page-container"},K={key:0,class:"tag inline"},ee={__name:"InvoicesPage",props:{contactId:{type:String,default:null}},setup(V){const r=V,f=R(),D=U(),{flashMessage:m}=j(),w=q(),x=G(),{fieldsLayout:k,generateDataFields:C,validations:N,generateFilters:_}=z(),b=g(()=>C(r.contactId)),S=g(()=>_(r.contactId)),A={view:{click:async function(e,s){await B(e)}},create:{click:async function(){await E()}},row:{void:{name:"Void",icon:"fa-solid fa-ban",click:async function(e,s){await P(e)}}}},F={oneline:!0,showHeader:!1,highlightField:"invoiceNumber"};async function B(e){f.push({name:"Contact View Invoice",params:{invoiceId:e.id,contactId:e.contactId}})}async function E(){f.push({name:"Contact Create Invoice",params:{contactId:r.contactId}})}const n=y(),i=y(!1);async function P(e){n.value=e,i.value=!0}async function T(){await D.update("invoices",n.value.id,{},{path:"void"}).then(e=>{w.emitEvent("loadData",{dataType:"Invoices"}),m("Voided invoice successfully!")}).catch(e=>{x.error("Error voiding invoice",e),m("Error voiding invoice!")}).finally(()=>{p()})}function p(){i.value=!1}return(e,s)=>(u(),h("div",J,[H(L,{"model-class":"invoices","data-type":"Invoices",fullscreen:!0,"fields-layout":o(k),"data-fields":o(b),validations:o(N),filters:o(S),actions:A,"table-style":F},{["highlight.invoiceNumber"]:c(({row:t,formattedValue:d})=>[l(" Invoice Number "+a(d.toString().padStart(6,"0"))+" ",1),t.voided?(u(),h("span",K,"Voided")):I("",!0)]),["data-col.invoiceDate"]:c(({formattedValue:t})=>[l(" Invoiced on "),v("strong",null,a(t),1)]),["data-col.dueDate"]:c(({formattedValue:t})=>[l(" Due on "),v("strong",null,a(t),1)]),["data-col.totalAmount"]:c(({row:t,formattedValue:d})=>[l(" Total "),v("strong",null,a(t.includes.currencyId[t.currencyId].code)+a(d.toFixed(2)),1)]),_:2},1032,["fields-layout","data-fields","validations","filters"]),n.value?(u(),M(o($),{key:0,modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=t=>i.value=t),title:"Void Invoice","primary-text":"Are you sure you want to void this invoice?","secondary-text":`Invoice Number ${n.value.invoiceNumber}`,width:500,height:350,class:"void-dialog",onConfirm:T,onCancel:p},null,8,["modelValue","secondary-text"])):I("",!0)]))}};export{ee as default};
