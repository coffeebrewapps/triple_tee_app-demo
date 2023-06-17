import{_ as U,A as F,t as O,b as t,g as L,v as n,m as r,I as N,y as l,x as u,d as i,e as d,F as z,f as A,B as G,h as p,D as $,p as H,l as P}from"./index-e6af60f1.js";import{D as R}from"./DataPage-3e2d1a47.js";import"./input-985afb35.js";import"./errors-ebd9927f.js";import"./DataForm-5e21e373.js";const j=o=>(H("data-v-bd042d09"),o=o(),P(),o),q={class:"highlight"},J={key:0,class:"tag inline"},K={key:1,class:"tag inline"},M={key:0},Q={key:1},W=j(()=>r("strong",null,"present",-1)),X={__name:"ChartConfigs",setup(o){const{isEmpty:f,notEarlierThan:h,greaterThan:_}=F(),{formatTagSync:D,tagStyle:S}=$(),k=O().getSystemConfigs(),C=[{description:"md",displayOrder:"md"},{chartType:"md",dataSource:"md"},{scaleUnit:"md",scaleValue:"md",groupBy:"md"},{includeTags:"md",excludeTags:"md"},{startDate:"md",endDate:"md"}];function y(a){return a.id}function c(a){return`${a.category}:${a.name}`}const T=[{key:"id",type:"text",label:"ID",listable:!0,viewable:!1,creatable:!1,updatable:!1,sortable:!0},{key:"description",type:"text",label:"Description",listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,sortable:!0},{key:"displayOrder",type:"number",label:"Display Order",listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!1,sortable:!0},{key:"chartType",type:"enum",label:"Chart Type",listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!1,sortable:!1},{key:"dataSource",type:"enum",label:"Data Source",listable:!0,viewable:!0,creatable:!0,updatable:!1,filterable:!0,sortable:!1},{key:"scaleUnit",type:"enum",label:"Scale Unit",listable:!0,viewable:!0,creatable:!0,updatable:!1,filterable:!1,sortable:!1},{key:"scaleValue",type:"number",label:"Scale Value",listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!1,sortable:!1},{key:"groupBy",type:"enum",label:"Group By",listable:!0,viewable:!0,creatable:!0,updatable:!1,filterable:!1,sortable:!1},{key:"includeTags",type:"multiSelect",label:"Include Tags",isTags:!0,reference:{label:c},listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,options:{server:!0,pagination:!0,modelClass:"tags",value:y,label:c}},{key:"excludeTags",type:"multiSelect",label:"Exclude Tags",isTags:!0,reference:{label:c},listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,options:{server:!0,pagination:!0,modelClass:"tags",value:y,label:c}},{key:"startDate",type:"date",label:"Start Date",listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,sortable:!0},{key:"endDate",type:"date",label:"End Date",listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,sortable:!0},{key:"displayOrder",type:"number",label:"Display Order",listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!1,sortable:!1},{key:"active",type:"boolean",label:"Active",listable:!0,viewable:!0,creatable:!1,updatable:!0,filterable:!0,sortable:!1}];function m(a){return h(a,"endDate","startDate")}function g(a){return _(a,"scaleValue",0)}function V(a){if(f(a.scaleUnit))return;const e={transactions:["dollar"],work_logs:["hour","minute","second"]}[a.dataSource];if(!f(e)&&!e.includes(a.scaleUnit))return{name:"invalidEnum",params:{validValues:e}}}const w={create:{scaleValue:[g],scaleUnit:[V],endDate:[m]},update:{scaleValue:[g],endDate:[m]}},x={oneline:!0,showHeader:!1,highlightField:"description"},B={hbar:"fa-solid fa-chart-bar fa-lg",vbar:"fa-solid fa-chart-column fa-lg"};return(a,I)=>(t(),L(R,{"model-class":"chart_configs","data-type":"Chart Configs","fields-layout":C,"data-fields":T,validations:w,"table-style":x},{["highlight.description"]:n(({row:e,formattedValue:s})=>[r("div",q,[r("i",{class:N(B[e.chartType])},null,2),l(" "+u(s)+" ",1),e.active?(t(),i("span",J,"active")):d("",!0),e.active?d("",!0):(t(),i("span",K,"inactive"))])]),["data-col.dataSource"]:n(({formattedValue:e})=>[l(" Chart Data from "),r("strong",null,u(e),1)]),["data-col.groupBy"]:n(({formattedValue:e})=>[l(" Group by "),r("strong",null,u(e),1)]),["data-col.startDate"]:n(({row:e,formattedValue:s,inputValue:b})=>[l(" Date Range "),r("strong",null,u(s),1),e.endDate?(t(),i("span",M,[l(" - "),r("strong",null,u(b("endDate",e)),1)])):d("",!0),e.endDate?d("",!0):(t(),i("span",Q,[l(" - "),W]))]),["data-col.includeTags"]:n(({row:e,key:s,rawValue:b})=>[l(" Include Data from "),(t(!0),i(z,null,A(b,(v,E)=>(t(),i("span",{key:E,class:"tag inline",style:G(p(S)(e,v,s))},u(p(D)(e,v,s,p(k).tagFormat)),5))),128))]),_:2},1024))}},re=U(X,[["__scopeId","data-v-bd042d09"]]);export{re as default};
