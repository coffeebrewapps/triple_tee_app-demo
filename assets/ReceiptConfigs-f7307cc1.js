import{D as m}from"./DataPage-591ce55a.js";import{c as s,d as g,h as y,x as v,A as I,y as C,i as n}from"./index-ba169bee.js";import"./input-4371380f.js";import"./errors-ebd9927f.js";import"./DataForm-0ca6d382.js";const D={__name:"ReceiptConfigs",props:{contactId:{type:String,default:null}},setup(c){const t=c,u=[{description:"lg"},{customFields:"lg"},{receiptNumberSequenceId:"lg"},{billingContactId:"lg"},{receiptTemplateId:"lg"}],o=s(()=>[{key:"id",type:"text",label:"ID",listable:!0,viewable:!0,creatable:!1,updatable:!1,sortable:!0},{key:"description",type:"text",label:"Description",listable:!0,viewable:!0,creatable:!0,updatable:!0},{key:"customFields",type:"object",label:"Custom Fields (JSON)",listable:!1,viewable:!0,creatable:!0,updatable:!0},{key:"receiptNumberSequenceId",type:"singleSelect",label:"Sequence Number",reference:{label:a},listable:!1,viewable:!0,creatable:!0,updatable:!1,options:{server:!0,pagination:!0,modelClass:"sequences",value:l,label:a}},{key:"billingContactId",type:"singleSelect",label:"Contact",reference:{label:r},defaultValue:()=>t.contactId,listable:!0,viewable:!0,creatable:!0,updatable:!1,filterable:!0,options:{server:!0,pagination:!0,modelClass:"contacts",value:l,label:r}},{key:"receiptTemplateId",type:"singleSelect",label:"Template",reference:{label:i},listable:!1,viewable:!0,creatable:!0,updatable:!0,options:{server:!0,pagination:!0,modelClass:"receipt_templates",value:l,label:i}}]),b={oneline:!0,showHeader:!1,highlightField:"description"},d={},p=s(()=>{const e={};return t.contactId&&(e.billingContactId=[{value:t.contactId}]),{initData:e,layout:[{billingContactId:"lg"}],disable:["billingContactId"]}});function l(e){return e.id}function a(e){return e.name}function r(e){return e.name}function i(e){return e.name}return(e,h)=>(g(),y(m,{"model-class":"receipt_configs","data-type":"Receipt Configs",fullscreen:!0,"fields-layout":u,"data-fields":n(o),validations:d,filters:n(p),"table-style":b},{["highlight.description"]:v(({formattedValue:f})=>[I(C(f),1)]),_:2},1032,["data-fields","filters"]))}};export{D as default};
