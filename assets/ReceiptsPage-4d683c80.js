import{D as N}from"./DataPage-591ce55a.js";import{t as R,c as l,d as F,h as C,x as r,A as c,y as t,n as i,i as o}from"./index-ba169bee.js";import{u as D}from"./utils-e240c588.js";import"./input-4371380f.js";import"./errors-ebd9927f.js";import"./DataForm-0ca6d382.js";const H={__name:"ReceiptsPage",props:{invoiceId:{type:String,default:null},contactId:{type:String,default:null}},setup(u){const a=u,d=R(),{fieldsLayout:p,generateDataFields:m,validations:f,generateFilters:g}=D(),y=l(()=>m(a.invoiceId,a.contactId)),I=l(()=>g(a.invoiceId,a.contactId)),h={view:{click:async function(n,_){await x(n)}},create:{click:async function(){await S()}}},v={oneline:!0,showHeader:!1,highlightField:"receiptNumber"};async function x(n){d.push({name:"Contact View Receipt",params:{receiptId:n.id,contactId:n.contactId}})}async function S(){d.push({name:"Contact Create Receipt",params:{contactId:a.contactId}})}return(n,_)=>(F(),C(N,{"model-class":"income_receipts","data-type":"Receipts","fields-layout":o(p),"data-fields":o(y),validations:o(f),filters:o(I),actions:h,"table-style":v},{["highlight.receiptNumber"]:r(({formattedValue:e})=>[c(" Receipt Number "+t(e.toString().padStart(6,"0")),1)]),["data-col.paymentAmount"]:r(({row:e,formattedValue:s,inputValue:b})=>[c(" Payment of "),i("strong",null,t(e.includes.currencyId[e.currencyId].code)+t(s.toFixed(2)),1),c(" for Invoice Number "),i("strong",null,t(e.includes.invoiceId[e.invoiceId].invoiceNumber.toString().padStart(6,"0")),1),c(" received on "),i("strong",null,t(b("receiptDate",e)),1)]),["data-col.remainingAmount"]:r(({row:e,formattedValue:s})=>[c(" Balance due "),i("strong",null,t(e.includes.currencyId[e.currencyId].code)+t(s.toFixed(2)),1)]),_:2},1032,["fields-layout","data-fields","validations","filters"]))}};export{H as default};
