import{D as c}from"./DataPage-049ac36d.js";import{q as b,o as d,g as y,s as g,k as p,z as m,t as f,A as C}from"./index-2931c377.js";import"./input-b440b62b.js";import"./errors-29306128.js";import"./DataForm-dd8f8163.js";const F={__name:"TagsPage",setup(k){const{parseTagFormatSync:a}=C(),l=b().getSystemConfigs(),r=[{category:"md",name:"md"},{description:"lg"},{textColor:"md",backgroundColor:"md"}],o=[{key:"id",type:"text",label:"ID",listable:!0,viewable:!0,creatable:!1,updatable:!1,sortable:!0},{key:"category",type:"text",label:"Category",listable:!0,viewable:!0,creatable:!0,updatable:!1,filterable:!0,sortable:!0},{key:"name",type:"text",label:"Name",listable:!0,viewable:!0,creatable:!0,updatable:!1},{key:"description",type:"text",label:"Description",listable:!0,viewable:!0,creatable:!0,updatable:!0},{key:"textColor",type:"text",label:"Text Color",listable:!1,viewable:!0,creatable:!0,updatable:!0},{key:"backgroundColor",type:"text",label:"Background Color",listable:!1,viewable:!0,creatable:!0,updatable:!0}],s={initData:{},layout:[{category:"md"}]},i={oneline:!0,showHeader:!1,highlightField:"description"};function u(e){return a(l.tagFormat,e)}function n(e){return`color: ${e.textColor}; background-color: ${e.backgroundColor};`}return(e,S)=>(d(),y(c,{"model-class":"tags","data-type":"Tags","fields-layout":r,"data-fields":o,filters:s,"table-style":i},{["data-col.category"]:g(({row:t})=>[p("span",{class:"tag inline",style:m(n(t))},f(u(t)),5)]),_:2},1024))}};export{F as default};
